"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getOptions = exports.ApprovalService = void 0;
const knex_1 = require("@feathersjs/knex");
// By default calls the standard Knex adapter service methods but can be customized with your own functionality.
class ApprovalService extends knex_1.KnexService {
}
exports.ApprovalService = ApprovalService;
const getOptions = (app) => {
    return {
        paginate: app.get('paginate'),
        Model: app.get('postgresqlClient'),
        name: 'approvals'
    };
};
exports.getOptions = getOptions;
//# sourceMappingURL=approvals.class.js.map