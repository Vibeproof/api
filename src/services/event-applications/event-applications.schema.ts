// // For more information about this file see https://dove.feathersjs.com/guides/cli/service.schemas.html
import { resolve, virtual } from '@feathersjs/schema'
import { Type, getValidator, querySyntax } from '@feathersjs/typebox'
import type { Static } from '@feathersjs/typebox'

import type { HookContext } from '../../declarations'
import { dataValidator, queryValidator } from '../../validators'
import { eventSchema } from '../events/events.schema'
import { eventApplicationResponseSchema } from '../event-application-responses/event-application-responses.schema'

// Main data model schema
export const eventApplicationSchema = Type.Object(
  {
    id: Type.String({ format: 'uuid' }),
    public_key: Type.String({
      maxLength: 256
    }),
    keystore: Type.String({}),

    event_id: Type.String({
      format: 'uuid',
    }),
    message: Type.String({
      maxLength: 1500
    }),

    vault_id: Type.String({}),
    proof: Type.String({}),

    shared_key: Type.String({}),

    timestamp: Type.String({ format: 'date-time' }),
    signature: Type.String({ maxLength: 500 }),
    owner: Type.RegEx(/^0x[a-fA-F0-9]{40}$/),
    version: Type.Number({ minimum: 0, maximum: 0 }),

    event: Type.Ref(eventSchema),
    response: Type.Union([
      Type.Ref(eventApplicationResponseSchema),
      Type.Null()
    ]),

    // Derived fields
    // - Owner's ENS account
    organizer: Type.String({
      maxLength: 100
    }),
    // - IPFS CID
    cid: Type.String(),
  },
  { $id: 'EventApplication', additionalProperties: false }
)
export type EventApplication = Static<typeof eventApplicationSchema>
export const eventApplicationValidator = getValidator(eventApplicationSchema, dataValidator)
// @ts-ignore
export const eventApplicationResolver = resolve<EventApplication, HookContext>({
  event: virtual(async (message, context) => {
    return context.app.service('events').get(message.event_id)
  }),
  response: virtual(async (message, context) => {
    const r = await context.app.service('event-application-responses').find({
      query: {
        event_application_id: message.id
      }
    });

    if (r.total === 0) {
      return null;
    } else {
      return r.data[0];
    }
  })
})

export const eventApplicationExternalResolver = resolve<EventApplication, HookContext>({})

// Schema for creating new entries
export const eventApplicationDataSchema = Type.Pick(
  eventApplicationSchema,
  [
    'id',
    'public_key',
    'keystore',

    'event_id',
    'message',
    'proof',

    'shared_key',

    'timestamp',
    'signature',
    'owner',
    'version',
  ], {
  $id: 'EventApplicationData',
  additionalProperties: false
})
export type EventApplicationData = Static<typeof eventApplicationDataSchema>
export const eventApplicationDataValidator = getValidator(eventApplicationDataSchema, dataValidator)
export const eventApplicationDataResolver = resolve<EventApplication, HookContext>({
})

// Schema for updating existing entries
export const eventApplicationPatchSchema = Type.Partial(eventApplicationSchema, {
  $id: 'EventApplicationPatch'
})
export type EventApplicationPatch = Static<typeof eventApplicationPatchSchema>
export const eventApplicationPatchValidator = getValidator(eventApplicationPatchSchema, dataValidator)
export const eventApplicationPatchResolver = resolve<EventApplication, HookContext>({})

// Schema for allowed query properties
export const eventApplicationQueryProperties = Type.Pick(eventApplicationSchema, [
  'id',
  'timestamp',
  'owner'
])
export const eventApplicationQuerySchema = Type.Intersect(
  [
    querySyntax(eventApplicationQueryProperties),
    // Add additional query properties here
    Type.Object({}, { additionalProperties: false })
  ],
  { additionalProperties: false }
)
export type EventApplicationQuery = Static<typeof eventApplicationQuerySchema>
export const eventApplicationQueryValidator = getValidator(eventApplicationQuerySchema, queryValidator)
export const eventApplicationQueryResolver = resolve<EventApplicationQuery, HookContext>({
  
})
