import type { Application } from '../../declarations';
import { EventApplicationResponseService } from './event-application-responses.class';
import { eventApplicationResponsePath } from './event-application-responses.shared';
export * from './event-application-responses.class';
export * from './event-application-responses.schema';
export declare const eventApplicationResponse: (app: Application) => void;
declare module '../../declarations' {
    interface ServiceTypes {
        [eventApplicationResponsePath]: EventApplicationResponseService;
    }
}
