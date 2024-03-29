// For more information about this file see https://dove.feathersjs.com/guides/cli/service.html

import { hooks as schemaHooks } from '@feathersjs/schema'
import { HookContext } from '@feathersjs/feathers'

import {
  eventApplicationDataValidator,
  eventApplicationPatchValidator,
  eventApplicationQueryValidator,
  eventApplicationResolver,
  eventApplicationExternalResolver,
  eventApplicationDataResolver,
  eventApplicationPatchResolver,
  eventApplicationQueryResolver
} from './event-applications.schema'

import { verifyTypedData } from 'viem'
import { domain, applicationTypes } from '../../utils/eip712'
import { FeathersError, GeneralError } from '@feathersjs/errors'

import type { Application } from '../../declarations'
import { EventApplicationService, getOptions } from './event-applications.class'
import { eventApplicationPath, eventApplicationMethods } from './event-applications.shared'
import { pineapple } from '../../hooks/derive/pineapple'
import { ens } from '../../hooks/derive/ens'
import { decodeBase64, encodeUTF8 } from 'tweetnacl-util'
import hash from 'object-hash';
import { AuthType, SismoConnect, SismoConnectConfig, SismoConnectVerifiedResult } from '@sismo-core/sismo-connect-server'

export * from './event-applications.class'
export * from './event-applications.schema'

// A configure function that registers the service and its hooks via `app.configure`
export const eventApplication = (app: Application) => {
  // Register our service on the Feathers application
  app.use(eventApplicationPath, new EventApplicationService(getOptions(app)), {
    // A list of all methods this service exposes externally
    methods: eventApplicationMethods,
    // You can add additional custom events to be sent to clients here
    events: []
  })
  // Initialize hooks
  app.service(eventApplicationPath).hooks({
    around: {
      all: [
        schemaHooks.resolveExternal(eventApplicationExternalResolver),
        schemaHooks.resolveResult(eventApplicationResolver)
      ]
    },
    before: {
      all: [
        schemaHooks.validateQuery(eventApplicationQueryValidator),
        schemaHooks.resolveQuery(eventApplicationQueryResolver)
      ],
      find: [
        async (context: HookContext) => {
          if (context.params.query.hasOwnProperty('id')) {
            context.params.query['event-applications.id'] = context.params.query.id;
            delete context.params.query.id;
          }
        }
      ],
      get: [],
      create: [
        schemaHooks.validateData(eventApplicationDataValidator),
        schemaHooks.resolveData(eventApplicationDataResolver),
        async (context: HookContext) => {
          const data = { ...context.data };
          delete data.signature;

          // Check signature matches the owner
          const valid = await verifyTypedData({
            address: context.data.owner,
            domain: domain,
            types: applicationTypes,
            primaryType: 'Application',
            message: {
              ...data
            },
            signature: context.data.signature
          })

          if (!valid) {
            throw new GeneralError('Bad signature')
          }
        },
        async (context: HookContext) => {
          const event = await context.app.service('events').get(context.data.event_id);

          if (event.sismo.claims.length === 0) return;

          const sismoConnectResponse = JSON.parse(encodeUTF8(decodeBase64(context.data.proof)));

          console.log(sismoConnectResponse);

          const {
            appId,
            proofs: [, claimsProof]
          } = sismoConnectResponse;

          if (appId !== context.app.get('sismo').appId) {
            throw new GeneralError('Invalid app id');
          }

          const eventClaimHashes = event.sismo.claims.map((claim: any) => hash(claim))

          const claimsIncluded = claimsProof.claims
            .map((claim: any) => {
              claim.isOptional = false;

              return hash(claim);
            })
            .every((claim: any) => eventClaimHashes.includes(claim));

          if (!claimsIncluded) {
            throw new GeneralError('Invalid claims');
          }

          const config: SismoConnectConfig = { appId };

          const sismoConnect = SismoConnect({ config });

          const result: SismoConnectVerifiedResult = await sismoConnect.verify(
            sismoConnectResponse,
            {
              auths: [
                { authType: AuthType.VAULT },
              ],
              claims: claimsProof.claims,
            }
          );

          const vault_id = result.getUserId(AuthType.VAULT);

          // Check such vault id is not already used
          const existing = await context.app.service('event-applications').find({
            query: {
              event_id: context.data.event_id,
              vault_id,
            }
          });

          if (existing.total > 0) {
            throw new GeneralError('Vault id already used');
          }
          
          context.data.vault_id = vault_id;
        },
        pineapple,
      ],
      patch: [
        schemaHooks.validateData(eventApplicationPatchValidator),
        schemaHooks.resolveData(eventApplicationPatchResolver)
      ],
      remove: []
    },
    after: {
      all: []
    },
    error: {
      all: []
    }
  })
}

// Add this service to the service type index
declare module '../../declarations' {
  interface ServiceTypes {
    [eventApplicationPath]: EventApplicationService
  }
}
