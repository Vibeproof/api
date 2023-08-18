import type { Static } from '@feathersjs/typebox'
import type { HookContext } from '../../declarations'
import { AuthType, ClaimType } from '@sismo-core/sismo-connect-server'
export declare const eventSchema: import('@sinclair/typebox').TObject<{
  id: import('@sinclair/typebox').TString<'uuid'>
  title: import('@sinclair/typebox').TString<string>
  organizer: import('@sinclair/typebox').TString<string>
  description: import('@sinclair/typebox').TString<string>
  tags: import('@sinclair/typebox').TArray<import('@sinclair/typebox').TString<string>>
  link: import('@sinclair/typebox').TOptional<import('@sinclair/typebox').TString<'uri'>>
  note: import('@sinclair/typebox').TOptional<import('@sinclair/typebox').TString<string>>
  note_encrypted: import('@sinclair/typebox').TOptional<import('@sinclair/typebox').TBoolean>
  location: import('@sinclair/typebox').TOptional<import('@sinclair/typebox').TString<string>>
  location_encrypted: import('@sinclair/typebox').TOptional<import('@sinclair/typebox').TBoolean>
  registration_start: import('@sinclair/typebox').TString<'date-time'>
  registration_end: import('@sinclair/typebox').TString<'date-time'>
  capacity: import('@sinclair/typebox').TNumber
  start: import('@sinclair/typebox').TString<'date-time'>
  end: import('@sinclair/typebox').TString<'date-time'>
  price: import('@sinclair/typebox').TOptional<import('@sinclair/typebox').TNumber>
  auths: import('@sinclair/typebox').TArray<
    import('@sinclair/typebox').TObject<{
      authType: import('@sinclair/typebox').TEnum<typeof AuthType>
      isAnon: import('@sinclair/typebox').TBoolean
    }>
  >
  claims: import('@sinclair/typebox').TArray<
    import('@sinclair/typebox').TObject<{
      claimType: import('@sinclair/typebox').TEnum<typeof ClaimType>
      groupId: import('@sinclair/typebox').TString<string>
      value: import('@sinclair/typebox').TNumber
    }>
  >
  timestamp: import('@sinclair/typebox').TString<'date-time'>
  signature: import('@sinclair/typebox').TString<string>
  owner: import('@sinclair/typebox').TString<string>
}>
export type Event = Static<typeof eventSchema>
export declare const eventValidator: import('@feathersjs/schema').Validator<any, any>
export declare const eventResolver: import('@feathersjs/schema').Resolver<
  {
    link?: string | undefined
    location?: string | undefined
    note?: string | undefined
    note_encrypted?: boolean | undefined
    location_encrypted?: boolean | undefined
    price?: number | undefined
    id: string
    end: string
    start: string
    title: string
    description: string
    timestamp: string
    organizer: string
    tags: string[]
    registration_start: string
    registration_end: string
    capacity: number
    auths: {
      authType: AuthType
      isAnon: boolean
    }[]
    claims: {
      value: number
      claimType: ClaimType
      groupId: string
    }[]
    signature: string
    owner: string
  },
  HookContext
>
export declare const eventExternalResolver: import('@feathersjs/schema').Resolver<
  {
    link?: string | undefined
    location?: string | undefined
    note?: string | undefined
    note_encrypted?: boolean | undefined
    location_encrypted?: boolean | undefined
    price?: number | undefined
    id: string
    end: string
    start: string
    title: string
    description: string
    timestamp: string
    organizer: string
    tags: string[]
    registration_start: string
    registration_end: string
    capacity: number
    auths: {
      authType: AuthType
      isAnon: boolean
    }[]
    claims: {
      value: number
      claimType: ClaimType
      groupId: string
    }[]
    signature: string
    owner: string
  },
  HookContext
>
export declare const eventDataSchema: import('@sinclair/typebox').TPick<
  import('@sinclair/typebox').TObject<{
    id: import('@sinclair/typebox').TString<'uuid'>
    title: import('@sinclair/typebox').TString<string>
    organizer: import('@sinclair/typebox').TString<string>
    description: import('@sinclair/typebox').TString<string>
    tags: import('@sinclair/typebox').TArray<import('@sinclair/typebox').TString<string>>
    link: import('@sinclair/typebox').TOptional<import('@sinclair/typebox').TString<'uri'>>
    note: import('@sinclair/typebox').TOptional<import('@sinclair/typebox').TString<string>>
    note_encrypted: import('@sinclair/typebox').TOptional<import('@sinclair/typebox').TBoolean>
    location: import('@sinclair/typebox').TOptional<import('@sinclair/typebox').TString<string>>
    location_encrypted: import('@sinclair/typebox').TOptional<import('@sinclair/typebox').TBoolean>
    registration_start: import('@sinclair/typebox').TString<'date-time'>
    registration_end: import('@sinclair/typebox').TString<'date-time'>
    capacity: import('@sinclair/typebox').TNumber
    start: import('@sinclair/typebox').TString<'date-time'>
    end: import('@sinclair/typebox').TString<'date-time'>
    price: import('@sinclair/typebox').TOptional<import('@sinclair/typebox').TNumber>
    auths: import('@sinclair/typebox').TArray<
      import('@sinclair/typebox').TObject<{
        authType: import('@sinclair/typebox').TEnum<typeof AuthType>
        isAnon: import('@sinclair/typebox').TBoolean
      }>
    >
    claims: import('@sinclair/typebox').TArray<
      import('@sinclair/typebox').TObject<{
        claimType: import('@sinclair/typebox').TEnum<typeof ClaimType>
        groupId: import('@sinclair/typebox').TString<string>
        value: import('@sinclair/typebox').TNumber
      }>
    >
    timestamp: import('@sinclair/typebox').TString<'date-time'>
    signature: import('@sinclair/typebox').TString<string>
    owner: import('@sinclair/typebox').TString<string>
  }>,
  [
    'id',
    'title',
    'organizer',
    'description',
    'tags',
    'link',
    'note',
    'note_encrypted',
    'location',
    'location_encrypted',
    'registration_start',
    'registration_end',
    'capacity',
    'start',
    'end',
    'price',
    'auths',
    'claims',
    'timestamp',
    'signature',
    'owner'
  ]
>
export type EventData = Static<typeof eventDataSchema>
export declare const eventDataValidator: import('@feathersjs/schema').Validator<any, any>
export declare const eventDataResolver: import('@feathersjs/schema').Resolver<
  {
    link?: string | undefined
    location?: string | undefined
    note?: string | undefined
    note_encrypted?: boolean | undefined
    location_encrypted?: boolean | undefined
    price?: number | undefined
    id: string
    end: string
    start: string
    title: string
    description: string
    timestamp: string
    organizer: string
    tags: string[]
    registration_start: string
    registration_end: string
    capacity: number
    auths: {
      authType: AuthType
      isAnon: boolean
    }[]
    claims: {
      value: number
      claimType: ClaimType
      groupId: string
    }[]
    signature: string
    owner: string
  },
  HookContext
>
export declare const eventPatchSchema: import('@sinclair/typebox').TPartial<
  import('@sinclair/typebox').TObject<{
    id: import('@sinclair/typebox').TString<'uuid'>
    title: import('@sinclair/typebox').TString<string>
    organizer: import('@sinclair/typebox').TString<string>
    description: import('@sinclair/typebox').TString<string>
    tags: import('@sinclair/typebox').TArray<import('@sinclair/typebox').TString<string>>
    link: import('@sinclair/typebox').TOptional<import('@sinclair/typebox').TString<'uri'>>
    note: import('@sinclair/typebox').TOptional<import('@sinclair/typebox').TString<string>>
    note_encrypted: import('@sinclair/typebox').TOptional<import('@sinclair/typebox').TBoolean>
    location: import('@sinclair/typebox').TOptional<import('@sinclair/typebox').TString<string>>
    location_encrypted: import('@sinclair/typebox').TOptional<import('@sinclair/typebox').TBoolean>
    registration_start: import('@sinclair/typebox').TString<'date-time'>
    registration_end: import('@sinclair/typebox').TString<'date-time'>
    capacity: import('@sinclair/typebox').TNumber
    start: import('@sinclair/typebox').TString<'date-time'>
    end: import('@sinclair/typebox').TString<'date-time'>
    price: import('@sinclair/typebox').TOptional<import('@sinclair/typebox').TNumber>
    auths: import('@sinclair/typebox').TArray<
      import('@sinclair/typebox').TObject<{
        authType: import('@sinclair/typebox').TEnum<typeof AuthType>
        isAnon: import('@sinclair/typebox').TBoolean
      }>
    >
    claims: import('@sinclair/typebox').TArray<
      import('@sinclair/typebox').TObject<{
        claimType: import('@sinclair/typebox').TEnum<typeof ClaimType>
        groupId: import('@sinclair/typebox').TString<string>
        value: import('@sinclair/typebox').TNumber
      }>
    >
    timestamp: import('@sinclair/typebox').TString<'date-time'>
    signature: import('@sinclair/typebox').TString<string>
    owner: import('@sinclair/typebox').TString<string>
  }>
