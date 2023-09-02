"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getOptions = exports.EventApplicationResponseService = void 0;
const knex_1 = require("@feathersjs/knex");
// By default calls the standard Knex adapter service methods but can be customized with your own functionality.
class EventApplicationResponseService extends knex_1.KnexService {
}
exports.EventApplicationResponseService = EventApplicationResponseService;
const getOptions = (app) => {
    return {
        paginate: app.get('paginate'),
        Model: app.get('postgresqlClient'),
        name: 'event-application-responses'
    };
};
exports.getOptions = getOptions;
//# sourceMappingURL=event-application-responses.class.js.map