"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.services = void 0;
const approvals_1 = require("./approvals/approvals");
const submissions_1 = require("./submissions/submissions");
const events_1 = require("./events/events");
const services = (app) => {
    app.configure(approvals_1.approval);
    app.configure(submissions_1.submission);
    app.configure(events_1.event);
    // All services will be registered here
};
exports.services = services;
//# sourceMappingURL=index.js.map