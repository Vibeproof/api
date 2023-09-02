// // For more information about this file see https://dove.feathersjs.com/guides/cli/service.schemas.html
import { resolve, virtual } from '@feathersjs/schema'
import { Type, getValidator, querySyntax } from '@feathersjs/typebox'
import type { Static } from '@feathersjs/typebox'

import type { HookContext } from '../../declarations'
import { dataValidator, queryValidator } from '../../validators'
import { eventApplicationSchema } from '../event-applications/event-applications.schema'

export enum ResponseType {
  APPROVED,
  REJECTED,
}

// Main data model schema
export const eventApplicationResponseSchema = Type.Object(
  {
    id: Type.String({ format: 'uuid' }),
    type: Type.Enum(ResponseType),
    event_application_id: Type.String({
      format: 'uuid',
    }),
    shared_key: Type.String({}),

    timestamp: Type.String({ format: 'date-time' }),
    signature: Type.String({ maxLength: 500 }),
    version: Type.Number({ minimum: 0, maximum: 0 }),

    event_application: Type.Ref(eventApplicationSchema),

    // Derived fields
    // - IPFS CID
    cid: Type.String(),
  },
  { $id: 'EventApplicationResponse', additionalProperties: false }
)
export type EventApplicationResponse = Static<typeof eventApplicationResponseSchema>
export const eventApplicationResponseValidator = getValidator(eventApplicationResponseSchema, dataValidator)
export const eventApplicationResponseResolver = resolve<EventApplicationResponse, HookContext>({
  event_application: virtual(async (message, context) => {
    return context.app.service('event-applications').get(message.event_application_id)
  }),
})

export const eventApplicationResponseExternalResolver = resolve<EventApplicationResponse, HookContext>({})

// Schema for creating new entries
export const eventApplicationResponseDataSchema = Type.Pick(
  eventApplicationResponseSchema, 
  [
    'id',
    'type',
    'event_application_id',
    'shared_key',

    'timestamp',
    'signature',
    'version',
  ], {
  $id: 'EventApplicationResponseData',
  additionalProperties: false
})
export type EventApplicationResponseData = Static<typeof eventApplicationResponseDataSchema>
export const eventApplicationResponseDataValidator = getValidator(
  eventApplicationResponseDataSchema,
  dataValidator
)
export const eventApplicationResponseDataResolver = resolve<EventApplicationResponse, HookContext>({})

// Schema for updating existing entries
export const eventApplicationResponsePatchSchema = Type.Partial(eventApplicationResponseSchema, {
  $id: 'EventApplicationResponsePatch'
})
export type EventApplicationResponsePatch = Static<typeof eventApplicationResponsePatchSchema>
export const eventApplicationResponsePatchValidator = getValidator(
  eventApplicationResponsePatchSchema,
  dataValidator
)
export const eventApplicationResponsePatchResolver = resolve<EventApplicationResponse, HookContext>({})

// Schema for allowed query properties
export const eventApplicationResponseQueryProperties = Type.Pick(eventApplicationResponseSchema, [
  'id',
  'event_application_id',
])
export const eventApplicationResponseQuerySchema = Type.Intersect(
  [
    querySyntax(eventApplicationResponseQueryProperties),
    // Add additional query properties here
    Type.Object({}, { additionalProperties: false })
  ],
  { additionalProperties: false }
)
export type EventApplicationResponseQuery = Static<typeof eventApplicationResponseQuerySchema>
export const eventApplicationResponseQueryValidator = getValidator(
  eventApplicationResponseQuerySchema,
  queryValidator
)
export const eventApplicationResponseQueryResolver = resolve<EventApplicationResponseQuery, HookContext>({})
