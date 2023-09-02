// For more information about this file see https://dove.feathersjs.com/guides/cli/client.html
import { feathers } from '@feathersjs/feathers'
import type { TransportConnection, Application } from '@feathersjs/feathers'
import authenticationClient from '@feathersjs/authentication-client'
import type { AuthenticationClientOptions } from '@feathersjs/authentication-client'

import { eventApplicationResponseClient } from './services/event-application-responses/event-application-responses.shared'
export type {
  EventApplicationResponse,
  EventApplicationResponseData,
  EventApplicationResponseQuery,
  EventApplicationResponsePatch
} from './services/event-application-responses/event-application-responses.shared'

import { eventApplicationClient } from './services/event-applications/event-applications.shared'
export type {
  EventApplication,
  EventApplicationData,
  EventApplicationQuery,
  EventApplicationPatch
} from './services/event-applications/event-applications.shared'

import { eventClient } from './services/events/events.shared'

import { domain, eventTypes, applicationTypes } from './utils/eip712'
export { domain, eventTypes, applicationTypes }

import * as symmetric from './utils/crypto/symmetric';
import * as assymetric from './utils/crypto/assymetric';
import * as signature from './utils/crypto/signature';

export const cryptography = {
  symmetric,
  assymetric,
  signature
};

export type { Event, EventData, EventQuery, EventPatch } from './services/events/events.shared'

export interface Configuration {
  connection: TransportConnection<ServiceTypes>
}

export interface ServiceTypes {}

export type ClientApplication = Application<ServiceTypes, Configuration>

/**
 * Returns a typed client for the api app.
 *
 * @param connection The REST or Socket.io Feathers client connection
 * @param authenticationOptions Additional settings for the authentication client
 * @see https://dove.feathersjs.com/api/client.html
 * @returns The Feathers client application
 */
export const createClient = <Configuration = any,>(
  connection: TransportConnection<ServiceTypes>,
  authenticationOptions: Partial<AuthenticationClientOptions> = {}
) => {
  const client: ClientApplication = feathers()

  client.configure(connection)
  client.configure(authenticationClient(authenticationOptions))
  client.set('connection', connection)

  client.configure(eventClient)
  client.configure(eventApplicationClient)
  client.configure(eventApplicationResponseClient)
  return client
}
