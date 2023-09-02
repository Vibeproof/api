// For more information about this file see https://dove.feathersjs.com/guides/cli/service.html

import { hooks as schemaHooks } from '@feathersjs/schema'
import { v4 as uuidv4 } from 'uuid'

import {
  eventApplicationResponseDataValidator,
  eventApplicationResponsePatchValidator,
  eventApplicationResponseQueryValidator,
  eventApplicationResponseResolver,
  eventApplicationResponseExternalResolver,
  eventApplicationResponseDataResolver,
  eventApplicationResponsePatchResolver,
  eventApplicationResponseQueryResolver
} from './event-application-responses.schema'

import type { Application } from '../../declarations'
import { EventApplicationResponseService, getOptions } from './event-application-responses.class'
import {
  eventApplicationResponsePath,
  eventApplicationResponseMethods
} from './event-application-responses.shared'
import { pineapple } from '../../hooks/derive/pineapple'
import { FeathersError, GeneralError } from '@feathersjs/errors'
import { HookContext } from '@feathersjs/feathers'
import { cryptography } from '../../client'

export * from './event-application-responses.class'
export * from './event-application-responses.schema'

// A configure function that registers the service and its hooks via `app.configure`
export const eventApplicationResponse = (app: Application) => {
  // Register our service on the Feathers application
  app.use(eventApplicationResponsePath, new EventApplicationResponseService(getOptions(app)), {
    // A list of all methods this service exposes externally
    methods: eventApplicationResponseMethods,
    // You can add additional custom events to be sent to clients here
    events: []
  })
  // Initialize hooks
  app.service(eventApplicationResponsePath).hooks({
    around: {
      all: [
        schemaHooks.resolveExternal(eventApplicationResponseExternalResolver),
        schemaHooks.resolveResult(eventApplicationResponseResolver)
      ]
    },
    before: {
      all: [
        schemaHooks.validateQuery(eventApplicationResponseQueryValidator),
        schemaHooks.resolveQuery(eventApplicationResponseQueryResolver)
      ],
      find: [],
      get: [],
      create: [
        schemaHooks.validateData(eventApplicationResponseDataValidator),
        schemaHooks.resolveData(eventApplicationResponseDataResolver),
        async (context: HookContext) => {
          // Validate signature with event.signature_public_key
          const eventApplication = await context.app
            .service('event-applications')
            .get(context.data.event_application_id);

          // Put fields in explicit order since the signature is generated from the JSON
          const data = {
            id: context.data.id,
            type: context.data.type,
            event_application_id: context.data.event_application_id,
            shared_key: context.data.shared_key,
            timestamp: context.data.timestamp,
            version: context.data.version,
          };

          const verified = cryptography.signature.verify(
            JSON.stringify(data),
            context.data.signature,
            eventApplication.event.signature_public_key
          );

          if (verified === false) {
            throw new GeneralError('Invalid signature');
          }
        },
        pineapple,
      ],
      patch: [
        schemaHooks.validateData(eventApplicationResponsePatchValidator),
        schemaHooks.resolveData(eventApplicationResponsePatchResolver)
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
    [eventApplicationResponsePath]: EventApplicationResponseService
  }
}
