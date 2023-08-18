import type { Params } from '@feathersjs/feathers'
import { KnexService } from '@feathersjs/knex'
import type { KnexAdapterParams, KnexAdapterOptions } from '@feathersjs/knex'
import type { Application } from '../../declarations'
import type { Event, EventData, EventPatch, EventQuery } from './events.schema'
export type { Event, EventData, EventPatch, EventQuery }
export interface EventParams extends KnexAdapterParams<EventQuery> {}
export declare class EventService<ServiceParams extends Params = EventParams> extends KnexService<
  Event,
  EventData,
  EventParams,
  EventPatch
> {}
export declare const getOptions: (app: Application) => KnexAdapterOptions
