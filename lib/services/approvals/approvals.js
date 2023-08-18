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
exports.approval = void 0;
const schema_1 = require("@feathersjs/schema");
const approvals_schema_1 = require("./approvals.schema");
const approvals_class_1 = require("./approvals.class");
const approvals_shared_1 = require("./approvals.shared");
__exportStar(require("./approvals.class"), exports);
__exportStar(require("./approvals.schema"), exports);
// A configure function that registers the service and its hooks via `app.configure`
const approval = (app) => {
    // Register our service on the Feathers application
    app.use(approvals_shared_1.approvalPath, new approvals_class_1.ApprovalService((0, approvals_class_1.getOptions)(app)), {
        // A list of all methods this service exposes externally
        methods: approvals_shared_1.approvalMethods,
        // You can add additional custom events to be sent to clients here
        events: []
    });
    // Initialize hooks
    app.service(approvals_shared_1.approvalPath).hooks({
        around: {
            all: [
                schema_1.hooks.resolveExternal(approvals_schema_1.approvalExternalResolver),
                schema_1.hooks.resolveResult(approvals_schema_1.approvalResolver)
            ]
        },
        before: {
            all: [
                schema_1.hooks.validateQuery(approvals_schema_1.approvalQueryValidator),
                schema_1.hooks.resolveQuery(approvals_schema_1.approvalQueryResolver)
            ],
            find: [],
            get: [],
            create: [
                schema_1.hooks.validateData(approvals_schema_1.approvalDataValidator),
                schema_1.hooks.resolveData(approvals_schema_1.approvalDataResolver)
            ],
            patch: [
                schema_1.hooks.validateData(approvals_schema_1.approvalPatchValidator),
                schema_1.hooks.resolveData(approvals_schema_1.approvalPatchResolver)
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
exports.approval = approval;
//# sourceMappingURL=approvals.js.map