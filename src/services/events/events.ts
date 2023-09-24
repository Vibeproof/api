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
} from './events.schema'

import type { Application } from '../../declarations'
import { EventService, getOptions } from './events.class'
import { eventPath, eventMethods } from './events.shared'
import { HookContext } from '@feathersjs/feathers'
import { verifyTypedData } from 'viem'
import { domain, eventTypes } from '../../utils/eip712'
import { FeathersError, GeneralError } from '@feathersjs/errors'
import { pineapple } from '../../hooks/derive/pineapple'
// import { sismoProofVerifier } from '../../hooks/check/sismo-proof-verifier'
import axios from 'axios'
import { ens } from '../../hooks/derive/ens'
import { eventArtist } from '../../hooks/derive/event-artist'
import { logger } from '../../logger'

export * from './events.class'
export * from './events.schema'

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
        eventArtist,
        pineapple,
        async (context: HookContext) => {
          context.data.public = true;
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
      patch: [schemaHooks.validateData(eventPatchValidator), schemaHooks.resolveData(eventPatchResolver)],
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
