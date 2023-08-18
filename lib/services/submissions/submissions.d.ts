import type { Application } from '../../declarations'
import { SubmissionService } from './submissions.class'
import { submissionPath } from './submissions.shared'
export * from './submissions.class'
export * from './submissions.schema'
export declare const submission: (app: Application) => void
declare module '../../declarations' {
  interface ServiceTypes {
    [submissionPath]: SubmissionService
  }
}
