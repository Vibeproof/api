"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.eventApplicationResponseQueryResolver = exports.eventApplicationResponseQueryValidator = exports.eventApplicationResponseQuerySchema = exports.eventApplicationResponseQueryProperties = exports.eventApplicationResponsePatchResolver = exports.eventApplicationResponsePatchValidator = exports.eventApplicationResponsePatchSchema = exports.eventApplicationResponseDataResolver = exports.eventApplicationResponseDataValidator = exports.eventApplicationResponseDataSchema = exports.eventApplicationResponseExternalResolver = exports.eventApplicationResponseResolver = exports.eventApplicationResponseValidator = exports.eventApplicationResponseSchema = exports.ResponseType = void 0;
// // For more information about this file see https://dove.feathersjs.com/guides/cli/service.schemas.html
const schema_1 = require("@feathersjs/schema");
const typebox_1 = require("@feathersjs/typebox");
const validators_1 = require("../../validators");
var ResponseType;
(function (ResponseType) {
    ResponseType[ResponseType["APPROVED"] = 0] = "APPROVED";
    ResponseType[ResponseType["REJECTED"] = 1] = "REJECTED";
})(ResponseType || (exports.ResponseType = ResponseType = {}));
// Main data model schema
exports.eventApplicationResponseSchema = typebox_1.Type.Object({
    id: typebox_1.Type.String({ format: 'uuid' }),
    type: typebox_1.Type.Enum(ResponseType),
    event_application_id: typebox_1.Type.String({
        format: 'uuid',
    }),
    shared_key: typebox_1.Type.String({}),
    timestamp: typebox_1.Type.String({ format: 'date-time' }),
    signature: typebox_1.Type.String({ maxLength: 500 }),
    version: typebox_1.Type.Number({ minimum: 0, maximum: 0 }),
    // Derived fields
    // - IPFS CID
    cid: typebox_1.Type.String(),
}, { $id: 'EventApplicationResponse', additionalProperties: false });
exports.eventApplicationResponseValidator = (0, typebox_1.getValidator)(exports.eventApplicationResponseSchema, validators_1.dataValidator);
exports.eventApplicationResponseResolver = (0, schema_1.resolve)({
// event_application: virtual(async (message, context) => {
//   return context.app.service('event-applications').get(message.event_application_id)
// }),
});
exports.eventApplicationResponseExternalResolver = (0, schema_1.resolve)({});
// Schema for creating new entries
exports.eventApplicationResponseDataSchema = typebox_1.Type.Pick(exports.eventApplicationResponseSchema, [
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
});
exports.eventApplicationResponseDataValidator = (0, typebox_1.getValidator)(exports.eventApplicationResponseDataSchema, validators_1.dataValidator);
exports.eventApplicationResponseDataResolver = (0, schema_1.resolve)({});
// Schema for updating existing entries
exports.eventApplicationResponsePatchSchema = typebox_1.Type.Partial(exports.eventApplicationResponseSchema, {
    $id: 'EventApplicationResponsePatch'
});
exports.eventApplicationResponsePatchValidator = (0, typebox_1.getValidator)(exports.eventApplicationResponsePatchSchema, validators_1.dataValidator);
exports.eventApplicationResponsePatchResolver = (0, schema_1.resolve)({});
// Schema for allowed query properties
exports.eventApplicationResponseQueryProperties = typebox_1.Type.Pick(exports.eventApplicationResponseSchema, [
    'id',
    'event_application_id',
    'timestamp',
    'type',
]);
exports.eventApplicationResponseQuerySchema = typebox_1.Type.Intersect([
    (0, typebox_1.querySyntax)(exports.eventApplicationResponseQueryProperties),
    // Add additional query properties here
    typebox_1.Type.Object({}, { additionalProperties: false })
], { additionalProperties: false });
exports.eventApplicationResponseQueryValidator = (0, typebox_1.getValidator)(exports.eventApplicationResponseQuerySchema, validators_1.queryValidator);
exports.eventApplicationResponseQueryResolver = (0, schema_1.resolve)({});
//# sourceMappingURL=event-application-responses.schema.js.map