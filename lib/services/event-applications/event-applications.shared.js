"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.eventApplicationClient = exports.eventApplicationMethods = exports.eventApplicationPath = void 0;
exports.eventApplicationPath = 'event-applications';
exports.eventApplicationMethods = ['find', 'get', 'create'];
const eventApplicationClient = (client) => {
    const connection = client.get('connection');
    client.use(exports.eventApplicationPath, connection.service(exports.eventApplicationPath), {
        methods: exports.eventApplicationMethods
    });
};
exports.eventApplicationClient = eventApplicationClient;
//# sourceMappingURL=event-applications.shared.js.map