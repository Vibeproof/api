// For more information about this file see https://dove.feathersjs.com/guides/cli/service.html

import { hooks as schemaHooks } from '@feathersjs/schema'
import { HookContext } from '@feathersjs/feathers'

import {
  eventApplicationDataValidator,
  eventApplicationPatchValidator,
  eventApplicationQueryValidator,
  eventApplicationResolver,
  eventApplicationExternalResolver,
  eventApplicationDataResolver,
  eventApplicationPatchResolver,
  eventApplicationQueryResolver
} from './event-applications.schema'

import { verifyTypedData } from 'viem'
import { domain, applicationTypes } from '../../utils/eip712'
import { FeathersError, GeneralError } from '@feathersjs/errors'

import type { Application } from '../../declarations'
import { EventApplicationService, getOptions } from './event-applications.class'
import { eventApplicationPath, eventApplicationMethods } from './event-applications.shared'
import { pineapple } from '../../hooks/derive/pineapple'

export * from './event-applications.class'
export * from './event-applications.schema'

// A configure function that registers the service and its hooks via `app.configure`
export const eventApplication = (app: Application) => {
  // Register our service on the Feathers application
  app.use(eventApplicationPath, new EventApplicationService(getOptions(app)), {
    // A list of all methods this service exposes externally
    methods: eventApplicationMethods,
    // You can add additional custom events to be sent to clients here
    events: []
  })
  // Initialize hooks
  app.service(eventApplicationPath).hooks({
    around: {
      all: [
        schemaHooks.resolveExternal(eventApplicationExternalResolver),
        schemaHooks.resolveResult(eventApplicationResolver)
      ]
    },
    before: {
      all: [
        schemaHooks.validateQuery(eventApplicationQueryValidator),
        schemaHooks.resolveQuery(eventApplicationQueryResolver)
      ],
      find: [],
      get: [],
      create: [
        schemaHooks.validateData(eventApplicationDataValidator),
        schemaHooks.resolveData(eventApplicationDataResolver),
        async (context: HookContext) => {
          // Copy data
          const data = { ...context.data };
          delete data.signature;

          // Check signature matches the owner
          const valid = await verifyTypedData({
            address: context.data.owner,
            domain: domain,
            types: applicationTypes,
            primaryType: 'Application',
            message: {
              ...data
            },
            signature: context.data.signature
          })

          if (!valid) {
            throw new GeneralError('Bad signature')
          }
        },
        pineapple,
      ],
      patch: [
        schemaHooks.validateData(eventApplicationPatchValidator),
        schemaHooks.resolveData(eventApplicationPatchResolver)
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
    [eventApplicationPath]: EventApplicationService
  }
}
