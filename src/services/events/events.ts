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
  eventDataSchema,
  eventQuerySchema
} from './events.schema'

import type { Application } from '../../declarations'
import { EventService, getOptions } from './events.class'
import { eventPath, eventMethods } from './events.shared'
import { createSwaggerServiceOptions } from 'feathers-swagger'
import {HookContext} from "@feathersjs/feathers";
import { verifyTypedData } from 'viem';
import { domain, types } from '../../utils/eip712'
import { FeathersError } from '@feathersjs/errors'

export * from './events.class'
export * from './events.schema'

class WrongSignatureError extends FeathersError {
  constructor(message: string, data: any) {
        super(
          message, 
          'WrongSignature',
          500,
          'wrong-signature',
          data
        );
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
      find: [],
      get: [],
      create: [
        schemaHooks.validateData(eventDataValidator),
        schemaHooks.resolveData(eventDataResolver),
        async (context: HookContext) => {
          // Check signature matches the owner

          const valid = await verifyTypedData({
            address: context.data.owner,
            domain: domain,
            types: types,
            primaryType: 'Event',
            message: {
              id: context.data.id,
              title: context.data.title,
              organizer: context.data.organizer,
              description: context.data.description,
              tags: context.data.tags,
              link: context.data.link ? context.data.link : '',
              note: context.data.note,
              location: context.data.location,
              registration_start: context.data.registration_start,
              registration_end: context.data.registration_end,
              capacity: context.data.capacity,
              start: context.data.start,
              end: context.data.end,
              price: context.data.price,
              sismo: context.data.sismo,
              owner: context.data.owner,
              timestamp: context.data.timestamp,
            },
            signature: context.data.signature
          });

          if (!valid) {
            throw new WrongSignatureError('Wrong signature', context.data);
          }
        }
      ],
      patch: [
        schemaHooks.validateData(eventPatchValidator), 
        schemaHooks.resolveData(eventPatchResolver)
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