>
export type EventPatch = Static<typeof eventPatchSchema>
export declare const eventPatchValidator: import('@feathersjs/schema').Validator<any, any>
export declare const eventPatchResolver: import('@feathersjs/schema').Resolver<
  {
    link?: string | undefined
    location?: string | undefined
    note?: string | undefined
    note_encrypted?: boolean | undefined
    location_encrypted?: boolean | undefined
    price?: number | undefined
    id: string
    end: string
    start: string
    title: string
    description: string
    timestamp: string
    organizer: string
    tags: string[]
    registration_start: string
    registration_end: string
    capacity: number
    auths: {
      authType: AuthType
      isAnon: boolean
    }[]
    claims: {
      value: number
      claimType: ClaimType
      groupId: string
    }[]
    signature: string
    owner: string
  },
  HookContext
>
export declare const eventQueryProperties: import('@sinclair/typebox').TPick<
  import('@sinclair/typebox').TObject<{
    id: import('@sinclair/typebox').TString<'uuid'>
    title: import('@sinclair/typebox').TString<string>
    organizer: import('@sinclair/typebox').TString<string>
    description: import('@sinclair/typebox').TString<string>
    tags: import('@sinclair/typebox').TArray<import('@sinclair/typebox').TString<string>>
    link: import('@sinclair/typebox').TOptional<import('@sinclair/typebox').TString<'uri'>>
    note: import('@sinclair/typebox').TOptional<import('@sinclair/typebox').TString<string>>
    note_encrypted: import('@sinclair/typebox').TOptional<import('@sinclair/typebox').TBoolean>
    location: import('@sinclair/typebox').TOptional<import('@sinclair/typebox').TString<string>>
    location_encrypted: import('@sinclair/typebox').TOptional<import('@sinclair/typebox').TBoolean>
    registration_start: import('@sinclair/typebox').TString<'date-time'>
    registration_end: import('@sinclair/typebox').TString<'date-time'>
    capacity: import('@sinclair/typebox').TNumber
    start: import('@sinclair/typebox').TString<'date-time'>
    end: import('@sinclair/typebox').TString<'date-time'>
    price: import('@sinclair/typebox').TOptional<import('@sinclair/typebox').TNumber>
    auths: import('@sinclair/typebox').TArray<
      import('@sinclair/typebox').TObject<{
        authType: import('@sinclair/typebox').TEnum<typeof AuthType>
        isAnon: import('@sinclair/typebox').TBoolean
      }>
    >
    claims: import('@sinclair/typebox').TArray<
      import('@sinclair/typebox').TObject<{
        claimType: import('@sinclair/typebox').TEnum<typeof ClaimType>
        groupId: import('@sinclair/typebox').TString<string>
        value: import('@sinclair/typebox').TNumber
      }>
    >
    timestamp: import('@sinclair/typebox').TString<'date-time'>
    signature: import('@sinclair/typebox').TString<string>
    owner: import('@sinclair/typebox').TString<string>
  }>,
  [
    'id',
    'title',
    'description',
    'organizer',
    'tags',
    'location',
    'registration_start',
    'registration_end',
    'start',
    'end'
  ]
