"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.services = void 0;
const event_application_responses_1 = require("./event-application-responses/event-application-responses");
const event_applications_1 = require("./event-applications/event-applications");
const events_1 = require("./events/events");
const services = (app) => {
    app.configure(event_application_responses_1.eventApplicationResponse);
    app.configure(event_applications_1.eventApplication);
    app.configure(events_1.event);
    // All services will be registered here
};
exports.services = services;
//# sourceMappingURL=index.js.map