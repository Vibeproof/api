import type { Params } from '@feathersjs/feathers';
import { KnexService } from '@feathersjs/knex';
import type { KnexAdapterParams, KnexAdapterOptions } from '@feathersjs/knex';
import type { Application } from '../../declarations';
import type { EventApplication, EventApplicationData, EventApplicationPatch, EventApplicationQuery } from './event-applications.schema';
export type { EventApplication, EventApplicationData, EventApplicationPatch, EventApplicationQuery };
export interface EventApplicationParams extends KnexAdapterParams<EventApplicationQuery> {
}
export declare class EventApplicationService<ServiceParams extends Params = EventApplicationParams> extends KnexService<EventApplication, EventApplicationData, EventApplicationParams, EventApplicationPatch> {
}
export declare const getOptions: (app: Application) => KnexAdapterOptions;