>
export declare const eventQuerySchema: import('@sinclair/typebox').TIntersect<
  [
    import('@sinclair/typebox').TIntersect<
      [
        import('@sinclair/typebox').TPartial<
          import('@sinclair/typebox').TObject<{
            $limit: import('@sinclair/typebox').TNumber
            $skip: import('@sinclair/typebox').TNumber
            $sort: import('@sinclair/typebox').TObject<{
              location: import('@sinclair/typebox').TOptional<import('@sinclair/typebox').TInteger>
              id: import('@sinclair/typebox').TOptional<import('@sinclair/typebox').TInteger>
              end: import('@sinclair/typebox').TOptional<import('@sinclair/typebox').TInteger>
              start: import('@sinclair/typebox').TOptional<import('@sinclair/typebox').TInteger>
              title: import('@sinclair/typebox').TOptional<import('@sinclair/typebox').TInteger>
              description: import('@sinclair/typebox').TOptional<import('@sinclair/typebox').TInteger>
              organizer: import('@sinclair/typebox').TOptional<import('@sinclair/typebox').TInteger>
              tags: import('@sinclair/typebox').TOptional<import('@sinclair/typebox').TInteger>
              registration_start: import('@sinclair/typebox').TOptional<import('@sinclair/typebox').TInteger>
              registration_end: import('@sinclair/typebox').TOptional<import('@sinclair/typebox').TInteger>
            }>
            $select: import('@sinclair/typebox').TUnsafe<
              (
                | 'location'
                | 'id'
                | 'end'
                | 'start'
                | 'title'
                | 'description'
                | 'organizer'
                | 'tags'
                | 'registration_start'
                | 'registration_end'
              )[]
            >
            $and: import('@sinclair/typebox').TArray<
              import('@sinclair/typebox').TUnion<
                [
                  import('@sinclair/typebox').TOptional<
                    import('@sinclair/typebox').TObject<{
                      location: import('@sinclair/typebox').TOptional<
                        import('@sinclair/typebox').TUnion<
                          [
                            import('@sinclair/typebox').TOptional<
                              import('@sinclair/typebox').TString<string>
                            >,
                            import('@sinclair/typebox').TPartial<
                              import('@sinclair/typebox').TIntersect<
                                [
                                  import('@sinclair/typebox').TObject<{
                                    $gt: import('@sinclair/typebox').TOptional<
                                      import('@sinclair/typebox').TString<string>
                                    >
                                    $gte: import('@sinclair/typebox').TOptional<
                                      import('@sinclair/typebox').TString<string>
                                    >
                                    $lt: import('@sinclair/typebox').TOptional<
                                      import('@sinclair/typebox').TString<string>
                                    >
                                    $lte: import('@sinclair/typebox').TOptional<
                                      import('@sinclair/typebox').TString<string>
                                    >
                                    $ne: import('@sinclair/typebox').TOptional<
                                      import('@sinclair/typebox').TString<string>
                                    >
                                    $in: import('@sinclair/typebox').TArray<
                                      import('@sinclair/typebox').TOptional<
                                        import('@sinclair/typebox').TString<string>
                                      >
                                    >
                                    $nin: import('@sinclair/typebox').TArray<
                                      import('@sinclair/typebox').TOptional<
                                        import('@sinclair/typebox').TString<string>
                                      >
                                    >
                                  }>,
                                  import('@sinclair/typebox').TObject<
                                    | {
                                        [key: string]: import('@sinclair/typebox').TSchema
                                      }
                                    | undefined
                                  >
                                ]
                              >
                            >
                          ]
                        >
                      >
                      id: import('@sinclair/typebox').TOptional<
                        import('@sinclair/typebox').TUnion<
                          [
                            import('@sinclair/typebox').TString<'uuid'>,
                            import('@sinclair/typebox').TPartial<
                              import('@sinclair/typebox').TIntersect<
                                [
                                  import('@sinclair/typebox').TObject<{
                                    $gt: import('@sinclair/typebox').TString<'uuid'>
                                    $gte: import('@sinclair/typebox').TString<'uuid'>
                                    $lt: import('@sinclair/typebox').TString<'uuid'>
                                    $lte: import('@sinclair/typebox').TString<'uuid'>
                                    $ne: import('@sinclair/typebox').TString<'uuid'>
                                    $in: import('@sinclair/typebox').TArray<
                                      import('@sinclair/typebox').TString<'uuid'>
                                    >
                                    $nin: import('@sinclair/typebox').TArray<
                                      import('@sinclair/typebox').TString<'uuid'>
                                    >
                                  }>,
                                  import('@sinclair/typebox').TObject<
                                    | {
                                        [key: string]: import('@sinclair/typebox').TSchema
                                      }
                                    | undefined
                                  >
                                ]
                              >
                            >
                          ]
                        >
                      >
                      end: import('@sinclair/typebox').TOptional<
                        import('@sinclair/typebox').TUnion<
                          [
                            import('@sinclair/typebox').TString<'date-time'>,
                            import('@sinclair/typebox').TPartial<
                              import('@sinclair/typebox').TIntersect<
                                [
                                  import('@sinclair/typebox').TObject<{
                                    $gt: import('@sinclair/typebox').TString<'date-time'>
                                    $gte: import('@sinclair/typebox').TString<'date-time'>
                                    $lt: import('@sinclair/typebox').TString<'date-time'>
                                    $lte: import('@sinclair/typebox').TString<'date-time'>
                                    $ne: import('@sinclair/typebox').TString<'date-time'>
                                    $in: import('@sinclair/typebox').TArray<
                                      import('@sinclair/typebox').TString<'date-time'>
                                    >
                                    $nin: import('@sinclair/typebox').TArray<
                                      import('@sinclair/typebox').TString<'date-time'>
                                    >
                                  }>,
                                  import('@sinclair/typebox').TObject<
                                    | {
                                        [key: string]: import('@sinclair/typebox').TSchema
                                      }
                                    | undefined
                                  >
                                ]
                              >
                            >
                          ]
                        >
                      >
                      start: import('@sinclair/typebox').TOptional<
                        import('@sinclair/typebox').TUnion<
                          [
                            import('@sinclair/typebox').TString<'date-time'>,
                            import('@sinclair/typebox').TPartial<
                              import('@sinclair/typebox').TIntersect<
                                [
                                  import('@sinclair/typebox').TObject<{
                                    $gt: import('@sinclair/typebox').TString<'date-time'>
                                    $gte: import('@sinclair/typebox').TString<'date-time'>
                                    $lt: import('@sinclair/typebox').TString<'date-time'>
                                    $lte: import('@sinclair/typebox').TString<'date-time'>
                                    $ne: import('@sinclair/typebox').TString<'date-time'>
                                    $in: import('@sinclair/typebox').TArray<
                                      import('@sinclair/typebox').TString<'date-time'>
                                    >
                                    $nin: import('@sinclair/typebox').TArray<
                                      import('@sinclair/typebox').TString<'date-time'>
                                    >
                                  }>,
                                  import('@sinclair/typebox').TObject<
                                    | {
                                        [key: string]: import('@sinclair/typebox').TSchema
                                      }
                                    | undefined
                                  >
                                ]
                              >
                            >
                          ]
                        >
                      >
                      title: import('@sinclair/typebox').TOptional<
                        import('@sinclair/typebox').TUnion<
                          [
                            import('@sinclair/typebox').TString<string>,
                            import('@sinclair/typebox').TPartial<
                              import('@sinclair/typebox').TIntersect<
                                [
                                  import('@sinclair/typebox').TObject<{
                                    $gt: import('@sinclair/typebox').TString<string>
                                    $gte: import('@sinclair/typebox').TString<string>
                                    $lt: import('@sinclair/typebox').TString<string>
                                    $lte: import('@sinclair/typebox').TString<string>
                                    $ne: import('@sinclair/typebox').TString<string>
                                    $in: import('@sinclair/typebox').TArray<
                                      import('@sinclair/typebox').TString<string>
                                    >
                                    $nin: import('@sinclair/typebox').TArray<
                                      import('@sinclair/typebox').TString<string>
                                    >
                                  }>,
                                  import('@sinclair/typebox').TObject<
                                    | {
                                        [key: string]: import('@sinclair/typebox').TSchema
                                      }
                                    | undefined
                                  >
                                ]
                              >
                            >
                          ]
                        >
                      >
                      description: import('@sinclair/typebox').TOptional<
                        import('@sinclair/typebox').TUnion<
                          [
                            import('@sinclair/typebox').TString<string>,
                            import('@sinclair/typebox').TPartial<
                              import('@sinclair/typebox').TIntersect<
                                [
                                  import('@sinclair/typebox').TObject<{
                                    $gt: import('@sinclair/typebox').TString<string>
                                    $gte: import('@sinclair/typebox').TString<string>
                                    $lt: import('@sinclair/typebox').TString<string>
                                    $lte: import('@sinclair/typebox').TString<string>
                                    $ne: import('@sinclair/typebox').TString<string>
                                    $in: import('@sinclair/typebox').TArray<
                                      import('@sinclair/typebox').TString<string>
                                    >
                                    $nin: import('@sinclair/typebox').TArray<
                                      import('@sinclair/typebox').TString<string>
                                    >
                                  }>,
                                  import('@sinclair/typebox').TObject<
                                    | {
                                        [key: string]: import('@sinclair/typebox').TSchema
                                      }
                                    | undefined
                                  >
                                ]
                              >
                            >
                          ]
                        >
                      >
                      organizer: import('@sinclair/typebox').TOptional<
                        import('@sinclair/typebox').TUnion<
                          [
                            import('@sinclair/typebox').TString<string>,
                            import('@sinclair/typebox').TPartial<
                              import('@sinclair/typebox').TIntersect<
                                [
                                  import('@sinclair/typebox').TObject<{
                                    $gt: import('@sinclair/typebox').TString<string>
                                    $gte: import('@sinclair/typebox').TString<string>
                                    $lt: import('@sinclair/typebox').TString<string>
                                    $lte: import('@sinclair/typebox').TString<string>
                                    $ne: import('@sinclair/typebox').TString<string>
                                    $in: import('@sinclair/typebox').TArray<
                                      import('@sinclair/typebox').TString<string>
                                    >
                                    $nin: import('@sinclair/typebox').TArray<
                                      import('@sinclair/typebox').TString<string>
                                    >
                                  }>,
                                  import('@sinclair/typebox').TObject<
                                    | {
                                        [key: string]: import('@sinclair/typebox').TSchema
                                      }
                                    | undefined
                                  >
                                ]
                              >
                            >
                          ]
                        >
                      >
                      tags: import('@sinclair/typebox').TOptional<
                        import('@sinclair/typebox').TUnion<
                          [
                            import('@sinclair/typebox').TArray<import('@sinclair/typebox').TString<string>>,
                            import('@sinclair/typebox').TPartial<
                              import('@sinclair/typebox').TIntersect<
                                [
                                  import('@sinclair/typebox').TObject<{
                                    $gt: import('@sinclair/typebox').TArray<
                                      import('@sinclair/typebox').TString<string>
                                    >
                                    $gte: import('@sinclair/typebox').TArray<
                                      import('@sinclair/typebox').TString<string>
                                    >
                                    $lt: import('@sinclair/typebox').TArray<
                                      import('@sinclair/typebox').TString<string>
                                    >
                                    $lte: import('@sinclair/typebox').TArray<
                                      import('@sinclair/typebox').TString<string>
                                    >
                                    $ne: import('@sinclair/typebox').TArray<
                                      import('@sinclair/typebox').TString<string>
                                    >
                                    $in: import('@sinclair/typebox').TArray<
                                      import('@sinclair/typebox').TArray<
                                        import('@sinclair/typebox').TString<string>
                                      >
                                    >
                                    $nin: import('@sinclair/typebox').TArray<
                                      import('@sinclair/typebox').TArray<
                                        import('@sinclair/typebox').TString<string>
                                      >
                                    >
                                  }>,
                                  import('@sinclair/typebox').TObject<
                                    | {
                                        [key: string]: import('@sinclair/typebox').TSchema
                                      }
                                    | undefined
                                  >
                                ]
                              >
                            >
                          ]
                        >
                      >
                      registration_start: import('@sinclair/typebox').TOptional<
                        import('@sinclair/typebox').TUnion<
                          [
                            import('@sinclair/typebox').TString<'date-time'>,
                            import('@sinclair/typebox').TPartial<
                              import('@sinclair/typebox').TIntersect<
                                [
                                  import('@sinclair/typebox').TObject<{
                                    $gt: import('@sinclair/typebox').TString<'date-time'>
                                    $gte: import('@sinclair/typebox').TString<'date-time'>
                                    $lt: import('@sinclair/typebox').TString<'date-time'>
                                    $lte: import('@sinclair/typebox').TString<'date-time'>
                                    $ne: import('@sinclair/typebox').TString<'date-time'>
                                    $in: import('@sinclair/typebox').TArray<
                                      import('@sinclair/typebox').TString<'date-time'>
                                    >
                                    $nin: import('@sinclair/typebox').TArray<
                                      import('@sinclair/typebox').TString<'date-time'>
                                    >
                                  }>,
                                  import('@sinclair/typebox').TObject<
                                    | {
                                        [key: string]: import('@sinclair/typebox').TSchema
                                      }
                                    | undefined
                                  >
                                ]
                              >
                            >
                          ]
                        >
                      >
                      registration_end: import('@sinclair/typebox').TOptional<
                        import('@sinclair/typebox').TUnion<
                          [
                            import('@sinclair/typebox').TString<'date-time'>,
                            import('@sinclair/typebox').TPartial<
                              import('@sinclair/typebox').TIntersect<
                                [
                                  import('@sinclair/typebox').TObject<{
                                    $gt: import('@sinclair/typebox').TString<'date-time'>
                                    $gte: import('@sinclair/typebox').TString<'date-time'>
                                    $lt: import('@sinclair/typebox').TString<'date-time'>
                                    $lte: import('@sinclair/typebox').TString<'date-time'>
                                    $ne: import('@sinclair/typebox').TString<'date-time'>
                                    $in: import('@sinclair/typebox').TArray<
                                      import('@sinclair/typebox').TString<'date-time'>
                                    >
                                    $nin: import('@sinclair/typebox').TArray<
                                      import('@sinclair/typebox').TString<'date-time'>
                                    >
                                  }>,
                                  import('@sinclair/typebox').TObject<
                                    | {
                                        [key: string]: import('@sinclair/typebox').TSchema
                                      }
                                    | undefined
                                  >
                                ]
                              >
                            >
                          ]
                        >
                      >
                    }>
                  >,
                  import('@sinclair/typebox').TObject<{
                    $or: import('@sinclair/typebox').TArray<
                      import('@sinclair/typebox').TOptional<
                        import('@sinclair/typebox').TObject<{
                          location: import('@sinclair/typebox').TOptional<
                            import('@sinclair/typebox').TUnion<
                              [
                                import('@sinclair/typebox').TOptional<
                                  import('@sinclair/typebox').TString<string>
                                >,
                                import('@sinclair/typebox').TPartial<
                                  import('@sinclair/typebox').TIntersect<
                                    [
                                      import('@sinclair/typebox').TObject<{
                                        $gt: import('@sinclair/typebox').TOptional<
                                          import('@sinclair/typebox').TString<string>
                                        >
                                        $gte: import('@sinclair/typebox').TOptional<
                                          import('@sinclair/typebox').TString<string>
                                        >
                                        $lt: import('@sinclair/typebox').TOptional<
                                          import('@sinclair/typebox').TString<string>
                                        >
                                        $lte: import('@sinclair/typebox').TOptional<
                                          import('@sinclair/typebox').TString<string>
                                        >
                                        $ne: import('@sinclair/typebox').TOptional<
                                          import('@sinclair/typebox').TString<string>
                                        >
                                        $in: import('@sinclair/typebox').TArray<
                                          import('@sinclair/typebox').TOptional<
                                            import('@sinclair/typebox').TString<string>
                                          >
                                        >
                                        $nin: import('@sinclair/typebox').TArray<
                                          import('@sinclair/typebox').TOptional<
                                            import('@sinclair/typebox').TString<string>
                                          >
                                        >
                                      }>,
                                      import('@sinclair/typebox').TObject<
                                        | {
                                            [key: string]: import('@sinclair/typebox').TSchema
                                          }
                                        | undefined
                                      >
                                    ]
                                  >
                                >
                              ]
                            >
                          >
                          id: import('@sinclair/typebox').TOptional<
                            import('@sinclair/typebox').TUnion<
                              [
                                import('@sinclair/typebox').TString<'uuid'>,
                                import('@sinclair/typebox').TPartial<
                                  import('@sinclair/typebox').TIntersect<
                                    [
                                      import('@sinclair/typebox').TObject<{
                                        $gt: import('@sinclair/typebox').TString<'uuid'>
                                        $gte: import('@sinclair/typebox').TString<'uuid'>
                                        $lt: import('@sinclair/typebox').TString<'uuid'>
                                        $lte: import('@sinclair/typebox').TString<'uuid'>
                                        $ne: import('@sinclair/typebox').TString<'uuid'>
                                        $in: import('@sinclair/typebox').TArray<
                                          import('@sinclair/typebox').TString<'uuid'>
                                        >
                                        $nin: import('@sinclair/typebox').TArray<
                                          import('@sinclair/typebox').TString<'uuid'>
                                        >
                                      }>,
                                      import('@sinclair/typebox').TObject<
                                        | {
                                            [key: string]: import('@sinclair/typebox').TSchema
                                          }
                                        | undefined
                                      >
                                    ]
                                  >
                                >
                              ]
                            >
                          >
                          end: import('@sinclair/typebox').TOptional<
                            import('@sinclair/typebox').TUnion<
                              [
                                import('@sinclair/typebox').TString<'date-time'>,
                                import('@sinclair/typebox').TPartial<
                                  import('@sinclair/typebox').TIntersect<
                                    [
                                      import('@sinclair/typebox').TObject<{
                                        $gt: import('@sinclair/typebox').TString<'date-time'>
                                        $gte: import('@sinclair/typebox').TString<'date-time'>
                                        $lt: import('@sinclair/typebox').TString<'date-time'>
                                        $lte: import('@sinclair/typebox').TString<'date-time'>
                                        $ne: import('@sinclair/typebox').TString<'date-time'>
                                        $in: import('@sinclair/typebox').TArray<
                                          import('@sinclair/typebox').TString<'date-time'>
                                        >
                                        $nin: import('@sinclair/typebox').TArray<
                                          import('@sinclair/typebox').TString<'date-time'>
                                        >
                                      }>,
                                      import('@sinclair/typebox').TObject<
                                        | {
                                            [key: string]: import('@sinclair/typebox').TSchema
                                          }
                                        | undefined
                                      >
                                    ]
                                  >
                                >
                              ]
                            >
                          >
                          start: import('@sinclair/typebox').TOptional<
                            import('@sinclair/typebox').TUnion<
                              [
                                import('@sinclair/typebox').TString<'date-time'>,
                                import('@sinclair/typebox').TPartial<
                                  import('@sinclair/typebox').TIntersect<
                                    [
                                      import('@sinclair/typebox').TObject<{
                                        $gt: import('@sinclair/typebox').TString<'date-time'>
                                        $gte: import('@sinclair/typebox').TString<'date-time'>
                                        $lt: import('@sinclair/typebox').TString<'date-time'>
                                        $lte: import('@sinclair/typebox').TString<'date-time'>
                                        $ne: import('@sinclair/typebox').TString<'date-time'>
                                        $in: import('@sinclair/typebox').TArray<
                                          import('@sinclair/typebox').TString<'date-time'>
                                        >
                                        $nin: import('@sinclair/typebox').TArray<
                                          import('@sinclair/typebox').TString<'date-time'>
                                        >
                                      }>,
                                      import('@sinclair/typebox').TObject<
                                        | {
                                            [key: string]: import('@sinclair/typebox').TSchema
                                          }
                                        | undefined
                                      >
                                    ]
                                  >
                                >
                              ]
                            >
                          >
                          title: import('@sinclair/typebox').TOptional<
                            import('@sinclair/typebox').TUnion<
                              [
                                import('@sinclair/typebox').TString<string>,
                                import('@sinclair/typebox').TPartial<
                                  import('@sinclair/typebox').TIntersect<
                                    [
                                      import('@sinclair/typebox').TObject<{
                                        $gt: import('@sinclair/typebox').TString<string>
                                        $gte: import('@sinclair/typebox').TString<string>
                                        $lt: import('@sinclair/typebox').TString<string>
                                        $lte: import('@sinclair/typebox').TString<string>
                                        $ne: import('@sinclair/typebox').TString<string>
                                        $in: import('@sinclair/typebox').TArray<
                                          import('@sinclair/typebox').TString<string>
                                        >
                                        $nin: import('@sinclair/typebox').TArray<
                                          import('@sinclair/typebox').TString<string>
                                        >
                                      }>,
                                      import('@sinclair/typebox').TObject<
                                        | {
                                            [key: string]: import('@sinclair/typebox').TSchema
                                          }
                                        | undefined
                                      >
                                    ]
                                  >
                                >
                              ]
                            >
                          >
                          description: import('@sinclair/typebox').TOptional<
                            import('@sinclair/typebox').TUnion<
                              [
                                import('@sinclair/typebox').TString<string>,
                                import('@sinclair/typebox').TPartial<
                                  import('@sinclair/typebox').TIntersect<
                                    [
                                      import('@sinclair/typebox').TObject<{
                                        $gt: import('@sinclair/typebox').TString<string>
                                        $gte: import('@sinclair/typebox').TString<string>
                                        $lt: import('@sinclair/typebox').TString<string>
                                        $lte: import('@sinclair/typebox').TString<string>
                                        $ne: import('@sinclair/typebox').TString<string>
                                        $in: import('@sinclair/typebox').TArray<
                                          import('@sinclair/typebox').TString<string>
                                        >
                                        $nin: import('@sinclair/typebox').TArray<
                                          import('@sinclair/typebox').TString<string>
                                        >
                                      }>,
                                      import('@sinclair/typebox').TObject<
                                        | {
                                            [key: string]: import('@sinclair/typebox').TSchema
                                          }
                                        | undefined
                                      >
                                    ]
                                  >
                                >
                              ]
                            >
                          >
                          organizer: import('@sinclair/typebox').TOptional<
                            import('@sinclair/typebox').TUnion<
                              [
                                import('@sinclair/typebox').TString<string>,
                                import('@sinclair/typebox').TPartial<
                                  import('@sinclair/typebox').TIntersect<
                                    [
                                      import('@sinclair/typebox').TObject<{
                                        $gt: import('@sinclair/typebox').TString<string>
                                        $gte: import('@sinclair/typebox').TString<string>
                                        $lt: import('@sinclair/typebox').TString<string>
                                        $lte: import('@sinclair/typebox').TString<string>
                                        $ne: import('@sinclair/typebox').TString<string>
                                        $in: import('@sinclair/typebox').TArray<
                                          import('@sinclair/typebox').TString<string>
                                        >
                                        $nin: import('@sinclair/typebox').TArray<
                                          import('@sinclair/typebox').TString<string>
                                        >
                                      }>,
                                      import('@sinclair/typebox').TObject<
                                        | {
                                            [key: string]: import('@sinclair/typebox').TSchema
                                          }
                                        | undefined
                                      >
                                    ]
                                  >
                                >
                              ]
                            >
                          >
                          tags: import('@sinclair/typebox').TOptional<
                            import('@sinclair/typebox').TUnion<
                              [
                                import('@sinclair/typebox').TArray<
                                  import('@sinclair/typebox').TString<string>
                                >,
                                import('@sinclair/typebox').TPartial<
                                  import('@sinclair/typebox').TIntersect<
                                    [
                                      import('@sinclair/typebox').TObject<{
                                        $gt: import('@sinclair/typebox').TArray<
                                          import('@sinclair/typebox').TString<string>
                                        >
                                        $gte: import('@sinclair/typebox').TArray<
                                          import('@sinclair/typebox').TString<string>
                                        >
                                        $lt: import('@sinclair/typebox').TArray<
                                          import('@sinclair/typebox').TString<string>
                                        >
                                        $lte: import('@sinclair/typebox').TArray<
                                          import('@sinclair/typebox').TString<string>
                                        >
                                        $ne: import('@sinclair/typebox').TArray<
                                          import('@sinclair/typebox').TString<string>
                                        >
                                        $in: import('@sinclair/typebox').TArray<
                                          import('@sinclair/typebox').TArray<
                                            import('@sinclair/typebox').TString<string>
                                          >
                                        >
                                        $nin: import('@sinclair/typebox').TArray<
                                          import('@sinclair/typebox').TArray<
                                            import('@sinclair/typebox').TString<string>
                                          >
                                        >
                                      }>,
                                      import('@sinclair/typebox').TObject<
                                        | {
                                            [key: string]: import('@sinclair/typebox').TSchema
                                          }
                                        | undefined
                                      >
                                    ]
                                  >
                                >
                              ]
                            >
                          >
                          registration_start: import('@sinclair/typebox').TOptional<
                            import('@sinclair/typebox').TUnion<
                              [
                                import('@sinclair/typebox').TString<'date-time'>,
                                import('@sinclair/typebox').TPartial<
                                  import('@sinclair/typebox').TIntersect<
                                    [
                                      import('@sinclair/typebox').TObject<{
                                        $gt: import('@sinclair/typebox').TString<'date-time'>
                                        $gte: import('@sinclair/typebox').TString<'date-time'>
                                        $lt: import('@sinclair/typebox').TString<'date-time'>
                                        $lte: import('@sinclair/typebox').TString<'date-time'>
                                        $ne: import('@sinclair/typebox').TString<'date-time'>
                                        $in: import('@sinclair/typebox').TArray<
                                          import('@sinclair/typebox').TString<'date-time'>
                                        >
                                        $nin: import('@sinclair/typebox').TArray<
                                          import('@sinclair/typebox').TString<'date-time'>
                                        >
                                      }>,
                                      import('@sinclair/typebox').TObject<
                                        | {
                                            [key: string]: import('@sinclair/typebox').TSchema
                                          }
                                        | undefined
                                      >
                                    ]
                                  >
                                >
                              ]
                            >
                          >
                          registration_end: import('@sinclair/typebox').TOptional<
                            import('@sinclair/typebox').TUnion<
                              [
                                import('@sinclair/typebox').TString<'date-time'>,
                                import('@sinclair/typebox').TPartial<
                                  import('@sinclair/typebox').TIntersect<
                                    [
                                      import('@sinclair/typebox').TObject<{
                                        $gt: import('@sinclair/typebox').TString<'date-time'>
                                        $gte: import('@sinclair/typebox').TString<'date-time'>
                                        $lt: import('@sinclair/typebox').TString<'date-time'>
                                        $lte: import('@sinclair/typebox').TString<'date-time'>
                                        $ne: import('@sinclair/typebox').TString<'date-time'>
                                        $in: import('@sinclair/typebox').TArray<
                                          import('@sinclair/typebox').TString<'date-time'>
                                        >
                                        $nin: import('@sinclair/typebox').TArray<
                                          import('@sinclair/typebox').TString<'date-time'>
                                        >
                                      }>,
                                      import('@sinclair/typebox').TObject<
                                        | {
                                            [key: string]: import('@sinclair/typebox').TSchema
                                          }
                                        | undefined
                                      >
                                    ]
                                  >
                                >
                              ]
                            >
                          >
                        }>
                      >
                    >
                  }>
                ]
              >
            >
            $or: import('@sinclair/typebox').TArray<
              import('@sinclair/typebox').TOptional<
                import('@sinclair/typebox').TObject<{
                  location: import('@sinclair/typebox').TOptional<
                    import('@sinclair/typebox').TUnion<
                      [
                        import('@sinclair/typebox').TOptional<import('@sinclair/typebox').TString<string>>,
                        import('@sinclair/typebox').TPartial<
                          import('@sinclair/typebox').TIntersect<
                            [
                              import('@sinclair/typebox').TObject<{
                                $gt: import('@sinclair/typebox').TOptional<
                                  import('@sinclair/typebox').TString<string>
                                >
                                $gte: import('@sinclair/typebox').TOptional<
                                  import('@sinclair/typebox').TString<string>
                                >
                                $lt: import('@sinclair/typebox').TOptional<
                                  import('@sinclair/typebox').TString<string>
                                >
                                $lte: import('@sinclair/typebox').TOptional<
                                  import('@sinclair/typebox').TString<string>
                                >
                                $ne: import('@sinclair/typebox').TOptional<
                                  import('@sinclair/typebox').TString<string>
                                >
                                $in: import('@sinclair/typebox').TArray<
                                  import('@sinclair/typebox').TOptional<
                                    import('@sinclair/typebox').TString<string>
                                  >
                                >
                                $nin: import('@sinclair/typebox').TArray<
                                  import('@sinclair/typebox').TOptional<
                                    import('@sinclair/typebox').TString<string>
                                  >
                                >
                              }>,
                              import('@sinclair/typebox').TObject<
                                | {
                                    [key: string]: import('@sinclair/typebox').TSchema
                                  }
                                | undefined
                              >
                            ]
                          >
                        >
                      ]
                    >
                  >
                  id: import('@sinclair/typebox').TOptional<
                    import('@sinclair/typebox').TUnion<
                      [
                        import('@sinclair/typebox').TString<'uuid'>,
                        import('@sinclair/typebox').TPartial<
                          import('@sinclair/typebox').TIntersect<
                            [
                              import('@sinclair/typebox').TObject<{
                                $gt: import('@sinclair/typebox').TString<'uuid'>
                                $gte: import('@sinclair/typebox').TString<'uuid'>
                                $lt: import('@sinclair/typebox').TString<'uuid'>
                                $lte: import('@sinclair/typebox').TString<'uuid'>
                                $ne: import('@sinclair/typebox').TString<'uuid'>
                                $in: import('@sinclair/typebox').TArray<
                                  import('@sinclair/typebox').TString<'uuid'>
                                >
                                $nin: import('@sinclair/typebox').TArray<
                                  import('@sinclair/typebox').TString<'uuid'>
                                >
                              }>,
                              import('@sinclair/typebox').TObject<
                                | {
                                    [key: string]: import('@sinclair/typebox').TSchema
                                  }
                                | undefined
                              >
                            ]
                          >
                        >
                      ]
                    >
                  >
                  end: import('@sinclair/typebox').TOptional<
                    import('@sinclair/typebox').TUnion<
                      [
                        import('@sinclair/typebox').TString<'date-time'>,
                        import('@sinclair/typebox').TPartial<
                          import('@sinclair/typebox').TIntersect<
                            [
                              import('@sinclair/typebox').TObject<{
                                $gt: import('@sinclair/typebox').TString<'date-time'>
                                $gte: import('@sinclair/typebox').TString<'date-time'>
                                $lt: import('@sinclair/typebox').TString<'date-time'>
                                $lte: import('@sinclair/typebox').TString<'date-time'>
                                $ne: import('@sinclair/typebox').TString<'date-time'>
                                $in: import('@sinclair/typebox').TArray<
                                  import('@sinclair/typebox').TString<'date-time'>
                                >
                                $nin: import('@sinclair/typebox').TArray<
                                  import('@sinclair/typebox').TString<'date-time'>
                                >
                              }>,
                              import('@sinclair/typebox').TObject<
                                | {
                                    [key: string]: import('@sinclair/typebox').TSchema
                                  }
                                | undefined
                              >
                            ]
                          >
                        >
                      ]
                    >
                  >
                  start: import('@sinclair/typebox').TOptional<
                    import('@sinclair/typebox').TUnion<
                      [
                        import('@sinclair/typebox').TString<'date-time'>,
                        import('@sinclair/typebox').TPartial<
                          import('@sinclair/typebox').TIntersect<
                            [
                              import('@sinclair/typebox').TObject<{
                                $gt: import('@sinclair/typebox').TString<'date-time'>
                                $gte: import('@sinclair/typebox').TString<'date-time'>
                                $lt: import('@sinclair/typebox').TString<'date-time'>
                                $lte: import('@sinclair/typebox').TString<'date-time'>
                                $ne: import('@sinclair/typebox').TString<'date-time'>
                                $in: import('@sinclair/typebox').TArray<
                                  import('@sinclair/typebox').TString<'date-time'>
                                >
                                $nin: import('@sinclair/typebox').TArray<
                                  import('@sinclair/typebox').TString<'date-time'>
                                >
                              }>,
                              import('@sinclair/typebox').TObject<
                                | {
                                    [key: string]: import('@sinclair/typebox').TSchema
                                  }
                                | undefined
                              >
                            ]
                          >
                        >
                      ]
                    >
                  >
                  title: import('@sinclair/typebox').TOptional<
                    import('@sinclair/typebox').TUnion<
                      [
                        import('@sinclair/typebox').TString<string>,
                        import('@sinclair/typebox').TPartial<
                          import('@sinclair/typebox').TIntersect<
                            [
                              import('@sinclair/typebox').TObject<{
                                $gt: import('@sinclair/typebox').TString<string>
                                $gte: import('@sinclair/typebox').TString<string>
                                $lt: import('@sinclair/typebox').TString<string>
                                $lte: import('@sinclair/typebox').TString<string>
                                $ne: import('@sinclair/typebox').TString<string>
                                $in: import('@sinclair/typebox').TArray<
                                  import('@sinclair/typebox').TString<string>
                                >
                                $nin: import('@sinclair/typebox').TArray<
                                  import('@sinclair/typebox').TString<string>
                                >
                              }>,
                              import('@sinclair/typebox').TObject<
                                | {
                                    [key: string]: import('@sinclair/typebox').TSchema
                                  }
                                | undefined
                              >
                            ]
                          >
                        >
                      ]
                    >
                  >
                  description: import('@sinclair/typebox').TOptional<
                    import('@sinclair/typebox').TUnion<
                      [
                        import('@sinclair/typebox').TString<string>,
                        import('@sinclair/typebox').TPartial<
                          import('@sinclair/typebox').TIntersect<
                            [
                              import('@sinclair/typebox').TObject<{
                                $gt: import('@sinclair/typebox').TString<string>
                                $gte: import('@sinclair/typebox').TString<string>
                                $lt: import('@sinclair/typebox').TString<string>
                                $lte: import('@sinclair/typebox').TString<string>
                                $ne: import('@sinclair/typebox').TString<string>
                                $in: import('@sinclair/typebox').TArray<
                                  import('@sinclair/typebox').TString<string>
                                >
                                $nin: import('@sinclair/typebox').TArray<
                                  import('@sinclair/typebox').TString<string>
                                >
                              }>,
                              import('@sinclair/typebox').TObject<
                                | {
                                    [key: string]: import('@sinclair/typebox').TSchema
                                  }
                                | undefined
                              >
                            ]
                          >
                        >
                      ]
                    >
                  >
                  organizer: import('@sinclair/typebox').TOptional<
                    import('@sinclair/typebox').TUnion<
                      [
                        import('@sinclair/typebox').TString<string>,
                        import('@sinclair/typebox').TPartial<
                          import('@sinclair/typebox').TIntersect<
                            [
                              import('@sinclair/typebox').TObject<{
                                $gt: import('@sinclair/typebox').TString<string>
                                $gte: import('@sinclair/typebox').TString<string>
                                $lt: import('@sinclair/typebox').TString<string>
                                $lte: import('@sinclair/typebox').TString<string>
                                $ne: import('@sinclair/typebox').TString<string>
                                $in: import('@sinclair/typebox').TArray<
                                  import('@sinclair/typebox').TString<string>
                                >
                                $nin: import('@sinclair/typebox').TArray<
                                  import('@sinclair/typebox').TString<string>
                                >
                              }>,
                              import('@sinclair/typebox').TObject<
                                | {
                                    [key: string]: import('@sinclair/typebox').TSchema
                                  }
                                | undefined
                              >
                            ]
                          >
                        >
                      ]
                    >
                  >
                  tags: import('@sinclair/typebox').TOptional<
                    import('@sinclair/typebox').TUnion<
                      [
                        import('@sinclair/typebox').TArray<import('@sinclair/typebox').TString<string>>,
                        import('@sinclair/typebox').TPartial<
                          import('@sinclair/typebox').TIntersect<
                            [
                              import('@sinclair/typebox').TObject<{
                                $gt: import('@sinclair/typebox').TArray<
                                  import('@sinclair/typebox').TString<string>
                                >
                                $gte: import('@sinclair/typebox').TArray<
                                  import('@sinclair/typebox').TString<string>
                                >
                                $lt: import('@sinclair/typebox').TArray<
                                  import('@sinclair/typebox').TString<string>
                                >
                                $lte: import('@sinclair/typebox').TArray<
                                  import('@sinclair/typebox').TString<string>
                                >
                                $ne: import('@sinclair/typebox').TArray<
                                  import('@sinclair/typebox').TString<string>
                                >
                                $in: import('@sinclair/typebox').TArray<
                                  import('@sinclair/typebox').TArray<
                                    import('@sinclair/typebox').TString<string>
                                  >
                                >
                                $nin: import('@sinclair/typebox').TArray<
                                  import('@sinclair/typebox').TArray<
                                    import('@sinclair/typebox').TString<string>
                                  >
                                >
                              }>,
                              import('@sinclair/typebox').TObject<
                                | {
                                    [key: string]: import('@sinclair/typebox').TSchema
                                  }
                                | undefined
                              >
                            ]
                          >
                        >
                      ]
                    >
                  >
                  registration_start: import('@sinclair/typebox').TOptional<
                    import('@sinclair/typebox').TUnion<
                      [
                        import('@sinclair/typebox').TString<'date-time'>,
                        import('@sinclair/typebox').TPartial<
                          import('@sinclair/typebox').TIntersect<
                            [
                              import('@sinclair/typebox').TObject<{
                                $gt: import('@sinclair/typebox').TString<'date-time'>
                                $gte: import('@sinclair/typebox').TString<'date-time'>
                                $lt: import('@sinclair/typebox').TString<'date-time'>
                                $lte: import('@sinclair/typebox').TString<'date-time'>
                                $ne: import('@sinclair/typebox').TString<'date-time'>
                                $in: import('@sinclair/typebox').TArray<
                                  import('@sinclair/typebox').TString<'date-time'>
                                >
                                $nin: import('@sinclair/typebox').TArray<
                                  import('@sinclair/typebox').TString<'date-time'>
                                >
                              }>,
                              import('@sinclair/typebox').TObject<
                                | {
                                    [key: string]: import('@sinclair/typebox').TSchema
                                  }
                                | undefined
                              >
                            ]
                          >
                        >
                      ]
                    >
                  >
                  registration_end: import('@sinclair/typebox').TOptional<
                    import('@sinclair/typebox').TUnion<
                      [
                        import('@sinclair/typebox').TString<'date-time'>,
                        import('@sinclair/typebox').TPartial<
                          import('@sinclair/typebox').TIntersect<
                            [
                              import('@sinclair/typebox').TObject<{
                                $gt: import('@sinclair/typebox').TString<'date-time'>
                                $gte: import('@sinclair/typebox').TString<'date-time'>
                                $lt: import('@sinclair/typebox').TString<'date-time'>
                                $lte: import('@sinclair/typebox').TString<'date-time'>
                                $ne: import('@sinclair/typebox').TString<'date-time'>
                                $in: import('@sinclair/typebox').TArray<
                                  import('@sinclair/typebox').TString<'date-time'>
                                >
                                $nin: import('@sinclair/typebox').TArray<
                                  import('@sinclair/typebox').TString<'date-time'>
                                >
                              }>,
                              import('@sinclair/typebox').TObject<
                                | {
                                    [key: string]: import('@sinclair/typebox').TSchema
                                  }
                                | undefined
                              >
                            ]
                          >
                        >
                      ]
                    >
                  >
                }>
              >
            >
          }>
        >,
        import('@sinclair/typebox').TOptional<
          import('@sinclair/typebox').TObject<{
            location: import('@sinclair/typebox').TOptional<
              import('@sinclair/typebox').TUnion<
                [
                  import('@sinclair/typebox').TOptional<import('@sinclair/typebox').TString<string>>,
                  import('@sinclair/typebox').TPartial<
                    import('@sinclair/typebox').TIntersect<
                      [
                        import('@sinclair/typebox').TObject<{
                          $gt: import('@sinclair/typebox').TOptional<
                            import('@sinclair/typebox').TString<string>
                          >
                          $gte: import('@sinclair/typebox').TOptional<
                            import('@sinclair/typebox').TString<string>
                          >
                          $lt: import('@sinclair/typebox').TOptional<
                            import('@sinclair/typebox').TString<string>
                          >
                          $lte: import('@sinclair/typebox').TOptional<
                            import('@sinclair/typebox').TString<string>
                          >
                          $ne: import('@sinclair/typebox').TOptional<
                            import('@sinclair/typebox').TString<string>
                          >
                          $in: import('@sinclair/typebox').TArray<
                            import('@sinclair/typebox').TOptional<import('@sinclair/typebox').TString<string>>
                          >
                          $nin: import('@sinclair/typebox').TArray<
                            import('@sinclair/typebox').TOptional<import('@sinclair/typebox').TString<string>>
                          >
                        }>,
                        import('@sinclair/typebox').TObject<
                          | {
                              [key: string]: import('@sinclair/typebox').TSchema
                            }
                          | undefined
                        >
                      ]
                    >
                  >
                ]
              >
            >
            id: import('@sinclair/typebox').TOptional<
              import('@sinclair/typebox').TUnion<
                [
                  import('@sinclair/typebox').TString<'uuid'>,
                  import('@sinclair/typebox').TPartial<
                    import('@sinclair/typebox').TIntersect<
                      [
                        import('@sinclair/typebox').TObject<{
                          $gt: import('@sinclair/typebox').TString<'uuid'>
                          $gte: import('@sinclair/typebox').TString<'uuid'>
                          $lt: import('@sinclair/typebox').TString<'uuid'>
                          $lte: import('@sinclair/typebox').TString<'uuid'>
                          $ne: import('@sinclair/typebox').TString<'uuid'>
                          $in: import('@sinclair/typebox').TArray<import('@sinclair/typebox').TString<'uuid'>>
                          $nin: import('@sinclair/typebox').TArray<
                            import('@sinclair/typebox').TString<'uuid'>
                          >
                        }>,
                        import('@sinclair/typebox').TObject<
                          | {
                              [key: string]: import('@sinclair/typebox').TSchema
                            }
                          | undefined
                        >
                      ]
                    >
                  >
                ]
              >
            >
            end: import('@sinclair/typebox').TOptional<
              import('@sinclair/typebox').TUnion<
                [
                  import('@sinclair/typebox').TString<'date-time'>,
                  import('@sinclair/typebox').TPartial<
                    import('@sinclair/typebox').TIntersect<
                      [
                        import('@sinclair/typebox').TObject<{
                          $gt: import('@sinclair/typebox').TString<'date-time'>
                          $gte: import('@sinclair/typebox').TString<'date-time'>
                          $lt: import('@sinclair/typebox').TString<'date-time'>
                          $lte: import('@sinclair/typebox').TString<'date-time'>
                          $ne: import('@sinclair/typebox').TString<'date-time'>
                          $in: import('@sinclair/typebox').TArray<
                            import('@sinclair/typebox').TString<'date-time'>
                          >
                          $nin: import('@sinclair/typebox').TArray<
                            import('@sinclair/typebox').TString<'date-time'>
                          >
                        }>,
                        import('@sinclair/typebox').TObject<
                          | {
                              [key: string]: import('@sinclair/typebox').TSchema
                            }
                          | undefined
                        >
                      ]
                    >
                  >
                ]
              >
            >
            start: import('@sinclair/typebox').TOptional<
              import('@sinclair/typebox').TUnion<
                [
                  import('@sinclair/typebox').TString<'date-time'>,
                  import('@sinclair/typebox').TPartial<
                    import('@sinclair/typebox').TIntersect<
                      [
                        import('@sinclair/typebox').TObject<{
                          $gt: import('@sinclair/typebox').TString<'date-time'>
                          $gte: import('@sinclair/typebox').TString<'date-time'>
                          $lt: import('@sinclair/typebox').TString<'date-time'>
                          $lte: import('@sinclair/typebox').TString<'date-time'>
                          $ne: import('@sinclair/typebox').TString<'date-time'>
                          $in: import('@sinclair/typebox').TArray<
                            import('@sinclair/typebox').TString<'date-time'>
                          >
                          $nin: import('@sinclair/typebox').TArray<
                            import('@sinclair/typebox').TString<'date-time'>
                          >
                        }>,
                        import('@sinclair/typebox').TObject<
                          | {
                              [key: string]: import('@sinclair/typebox').TSchema
                            }
                          | undefined
                        >
                      ]
                    >
                  >
                ]
              >
            >
            title: import('@sinclair/typebox').TOptional<
              import('@sinclair/typebox').TUnion<
                [
                  import('@sinclair/typebox').TString<string>,
                  import('@sinclair/typebox').TPartial<
                    import('@sinclair/typebox').TIntersect<
                      [
                        import('@sinclair/typebox').TObject<{
                          $gt: import('@sinclair/typebox').TString<string>
                          $gte: import('@sinclair/typebox').TString<string>
                          $lt: import('@sinclair/typebox').TString<string>
                          $lte: import('@sinclair/typebox').TString<string>
                          $ne: import('@sinclair/typebox').TString<string>
                          $in: import('@sinclair/typebox').TArray<import('@sinclair/typebox').TString<string>>
                          $nin: import('@sinclair/typebox').TArray<
                            import('@sinclair/typebox').TString<string>
                          >
                        }>,
                        import('@sinclair/typebox').TObject<
                          | {
                              [key: string]: import('@sinclair/typebox').TSchema
                            }
                          | undefined
                        >
                      ]
                    >
                  >
                ]
              >
            >
            description: import('@sinclair/typebox').TOptional<
              import('@sinclair/typebox').TUnion<
                [
                  import('@sinclair/typebox').TString<string>,
                  import('@sinclair/typebox').TPartial<
                    import('@sinclair/typebox').TIntersect<
                      [
                        import('@sinclair/typebox').TObject<{
                          $gt: import('@sinclair/typebox').TString<string>
                          $gte: import('@sinclair/typebox').TString<string>
                          $lt: import('@sinclair/typebox').TString<string>
                          $lte: import('@sinclair/typebox').TString<string>
                          $ne: import('@sinclair/typebox').TString<string>
                          $in: import('@sinclair/typebox').TArray<import('@sinclair/typebox').TString<string>>
                          $nin: import('@sinclair/typebox').TArray<
                            import('@sinclair/typebox').TString<string>
                          >
                        }>,
                        import('@sinclair/typebox').TObject<
                          | {
                              [key: string]: import('@sinclair/typebox').TSchema
                            }
                          | undefined
                        >
                      ]
                    >
                  >
                ]
              >
            >
            organizer: import('@sinclair/typebox').TOptional<
              import('@sinclair/typebox').TUnion<
                [
                  import('@sinclair/typebox').TString<string>,
                  import('@sinclair/typebox').TPartial<
                    import('@sinclair/typebox').TIntersect<
                      [
                        import('@sinclair/typebox').TObject<{
                          $gt: import('@sinclair/typebox').TString<string>
                          $gte: import('@sinclair/typebox').TString<string>
                          $lt: import('@sinclair/typebox').TString<string>
                          $lte: import('@sinclair/typebox').TString<string>
                          $ne: import('@sinclair/typebox').TString<string>
                          $in: import('@sinclair/typebox').TArray<import('@sinclair/typebox').TString<string>>
                          $nin: import('@sinclair/typebox').TArray<
                            import('@sinclair/typebox').TString<string>
                          >
                        }>,
                        import('@sinclair/typebox').TObject<
                          | {
                              [key: string]: import('@sinclair/typebox').TSchema
                            }
                          | undefined
                        >
                      ]
                    >
                  >
                ]
              >
            >
            tags: import('@sinclair/typebox').TOptional<
              import('@sinclair/typebox').TUnion<
                [
                  import('@sinclair/typebox').TArray<import('@sinclair/typebox').TString<string>>,
                  import('@sinclair/typebox').TPartial<
                    import('@sinclair/typebox').TIntersect<
                      [
                        import('@sinclair/typebox').TObject<{
                          $gt: import('@sinclair/typebox').TArray<import('@sinclair/typebox').TString<string>>
                          $gte: import('@sinclair/typebox').TArray<
                            import('@sinclair/typebox').TString<string>
                          >
                          $lt: import('@sinclair/typebox').TArray<import('@sinclair/typebox').TString<string>>
                          $lte: import('@sinclair/typebox').TArray<
                            import('@sinclair/typebox').TString<string>
                          >
                          $ne: import('@sinclair/typebox').TArray<import('@sinclair/typebox').TString<string>>
                          $in: import('@sinclair/typebox').TArray<
                            import('@sinclair/typebox').TArray<import('@sinclair/typebox').TString<string>>
                          >
                          $nin: import('@sinclair/typebox').TArray<
                            import('@sinclair/typebox').TArray<import('@sinclair/typebox').TString<string>>
                          >
                        }>,
                        import('@sinclair/typebox').TObject<
                          | {
                              [key: string]: import('@sinclair/typebox').TSchema
                            }
                          | undefined
                        >
                      ]
                    >
                  >
                ]
              >
            >
            registration_start: import('@sinclair/typebox').TOptional<
              import('@sinclair/typebox').TUnion<
                [
                  import('@sinclair/typebox').TString<'date-time'>,
                  import('@sinclair/typebox').TPartial<
                    import('@sinclair/typebox').TIntersect<
                      [
                        import('@sinclair/typebox').TObject<{
                          $gt: import('@sinclair/typebox').TString<'date-time'>
                          $gte: import('@sinclair/typebox').TString<'date-time'>
                          $lt: import('@sinclair/typebox').TString<'date-time'>
                          $lte: import('@sinclair/typebox').TString<'date-time'>
                          $ne: import('@sinclair/typebox').TString<'date-time'>
                          $in: import('@sinclair/typebox').TArray<
                            import('@sinclair/typebox').TString<'date-time'>
                          >
                          $nin: import('@sinclair/typebox').TArray<
                            import('@sinclair/typebox').TString<'date-time'>
                          >
                        }>,
                        import('@sinclair/typebox').TObject<
                          | {
                              [key: string]: import('@sinclair/typebox').TSchema
                            }
                          | undefined
                        >
                      ]
                    >
                  >
                ]
              >
            >
            registration_end: import('@sinclair/typebox').TOptional<
              import('@sinclair/typebox').TUnion<
                [
                  import('@sinclair/typebox').TString<'date-time'>,
                  import('@sinclair/typebox').TPartial<
                    import('@sinclair/typebox').TIntersect<
                      [
                        import('@sinclair/typebox').TObject<{
                          $gt: import('@sinclair/typebox').TString<'date-time'>
                          $gte: import('@sinclair/typebox').TString<'date-time'>
                          $lt: import('@sinclair/typebox').TString<'date-time'>
                          $lte: import('@sinclair/typebox').TString<'date-time'>
                          $ne: import('@sinclair/typebox').TString<'date-time'>
                          $in: import('@sinclair/typebox').TArray<
                            import('@sinclair/typebox').TString<'date-time'>
                          >
                          $nin: import('@sinclair/typebox').TArray<
                            import('@sinclair/typebox').TString<'date-time'>
                          >
                        }>,
                        import('@sinclair/typebox').TObject<
                          | {
                              [key: string]: import('@sinclair/typebox').TSchema
                            }
                          | undefined
                        >
                      ]
                    >
                  >
                ]
              >
            >
          }>
        >
      ]
    >,
    import('@sinclair/typebox').TObject<{}>
  ]
