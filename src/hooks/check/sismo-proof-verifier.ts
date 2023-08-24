// For more information about this file see https://dove.feathersjs.com/guides/cli/hook.html
import { SismoConnect, SismoConnectVerifiedResult } from '@sismo-core/sismo-connect-server'
import type { HookContext } from '../../declarations'

export const sismoProofVerifier = async (context: HookContext) => {
  if (context.data.sismo.auths.length === 0 && context.data.sismo.claims.length === 0) return

  const sismoConnect = SismoConnect({
    config: {
      appId: context.app.get('sismo').appId
    }
  })

  const result: SismoConnectVerifiedResult = await sismoConnect.verify(context.data.proof, {
    auths: context.data.auths,
    claims: context.data.claims
  })

  console.log(result)
}
