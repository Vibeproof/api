// For more information about this file see https://dove.feathersjs.com/guides/cli/service.html

import { hooks as schemaHooks } from '@feathersjs/schema'

import {
  approvalDataValidator,
  approvalPatchValidator,
  approvalQueryValidator,
  approvalResolver,
  approvalExternalResolver,
  approvalDataResolver,
  approvalPatchResolver,
  approvalQueryResolver
} from './approvals.schema'

import type { Application } from '../../declarations'
import { ApprovalService, getOptions } from './approvals.class'
import { approvalPath, approvalMethods } from './approvals.shared'

export * from './approvals.class'
export * from './approvals.schema'

// A configure function that registers the service and its hooks via `app.configure`
export const approval = (app: Application) => {
  // Register our service on the Feathers application
  app.use(approvalPath, new ApprovalService(getOptions(app)), {
    // A list of all methods this service exposes externally
    methods: approvalMethods,
    // You can add additional custom events to be sent to clients here
    events: []
  })
  // Initialize hooks
  app.service(approvalPath).hooks({
    around: {
      all: [
        schemaHooks.resolveExternal(approvalExternalResolver),
        schemaHooks.resolveResult(approvalResolver)
      ]
    },
    before: {
      all: [
        schemaHooks.validateQuery(approvalQueryValidator),
        schemaHooks.resolveQuery(approvalQueryResolver)
      ],
      find: [],
      get: [],
      create: [
        schemaHooks.validateData(approvalDataValidator),
        schemaHooks.resolveData(approvalDataResolver)
      ],
      patch: [
        schemaHooks.validateData(approvalPatchValidator),
        schemaHooks.resolveData(approvalPatchResolver)
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
    [approvalPath]: ApprovalService
  }
}
