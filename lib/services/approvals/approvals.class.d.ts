import type { Params } from '@feathersjs/feathers'
import { KnexService } from '@feathersjs/knex'
import type { KnexAdapterParams, KnexAdapterOptions } from '@feathersjs/knex'
import type { Application } from '../../declarations'
import type { Approval, ApprovalData, ApprovalPatch, ApprovalQuery } from './approvals.schema'
export type { Approval, ApprovalData, ApprovalPatch, ApprovalQuery }
export interface ApprovalParams extends KnexAdapterParams<ApprovalQuery> {}
export declare class ApprovalService<ServiceParams extends Params = ApprovalParams> extends KnexService<
  Approval,
  ApprovalData,
  ApprovalParams,
  ApprovalPatch
> {}
export declare const getOptions: (app: Application) => KnexAdapterOptions
