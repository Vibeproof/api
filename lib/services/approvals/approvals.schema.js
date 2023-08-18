"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.approvalQueryResolver = exports.approvalQueryValidator = exports.approvalQuerySchema = exports.approvalQueryProperties = exports.approvalPatchResolver = exports.approvalPatchValidator = exports.approvalPatchSchema = exports.approvalDataResolver = exports.approvalDataValidator = exports.approvalDataSchema = exports.approvalExternalResolver = exports.approvalResolver = exports.approvalValidator = exports.approvalSchema = void 0;
// // For more information about this file see https://dove.feathersjs.com/guides/cli/service.schemas.html
const schema_1 = require("@feathersjs/schema");
const typebox_1 = require("@feathersjs/typebox");
const validators_1 = require("../../validators");
// Main data model schema
exports.approvalSchema = typebox_1.Type.Object({
    id: typebox_1.Type.Number(),
    text: typebox_1.Type.String()
}, { $id: 'Approval', additionalProperties: false });
exports.approvalValidator = (0, typebox_1.getValidator)(exports.approvalSchema, validators_1.dataValidator);
exports.approvalResolver = (0, schema_1.resolve)({});
exports.approvalExternalResolver = (0, schema_1.resolve)({});
// Schema for creating new entries
exports.approvalDataSchema = typebox_1.Type.Pick(exports.approvalSchema, ['text'], {
    $id: 'ApprovalData'
});
exports.approvalDataValidator = (0, typebox_1.getValidator)(exports.approvalDataSchema, validators_1.dataValidator);
exports.approvalDataResolver = (0, schema_1.resolve)({});
// Schema for updating existing entries
exports.approvalPatchSchema = typebox_1.Type.Partial(exports.approvalSchema, {
    $id: 'ApprovalPatch'
});
exports.approvalPatchValidator = (0, typebox_1.getValidator)(exports.approvalPatchSchema, validators_1.dataValidator);
exports.approvalPatchResolver = (0, schema_1.resolve)({});
// Schema for allowed query properties
exports.approvalQueryProperties = typebox_1.Type.Pick(exports.approvalSchema, ['id', 'text']);
exports.approvalQuerySchema = typebox_1.Type.Intersect([
    (0, typebox_1.querySyntax)(exports.approvalQueryProperties),
    // Add additional query properties here
    typebox_1.Type.Object({}, { additionalProperties: false })
], { additionalProperties: false });
exports.approvalQueryValidator = (0, typebox_1.getValidator)(exports.approvalQuerySchema, validators_1.queryValidator);
exports.approvalQueryResolver = (0, schema_1.resolve)({});
//# sourceMappingURL=approvals.schema.js.map