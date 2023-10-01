// // For more information about this file see https://dove.feathersjs.com/guides/cli/service.schemas.html
import { resolve, virtual } from '@feathersjs/schema'
import { Type, getValidator, querySyntax } from '@feathersjs/typebox'
import type { Static } from '@feathersjs/typebox'

import type { HookContext } from '../../declarations'
import { dataValidator, queryValidator } from '../../validators'

// Copy enums from the @sismo-core/sismo-connect-server to prevent conflicts in client side
export enum ClaimType {
  GTE = 0,
  GT = 1,
  EQ = 2,
  LT = 3,
  LTE = 4
}
export enum AuthType {
  VAULT = 0,
  GITHUB = 1,
  TWITTER = 2,
  EVM_ACCOUNT = 3,
  TELEGRAM = 4
}


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

export enum EventApplicationContacts {
  EMAIL = 'Email',
  PHONE = 'Phone',
  NAME = 'Name',
  TWITTER = 'Twitter',
  TELEGRAM = 'Telegram',
  DISCORD = 'Discord',
  FACEBOOK = 'Facebook',
  INSTAGRAM = 'Instagram',
}

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
      maxLength: 2500
    }),
    // Used for image regeneration
    seed: Type.Number({
      minimum: 0,
      maximum: 10_000_000
    }),
    application_template: Type.String({
      maxLength: 1500
    }),
    contacts: Type.Array(
      Type.Enum(EventApplicationContacts),
      {
        uniqueItems: true
      }
    ),
    public_key: Type.String({
      maxLength: 256
    }),
    signature_public_key: Type.String({
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
    link: Type.String({
      maxLength: 100
    }),

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
        maxItems: 100
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

    public: Type.Boolean(),
    paused: Type.Boolean(),

    applications: Type.Number(),

    timestamp: Type.String({ format: 'date-time' }),
    signature: Type.String({ maxLength: 500 }),
    owner: Type.RegEx(/^0x[a-fA-F0-9]{40}$/),
    version: Type.Number({ minimum: 0, maximum: 0 }),

    // Derived fields
    // - Event's image
    image: Type.Object({
      src: Type.String({
        maxLength: 100,
        format: 'uri'
      }),
      prompt: Type.String({
        maxLength: 1000
      }),
      updatedAt: Type.String({
        format: 'date-time'
      })
    }),

    // - IPFS CID
    cid: Type.String(),
    // - Banned flag, can be only called by admin
    banned: Type.Boolean(),
    // - Rating (used for ranking)
    rating: Type.Number({
      minimum: 0,
      maximum: 10,
    }),
  },
  { $id: 'Event', additionalProperties: false }
)
export type Event = Static<typeof eventSchema>
export const eventValidator = getValidator(eventSchema, dataValidator)
export const eventResolver = resolve<Event, HookContext>({
  applications: virtual(async (message, context) => {
    const {
      total
    } = await context.app.service('event-applications').find({
      query: {
        event_id: message.id,
        $limit: 0,
      },
    });

    return total;
  }),
})

export const eventExternalResolver = resolve<Event, HookContext>({})

// Schema for creating new entries
export const eventDataSchema = Type.Pick(
  eventSchema,
  [
    'id',
    'title',
    'description',
    'seed',

    'application_template',
    'contacts',

    'public_key',
    'signature_public_key',
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
    'paused',
    'public',

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
// Signature is always required
export const eventPatchSchema = Type.Intersect(
  [
    Type.Partial(
      Type.Pick(
        eventSchema,
        [
          'title',
          'description',
          'seed',
          'application_template',
          'contacts',
        
          'tags',
          'link',
        
          'note',
          'location',
          'capacity',
        
          'public',
          'paused',
        
          'start',
          'end',
        ]
      ),
    ),
    Type.Pick(
      eventSchema,
      [
        'signature',
      ]
    )
  ],
  {
    $id: 'EventPatch'
  }
);
export type EventPatch = Static<typeof eventPatchSchema>
export const eventPatchValidator = getValidator(eventPatchSchema, dataValidator)
export const eventPatchResolver = resolve<EventPatch, HookContext>({})

// Schema for allowed query properties
export const eventQueryProperties = Type.Pick(eventSchema, [
  'id',
  'title',
  'description',
  'public',
  'banned',
  'rating',
  'tags',
  'location',
  'timestamp',
  'capacity',
  'registration_start',
  'registration_end',
  'start',
  'end',
  'owner'
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


// export const eventUpdateImageProperties = Type.Object({
//   id: Type.String({ format: 'uuid' }),
//   signature: Type.String({ maxLength: 500 }),
// }, {
//   $id: 'EventUpdateImageProperties'
// });

// export type EventUpdateImage = Static<typeof eventUpdateImageProperties>
// export const eventUpdateImageValidator = getValidator(eventUpdateImageProperties, dataValidator)
// export const eventUpdateImageResolver = resolve<EventUpdateImage, HookContext>({})