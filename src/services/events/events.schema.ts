// // For more information about this file see https://dove.feathersjs.com/guides/cli/service.schemas.html
import { resolve } from '@feathersjs/schema'
import { Type, getValidator, querySyntax } from '@feathersjs/typebox'
import type { Static } from '@feathersjs/typebox'

import type { HookContext } from '../../declarations'
import { dataValidator, queryValidator } from '../../validators'
import { AuthType, ClaimType } from '@sismo-core/sismo-connect-server'

const AuthTypeSchema = Type.Enum(AuthType)
const ClaimTypeSchema = Type.Enum(ClaimType)

const SismoAuthSchema = Type.Object({
  authType: AuthTypeSchema,
  isAnon: Type.Boolean()
})

const SismoClaimSchema = Type.Object({
  claimType: ClaimTypeSchema,
  groupId: Type.String(),
  value: Type.Number()
})

// Main data model schema
// TODO: readonly?
export const eventSchema = Type.Object(
  {
    id: Type.String({ format: 'uuid' }),
    title: Type.String({
      maxLength: 100
    }),
    organizer: Type.String({
      maxLength: 100
    }),
    description: Type.String({
      maxLength: 2000
    }),
    tags: Type.Array(Type.String(), {
      maxItems: 10,
      minItems: 2,
      uniqueItems: true
    }),
    link: Type.Optional(
      Type.String({
        format: 'uri',
        maxLength: 100
      })
    ),
    capacity: Type.Number({
      minimum: 0
    }),

    note: Type.String(),
    location: Type.String(),

    registration_start: Type.String({
      format: 'date-time'
    }),
    registration_end: Type.String({
      format: 'date-time'
    }),

    start: Type.String({ format: 'date-time' }),
    end: Type.String({ format: 'date-time' }),
    price: Type.Number({
      minimum: 0
    }),

    auths: Type.Array(SismoAuthSchema, {
      uniqueItems: true,
      maxItems: 5
    }),
    claims: Type.Array(SismoClaimSchema, {
      uniqueItems: true,
      maxItems: 10
    }),

    sismo: Type.Object({
      auths: Type.Array(SismoAuthSchema, {
        maxItems: 5
      }),
      claims: Type.Array(SismoClaimSchema, {
        maxItems: 10
      })
    }),

    timestamp: Type.String({ format: 'date-time' }),
    signature: Type.String(),
    owner: Type.RegEx(/^0x[a-fA-F0-9]{40}$/)
  },
  { $id: 'Event', additionalProperties: false }
)
export type Event = Static<typeof eventSchema>
export const eventValidator = getValidator(eventSchema, dataValidator)
export const eventResolver = resolve<Event, HookContext>({})

export const eventExternalResolver = resolve<Event, HookContext>({})

// Schema for creating new entries
export const eventDataSchema = Type.Pick(
  eventSchema,
  [
    'id',
    'title',
    'organizer',
    'description',
    'tags',
    'link',
    'note',
    'location',
    'registration_start',
    'registration_end',
    'capacity',
    'start',
    'end',
    'price',
    'sismo',
    'timestamp',
    'signature',
    'owner'
  ],
  {
    $id: 'EventData'
  }
)
export type EventData = Static<typeof eventDataSchema>
export const eventDataValidator = getValidator(eventDataSchema, dataValidator)
export const eventDataResolver = resolve<Event, HookContext>({
  // createdAt: async () => Date.now()
})

// Schema for updating existing entries
export const eventPatchSchema = Type.Partial(eventSchema, {
  $id: 'EventPatch'
})
export type EventPatch = Static<typeof eventPatchSchema>
export const eventPatchValidator = getValidator(eventPatchSchema, dataValidator)
export const eventPatchResolver = resolve<Event, HookContext>({})

// Schema for allowed query properties
export const eventQueryProperties = Type.Pick(eventSchema, [
  'id',
  'title',
  'description',
  'organizer',
  'tags',
  'location',
  // 'registration_start',
  // 'registration_end',
  // 'start',
  // 'end'
])
export const eventQuerySchema = Type.Intersect(
  [
    querySyntax(eventQueryProperties),
    // Add additional query properties here
    Type.Object({}, { additionalProperties: false })
  ],
  { additionalProperties: false }
)
export type EventQuery = Static<typeof eventQuerySchema>
export const eventQueryValidator = getValidator(eventQuerySchema, queryValidator)
export const eventQueryResolver = resolve<EventQuery, HookContext>({})
