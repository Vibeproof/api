// For more information about this file see https://dove.feathersjs.com/guides/cli/service.html

import { hooks as schemaHooks } from '@feathersjs/schema'

import {
  submissionDataValidator,
  submissionPatchValidator,
  submissionQueryValidator,
  submissionResolver,
  submissionExternalResolver,
  submissionDataResolver,
  submissionPatchResolver,
  submissionQueryResolver
} from './submissions.schema'

import type { Application } from '../../declarations'
import { SubmissionService, getOptions } from './submissions.class'
import { submissionPath, submissionMethods } from './submissions.shared'

export * from './submissions.class'
export * from './submissions.schema'

// A configure function that registers the service and its hooks via `app.configure`
export const submission = (app: Application) => {
  // Register our service on the Feathers application
  app.use(submissionPath, new SubmissionService(getOptions(app)), {
    // A list of all methods this service exposes externally
    methods: submissionMethods,
    // You can add additional custom events to be sent to clients here
    events: []
  })
  // Initialize hooks
  app.service(submissionPath).hooks({
    around: {
      all: [
        schemaHooks.resolveExternal(submissionExternalResolver),
        schemaHooks.resolveResult(submissionResolver)
      ]
    },
    before: {
      all: [
        schemaHooks.validateQuery(submissionQueryValidator),
        schemaHooks.resolveQuery(submissionQueryResolver)
      ],
      find: [],
      get: [],
      create: [
        schemaHooks.validateData(submissionDataValidator),
        schemaHooks.resolveData(submissionDataResolver)
      ],
      patch: [
        schemaHooks.validateData(submissionPatchValidator),
        schemaHooks.resolveData(submissionPatchResolver)
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
    [submissionPath]: SubmissionService
  }
}
