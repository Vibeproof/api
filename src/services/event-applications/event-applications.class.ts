// For more information about this file see https://dove.feathersjs.com/guides/cli/service.class.html#database-services
import type { Params } from '@feathersjs/feathers'
import { KnexService } from '@feathersjs/knex'
import type { KnexAdapterParams, KnexAdapterOptions } from '@feathersjs/knex'

import type { Application } from '../../declarations'
import type {
  EventApplication,
  EventApplicationData,
  EventApplicationPatch,
  EventApplicationQuery
} from './event-applications.schema'
import { Knex } from 'knex'
import { AdapterQuery } from '@feathersjs/adapter-commons'

export type { EventApplication, EventApplicationData, EventApplicationPatch, EventApplicationQuery }

export interface EventApplicationParams extends KnexAdapterParams<EventApplicationQuery> {}

// By default calls the standard Knex adapter service methods but can be customized with your own functionality.
export class EventApplicationService<
  ServiceParams extends Params = EventApplicationParams
> extends KnexService<
  EventApplication,
  EventApplicationData,
  EventApplicationParams,
  EventApplicationPatch
> {
  createQuery(params?: EventApplicationParams | undefined): Knex.QueryBuilder<any, any> {
    const query = super.createQuery(params);

    return query;
  }
}

export const getOptions = (app: Application): KnexAdapterOptions => {
  return {
    paginate: app.get('paginate'),
    Model: app.get('postgresqlClient'),
    name: 'event-applications'
  }
}
