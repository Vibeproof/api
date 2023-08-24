import type { Params } from '@feathersjs/feathers';
import { KnexService } from '@feathersjs/knex';
import type { KnexAdapterParams, KnexAdapterOptions } from '@feathersjs/knex';
import type { Application } from '../../declarations';
import type { Submission, SubmissionData, SubmissionPatch, SubmissionQuery } from './submissions.schema';
export type { Submission, SubmissionData, SubmissionPatch, SubmissionQuery };
export interface SubmissionParams extends KnexAdapterParams<SubmissionQuery> {
}
export declare class SubmissionService<ServiceParams extends Params = SubmissionParams> extends KnexService<Submission, SubmissionData, SubmissionParams, SubmissionPatch> {
}
export declare const getOptions: (app: Application) => KnexAdapterOptions;
