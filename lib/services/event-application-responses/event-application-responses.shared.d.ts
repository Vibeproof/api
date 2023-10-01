import type { Params } from '@feathersjs/feathers';
import type { ClientApplication } from '../../client';
import type { EventApplicationResponse, EventApplicationResponseData, EventApplicationResponsePatch, EventApplicationResponseQuery, EventApplicationResponseService } from './event-application-responses.class';
export type { EventApplicationResponse, EventApplicationResponseData, EventApplicationResponsePatch, EventApplicationResponseQuery };
export type EventApplicationResponseClientService = Pick<EventApplicationResponseService<Params<EventApplicationResponseQuery>>, (typeof eventApplicationResponseMethods)[number]>;
export declare const eventApplicationResponsePath = "event-application-responses";
export declare const eventApplicationResponseMethods: readonly ["find", "get", "create"];
export declare const eventApplicationResponseClient: (client: ClientApplication) => void;
declare module '../../client' {
    interface ServiceTypes {
        [eventApplicationResponsePath]: EventApplicationResponseClientService;
    }
}
