// For more information about this file see https://dove.feathersjs.com/guides/cli/client.html
import { feathers } from '@feathersjs/feathers'
import type { TransportConnection, Application } from '@feathersjs/feathers'
import authenticationClient from '@feathersjs/authentication-client'
import type { AuthenticationClientOptions } from '@feathersjs/authentication-client'

import { approvalClient } from './services/approvals/approvals.shared'
export type {
  Approval,
  ApprovalData,
  ApprovalQuery,
  ApprovalPatch
} from './services/approvals/approvals.shared'

import { submissionClient } from './services/submissions/submissions.shared'
export type {
  Submission,
  SubmissionData,
  SubmissionQuery,
  SubmissionPatch
} from './services/submissions/submissions.shared'

import { eventClient } from './services/events/events.shared'
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
  client.configure(submissionClient)
  client.configure(approvalClient)
  return client
}
