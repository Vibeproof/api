"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.eventApplicationQueryResolver = exports.eventApplicationQueryValidator = exports.eventApplicationQuerySchema = exports.eventApplicationQueryProperties = exports.eventApplicationPatchResolver = exports.eventApplicationPatchValidator = exports.eventApplicationPatchSchema = exports.eventApplicationDataResolver = exports.eventApplicationDataValidator = exports.eventApplicationDataSchema = exports.eventApplicationExternalResolver = exports.eventApplicationResolver = exports.eventApplicationValidator = exports.eventApplicationSchema = void 0;
// // For more information about this file see https://dove.feathersjs.com/guides/cli/service.schemas.html
const schema_1 = require("@feathersjs/schema");
const typebox_1 = require("@feathersjs/typebox");
const validators_1 = require("../../validators");
// Main data model schema
exports.eventApplicationSchema = typebox_1.Type.Object({
    id: typebox_1.Type.String({ format: 'uuid' }),
    public_key: typebox_1.Type.String({
        maxLength: 256
    }),
    keystore: typebox_1.Type.String({}),
    event_id: typebox_1.Type.String({
        format: 'uuid',
    }),
    message: typebox_1.Type.String({
        maxLength: 1500
    }),
    proof: typebox_1.Type.String({}),
    timestamp: typebox_1.Type.String({ format: 'date-time' }),
    signature: typebox_1.Type.String({ maxLength: 500 }),
    owner: typebox_1.Type.RegEx(/^0x[a-fA-F0-9]{40}$/),
    version: typebox_1.Type.Number({ minimum: 0, maximum: 0 }),
    // Derived fields
    // - Owner's ENS account
    organizer: typebox_1.Type.String({
        maxLength: 100
    }),
    // - IPFS CID
    cid: typebox_1.Type.String(),
}, { $id: 'EventApplication', additionalProperties: false });
exports.eventApplicationValidator = (0, typebox_1.getValidator)(exports.eventApplicationSchema, validators_1.dataValidator);
exports.eventApplicationResolver = (0, schema_1.resolve)({});
exports.eventApplicationExternalResolver = (0, schema_1.resolve)({});
// Schema for creating new entries
exports.eventApplicationDataSchema = typebox_1.Type.Pick(exports.eventApplicationSchema, [
    'id',
    'public_key',
    'keystore',
    'event_id',
    'message',
    'proof',
    'timestamp',
    'signature',
    'owner',
    'version',
], {
    $id: 'EventApplicationData'
});
exports.eventApplicationDataValidator = (0, typebox_1.getValidator)(exports.eventApplicationDataSchema, validators_1.dataValidator);
exports.eventApplicationDataResolver = (0, schema_1.resolve)({});
// Schema for updating existing entries
exports.eventApplicationPatchSchema = typebox_1.Type.Partial(exports.eventApplicationSchema, {
    $id: 'EventApplicationPatch'
});
exports.eventApplicationPatchValidator = (0, typebox_1.getValidator)(exports.eventApplicationPatchSchema, validators_1.dataValidator);
exports.eventApplicationPatchResolver = (0, schema_1.resolve)({});
// Schema for allowed query properties
exports.eventApplicationQueryProperties = typebox_1.Type.Pick(exports.eventApplicationSchema, [
    'id',
    'timestamp',
    'owner'
]);
exports.eventApplicationQuerySchema = typebox_1.Type.Intersect([
    (0, typebox_1.querySyntax)(exports.eventApplicationQueryProperties),
    // Add additional query properties here
    typebox_1.Type.Object({}, { additionalProperties: false })
], { additionalProperties: false });
exports.eventApplicationQueryValidator = (0, typebox_1.getValidator)(exports.eventApplicationQuerySchema, validators_1.queryValidator);
exports.eventApplicationQueryResolver = (0, schema_1.resolve)({});
//# sourceMappingURL=event-applications.schema.js.map