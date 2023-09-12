"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getOptions = exports.EventApplicationService = void 0;
const knex_1 = require("@feathersjs/knex");
// By default calls the standard Knex adapter service methods but can be customized with your own functionality.
class EventApplicationService extends knex_1.KnexService {
    createQuery(params) {
        const query = super.createQuery(params);
        // query.join(
        //   'events as e',
        //   'event-applications.event_id',
        //   '=',
        //   'e.id',
        // );
        // console.log(query.toString());
        return query;
    }
}
exports.EventApplicationService = EventApplicationService;
const getOptions = (app) => {
    return {
        paginate: app.get('paginate'),
        Model: app.get('postgresqlClient'),
        name: 'event-applications'
    };
};
exports.getOptions = getOptions;
//# sourceMappingURL=event-applications.class.js.map