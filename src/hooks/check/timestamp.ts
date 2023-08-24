// For more information about this file see https://dove.feathersjs.com/guides/cli/hook.html
import type { HookContext } from '../../declarations'
import { EVENT_AGE_SECONDS } from '../../utils/constants'
import { FeathersError, GeneralError } from '@feathersjs/errors'


export const checkTimestamp = async (context: HookContext) => {
    // Check timestamp not too old
    const age = Date.now() - Date.parse(context.data.timestamp)

    if (age > EVENT_AGE_SECONDS * 1000) {
        throw new GeneralError('Timestamp too old')
    }
}
