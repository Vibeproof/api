// For more information about this file see https://dove.feathersjs.com/guides/cli/service.class.html#database-services
import type { Params } from '@feathersjs/feathers'
import { KnexService } from '@feathersjs/knex'
import type { KnexAdapterParams, KnexAdapterOptions } from '@feathersjs/knex'

import type { Application } from '../../declarations'
import type { Submission, SubmissionData, SubmissionPatch, SubmissionQuery } from './submissions.schema'

export type { Submission, SubmissionData, SubmissionPatch, SubmissionQuery }

export interface SubmissionParams extends KnexAdapterParams<SubmissionQuery> {}

// By default calls the standard Knex adapter service methods but can be customized with your own functionality.
export class SubmissionService<ServiceParams extends Params = SubmissionParams> extends KnexService<
  Submission,
  SubmissionData,
  SubmissionParams,
  SubmissionPatch
> {}

export const getOptions = (app: Application): KnexAdapterOptions => {
  return {
    paginate: app.get('paginate'),
    Model: app.get('postgresqlClient'),
    name: 'submissions'
  }
}
