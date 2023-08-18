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
exports.event = void 0;
const schema_1 = require("@feathersjs/schema");
const events_schema_1 = require("./events.schema");
const events_class_1 = require("./events.class");
const events_shared_1 = require("./events.shared");
__exportStar(require("./events.class"), exports);
__exportStar(require("./events.schema"), exports);
// A configure function that registers the service and its hooks via `app.configure`
const event = (app) => {
    // Register our service on the Feathers application
    app.use(events_shared_1.eventPath, new events_class_1.EventService((0, events_class_1.getOptions)(app)), {
        // A list of all methods this service exposes externally
        methods: events_shared_1.eventMethods,
        // You can add additional custom events to be sent to clients here
        events: []
    });
    // Initialize hooks
    app.service(events_shared_1.eventPath).hooks({
        around: {
            all: [schema_1.hooks.resolveExternal(events_schema_1.eventExternalResolver), schema_1.hooks.resolveResult(events_schema_1.eventResolver)]
        },
        before: {
            all: [schema_1.hooks.validateQuery(events_schema_1.eventQueryValidator), schema_1.hooks.resolveQuery(events_schema_1.eventQueryResolver)],
            find: [],
            get: [],
            create: [schema_1.hooks.validateData(events_schema_1.eventDataValidator), schema_1.hooks.resolveData(events_schema_1.eventDataResolver)],
            patch: [schema_1.hooks.validateData(events_schema_1.eventPatchValidator), schema_1.hooks.resolveData(events_schema_1.eventPatchResolver)],
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
exports.event = event;
//# sourceMappingURL=events.js.map