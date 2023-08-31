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
  isAnon: Type.Boolean(),
  userId: Type.String({
    maxLength: 100
  }),
  isOptional: Type.Boolean(),
  isSelectableByUser: Type.Boolean(),
  extraData: Type.String({
    maxLength: 0
  })
});

const SismoClaimSchema = Type.Object({
  claimType: ClaimTypeSchema,
  groupId: Type.String({
    maxLength: 100
  }),
  groupTimestamp: Type.String({
    maxLength: 100
  }),
  value: Type.Number(),
  isOptional: Type.Boolean(),
  isSelectableByUser: Type.Boolean(),
  extraData: Type.String({
    maxLength: 0
  })
});

export type SismoClaim = Static<typeof SismoClaimSchema>;

// Main data model schema
// TODO: readonly?
// TODO: move requirements to the constants to re-use them on the client side?
export const eventSchema = Type.Object(
  {
    id: Type.String({ format: 'uuid' }),
    title: Type.String({
      maxLength: 100
    }),
    description: Type.String({
      maxLength: 1500
    }),
    public_key: Type.String({
      maxLength: 256
    }),
    keystore: Type.String({}),
    tags: Type.Array(Type.String({
      maxLength: 30
    }), {
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

    note: Type.String({
      maxLength: 1500
    }),
    location: Type.String({
      maxLength: 100
    }),
    capacity: Type.Number({
      minimum: 0
    }),
    // Temporary disable price
    price: Type.Number({
      minimum: 0,
      maximum: 0
    }),

    sismo: Type.Object({
      // Temporary disable Sismo auths
      auths: Type.Array(SismoAuthSchema, {
        maxItems: 0
      }),
      claims: Type.Array(SismoClaimSchema, {
        maxItems: 10
      })
    }),

    registration_start: Type.String({
      format: 'date-time'
    }),
    registration_end: Type.String({
      format: 'date-time'
    }),

    start: Type.String({
      format: 'date-time'
    }),
    end: Type.String({
      format: 'date-time'
    }),

    timestamp: Type.String({ format: 'date-time' }),
    signature: Type.String({ maxLength: 500 }),
    owner: Type.RegEx(/^0x[a-fA-F0-9]{40}$/),
    version: Type.Number({ minimum: 0, maximum: 0 }),

    // Derived fields
    // - Owner's ENS account
    organizer: Type.String({
      maxLength: 100
    }),
    // - IPFS CID
    cid: Type.String(),
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
    'description',
    'public_key',
    'keystore',

    'tags',
    'link',

    'note',
    'location',
    'capacity',
    'price',

    'sismo',

    'registration_start',
    'registration_end',
    'start',
    'end',

    'timestamp',
    'signature',
    'owner',
    'version',
  ],
  {
    $id: 'EventData'
  }
)
export type EventData = Static<typeof eventDataSchema>
export const eventDataValidator = getValidator(eventDataSchema, dataValidator)
export const eventDataResolver = resolve<Event, HookContext>({})

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
