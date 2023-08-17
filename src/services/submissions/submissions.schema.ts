// // For more information about this file see https://dove.feathersjs.com/guides/cli/service.schemas.html
import { resolve } from '@feathersjs/schema'
import { Type, getValidator, querySyntax } from '@feathersjs/typebox'
import type { Static } from '@feathersjs/typebox'

import type { HookContext } from '../../declarations'
import { dataValidator, queryValidator } from '../../validators'

// Main data model schema
export const submissionSchema = Type.Object(
  {
    id: Type.Number(),
    text: Type.String()
  },
  { $id: 'Submission', additionalProperties: false }
)
export type Submission = Static<typeof submissionSchema>
export const submissionValidator = getValidator(submissionSchema, dataValidator)
export const submissionResolver = resolve<Submission, HookContext>({})

export const submissionExternalResolver = resolve<Submission, HookContext>({})

// Schema for creating new entries
export const submissionDataSchema = Type.Pick(submissionSchema, ['text'], {
  $id: 'SubmissionData'
})
export type SubmissionData = Static<typeof submissionDataSchema>
export const submissionDataValidator = getValidator(submissionDataSchema, dataValidator)
export const submissionDataResolver = resolve<Submission, HookContext>({})

// Schema for updating existing entries
export const submissionPatchSchema = Type.Partial(submissionSchema, {
  $id: 'SubmissionPatch'
})
export type SubmissionPatch = Static<typeof submissionPatchSchema>
export const submissionPatchValidator = getValidator(submissionPatchSchema, dataValidator)
export const submissionPatchResolver = resolve<Submission, HookContext>({})

// Schema for allowed query properties
export const submissionQueryProperties = Type.Pick(submissionSchema, ['id', 'text'])
export const submissionQuerySchema = Type.Intersect(
  [
    querySyntax(submissionQueryProperties),
    // Add additional query properties here
    Type.Object({}, { additionalProperties: false })
  ],
  { additionalProperties: false }
)
export type SubmissionQuery = Static<typeof submissionQuerySchema>
export const submissionQueryValidator = getValidator(submissionQuerySchema, queryValidator)
export const submissionQueryResolver = resolve<SubmissionQuery, HookContext>({})
