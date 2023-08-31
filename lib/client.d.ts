import type { TransportConnection, Application } from '@feathersjs/feathers';
import type { AuthenticationClientOptions } from '@feathersjs/authentication-client';
import './services/event-applications/event-applications.shared';
export type { EventApplication, EventApplicationData, EventApplicationQuery, EventApplicationPatch } from './services/event-applications/event-applications.shared';
import './services/events/events.shared';
import { domain, eventTypes, applicationTypes } from './utils/eip712';
export { domain, eventTypes, applicationTypes };
export type { Event, EventData, EventQuery, EventPatch } from './services/events/events.shared';
export interface Configuration {
    connection: TransportConnection<ServiceTypes>;
}
export interface ServiceTypes {
}
export type ClientApplication = Application<ServiceTypes, Configuration>;
/**
 * Returns a typed client for the api app.
 *
 * @param connection The REST or Socket.io Feathers client connection
 * @param authenticationOptions Additional settings for the authentication client
 * @see https://dove.feathersjs.com/api/client.html
 * @returns The Feathers client application
 */
export declare const createClient: <Configuration_1 = any>(connection: TransportConnection<ServiceTypes>, authenticationOptions?: Partial<AuthenticationClientOptions>) => ClientApplication;
