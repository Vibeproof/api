// For more information about this file see https://dove.feathersjs.com/guides/cli/service.html

import { hooks as schemaHooks } from '@feathersjs/schema'

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
        schemaHooks.resolveData(eventApplicationResponseDataResolver)
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
