"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.services = void 0;
const event_applications_1 = require("./event-applications/event-applications");
const events_1 = require("./events/events");
const services = (app) => {
    app.configure(event_applications_1.eventApplication);
    app.configure(events_1.event);
    // All services will be registered here
};
exports.services = services;
//# sourceMappingURL=index.js.map