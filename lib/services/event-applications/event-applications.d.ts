import type { Application } from '../../declarations';
import { EventApplicationService } from './event-applications.class';
import { eventApplicationPath } from './event-applications.shared';
export * from './event-applications.class';
export * from './event-applications.schema';
export declare const eventApplication: (app: Application) => void;
declare module '../../declarations' {
    interface ServiceTypes {
        [eventApplicationPath]: EventApplicationService;
    }
}
