// // For more information about this file see https://dove.feathersjs.com/guides/cli/service.schemas.html
import { resolve } from '@feathersjs/schema'
import { Type, getValidator, querySyntax } from '@feathersjs/typebox'
import type { Static } from '@feathersjs/typebox'

import type { HookContext } from '../../declarations'
import { dataValidator, queryValidator } from '../../validators'

// Main data model schema
export const approvalSchema = Type.Object(
  {
    id: Type.Number(),
    text: Type.String()
  },
  { $id: 'Approval', additionalProperties: false }
)
export type Approval = Static<typeof approvalSchema>
export const approvalValidator = getValidator(approvalSchema, dataValidator)
export const approvalResolver = resolve<Approval, HookContext>({})

export const approvalExternalResolver = resolve<Approval, HookContext>({})

// Schema for creating new entries
export const approvalDataSchema = Type.Pick(approvalSchema, ['text'], {
  $id: 'ApprovalData'
})
export type ApprovalData = Static<typeof approvalDataSchema>
export const approvalDataValidator = getValidator(approvalDataSchema, dataValidator)
export const approvalDataResolver = resolve<Approval, HookContext>({})

// Schema for updating existing entries
export const approvalPatchSchema = Type.Partial(approvalSchema, {
  $id: 'ApprovalPatch'
})
export type ApprovalPatch = Static<typeof approvalPatchSchema>
export const approvalPatchValidator = getValidator(approvalPatchSchema, dataValidator)
export const approvalPatchResolver = resolve<Approval, HookContext>({})

// Schema for allowed query properties
export const approvalQueryProperties = Type.Pick(approvalSchema, ['id', 'text'])
export const approvalQuerySchema = Type.Intersect(
  [
    querySyntax(approvalQueryProperties),
    // Add additional query properties here
    Type.Object({}, { additionalProperties: false })
  ],
  { additionalProperties: false }
)
export type ApprovalQuery = Static<typeof approvalQuerySchema>
export const approvalQueryValidator = getValidator(approvalQuerySchema, queryValidator)
export const approvalQueryResolver = resolve<ApprovalQuery, HookContext>({})
