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
exports.eventApplicationResponse = void 0;
const schema_1 = require("@feathersjs/schema");
const event_application_responses_schema_1 = require("./event-application-responses.schema");
const event_application_responses_class_1 = require("./event-application-responses.class");
const event_application_responses_shared_1 = require("./event-application-responses.shared");
const pineapple_1 = require("../../hooks/derive/pineapple");
const errors_1 = require("@feathersjs/errors");
const client_1 = require("../../client");
__exportStar(require("./event-application-responses.class"), exports);
__exportStar(require("./event-application-responses.schema"), exports);
// A configure function that registers the service and its hooks via `app.configure`
const eventApplicationResponse = (app) => {
    // Register our service on the Feathers application
    app.use(event_application_responses_shared_1.eventApplicationResponsePath, new event_application_responses_class_1.EventApplicationResponseService((0, event_application_responses_class_1.getOptions)(app)), {
        // A list of all methods this service exposes externally
        methods: event_application_responses_shared_1.eventApplicationResponseMethods,
        // You can add additional custom events to be sent to clients here
        events: []
    });
    // Initialize hooks
    app.service(event_application_responses_shared_1.eventApplicationResponsePath).hooks({
        around: {
            all: [
                schema_1.hooks.resolveExternal(event_application_responses_schema_1.eventApplicationResponseExternalResolver),
                schema_1.hooks.resolveResult(event_application_responses_schema_1.eventApplicationResponseResolver)
            ]
        },
        before: {
            all: [
                schema_1.hooks.validateQuery(event_application_responses_schema_1.eventApplicationResponseQueryValidator),
                schema_1.hooks.resolveQuery(event_application_responses_schema_1.eventApplicationResponseQueryResolver)
            ],
            find: [],
            get: [],
            create: [
                schema_1.hooks.validateData(event_application_responses_schema_1.eventApplicationResponseDataValidator),
                schema_1.hooks.resolveData(event_application_responses_schema_1.eventApplicationResponseDataResolver),
                async (context) => {
                    // Validate signature with event.signature_public_key
                    const eventApplication = await context.app
                        .service('event-applications')
                        .get(context.data.event_application_id);
                    // Put fields in explicit order since the signature is generated from the JSON
                    const data = {
                        id: context.data.id,
                        type: context.data.type,
                        event_application_id: context.data.event_application_id,
                        shared_key: context.data.shared_key,
                        timestamp: context.data.timestamp,
                        version: context.data.version,
                    };
                    const verified = client_1.cryptography.signature.verify(JSON.stringify(data), context.data.signature, eventApplication.event.signature_public_key);
                    if (verified === false) {
                        throw new errors_1.GeneralError('Invalid signature');
                    }
                },
                pineapple_1.pineapple,
            ],
            patch: [
                schema_1.hooks.validateData(event_application_responses_schema_1.eventApplicationResponsePatchValidator),
                schema_1.hooks.resolveData(event_application_responses_schema_1.eventApplicationResponsePatchResolver)
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
exports.eventApplicationResponse = eventApplicationResponse;
//# sourceMappingURL=event-application-responses.js.map