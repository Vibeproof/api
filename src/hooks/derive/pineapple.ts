// For more information about this file see https://dove.feathersjs.com/guides/cli/hook.html
import { GeneralError } from '@feathersjs/errors'
import type { HookContext } from '../../declarations'
import axios from 'axios'

export const pineapple = async (context: HookContext) => {
  const pineapple = context.app.get('pineapple')

  const response = await axios.post(pineapple, {
    params: context.data
  })

  if (response.status === 200) {
    context.data.cid = response.data.result.cid
  } else {
    throw new GeneralError('Pineapple error')
  }
}
