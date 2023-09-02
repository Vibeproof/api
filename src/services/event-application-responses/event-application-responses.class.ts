// For more information about this file see https://dove.feathersjs.com/guides/cli/service.class.html#database-services
import type { Params } from '@feathersjs/feathers'
import { KnexService } from '@feathersjs/knex'
import type { KnexAdapterParams, KnexAdapterOptions } from '@feathersjs/knex'

import type { Application } from '../../declarations'
import type {
  EventApplicationResponse,
  EventApplicationResponseData,
  EventApplicationResponsePatch,
  EventApplicationResponseQuery
} from './event-application-responses.schema'

export type {
  EventApplicationResponse,
  EventApplicationResponseData,
  EventApplicationResponsePatch,
  EventApplicationResponseQuery
}

export interface EventApplicationResponseParams extends KnexAdapterParams<EventApplicationResponseQuery> {}

// By default calls the standard Knex adapter service methods but can be customized with your own functionality.
export class EventApplicationResponseService<
  ServiceParams extends Params = EventApplicationResponseParams
> extends KnexService<
  EventApplicationResponse,
  EventApplicationResponseData,
  EventApplicationResponseParams,
  EventApplicationResponsePatch
> {}

export const getOptions = (app: Application): KnexAdapterOptions => {
  return {
    paginate: app.get('paginate'),
    Model: app.get('postgresqlClient'),
    name: 'event-application-responses'
  }
}
