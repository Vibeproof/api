// For more information about this file see https://dove.feathersjs.com/guides/cli/service.html

import { hooks as schemaHooks } from '@feathersjs/schema'

import {
  eventDataValidator,
  eventPatchValidator,
  eventQueryValidator,
  eventResolver,
  eventExternalResolver,
  eventDataResolver,
  eventPatchResolver,
  eventQueryResolver,
  eventSchema,
  Event
} from './events.schema'

import type { Application } from '../../declarations'
import { EventService, getOptions } from './events.class'
import { eventPath, eventMethods } from './events.shared'
import { HookContext } from '@feathersjs/feathers'
import { Address, verifyTypedData } from 'viem'
import { domain, eventTypes } from '../../utils/eip712'
import { FeathersError, GeneralError } from '@feathersjs/errors'
import { pineapple } from '../../hooks/derive/pineapple'
// import { sismoProofVerifier } from '../../hooks/check/sismo-proof-verifier'
import axios from 'axios'
import { ens } from '../../hooks/derive/ens'
import { eventArtist } from '../../hooks/derive/event-artist'
import { logger } from '../../logger'
import { Type } from '@feathersjs/typebox'

export * from './events.class'
export * from './events.schema'

import hash from 'object-hash';
import moment from 'moment'

class WrongSignatureError extends FeathersError {
  constructor(message: string, data: any) {
    super(message, 'WrongSignature', 500, 'wrong-signature', data)
  }
}


// A configure function that registers the service and its hooks via `app.configure`
export const event = (app: Application) => {
  // Register our service on the Feathers application
  app.use(eventPath, new EventService(getOptions(app)), {
    // A list of all methods this service exposes externally
    methods: eventMethods,
    // You can add additional custom events to be sent to clients here
    events: []
  })
  // Initialize hooks
  app.service(eventPath).hooks({
    around: {
      all: [schemaHooks.resolveExternal(eventExternalResolver), schemaHooks.resolveResult(eventResolver)]
    },
    before: {
      all: [schemaHooks.validateQuery(eventQueryValidator), schemaHooks.resolveQuery(eventQueryResolver)],
      find: [
        async (context: HookContext) => {
          const query = context.service.createQuery(context.params)

          // // do something with query here
          // query.orderBy('timestamp', 'desc')
  
          context.params.knex = query  
        }
      ],
      get: [],
      create: [
        schemaHooks.validateData(eventDataValidator),
        schemaHooks.resolveData(eventDataResolver),
        async (context: HookContext) => {
          // Copy data
          const data = { ...context.data };
          delete data.signature;

          // Check signature matches the owner
          const valid = await verifyTypedData({
            address: context.data.owner,
            domain: domain,
            types: eventTypes,
            primaryType: 'Event',
            message: {
              ...data
            },
            signature: context.data.signature
          })

          if (!valid) {
            throw new GeneralError('Bad signature')
          }
        },
        async (context: HookContext) => {
          const image = await eventArtist({
            // @ts-ignore
            app: context.app,
            description: context.data.description,
            seed: context.data.seed,
            event_id: context.data.id
          });

          context.data.image = image;
        },
        pineapple,
        async (context: HookContext) => {
          context.data.banned = false;
          context.data.rating = 10;
        },
        async (context: HookContext) => {
          const xmtp = app.get('xmtpClient');

          if (!xmtp) return;

          const canMessage = await xmtp.canMessage(context.data.owner);

          if (!canMessage) {
            logger.warn(`User ${context.data.owner} cannot be messaged`);
            return;
          }

          const conversation = await xmtp.conversations.newConversation(context.data.owner,);

          await conversation.send('Congratulations! Your event has been created!');
        }
      ],
      patch: [
        schemaHooks.validateData(eventPatchValidator), 
        schemaHooks.resolveData(eventPatchResolver),
        async (context: HookContext) => {
          const [event_id] = context.arguments;

          const event = await app.service('events').get(event_id);

          const data = {
            ...event,
            ...context.data
          };

          data.start = moment(data.start).toISOString();
          data.end = moment(data.end).toISOString();
          data.registration_start = moment(data.registration_start).toISOString();
          data.registration_end = moment(data.registration_end).toISOString();
          data.timestamp = moment(data.timestamp).toISOString();

          // Check signature matches the owner
          const valid = await verifyTypedData({
            // @ts-ignore
            address: event.owner,
            domain: domain,
            types: eventTypes,
            primaryType: 'Event',
            message: {
              ...data
            },
            signature: context.data.signature,
          });

          if (!valid) {
            throw new GeneralError('Bad signature')
          }
        },
        async (context: HookContext) => {
          // Update image if new seed is provided
          if (context.data.seed === undefined) return;

          const [event_id] = context.arguments;

          const event = await app.service('events').get(event_id);

          if (event.seed === context.data.seed) return;

          const image = await eventArtist({
            // @ts-ignore
            app: context.app,
            description: event.description,
            seed: context.data.seed,
            event_id: event_id
          });

          context.data.image = image;
        }
      ],
      remove: []
    },
    after: {
      all: []
    },
    error: {
      all: []
    }
  })
}

// Add this service to the service type index
declare module '../../declarations' {
  interface ServiceTypes {
    [eventPath]: EventService
  }
}
