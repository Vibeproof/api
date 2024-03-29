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
exports.eventApplication = void 0;
const schema_1 = require("@feathersjs/schema");
const event_applications_schema_1 = require("./event-applications.schema");
const viem_1 = require("viem");
const eip712_1 = require("../../utils/eip712");
const errors_1 = require("@feathersjs/errors");
const event_applications_class_1 = require("./event-applications.class");
const event_applications_shared_1 = require("./event-applications.shared");
const pineapple_1 = require("../../hooks/derive/pineapple");
__exportStar(require("./event-applications.class"), exports);
__exportStar(require("./event-applications.schema"), exports);
// A configure function that registers the service and its hooks via `app.configure`
const eventApplication = (app) => {
    // Register our service on the Feathers application
    app.use(event_applications_shared_1.eventApplicationPath, new event_applications_class_1.EventApplicationService((0, event_applications_class_1.getOptions)(app)), {
        // A list of all methods this service exposes externally
        methods: event_applications_shared_1.eventApplicationMethods,
        // You can add additional custom events to be sent to clients here
        events: []
    });
    // Initialize hooks
    app.service(event_applications_shared_1.eventApplicationPath).hooks({
        around: {
            all: [
                schema_1.hooks.resolveExternal(event_applications_schema_1.eventApplicationExternalResolver),
                schema_1.hooks.resolveResult(event_applications_schema_1.eventApplicationResolver)
            ]
        },
        before: {
            all: [
                schema_1.hooks.validateQuery(event_applications_schema_1.eventApplicationQueryValidator),
                schema_1.hooks.resolveQuery(event_applications_schema_1.eventApplicationQueryResolver)
            ],
            find: [
                async (context) => {
                    if (context.params.query.hasOwnProperty('id')) {
                        context.params.query['event-applications.id'] = context.params.query.id;
                        delete context.params.query.id;
                    }
                }
            ],
            get: [],
            create: [
                schema_1.hooks.validateData(event_applications_schema_1.eventApplicationDataValidator),
                schema_1.hooks.resolveData(event_applications_schema_1.eventApplicationDataResolver),
                async (context) => {
                    // Validate Sismo proof
                },
                async (context) => {
                    const data = { ...context.data };
                    delete data.signature;
                    // Check signature matches the owner
                    const valid = await (0, viem_1.verifyTypedData)({
                        address: context.data.owner,
                        domain: eip712_1.domain,
                        types: eip712_1.applicationTypes,
                        primaryType: 'Application',
                        message: {
                            ...data
                        },
                        signature: context.data.signature
                    });
                    if (!valid) {
                        throw new errors_1.GeneralError('Bad signature');
                    }
                },
                pineapple_1.pineapple,
            ],
            patch: [
                schema_1.hooks.validateData(event_applications_schema_1.eventApplicationPatchValidator),
                schema_1.hooks.resolveData(event_applications_schema_1.eventApplicationPatchResolver)
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
exports.eventApplication = eventApplication;
//# sourceMappingURL=event-applications.js.map