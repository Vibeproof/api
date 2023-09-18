// For more information about this file see https://dove.feathersjs.com/guides/cli/hook.html
import type { HookContext } from '../../declarations'

import { createPublicClient, http } from 'viem'
import { mainnet } from 'viem/chains'

export const publicClient = createPublicClient({
  chain: mainnet,
  transport: http()
});


export const ens = async (context: HookContext) => {
  const ensName = await publicClient.getEnsName({
    address: context.data.owner,
  });

  if (ensName !== null) {
    context.data.ens = ensName;
  }
}
