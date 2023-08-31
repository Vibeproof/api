// For more information about this file see https://dove.feathersjs.com/guides/cli/service.test.html
import assert from 'assert'
import { app } from '../../../src/app'

import type { EventData } from '../../../src/services/events/events.schema'
import { v4 as uuidv4 } from 'uuid'
import { AuthType, ClaimType } from '@sismo-core/sismo-connect-server'

import { mnemonicToAccount } from 'viem/accounts'
import { domain, eventTypes } from '../../../src/utils/eip712'
import moment from 'moment'


const account = mnemonicToAccount('test test test test test test test test test test test junk')

describe('events service', function () {
  this.timeout(10000)

  it('registered the service', () => {
    const service = app.service('events')

    assert.ok(service, 'Registered the service')
  })

  it('Create event with correct signature', async () => {    
    const now = moment();

    const registration_start = now.toISOString();
    const registration_end = now.clone().add(10, 'days').toISOString();

    const start = now.clone().add(11, 'days').toISOString();
    const end = now.clone().add(12, 'days').toISOString();

    const timestamp = now.toISOString();

    const data: Omit<EventData, 'signature'> = {
      id: uuidv4(),
      title: '🇫🇷 Tennis at ETH CC',
      description:
        'First web3 tennis session! Join us for a game of tennis at ETH CC',
      public_key: '123123',
      keystore: '123123',

      tags: ['Tennis', 'ETH CC', 'ENS holders', 'WAGMI'],
      link: 'https://ethcctennis.com',

      note: '0x123123123123123',
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
      owner: account.address
    }

    const signature = await account.signTypedData({
      domain: domain,
      types: eventTypes,
      primaryType: 'Event',
      message: {
        id: data.id,
        title: data.title,
        description: data.description,
        public_key: data.public_key,
        keystore: data.keystore,

        tags: data.tags,
        link: data.link ? data.link : '',

        note: data.note,
        location: data.location,
        capacity: data.capacity,
        price: data.price,

        // @ts-ignore
        sismo: data.sismo,

        registration_start: data.registration_start,
        registration_end: data.registration_end,
        start: data.start,
        end: data.end,

        timestamp: data.timestamp,
        // @ts-ignore
        owner: data.owner,
        version: data.version,
      }
    })

    const event = await app.service('events').create({
      ...data,
      signature: signature
    })

    assert.ok(event, 'Event created')
  })
})
