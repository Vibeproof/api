// For more information about this file see https://dove.feathersjs.com/guides/cli/service.shared.html
import type { Params } from '@feathersjs/feathers'
import type { ClientApplication } from '../../client'
import type { Approval, ApprovalData, ApprovalPatch, ApprovalQuery, ApprovalService } from './approvals.class'

export type { Approval, ApprovalData, ApprovalPatch, ApprovalQuery }

export type ApprovalClientService = Pick<
  ApprovalService<Params<ApprovalQuery>>,
  (typeof approvalMethods)[number]
>

export const approvalPath = 'approvals'

export const approvalMethods = ['find', 'get', 'create', 'patch', 'remove'] as const

export const approvalClient = (client: ClientApplication) => {
  const connection = client.get('connection')

  client.use(approvalPath, connection.service(approvalPath), {
    methods: approvalMethods
  })
}

// Add this service to the client service type index
declare module '../../client' {
  interface ServiceTypes {
    [approvalPath]: ApprovalClientService
  }
}
