// For more information about this file see https://dove.feathersjs.com/guides/cli/service.shared.html
import type { Params } from '@feathersjs/feathers'
import type { ClientApplication } from '../../client'
import type {
  EventApplicationResponse,
  EventApplicationResponseData,
  EventApplicationResponsePatch,
  EventApplicationResponseQuery,
  EventApplicationResponseService
} from './event-application-responses.class'

export type {
  EventApplicationResponse,
  EventApplicationResponseData,
  EventApplicationResponsePatch,
  EventApplicationResponseQuery
}

export type EventApplicationResponseClientService = Pick<
  EventApplicationResponseService<Params<EventApplicationResponseQuery>>,
  (typeof eventApplicationResponseMethods)[number]
>

export const eventApplicationResponsePath = 'event-application-responses'

export const eventApplicationResponseMethods = ['find', 'get', 'create', 'patch', 'remove'] as const

export const eventApplicationResponseClient = (client: ClientApplication) => {
  const connection = client.get('connection')

  client.use(eventApplicationResponsePath, connection.service(eventApplicationResponsePath), {
    methods: eventApplicationResponseMethods
  })
}

// Add this service to the client service type index
declare module '../../client' {
  interface ServiceTypes {
    [eventApplicationResponsePath]: EventApplicationResponseClientService
  }
}
