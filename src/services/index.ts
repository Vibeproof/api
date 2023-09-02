import { eventApplicationResponse } from './event-application-responses/event-application-responses'
import { eventApplication } from './event-applications/event-applications'
import { event } from './events/events'
// For more information about this file see https://dove.feathersjs.com/guides/cli/application.html#configure-functions
import type { Application } from '../declarations'

export const services = (app: Application) => {
  app.configure(eventApplicationResponse)
  app.configure(eventApplication)
  app.configure(event)
  // All services will be registered here
}
