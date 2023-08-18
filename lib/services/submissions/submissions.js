"use strict";
// For more information about this file see https://dove.feathersjs.com/guides/cli/service.html
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.submission = void 0;
const schema_1 = require("@feathersjs/schema");
const submissions_schema_1 = require("./submissions.schema");
const submissions_class_1 = require("./submissions.class");
const submissions_shared_1 = require("./submissions.shared");
__exportStar(require("./submissions.class"), exports);
__exportStar(require("./submissions.schema"), exports);
// A configure function that registers the service and its hooks via `app.configure`
const submission = (app) => {
    // Register our service on the Feathers application
    app.use(submissions_shared_1.submissionPath, new submissions_class_1.SubmissionService((0, submissions_class_1.getOptions)(app)), {
        // A list of all methods this service exposes externally
        methods: submissions_shared_1.submissionMethods,
        // You can add additional custom events to be sent to clients here
        events: []
    });
    // Initialize hooks
    app.service(submissions_shared_1.submissionPath).hooks({
        around: {
            all: [
                schema_1.hooks.resolveExternal(submissions_schema_1.submissionExternalResolver),
                schema_1.hooks.resolveResult(submissions_schema_1.submissionResolver)
            ]
        },
        before: {
            all: [
                schema_1.hooks.validateQuery(submissions_schema_1.submissionQueryValidator),
                schema_1.hooks.resolveQuery(submissions_schema_1.submissionQueryResolver)
            ],
            find: [],
            get: [],
            create: [
                schema_1.hooks.validateData(submissions_schema_1.submissionDataValidator),
                schema_1.hooks.resolveData(submissions_schema_1.submissionDataResolver)
            ],
            patch: [
                schema_1.hooks.validateData(submissions_schema_1.submissionPatchValidator),
                schema_1.hooks.resolveData(submissions_schema_1.submissionPatchResolver)
            ],
            remove: []
        },
        after: {
            all: []
        },
        error: {
            all: []
        }
    });
};
exports.submission = submission;
//# sourceMappingURL=submissions.js.map