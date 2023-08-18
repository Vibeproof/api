// For more information about this file see https://dove.feathersjs.com/guides/cli/service.test.html
import assert from 'assert'
import { app } from '../../../src/app'

import type { EventData } from '../../../src/services/events/events.schema';
import { v4 as uuidv4 } from 'uuid';
import { AuthType, ClaimType } from '@sismo-core/sismo-connect-server'

import { createWalletClient, http } from 'viem'
import { mnemonicToAccount } from 'viem/accounts'
import { mainnet } from 'viem/chains'
import { domain, types } from '../../../src/utils/eip712';
import { sign } from 'crypto';

const account = mnemonicToAccount('test test test test test test test test test test test junk');

describe('events service', () => {
  it('registered the service', () => {
    const service = app.service('events')

    assert.ok(service, 'Registered the service')
  })

  it('Create event with correct signature', async () => {
    const data: Omit<EventData, 'signature'> = {
      id: uuidv4(),
      title: 'asd',
      organizer: 'asd',
      description: 'asd',
      tags: ['123', 'asd'],
      link: 'https://asd.com',
      note: '123',
      location: 'Amsterdam',
      registration_start: '2022-11-30T11:21:44.000-08:00',
      registration_end: '2022-11-30T11:21:44.000-08:00',
      capacity: 100,
      start: '2022-11-30T11:21:44.000-08:00',
      end: '2022-11-30T11:21:44.000-08:00',
      price: 0,
      sismo: {
        auths: [{
          authType: AuthType.EVM_ACCOUNT,
          isAnon: false
        }],
        claims: [{
          claimType: ClaimType.EQ,
          groupId: '0x0f800ff28a426924cbe66b67b9f837e2',
          value: 10
        }]
      },
      timestamp: new Date().toISOString(),
      owner: account.address
    };

    const signature = await account.signTypedData({
      domain: domain,
      types: types,
      primaryType: 'Event',
      message: {
        id: data.id,
        title: data.title,
        organizer: data.organizer,
        description: data.description,
        tags: data.tags,
        link: data.link ? data.link : '',
        note: data.note,
        location: data.location,
        registration_start: data.registration_start,
        registration_end: data.registration_end,
        // @ts-ignore
        capacity: data.capacity,
        start: data.start,
        end: data.end,
        // @ts-ignore
        price: data.price,
        // @ts-ignore
        sismo: data.sismo,
        timestamp: data.timestamp,
        // @ts-ignore
        owner: data.owner
      }
    });

    const event = await app.service('events').create({
      ...data,
      signature: signature
    });

    assert.ok(event, 'Event created');
  });
})
