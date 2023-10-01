// For more information about this file see https://dove.feathersjs.com/guides/cli/service.shared.html
import type { Params } from '@feathersjs/feathers'
import type { ClientApplication } from '../../client'
import type {
  EventApplication,
  EventApplicationData,
  EventApplicationPatch,
  EventApplicationQuery,
  EventApplicationService
} from './event-applications.class'

export type { EventApplication, EventApplicationData, EventApplicationPatch, EventApplicationQuery }

export type EventApplicationClientService = Pick<
  EventApplicationService<Params<EventApplicationQuery>>,
  (typeof eventApplicationMethods)[number]
>

export const eventApplicationPath = 'event-applications'

export const eventApplicationMethods = ['find', 'get', 'create'] as const

export const eventApplicationClient = (client: ClientApplication) => {
  const connection = client.get('connection')

  client.use(eventApplicationPath, connection.service(eventApplicationPath), {
    methods: eventApplicationMethods
  })
}

// Add this service to the client service type index
declare module '../../client' {
  interface ServiceTypes {
    [eventApplicationPath]: EventApplicationClientService
  }
}
