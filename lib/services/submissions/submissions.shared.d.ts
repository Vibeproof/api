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
export declare const submissionPath = 'submissions'
export declare const submissionMethods: readonly ['find', 'get', 'create', 'patch', 'remove']
export declare const submissionClient: (client: ClientApplication) => void
declare module '../../client' {
  interface ServiceTypes {
    [submissionPath]: SubmissionClientService
  }
}
