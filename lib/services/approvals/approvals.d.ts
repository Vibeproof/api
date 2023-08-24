import type { Application } from '../../declarations';
import { ApprovalService } from './approvals.class';
import { approvalPath } from './approvals.shared';
export * from './approvals.class';
export * from './approvals.schema';
export declare const approval: (app: Application) => void;
declare module '../../declarations' {
    interface ServiceTypes {
        [approvalPath]: ApprovalService;
    }
}
