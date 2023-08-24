// For more information about this file see https://dove.feathersjs.com/guides/cli/hook.html
import type { HookContext } from '../../declarations'

export const ens = async (context: HookContext) => {
  console.log(`Running hook ens on ${context.path}.${context.method}`)
}
