"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.approvalClient = exports.approvalMethods = exports.approvalPath = void 0;
exports.approvalPath = 'approvals';
exports.approvalMethods = ['find', 'get', 'create', 'patch', 'remove'];
const approvalClient = (client) => {
    const connection = client.get('connection');
    client.use(exports.approvalPath, connection.service(exports.approvalPath), {
        methods: exports.approvalMethods
    });
};
exports.approvalClient = approvalClient;
//# sourceMappingURL=approvals.shared.js.map