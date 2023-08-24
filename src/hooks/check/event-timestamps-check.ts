// For more information about this file see https://dove.feathersjs.com/guides/cli/hook.html
import type { HookContext } from '../../declarations'

export const eventTimestampsCheck = async (context: HookContext) => {
  console.log(`Running hook event-timestamps-check on ${context.path}.${context.method}`)
}
