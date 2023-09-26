import type { Params } from '@feathersjs/feathers';
import type { ClientApplication } from '../../client';
import type { EventApplication, EventApplicationData, EventApplicationPatch, EventApplicationQuery, EventApplicationService } from './event-applications.class';
export type { EventApplication, EventApplicationData, EventApplicationPatch, EventApplicationQuery };
export type EventApplicationClientService = Pick<EventApplicationService<Params<EventApplicationQuery>>, (typeof eventApplicationMethods)[number]>;
export declare const eventApplicationPath = "event-applications";
export declare const eventApplicationMethods: readonly ["find", "get", "create"];
export declare const eventApplicationClient: (client: ClientApplication) => void;
declare module '../../client' {
    interface ServiceTypes {
        [eventApplicationPath]: EventApplicationClientService;
    }
}
