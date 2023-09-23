import { Type, getValidator, defaultAppConfiguration } from '@feathersjs/typebox'
import type { Static } from '@feathersjs/typebox'

import { dataValidator } from './validators'

export const configurationSchema = Type.Intersect([
  defaultAppConfiguration,
  Type.Object({
    host: Type.String(),
    port: Type.Number(),
    public: Type.String(),
    db_ca: Type.Optional(Type.String()),
    pineapple: Type.String(),
    sismo: Type.Object({
      appId: Type.String()
    }),
    openai_api_key: Type.String(),
    getimg_api_key: Type.String(),
    xmtp: Type.Optional(Type.Object({
      seed: Type.String(),
      production: Type.Boolean()
    })),
    s3: Type.Object({
      access_key: Type.String(),
      secret_access_key: Type.String(),
      region: Type.String(),
      bucket: Type.String(),
      endpoint: Type.String({
        format: 'uri'
      }),
    }),
  })
])

export type ApplicationConfiguration = Static<typeof configurationSchema>

export const configurationValidator = getValidator(configurationSchema, dataValidator)
