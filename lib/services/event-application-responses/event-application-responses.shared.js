"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.eventApplicationResponseClient = exports.eventApplicationResponseMethods = exports.eventApplicationResponsePath = void 0;
exports.eventApplicationResponsePath = 'event-application-responses';
exports.eventApplicationResponseMethods = ['find', 'get', 'create'];
const eventApplicationResponseClient = (client) => {
    const connection = client.get('connection');
    client.use(exports.eventApplicationResponsePath, connection.service(exports.eventApplicationResponsePath), {
        methods: exports.eventApplicationResponseMethods
    });
};
exports.eventApplicationResponseClient = eventApplicationResponseClient;
//# sourceMappingURL=event-application-responses.shared.js.map