"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.eventQueryResolver = exports.eventQueryValidator = exports.eventQuerySchema = exports.eventQueryProperties = exports.eventPatchResolver = exports.eventPatchValidator = exports.eventPatchSchema = exports.eventDataResolver = exports.eventDataValidator = exports.eventDataSchema = exports.eventExternalResolver = exports.eventResolver = exports.eventValidator = exports.eventSchema = void 0;
// // For more information about this file see https://dove.feathersjs.com/guides/cli/service.schemas.html
const schema_1 = require("@feathersjs/schema");
const typebox_1 = require("@feathersjs/typebox");
const validators_1 = require("../../validators");
const sismo_connect_server_1 = require("@sismo-core/sismo-connect-server");
const AuthTypeSchema = typebox_1.Type.Enum(sismo_connect_server_1.AuthType);
const ClaimTypeSchema = typebox_1.Type.Enum(sismo_connect_server_1.ClaimType);
const SismoAuthSchema = typebox_1.Type.Object({
    authType: AuthTypeSchema,
    isAnon: typebox_1.Type.Boolean(),
});
const SismoClaimSchema = typebox_1.Type.Object({
    claimType: ClaimTypeSchema,
    groupId: typebox_1.Type.String(),
    value: typebox_1.Type.Number(),
});
// Main data model schema
// TODO: readonly?
exports.eventSchema = typebox_1.Type.Object({
    id: typebox_1.Type.String({ format: 'uuid' }),
    title: typebox_1.Type.String({
        maxLength: 100
    }),
    organizer: typebox_1.Type.String({
        maxLength: 100
    }),
    description: typebox_1.Type.String({
        maxLength: 2000
    }),
    tags: typebox_1.Type.Array(typebox_1.Type.String(), {
        maxItems: 10,
        minItems: 2,
        uniqueItems: true
    }),
    link: typebox_1.Type.Optional(typebox_1.Type.String({
        format: 'uri',
        maxLength: 100
    })),
    note: typebox_1.Type.Optional(typebox_1.Type.String()),
    note_encrypted: typebox_1.Type.Optional(typebox_1.Type.Boolean()),
    location: typebox_1.Type.Optional(typebox_1.Type.String()),
    location_encrypted: typebox_1.Type.Optional(typebox_1.Type.Boolean()),
    registration_start: typebox_1.Type.String({
        format: 'date-time'
    }),
    registration_end: typebox_1.Type.String({
        format: 'date-time'
    }),
    capacity: typebox_1.Type.Number(),
    start: typebox_1.Type.String({ format: 'date-time' }),
    end: typebox_1.Type.String({ format: 'date-time' }),
    price: typebox_1.Type.Optional(typebox_1.Type.Number()),
    auths: typebox_1.Type.Array(SismoAuthSchema),
    claims: typebox_1.Type.Array(SismoClaimSchema),
    timestamp: typebox_1.Type.String({ format: 'date-time' }),
    signature: typebox_1.Type.String(),
    owner: typebox_1.Type.RegEx(/^0x[a-fA-F0-9]{40}$/),
    // createdAt: Type.Number(),
}, { $id: 'Event', additionalProperties: false });
exports.eventValidator = (0, typebox_1.getValidator)(exports.eventSchema, validators_1.dataValidator);
exports.eventResolver = (0, schema_1.resolve)({});
exports.eventExternalResolver = (0, schema_1.resolve)({});
// Schema for creating new entries
exports.eventDataSchema = typebox_1.Type.Pick(exports.eventSchema, [
    'id',
    'title',
    'organizer',
    'description',
    'tags',
    'link',
    'note',
    'note_encrypted',
    'location',
    'location_encrypted',
    'registration_start',
    'registration_end',
    'capacity',
    'start',
    'end',
    'price',
    'auths',
    'claims',
    'timestamp',
    'signature',
    'owner',
], {
    $id: 'EventData'
});
exports.eventDataValidator = (0, typebox_1.getValidator)(exports.eventDataSchema, validators_1.dataValidator);
exports.eventDataResolver = (0, schema_1.resolve)({
// createdAt: async () => Date.now()
});
// Schema for updating existing entries
exports.eventPatchSchema = typebox_1.Type.Partial(exports.eventSchema, {
    $id: 'EventPatch'
});
exports.eventPatchValidator = (0, typebox_1.getValidator)(exports.eventPatchSchema, validators_1.dataValidator);
exports.eventPatchResolver = (0, schema_1.resolve)({});
// Schema for allowed query properties
exports.eventQueryProperties = typebox_1.Type.Pick(exports.eventSchema, [
    'id',
    'title',
    'description',
    'organizer',
    'tags',
    'location',
    'registration_start',
    'registration_end',
    'start',
    'end'
]);
exports.eventQuerySchema = typebox_1.Type.Intersect([
    (0, typebox_1.querySyntax)(exports.eventQueryProperties),
    // Add additional query properties here
    typebox_1.Type.Object({}, { additionalProperties: false })
], { additionalProperties: false });
exports.eventQueryValidator = (0, typebox_1.getValidator)(exports.eventQuerySchema, validators_1.queryValidator);
exports.eventQueryResolver = (0, schema_1.resolve)({});
//# sourceMappingURL=events.schema.js.map