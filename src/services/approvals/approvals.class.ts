// For more information about this file see https://dove.feathersjs.com/guides/cli/service.class.html#database-services
import type { Params } from '@feathersjs/feathers'
import { KnexService } from '@feathersjs/knex'
import type { KnexAdapterParams, KnexAdapterOptions } from '@feathersjs/knex'

import type { Application } from '../../declarations'
import type { Approval, ApprovalData, ApprovalPatch, ApprovalQuery } from './approvals.schema'

export type { Approval, ApprovalData, ApprovalPatch, ApprovalQuery }

export interface ApprovalParams extends KnexAdapterParams<ApprovalQuery> {}

// By default calls the standard Knex adapter service methods but can be customized with your own functionality.
export class ApprovalService<ServiceParams extends Params = ApprovalParams> extends KnexService<
  Approval,
  ApprovalData,
  ApprovalParams,
  ApprovalPatch
> {}

export const getOptions = (app: Application): KnexAdapterOptions => {
  return {
    paginate: app.get('paginate'),
    Model: app.get('postgresqlClient'),
    name: 'approvals'
  }
}
