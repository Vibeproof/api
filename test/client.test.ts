import assert from 'assert'
import axios from 'axios'
import { app } from '../src/app'
import {
  EventData,
  EventApplicationData,
  EventApplicationResponseData,
  ResponseType,
  applicationTypes,
  createClient,
  domain,
  eventTypes,
  cryptography,
  Keystore,
  EventApplicationContacts,
  EventPatch
} from '../src/client'
import { v4 as uuidv4 } from 'uuid'

import rest from '@feathersjs/rest-client'

import { HDAccount, mnemonicToAccount } from 'viem/accounts'
import { logger } from '../src/logger'
import moment from 'moment'
import { ClaimType } from '@sismo-core/sismo-connect-server'
import { UUID } from 'crypto'
import { box, BoxKeyPair, SignKeyPair } from "tweetnacl";
import {
  encodeBase64,
  decodeBase64,
  decodeUTF8
} from "tweetnacl-util";



const port = app.get('port')
const appUrl = `http://${app.get('host')}:${port}`

const DEFAULT_SEED_PHARSE = 'test test test test test test test test test test test junk';

const note_text = 'Welcome everyone, my name is Alice';
const message_text = 'My name is Bob';
const contacts_object = {
  name: 'Mister S',
  telegram: 'https://telegram.com/bob',
  twitter: 'https://twitter.com/bob',
}


interface User {
  account: HDAccount;
  walletKey: string; // Metamask encryption is used in the browser
  ephemeralKeyPair: BoxKeyPair;
  signatureKeyPair: SignKeyPair;
  encryptionKey: string;
}


const setupUser = async (): Promise<User> => {
  const account = mnemonicToAccount(
    DEFAULT_SEED_PHARSE, 
    {
      accountIndex: Math.random() * 10_000 | 0,
    }
  );

  const walletKeySeed = await account.signMessage({
    message: 'Derive Vibeproof key'
  });

  const walletKey = cryptography.symmetric.generateKey(walletKeySeed);

  return {
    account,
    walletKey,
    ephemeralKeyPair: cryptography.assymetric.generateKeyPair(),
    signatureKeyPair: cryptography.signature.generateKeyPair(),
    encryptionKey: cryptography.symmetric.generateKey()
  }
}


