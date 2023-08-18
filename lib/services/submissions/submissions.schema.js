"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.submissionQueryResolver = exports.submissionQueryValidator = exports.submissionQuerySchema = exports.submissionQueryProperties = exports.submissionPatchResolver = exports.submissionPatchValidator = exports.submissionPatchSchema = exports.submissionDataResolver = exports.submissionDataValidator = exports.submissionDataSchema = exports.submissionExternalResolver = exports.submissionResolver = exports.submissionValidator = exports.submissionSchema = void 0;
// // For more information about this file see https://dove.feathersjs.com/guides/cli/service.schemas.html
const schema_1 = require("@feathersjs/schema");
const typebox_1 = require("@feathersjs/typebox");
const validators_1 = require("../../validators");
// Main data model schema
exports.submissionSchema = typebox_1.Type.Object({
    id: typebox_1.Type.Number(),
    text: typebox_1.Type.String()
}, { $id: 'Submission', additionalProperties: false });
exports.submissionValidator = (0, typebox_1.getValidator)(exports.submissionSchema, validators_1.dataValidator);
exports.submissionResolver = (0, schema_1.resolve)({});
exports.submissionExternalResolver = (0, schema_1.resolve)({});
// Schema for creating new entries
exports.submissionDataSchema = typebox_1.Type.Pick(exports.submissionSchema, ['text'], {
    $id: 'SubmissionData'
});
exports.submissionDataValidator = (0, typebox_1.getValidator)(exports.submissionDataSchema, validators_1.dataValidator);
exports.submissionDataResolver = (0, schema_1.resolve)({});
// Schema for updating existing entries
exports.submissionPatchSchema = typebox_1.Type.Partial(exports.submissionSchema, {
    $id: 'SubmissionPatch'
});
exports.submissionPatchValidator = (0, typebox_1.getValidator)(exports.submissionPatchSchema, validators_1.dataValidator);
exports.submissionPatchResolver = (0, schema_1.resolve)({});
// Schema for allowed query properties
exports.submissionQueryProperties = typebox_1.Type.Pick(exports.submissionSchema, ['id', 'text']);
exports.submissionQuerySchema = typebox_1.Type.Intersect([
    (0, typebox_1.querySyntax)(exports.submissionQueryProperties),
    // Add additional query properties here
    typebox_1.Type.Object({}, { additionalProperties: false })
], { additionalProperties: false });
exports.submissionQueryValidator = (0, typebox_1.getValidator)(exports.submissionQuerySchema, validators_1.queryValidator);
exports.submissionQueryResolver = (0, schema_1.resolve)({});
//# sourceMappingURL=submissions.schema.js.map