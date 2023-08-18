"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getOptions = exports.SubmissionService = void 0;
const knex_1 = require("@feathersjs/knex");
// By default calls the standard Knex adapter service methods but can be customized with your own functionality.
class SubmissionService extends knex_1.KnexService {
}
exports.SubmissionService = SubmissionService;
const getOptions = (app) => {
    return {
        paginate: app.get('paginate'),
        Model: app.get('postgresqlClient'),
        name: 'submissions'
    };
};
exports.getOptions = getOptions;
//# sourceMappingURL=submissions.class.js.map