describe('client tests', async function() {
  this.timeout(120_000);

  const client = createClient(rest(appUrl).axios(axios))

  let alice: User;
  let bob: User;
  let event_id: UUID;
  let application_id: UUID;
  let response_id: UUID;

  it('initialized the client', () => {
    assert.ok(client)
  });

  describe('Create an event', async () => { 
    let keystore: string;
    let note: string;
    let data: Omit<EventData, 'signature'>;
    let signature: string;
    
    it('Setup Alice\'s (event owner) keys', async () => {
      alice = await setupUser();

      logger.info(`Alice's address: ${alice.account.address}`);
    });  

    it('Encrypt Alice\'s keystore and note', async () => {
      const keystoreData: Keystore = {
        ephemeralSecretKey: encodeBase64(alice.ephemeralKeyPair.secretKey),
        encryptionKey: alice.encryptionKey,
        signatureSecretKey: encodeBase64(alice.signatureKeyPair.secretKey),
        version: 0,
      };

      keystore = cryptography.symmetric.encrypt(
        JSON.stringify(keystoreData),
        alice.walletKey
      );
      note = cryptography.symmetric.encrypt(
        note_text,
        alice.encryptionKey
      );
    });

    it('Set up event data', async () => {
      const now = moment();

      const registration_start = now.toISOString();
      const registration_end = now.clone().add(10, 'days').toISOString();
  
      const start = now.clone().add(11, 'days').toISOString();
      const end = now.clone().add(12, 'days').toISOString();
  
      const timestamp = now.toISOString();
  
      data = {
        id: uuidv4(),
        title: 'Variable Collective House - Paris'.trim(),
        description: `
​Welcome to the Variable Collective, a beacon for intellectual exchange and artistic expression.
We are a hub for diverse communities, builders, and creators to come together at the intersections of technology, art & culture.

​As part of the highly anticipated ETHCC week in Paris, we are delighted to present a lineup of exclusive engagements that will propel your professional journey in tech to new heights. 
Gather on our private terrace to meet like-minded builders in blockchain, metaverse & gaming, and AI.
        `.trim(),
        application_template: 'Ullamcorper a lacus vestibulum sed arcu non odio euismod lacinia. Sapien eget mi proin sed libero enim.',
        contacts: [
          EventApplicationContacts.NAME,
          EventApplicationContacts.TELEGRAM,
          EventApplicationContacts.TWITTER,
        ],
        public_key: encodeBase64(alice.ephemeralKeyPair.publicKey),
        signature_public_key: encodeBase64(alice.signatureKeyPair.publicKey),
        keystore,
  
        tags: ['Lorem', 'Ipsum'],
        link: 'https://www.loremipsum.com',
  
        note,
        location: 'Ancient Rome',
        capacity: 100,
        price: 0,
  
        registration_start,
        registration_end,
        start,
        end,

        public: true,
        paused: false,
  
        sismo: {
          auths: [],
          claims: [
            {
              claimType: ClaimType.EQ,
              groupId: '0x0f800ff28a426924cbe66b67b9f837e2',
              groupTimestamp: 'latest',
              value: 10,
              isOptional: false,
              isSelectableByUser: false,
              extraData: '',
            }
          ]
        },
        version: 0,
        timestamp,
        owner: alice.account.address
      }
    });

    it('Sign an event', async () => {
      signature = await alice.account.signTypedData({
        domain: domain,
        types: eventTypes,
        primaryType: 'Event',
        message: {
          ...data
        }
      })
    });

    it('Create an event', async () => {
      const event = await app.service('events').create({
        ...data,
        signature: signature
      })
  
      event_id = event.id as UUID;

      logger.info(`Event ID: ${event_id}`);

      assert.ok(event, 'Event created');
    });

    it('Get Alices events', async () => {
      const events = await app.service('events').find({
        query: {
          id: event_id,
        }
      });

      assert.ok(events.total === 1, 'Alice has 1 event');
      assert.ok(events.data[0].cid !== null, 'Event has no CID');
    });
  });

  describe('Create an event application', async () => {
    let keystore: string;
    let message: string;
    let contacts: string;
    let shared_key: string;
    let data: Omit<EventApplicationData, 'signature'>;
    let signature: string;

    it('Setup Bob\'s (application owner) keys', async () => {
      bob = await setupUser();

      logger.info(`Bob's address: ${bob.account.address}`);
    });
  
    it('Encrypt Bob\'s keystore, message and contacts', async () => {
      const keystoreData: Keystore = {
        encryptionKey: bob.encryptionKey,
        ephemeralSecretKey: encodeBase64(bob.ephemeralKeyPair.secretKey),
        signatureSecretKey: encodeBase64(bob.signatureKeyPair.secretKey),
        version: 0,
      };

      keystore = cryptography.symmetric.encrypt(
        JSON.stringify(keystoreData),
        bob.walletKey
      );

      message = cryptography.symmetric.encrypt(
        message_text,
        bob.encryptionKey
      );

      contacts = cryptography.symmetric.encrypt(
        JSON.stringify(contacts_object),
        bob.encryptionKey
      );
    });

    it('Encrypt Bob\'s encryption key with Alice\'s public key', async () => {
      const {
        data: [event]
      } = await app.service('events').find({
        query: {
          id: event_id,
        }
      });

      const shared = box.before(
        decodeBase64(event.public_key),
        bob.ephemeralKeyPair.secretKey
      );

      shared_key = cryptography.assymetric.encrypt(
        shared, 
        bob.encryptionKey
      );
    });

    it('Set up event application data', async () => {
      const now = moment();

      const timestamp = now.toISOString();

      data = {
        id: uuidv4(),
        public_key: encodeBase64(bob.ephemeralKeyPair.publicKey),
        keystore,

        event_id,
        message,
        contacts,
        proof: '',

        shared_key,

        version: 0,
        timestamp,
        owner: bob.account.address
      }
    });

    it('Sign event application', async () => {
      signature = await bob.account.signTypedData({
        domain: domain,
        types: applicationTypes,
        primaryType: 'Application',
        message: {
          ...data
        }
      })
    });

    it('Create an event application', async () => {
      const application = await app.service('event-applications').create({
        ...data,
        signature: signature
      })
  
      application_id = application.id as UUID;

      logger.info(`Application ID: ${application_id}`);

      assert.ok(application, 'Event application created');
    });

    it('Get Bob\'s event applications', async () => {
      const applications = await app.service('event-applications').find({
        query: {
          id: application_id,
          // owner: bob.account.address
        }
      });

      assert.ok(applications.total === 1, 'Bob has no event applications');
      const [eventApplication] = applications.data;

      // console.log(eventApplication);

      assert.ok(eventApplication.cid !== null, 'Event application has no CID');
    });

    // it('Check event applications counter', async () => {
    //   const event = await app.service('events').get(event_id);

    //   assert.ok(event.applications === 1, 'Event has no applications');
    // });
  });

  describe('Approve an application', async () => {
    it('Decrypt event keystore', async () => {
      const {
        data: [eventApplication]
      } = await app.service('event-applications').find({
        query: {
          id: application_id,
        }
      });

      const keystoreData: Keystore = JSON.parse(
        cryptography.symmetric.decrypt(
          eventApplication.event.keystore,
          alice.walletKey
        )
      );

      assert.ok(keystoreData.encryptionKey === alice.encryptionKey, 'Alice\'s encryption key is incorrect');
      assert.ok(
        keystoreData.ephemeralSecretKey === encodeBase64(alice.ephemeralKeyPair.secretKey), 
        'Alice\'s ephemeral secret key is incorrect'
      );

      const ephemeralKeyPair = box.keyPair.fromSecretKey(decodeBase64(keystoreData.ephemeralSecretKey));

      assert.ok(
        encodeBase64(ephemeralKeyPair.publicKey) === encodeBase64(alice.ephemeralKeyPair.publicKey), 
        'Alice\'s ephemeral public key is incorrect'
      );
    });

    it('Decrypt application message and contacts', async () => {
      const {
        data: [eventApplication]
      } = await app.service('event-applications').find({
        query: {
          id: application_id,
        }
      });

      const shared = box.before(
        decodeBase64(eventApplication.public_key),
        alice.ephemeralKeyPair.secretKey
      );

      const shared_key = cryptography.assymetric.decrypt(
        shared,
        eventApplication.shared_key
      );

      const message_decrypted = cryptography.symmetric.decrypt(
        eventApplication.message,
        shared_key
      )

      const contacts_decrypted = cryptography.symmetric.decrypt(
        eventApplication.contacts,
        shared_key
      );

      assert.ok(message_decrypted === message_text, 'Message is incorrect');
      assert.ok(contacts_decrypted === JSON.stringify(contacts_object), 'Contacts are incorrect');
    });

    it('Create an event application response', async () => {
      const shared = box.before(
        bob.ephemeralKeyPair.publicKey,
        alice.ephemeralKeyPair.secretKey
      );

      const shared_key = cryptography.assymetric.encrypt(
        shared,
        alice.encryptionKey
      );

      const data: Omit<EventApplicationResponseData, 'signature'> = {
        id: uuidv4(),
        type: ResponseType.APPROVED,
        event_application_id: application_id,
        shared_key,
        timestamp: moment().toISOString(),
        version: 0,
      }

      const signature = cryptography.signature.sign(
        JSON.stringify(data),
        alice.signatureKeyPair.secretKey
      );

      const response = await app.service('event-application-responses').create({
        ...data,
        signature
      });

      response_id = response.id as UUID;

      logger.info(`Response ID: ${response_id}`);

      assert.ok(response, 'Event application created')  
      assert.ok(response.cid !== null, 'Event application response has no CID');
    });
  });

  describe('Decrypt event note', async () => {
    it('Decrypt event application keystore', async () => {
      const eventApplication = await app.service('event-applications').get(application_id);

      const keystoreData: Keystore = JSON.parse(
        cryptography.symmetric.decrypt(
          eventApplication.keystore,
          bob.walletKey
        )
      );

      assert.ok(keystoreData.encryptionKey === bob.encryptionKey, 'Bob\'s encryption key is incorrect');
      assert.ok(
        keystoreData.ephemeralSecretKey === encodeBase64(bob.ephemeralKeyPair.secretKey), 
        'Bob\'s private key is incorrect'
      );

      const ephemeralKeyPair = box.keyPair.fromSecretKey(decodeBase64(keystoreData.ephemeralSecretKey));

      assert.ok(
        encodeBase64(ephemeralKeyPair.publicKey) === encodeBase64(bob.ephemeralKeyPair.publicKey),
        'Bob\'s ephemeral public key is incorrect'
      );
    });

    it('Decrypt note', async () => {
      const {
        data: [eventApplication]
      } = await app.service('event-applications').find({
        query: {
          id: application_id,
        }
      });

      assert.ok(eventApplication.response !== null, 'Event application has no response');

      const shared = box.before(
        decodeBase64(eventApplication.event.public_key),
        bob.ephemeralKeyPair.secretKey
      );

      const shared_key = cryptography.assymetric.decrypt(
        shared,
        eventApplication.response.shared_key
      );

      const note = cryptography.symmetric.decrypt(
        eventApplication.event.note,
        shared_key
      );

      assert.ok(note === note_text, 'Note is incorrect');
    });
  });

  describe('Test API requests', async () => {
    it('Get applications by event', async () => {
      const response = await app.service('event-applications').find({
        query: {
          'event_id': event_id
        }
      })
    });

    it('Patch event', async () => {
      const patchData = {
        title: 'New title',
        description: 'Join us to drink beer and eat pizza',
      } as Omit<EventPatch, 'signature'>;

      const event = await app.service('events').get(event_id) as EventData;

      const data = {
        ...event,
        ...patchData
      } as any;

      const signature = await alice.account.signTypedData({
        domain: domain,
        types: eventTypes,
        primaryType: 'Event',
        message: {
          ...data
        }
      });

      const response = await app.service('events').patch(event_id, {
        ...patchData,
        signature
      });

      console.log('updated event');
      console.log(response);
    });
  });
})
