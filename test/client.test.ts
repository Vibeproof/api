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
  cryptography
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
  decodeBase64
} from "tweetnacl-util";



const port = app.get('port')
const appUrl = `http://${app.get('host')}:${port}`

const DEFAULT_SEED_PHARSE = 'test test test test test test test test test test test junk';

const note_text = 'Welcome everyone, my name is Alice';
const message_text = 'My name is Bob';


interface User {
  account: HDAccount;
  walletKey: string; // Metamask encryption is used in the browser
  ephemeralKeyPair: BoxKeyPair;
  signatureKeyPair: SignKeyPair;
  encryptionKey: string;
}

interface Keystore {
  privateKey: string;
  encryptionKey: string;
  signatureKey: string;
  version: 0;
}

const setupUser = async () => {
  return {
    account: mnemonicToAccount(
      DEFAULT_SEED_PHARSE, 
      {
        accountIndex: Math.random() * 10_000 | 0,
      }
    ),
    walletKey: cryptography.symmetric.generateKey(),
    ephemeralKeyPair: cryptography.assymetric.generateKeyPair(),
    signatureKeyPair: cryptography.signature.generateKeyPair(),
    encryptionKey: cryptography.symmetric.generateKey()
  }
}


describe('client tests', async function() {
  this.timeout(10_000);

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
  
      logger.info(`Alice's account: ${alice.account.address}`);
    });  

    it('Encrypt Alice\'s keystore and note', async () => {
      const keystoreData: Keystore = {
        privateKey: encodeBase64(alice.ephemeralKeyPair.secretKey),
        encryptionKey: alice.encryptionKey,
        signatureKey: encodeBase64(alice.signatureKeyPair.secretKey),
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
        title: '🇫🇷 Tennis at ETH CC',
        description: 'First web3 tennis session! Join us for a game of tennis at ETH CC',
        application_template: '',
        public_key: encodeBase64(alice.ephemeralKeyPair.publicKey),
        signature_public_key: encodeBase64(alice.signatureKeyPair.publicKey),
        keystore,
  
        tags: ['Tennis', 'ETH CC', 'ENS holders', 'WAGMI'],
        link: 'https://ethcctennis.com',
  
        note,
        location: 'France, Paris',
        capacity: 100,
        price: 0,
  
        registration_start,
        registration_end,
        start,
        end,
  
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

      assert.ok(event, 'Event created')  
    });

    it('Get Alices events', async () => {
      const events = await app.service('events').find({
        query: {
          id: event_id,
          owner: alice.account.address
        }
      });

      assert.ok(events.total === 1, 'Alice has 1 event');
      assert.ok(events.data[0].cid !== null, 'Event has no CID');
    });
  });

  describe('Create an event application', async () => {
    let keystore: string;
    let message: string;
    let shared_key: string;
    let data: Omit<EventApplicationData, 'signature'>;
    let signature: string;

    it('Setup Bob\'s (application owner) keys', async () => {
      bob = await setupUser();
  
      logger.info(`Bobs's account: ${bob.account.address}`);
    });
  
    it('Encrypt Bob\'s keystore and message', async () => {
      const keystoreData: Keystore = {
        encryptionKey: bob.encryptionKey,
        privateKey: encodeBase64(bob.ephemeralKeyPair.secretKey),
        signatureKey: encodeBase64(bob.signatureKeyPair.secretKey),
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

      assert.ok(application, 'Event application created');
    });

    it('Get Bob\'s event applications', async () => {
      const applications = await app.service('event-applications').find({
        query: {
          id: application_id,
          owner: bob.account.address
        }
      });

      assert.ok(applications.total === 1, 'Bob has no event applications');
      const [eventApplication] = applications.data;

      assert.ok(eventApplication.cid !== null, 'Event application has no CID');
    });
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
      assert.ok(keystoreData.privateKey === encodeBase64(alice.ephemeralKeyPair.secretKey), 'Alice\'s private key is incorrect');

      const ephemeralKeyPair = box.keyPair.fromSecretKey(decodeBase64(keystoreData.privateKey));

      assert.ok(encodeBase64(ephemeralKeyPair.publicKey) === encodeBase64(alice.ephemeralKeyPair.publicKey), 'Alice\'s public key is incorrect');
    });

    it('Decrypt application message', async () => {
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

      assert.ok(message_decrypted === message_text, 'Message is incorrect');
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

      assert.ok(response, 'Event application created')  

      // console.log(response);
    });

    it('Get event application responses', async () => {
      const response = await app.service('event-application-responses').find({
        query: {
          // @ts-ignore
          // 'event-application.owner': bob.account.address,
        }
      });

      console.log(response);
    });
  });

  describe('Decrypt event note', async () => {
    it('Decrypt event application keystore', async () => {
      const {
        data: [eventApplicationResponse]
      } = await app.service('event-application-responses').find({
        query: {
          id: response_id,
        }
      });

      const keystoreData: Keystore = JSON.parse(
        cryptography.symmetric.decrypt(
          eventApplicationResponse.event_application.keystore,
          bob.walletKey
        )
      );

      assert.ok(keystoreData.encryptionKey === bob.encryptionKey, 'Bob\'s encryption key is incorrect');
      assert.ok(keystoreData.privateKey === encodeBase64(bob.ephemeralKeyPair.secretKey), 'Bob\'s private key is incorrect');

      const ephemeralKeyPair = box.keyPair.fromSecretKey(decodeBase64(keystoreData.privateKey));

      assert.ok(encodeBase64(ephemeralKeyPair.publicKey) === encodeBase64(bob.ephemeralKeyPair.publicKey), 'Bob\'s public key is incorrect');
    });

    it('Decrypt note', async () => {
      const {
        data: [eventApplicationResponse]
      } = await app.service('event-application-responses').find({
        query: {
          id: response_id,
        }
      });

      const shared = box.before(
        decodeBase64(eventApplicationResponse.event_application.event.public_key),
        bob.ephemeralKeyPair.secretKey
      );

      const shared_key = cryptography.assymetric.decrypt(
        shared,
        eventApplicationResponse.shared_key
      );

      const note = cryptography.symmetric.decrypt(
        eventApplicationResponse.event_application.event.note,
        shared_key
      );

      assert.ok(note === note_text, 'Note is incorrect');
    });
  });
})
