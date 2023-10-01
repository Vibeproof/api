import type { Params } from '@feathersjs/feathers';
import type { ClientApplication } from '../../client';
import type { Event, EventData, EventPatch, EventQuery, EventService } from './events.class';
export type { Event, EventData, EventPatch, EventQuery };
export type EventClientService = Pick<EventService<Params<EventQuery>>, (typeof eventMethods)[number]>;
export declare const eventPath = "events";
export declare const eventMethods: readonly ["find", "get", "create", "patch"];
export declare const eventClient: (client: ClientApplication) => void;
declare module '../../client' {
    interface ServiceTypes {
        [eventPath]: EventClientService;
    }
}
