import type { Params } from '@feathersjs/feathers';
import { KnexService } from '@feathersjs/knex';
import type { KnexAdapterParams, KnexAdapterOptions } from '@feathersjs/knex';
import type { Application } from '../../declarations';
import type { EventApplicationResponse, EventApplicationResponseData, EventApplicationResponsePatch, EventApplicationResponseQuery } from './event-application-responses.schema';
export type { EventApplicationResponse, EventApplicationResponseData, EventApplicationResponsePatch, EventApplicationResponseQuery };
export interface EventApplicationResponseParams extends KnexAdapterParams<EventApplicationResponseQuery> {
}
export declare class EventApplicationResponseService<ServiceParams extends Params = EventApplicationResponseParams> extends KnexService<EventApplicationResponse, EventApplicationResponseData, EventApplicationResponseParams, EventApplicationResponsePatch> {
}
export declare const getOptions: (app: Application) => KnexAdapterOptions;
