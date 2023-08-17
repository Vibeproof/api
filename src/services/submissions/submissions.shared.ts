// For more information about this file see https://dove.feathersjs.com/guides/cli/service.shared.html
import type { Params } from '@feathersjs/feathers'
import type { ClientApplication } from '../../client'
import type {
  Submission,
  SubmissionData,
  SubmissionPatch,
  SubmissionQuery,
  SubmissionService
} from './submissions.class'

export type { Submission, SubmissionData, SubmissionPatch, SubmissionQuery }

export type SubmissionClientService = Pick<
  SubmissionService<Params<SubmissionQuery>>,
  (typeof submissionMethods)[number]
>

export const submissionPath = 'submissions'

export const submissionMethods = ['find', 'get', 'create', 'patch', 'remove'] as const

export const submissionClient = (client: ClientApplication) => {
  const connection = client.get('connection')

  client.use(submissionPath, connection.service(submissionPath), {
    methods: submissionMethods
  })
}

// Add this service to the client service type index
declare module '../../client' {
  interface ServiceTypes {
    [submissionPath]: SubmissionClientService
  }
}
