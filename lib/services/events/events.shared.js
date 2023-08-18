"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.eventClient = exports.eventMethods = exports.eventPath = void 0;
exports.eventPath = 'events';
exports.eventMethods = ['find', 'get', 'create', 'patch', 'remove'];
const eventClient = (client) => {
    const connection = client.get('connection');
    client.use(exports.eventPath, connection.service(exports.eventPath), {
        methods: exports.eventMethods
    });
};
exports.eventClient = eventClient;
//# sourceMappingURL=events.shared.js.map