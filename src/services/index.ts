import { approval } from './approvals/approvals'
import { submission } from './submissions/submissions'
import { event } from './events/events'
// For more information about this file see https://dove.feathersjs.com/guides/cli/application.html#configure-functions
import type { Application } from '../declarations'

export const services = (app: Application) => {
  app.configure(approval)
  app.configure(submission)
  app.configure(event)
  // All services will be registered here
}