>
export type EventQuery = Static<typeof eventQuerySchema>
export declare const eventQueryValidator: import('@feathersjs/schema').Validator<any, any>
export declare const eventQueryResolver: import('@feathersjs/schema').Resolver<
  Partial<{
    $limit: number
    $skip: number
    $sort: {
      location?: number | undefined
      id?: number | undefined
      end?: number | undefined
      start?: number | undefined
      title?: number | undefined
      description?: number | undefined
      organizer?: number | undefined
      tags?: number | undefined
      registration_start?: number | undefined
      registration_end?: number | undefined
    }
    $select: (
      | 'location'
      | 'id'
      | 'end'
      | 'start'
      | 'title'
      | 'description'
      | 'organizer'
      | 'tags'
      | 'registration_start'
      | 'registration_end'
    )[]
    $and: (
      | {
          location?:
            | string
            | Partial<
                {
                  $gt?: string | undefined
                  $gte?: string | undefined
                  $lt?: string | undefined
                  $lte?: string | undefined
                  $ne?: string | undefined
                  $in: string[]
                  $nin: string[]
                } & {}
              >
            | undefined
          id?:
            | string
            | Partial<
                {
                  $gt: string
                  $gte: string
                  $lt: string
                  $lte: string
                  $ne: string
                  $in: string[]
                  $nin: string[]
                } & {}
              >
            | undefined
          end?:
            | string
            | Partial<
                {
                  $gt: string
                  $gte: string
                  $lt: string
                  $lte: string
                  $ne: string
                  $in: string[]
                  $nin: string[]
                } & {}
              >
            | undefined
          start?:
            | string
            | Partial<
                {
                  $gt: string
                  $gte: string
                  $lt: string
                  $lte: string
                  $ne: string
                  $in: string[]
                  $nin: string[]
                } & {}
              >
            | undefined
          title?:
            | string
            | Partial<
                {
                  $gt: string
                  $gte: string
                  $lt: string
                  $lte: string
                  $ne: string
                  $in: string[]
                  $nin: string[]
                } & {}
              >
            | undefined
          description?:
            | string
            | Partial<
                {
                  $gt: string
                  $gte: string
                  $lt: string
                  $lte: string
                  $ne: string
                  $in: string[]
                  $nin: string[]
                } & {}
              >
            | undefined
          organizer?:
            | string
            | Partial<
                {
                  $gt: string
                  $gte: string
                  $lt: string
                  $lte: string
                  $ne: string
                  $in: string[]
                  $nin: string[]
                } & {}
              >
            | undefined
          tags?:
            | string[]
            | Partial<
                {
                  $gt: string[]
                  $gte: string[]
                  $lt: string[]
                  $lte: string[]
                  $ne: string[]
                  $in: string[][]
                  $nin: string[][]
                } & {}
              >
            | undefined
          registration_start?:
            | string
            | Partial<
                {
                  $gt: string
                  $gte: string
                  $lt: string
                  $lte: string
                  $ne: string
                  $in: string[]
                  $nin: string[]
                } & {}
              >
            | undefined
          registration_end?:
            | string
            | Partial<
                {
                  $gt: string
                  $gte: string
                  $lt: string
                  $lte: string
                  $ne: string
                  $in: string[]
                  $nin: string[]
                } & {}
              >
            | undefined
        }
      | {
          $or: {
            location?:
              | string
              | Partial<
                  {
                    $gt?: string | undefined
                    $gte?: string | undefined
                    $lt?: string | undefined
                    $lte?: string | undefined
                    $ne?: string | undefined
                    $in: string[]
                    $nin: string[]
                  } & {}
                >
              | undefined
            id?:
              | string
              | Partial<
                  {
                    $gt: string
                    $gte: string
                    $lt: string
                    $lte: string
                    $ne: string
                    $in: string[]
                    $nin: string[]
                  } & {}
                >
              | undefined
            end?:
              | string
              | Partial<
                  {
                    $gt: string
                    $gte: string
                    $lt: string
                    $lte: string
                    $ne: string
                    $in: string[]
                    $nin: string[]
                  } & {}
                >
              | undefined
            start?:
              | string
              | Partial<
                  {
                    $gt: string
                    $gte: string
                    $lt: string
                    $lte: string
                    $ne: string
                    $in: string[]
                    $nin: string[]
                  } & {}
                >
              | undefined
            title?:
              | string
              | Partial<
                  {
                    $gt: string
                    $gte: string
                    $lt: string
                    $lte: string
                    $ne: string
                    $in: string[]
                    $nin: string[]
                  } & {}
                >
              | undefined
            description?:
              | string
              | Partial<
                  {
                    $gt: string
                    $gte: string
                    $lt: string
                    $lte: string
                    $ne: string
                    $in: string[]
                    $nin: string[]
                  } & {}
                >
              | undefined
            organizer?:
              | string
              | Partial<
                  {
                    $gt: string
                    $gte: string
                    $lt: string
                    $lte: string
                    $ne: string
                    $in: string[]
                    $nin: string[]
                  } & {}
                >
              | undefined
            tags?:
              | string[]
              | Partial<
                  {
                    $gt: string[]
                    $gte: string[]
                    $lt: string[]
                    $lte: string[]
                    $ne: string[]
                    $in: string[][]
                    $nin: string[][]
                  } & {}
                >
              | undefined
            registration_start?:
              | string
              | Partial<
                  {
                    $gt: string
                    $gte: string
                    $lt: string
                    $lte: string
                    $ne: string
                    $in: string[]
                    $nin: string[]
                  } & {}
                >
              | undefined
            registration_end?:
              | string
              | Partial<
                  {
                    $gt: string
                    $gte: string
                    $lt: string
                    $lte: string
                    $ne: string
                    $in: string[]
                    $nin: string[]
                  } & {}
                >
              | undefined
          }[]
        }
    )[]
    $or: {
      location?:
        | string
        | Partial<
            {
              $gt?: string | undefined
              $gte?: string | undefined
              $lt?: string | undefined
              $lte?: string | undefined
              $ne?: string | undefined
              $in: string[]
              $nin: string[]
            } & {}
          >
        | undefined
      id?:
        | string
        | Partial<
            {
              $gt: string
              $gte: string
              $lt: string
              $lte: string
              $ne: string
              $in: string[]
              $nin: string[]
            } & {}
          >
        | undefined
      end?:
        | string
        | Partial<
            {
              $gt: string
              $gte: string
              $lt: string
              $lte: string
              $ne: string
              $in: string[]
              $nin: string[]
            } & {}
          >
        | undefined
      start?:
        | string
        | Partial<
            {
              $gt: string
              $gte: string
              $lt: string
              $lte: string
              $ne: string
              $in: string[]
              $nin: string[]
            } & {}
          >
        | undefined
      title?:
        | string
        | Partial<
            {
              $gt: string
              $gte: string
              $lt: string
              $lte: string
              $ne: string
              $in: string[]
              $nin: string[]
            } & {}
          >
        | undefined
      description?:
        | string
        | Partial<
            {
              $gt: string
              $gte: string
              $lt: string
              $lte: string
              $ne: string
              $in: string[]
              $nin: string[]
            } & {}
          >
        | undefined
      organizer?:
        | string
        | Partial<
            {
              $gt: string
              $gte: string
              $lt: string
              $lte: string
              $ne: string
              $in: string[]
              $nin: string[]
            } & {}
          >
        | undefined
      tags?:
        | string[]
        | Partial<
            {
              $gt: string[]
              $gte: string[]
              $lt: string[]
              $lte: string[]
              $ne: string[]
              $in: string[][]
              $nin: string[][]
            } & {}
          >
        | undefined
      registration_start?:
        | string
        | Partial<
            {
              $gt: string
              $gte: string
              $lt: string
              $lte: string
              $ne: string
              $in: string[]
              $nin: string[]
            } & {}
          >
        | undefined
      registration_end?:
        | string
        | Partial<
            {
              $gt: string
              $gte: string
              $lt: string
              $lte: string
              $ne: string
              $in: string[]
              $nin: string[]
            } & {}
          >
        | undefined
    }[]
  }> & {
    location?:
      | string
      | Partial<
          {
            $gt?: string | undefined
            $gte?: string | undefined
            $lt?: string | undefined
            $lte?: string | undefined
            $ne?: string | undefined
            $in: string[]
            $nin: string[]
          } & {}
        >
      | undefined
    id?:
      | string
      | Partial<
          {
            $gt: string
            $gte: string
            $lt: string
            $lte: string
            $ne: string
            $in: string[]
            $nin: string[]
          } & {}
        >
      | undefined
    end?:
      | string
      | Partial<
          {
            $gt: string
            $gte: string
            $lt: string
            $lte: string
            $ne: string
            $in: string[]
            $nin: string[]
          } & {}
        >
      | undefined
    start?:
      | string
      | Partial<
          {
            $gt: string
            $gte: string
            $lt: string
            $lte: string
            $ne: string
            $in: string[]
            $nin: string[]
          } & {}
        >
      | undefined
    title?:
      | string
      | Partial<
          {
            $gt: string
            $gte: string
            $lt: string
            $lte: string
            $ne: string
            $in: string[]
            $nin: string[]
          } & {}
        >
      | undefined
    description?:
      | string
      | Partial<
          {
            $gt: string
            $gte: string
            $lt: string
            $lte: string
            $ne: string
            $in: string[]
            $nin: string[]
          } & {}
        >
      | undefined
    organizer?:
      | string
      | Partial<
          {
            $gt: string
            $gte: string
            $lt: string
            $lte: string
            $ne: string
            $in: string[]
            $nin: string[]
          } & {}
        >
      | undefined
    tags?:
      | string[]
      | Partial<
          {
            $gt: string[]
            $gte: string[]
            $lt: string[]
            $lte: string[]
            $ne: string[]
            $in: string[][]
            $nin: string[][]
          } & {}
        >
      | undefined
    registration_start?:
      | string
      | Partial<
          {
            $gt: string
            $gte: string
            $lt: string
            $lte: string
            $ne: string
            $in: string[]
            $nin: string[]
          } & {}
        >
      | undefined
    registration_end?:
      | string
      | Partial<
          {
            $gt: string
            $gte: string
            $lt: string
            $lte: string
            $ne: string
            $in: string[]
            $nin: string[]
          } & {}
        >
      | undefined
  } & {},
  HookContext
>
