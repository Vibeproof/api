"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.submissionClient = exports.submissionMethods = exports.submissionPath = void 0;
exports.submissionPath = 'submissions';
exports.submissionMethods = ['find', 'get', 'create', 'patch', 'remove'];
const submissionClient = (client) => {
    const connection = client.get('connection');
    client.use(exports.submissionPath, connection.service(exports.submissionPath), {
        methods: exports.submissionMethods
    });
};
exports.submissionClient = submissionClient;
//# sourceMappingURL=submissions.shared.js.map