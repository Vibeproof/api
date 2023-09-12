"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.eventApplicationQueryResolver = exports.eventApplicationQueryValidator = exports.eventApplicationQuerySchema = exports.eventApplicationQueryProperties = exports.eventApplicationPatchResolver = exports.eventApplicationPatchValidator = exports.eventApplicationPatchSchema = exports.eventApplicationDataResolver = exports.eventApplicationDataValidator = exports.eventApplicationDataSchema = exports.eventApplicationExternalResolver = exports.eventApplicationResolver = exports.eventApplicationValidator = exports.eventApplicationSchema = void 0;
// // For more information about this file see https://dove.feathersjs.com/guides/cli/service.schemas.html
const schema_1 = require("@feathersjs/schema");
const typebox_1 = require("@feathersjs/typebox");
const validators_1 = require("../../validators");
const events_schema_1 = require("../events/events.schema");
const event_application_responses_schema_1 = require("../event-application-responses/event-application-responses.schema");
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
    contacts: typebox_1.Type.String({
        maxLength: 1500
    }),
    vault_id: typebox_1.Type.String({}),
    proof: typebox_1.Type.String({}),
    shared_key: typebox_1.Type.String({}),
    timestamp: typebox_1.Type.String({ format: 'date-time' }),
    signature: typebox_1.Type.String({ maxLength: 500 }),
    owner: typebox_1.Type.RegEx(/^0x[a-fA-F0-9]{40}$/),
    version: typebox_1.Type.Number({ minimum: 0, maximum: 0 }),
    event: typebox_1.Type.Ref(events_schema_1.eventSchema),
    response: typebox_1.Type.Ref(event_application_responses_schema_1.eventApplicationResponseSchema),
    // Derived fields
    // - Owner's ENS account
    organizer: typebox_1.Type.String({
        maxLength: 100
    }),
    // - IPFS CID
    cid: typebox_1.Type.String(),
}, { $id: 'EventApplication', additionalProperties: false });
exports.eventApplicationValidator = (0, typebox_1.getValidator)(exports.eventApplicationSchema, validators_1.dataValidator);
// @ts-ignore
exports.eventApplicationResolver = (0, schema_1.resolve)({
    event: (0, schema_1.virtual)(async (message, context) => {
        return context.app.service('events').get(message.event_id);
    }),
    response: (0, schema_1.virtual)(async (message, context) => {
        const r = await context.app.service('event-application-responses').find({
            query: {
                event_application_id: message.id
            }
        });
        if (r.total === 0) {
            return null;
        }
        else {
            return r.data[0];
        }
    }),
});
exports.eventApplicationExternalResolver = (0, schema_1.resolve)({});
// Schema for creating new entries
exports.eventApplicationDataSchema = typebox_1.Type.Pick(exports.eventApplicationSchema, [
    'id',
    'public_key',
    'keystore',
    'event_id',
    'message',
    'contacts',
    'proof',
    'shared_key',
    'timestamp',
    'signature',
    'owner',
    'version',
], {
    $id: 'EventApplicationData',
    additionalProperties: false
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
    'owner',
    'event_id',
]);
exports.eventApplicationQuerySchema = typebox_1.Type.Intersect([
    (0, typebox_1.querySyntax)(exports.eventApplicationQueryProperties),
    // Add additional query properties here
    typebox_1.Type.Object({}, { additionalProperties: false })
], { additionalProperties: true });
exports.eventApplicationQueryValidator = (0, typebox_1.getValidator)(exports.eventApplicationQuerySchema, validators_1.queryValidator);
exports.eventApplicationQueryResolver = (0, schema_1.resolve)({});
//# sourceMappingURL=event-applications.schema.js.map