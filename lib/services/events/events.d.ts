import type { Application } from '../../declarations'
import { EventService } from './events.class'
import { eventPath } from './events.shared'
export * from './events.class'
export * from './events.schema'
export declare const event: (app: Application) => void
declare module '../../declarations' {
  interface ServiceTypes {
    [eventPath]: EventService
  }
}
