import type { Params } from '@feathersjs/feathers';
import type { ClientApplication } from '../../client';
import type { Approval, ApprovalData, ApprovalPatch, ApprovalQuery, ApprovalService } from './approvals.class';
export type { Approval, ApprovalData, ApprovalPatch, ApprovalQuery };
export type ApprovalClientService = Pick<ApprovalService<Params<ApprovalQuery>>, (typeof approvalMethods)[number]>;
export declare const approvalPath = "approvals";
export declare const approvalMethods: readonly ["find", "get", "create", "patch", "remove"];
export declare const approvalClient: (client: ClientApplication) => void;
declare module '../../client' {
    interface ServiceTypes {
        [approvalPath]: ApprovalClientService;
    }
}
