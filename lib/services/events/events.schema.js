"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.eventQueryResolver = exports.eventQueryValidator = exports.eventQuerySchema = exports.eventQueryProperties = exports.eventPatchResolver = exports.eventPatchValidator = exports.eventPatchSchema = exports.eventDataResolver = exports.eventDataValidator = exports.eventDataSchema = exports.eventExternalResolver = exports.eventResolver = exports.eventValidator = exports.eventSchema = exports.EventApplicationContacts = exports.AuthType = exports.ClaimType = void 0;
// // For more information about this file see https://dove.feathersjs.com/guides/cli/service.schemas.html
const schema_1 = require("@feathersjs/schema");
const typebox_1 = require("@feathersjs/typebox");
const validators_1 = require("../../validators");
// Copy enums from the @sismo-core/sismo-connect-server to prevent conflicts in client side
var ClaimType;
(function (ClaimType) {
    ClaimType[ClaimType["GTE"] = 0] = "GTE";
    ClaimType[ClaimType["GT"] = 1] = "GT";
    ClaimType[ClaimType["EQ"] = 2] = "EQ";
    ClaimType[ClaimType["LT"] = 3] = "LT";
    ClaimType[ClaimType["LTE"] = 4] = "LTE";
})(ClaimType || (exports.ClaimType = ClaimType = {}));
var AuthType;
(function (AuthType) {
    AuthType[AuthType["VAULT"] = 0] = "VAULT";
    AuthType[AuthType["GITHUB"] = 1] = "GITHUB";
    AuthType[AuthType["TWITTER"] = 2] = "TWITTER";
    AuthType[AuthType["EVM_ACCOUNT"] = 3] = "EVM_ACCOUNT";
    AuthType[AuthType["TELEGRAM"] = 4] = "TELEGRAM";
})(AuthType || (exports.AuthType = AuthType = {}));
const AuthTypeSchema = typebox_1.Type.Enum(AuthType);
const ClaimTypeSchema = typebox_1.Type.Enum(ClaimType);
const SismoAuthSchema = typebox_1.Type.Object({
    authType: AuthTypeSchema,
    isAnon: typebox_1.Type.Boolean(),
    userId: typebox_1.Type.String({
        maxLength: 100
    }),
    isOptional: typebox_1.Type.Boolean(),
    isSelectableByUser: typebox_1.Type.Boolean(),
    extraData: typebox_1.Type.String({
        maxLength: 0
    })
});
const SismoClaimSchema = typebox_1.Type.Object({
    claimType: ClaimTypeSchema,
    groupId: typebox_1.Type.String({
        maxLength: 100
    }),
    groupTimestamp: typebox_1.Type.String({
        maxLength: 100
    }),
    value: typebox_1.Type.Number(),
    isOptional: typebox_1.Type.Boolean(),
    isSelectableByUser: typebox_1.Type.Boolean(),
    extraData: typebox_1.Type.String({
        maxLength: 0
    })
});
var EventApplicationContacts;
(function (EventApplicationContacts) {
    EventApplicationContacts["EMAIL"] = "Email";
    EventApplicationContacts["PHONE"] = "Phone";
    EventApplicationContacts["NAME"] = "Name";
    EventApplicationContacts["TWITTER"] = "Twitter";
    EventApplicationContacts["TELEGRAM"] = "Telegram";
    EventApplicationContacts["DISCORD"] = "Discord";
    EventApplicationContacts["FACEBOOK"] = "Facebook";
    EventApplicationContacts["INSTAGRAM"] = "Instagram";
})(EventApplicationContacts || (exports.EventApplicationContacts = EventApplicationContacts = {}));
// Main data model schema
// TODO: readonly?
// TODO: move requirements to the constants to re-use them on the client side?
exports.eventSchema = typebox_1.Type.Object({
    id: typebox_1.Type.String({ format: 'uuid' }),
    title: typebox_1.Type.String({
        maxLength: 100
    }),
    description: typebox_1.Type.String({
        maxLength: 2500
    }),
    // Used for image regeneration
    seed: typebox_1.Type.Number({
        minimum: 0,
        maximum: 10000000
    }),
    application_template: typebox_1.Type.String({
        maxLength: 1500
    }),
    contacts: typebox_1.Type.Array(typebox_1.Type.Enum(EventApplicationContacts), {
        uniqueItems: true
    }),
    public_key: typebox_1.Type.String({
        maxLength: 256
    }),
    signature_public_key: typebox_1.Type.String({
        maxLength: 256
    }),
    keystore: typebox_1.Type.String({}),
    tags: typebox_1.Type.Array(typebox_1.Type.String({
        maxLength: 30
    }), {
        maxItems: 10,
        minItems: 2,
        uniqueItems: true
    }),
    link: typebox_1.Type.String({
        maxLength: 100
    }),
    note: typebox_1.Type.String({
        maxLength: 1500
    }),
    location: typebox_1.Type.String({
        maxLength: 100
    }),
    capacity: typebox_1.Type.Number({
        minimum: 0
    }),
    // Temporary disable price
    price: typebox_1.Type.Number({
        minimum: 0,
        maximum: 0
    }),
    sismo: typebox_1.Type.Object({
        // Temporary disable Sismo auths
        auths: typebox_1.Type.Array(SismoAuthSchema, {
            maxItems: 0
        }),
        claims: typebox_1.Type.Array(SismoClaimSchema, {
            maxItems: 10
        })
    }),
    registration_start: typebox_1.Type.String({
        format: 'date-time'
    }),
    registration_end: typebox_1.Type.String({
        format: 'date-time'
    }),
    start: typebox_1.Type.String({
        format: 'date-time'
    }),
    end: typebox_1.Type.String({
        format: 'date-time'
    }),
    public: typebox_1.Type.Boolean(),
    paused: typebox_1.Type.Boolean(),
    applications: typebox_1.Type.Number(),
    timestamp: typebox_1.Type.String({ format: 'date-time' }),
    signature: typebox_1.Type.String({ maxLength: 500 }),
    owner: typebox_1.Type.RegEx(/^0x[a-fA-F0-9]{40}$/),
    version: typebox_1.Type.Number({ minimum: 0, maximum: 0 }),
    // Derived fields
    // - Event's image
    image: typebox_1.Type.Object({
        src: typebox_1.Type.String({
            maxLength: 100,
            format: 'uri'
        }),
        prompt: typebox_1.Type.String({
            maxLength: 1000
        }),
        updatedAt: typebox_1.Type.String({
            format: 'date-time'
        })
    }),
    // - IPFS CID
    cid: typebox_1.Type.String(),
    // - Banned flag, can be only called by admin
    banned: typebox_1.Type.Boolean(),
    // - Rating (used for ranking)
    rating: typebox_1.Type.Number({
        minimum: 0,
        maximum: 10,
    }),
}, { $id: 'Event', additionalProperties: false });
exports.eventValidator = (0, typebox_1.getValidator)(exports.eventSchema, validators_1.dataValidator);
exports.eventResolver = (0, schema_1.resolve)({
    applications: (0, schema_1.virtual)(async (message, context) => {
        const { total } = await context.app.service('event-applications').find({
            query: {
                event_id: message.id,
                $limit: 0,
            },
        });
        return total;
    }),
});
exports.eventExternalResolver = (0, schema_1.resolve)({});
// Schema for creating new entries
exports.eventDataSchema = typebox_1.Type.Pick(exports.eventSchema, [
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
], {
    $id: 'EventData'
});
exports.eventDataValidator = (0, typebox_1.getValidator)(exports.eventDataSchema, validators_1.dataValidator);
exports.eventDataResolver = (0, schema_1.resolve)({});
// Schema for updating existing entries
// Signature is always required
exports.eventPatchSchema = typebox_1.Type.Intersect([
    typebox_1.Type.Partial(typebox_1.Type.Pick(exports.eventSchema, [
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
    ])),
    typebox_1.Type.Pick(exports.eventSchema, [
        'signature',
    ])
], {
    $id: 'EventPatch'
});
exports.eventPatchValidator = (0, typebox_1.getValidator)(exports.eventPatchSchema, validators_1.dataValidator);
exports.eventPatchResolver = (0, schema_1.resolve)({});
// Schema for allowed query properties
exports.eventQueryProperties = typebox_1.Type.Pick(exports.eventSchema, [
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
]);
exports.eventQuerySchema = typebox_1.Type.Intersect([
    (0, typebox_1.querySyntax)(exports.eventQueryProperties),
    // Add additional query properties here
    typebox_1.Type.Object({}, { additionalProperties: false })
], { additionalProperties: false });
exports.eventQueryValidator = (0, typebox_1.getValidator)(exports.eventQuerySchema, validators_1.queryValidator);
exports.eventQueryResolver = (0, schema_1.resolve)({});
// export const eventUpdateImageProperties = Type.Object({
//   id: Type.String({ format: 'uuid' }),
//   signature: Type.String({ maxLength: 500 }),
// }, {
//   $id: 'EventUpdateImageProperties'
// });
// export type EventUpdateImage = Static<typeof eventUpdateImageProperties>
// export const eventUpdateImageValidator = getValidator(eventUpdateImageProperties, dataValidator)
// export const eventUpdateImageResolver = resolve<EventUpdateImage, HookContext>({})
//# sourceMappingURL=events.schema.js.map