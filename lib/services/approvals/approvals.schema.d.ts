import type { Static } from '@feathersjs/typebox'
import type { HookContext } from '../../declarations'
export declare const approvalSchema: import('@sinclair/typebox').TObject<{
  id: import('@sinclair/typebox').TNumber
  text: import('@sinclair/typebox').TString<string>
}>
export type Approval = Static<typeof approvalSchema>
export declare const approvalValidator: import('@feathersjs/schema').Validator<any, any>
export declare const approvalResolver: import('@feathersjs/schema').Resolver<
  {
    id: number
    text: string
  },
  HookContext
>
export declare const approvalExternalResolver: import('@feathersjs/schema').Resolver<
  {
    id: number
    text: string
  },
  HookContext
>
export declare const approvalDataSchema: import('@sinclair/typebox').TPick<
  import('@sinclair/typebox').TObject<{
    id: import('@sinclair/typebox').TNumber
    text: import('@sinclair/typebox').TString<string>
  }>,
  ['text']
>
export type ApprovalData = Static<typeof approvalDataSchema>
export declare const approvalDataValidator: import('@feathersjs/schema').Validator<any, any>
export declare const approvalDataResolver: import('@feathersjs/schema').Resolver<
  {
    id: number
    text: string
  },
  HookContext
>
export declare const approvalPatchSchema: import('@sinclair/typebox').TPartial<
  import('@sinclair/typebox').TObject<{
    id: import('@sinclair/typebox').TNumber
    text: import('@sinclair/typebox').TString<string>
  }>
>
export type ApprovalPatch = Static<typeof approvalPatchSchema>
export declare const approvalPatchValidator: import('@feathersjs/schema').Validator<any, any>
export declare const approvalPatchResolver: import('@feathersjs/schema').Resolver<
  {
    id: number
    text: string
  },
  HookContext
>
export declare const approvalQueryProperties: import('@sinclair/typebox').TPick<
  import('@sinclair/typebox').TObject<{
    id: import('@sinclair/typebox').TNumber
    text: import('@sinclair/typebox').TString<string>
  }>,
  ['id', 'text']
>
export declare const approvalQuerySchema: import('@sinclair/typebox').TIntersect<
  [
    import('@sinclair/typebox').TIntersect<
      [
        import('@sinclair/typebox').TPartial<
          import('@sinclair/typebox').TObject<{
            $limit: import('@sinclair/typebox').TNumber
            $skip: import('@sinclair/typebox').TNumber
            $sort: import('@sinclair/typebox').TObject<{
              id: import('@sinclair/typebox').TOptional<import('@sinclair/typebox').TInteger>
              text: import('@sinclair/typebox').TOptional<import('@sinclair/typebox').TInteger>
            }>
            $select: import('@sinclair/typebox').TUnsafe<('id' | 'text')[]>
            $and: import('@sinclair/typebox').TArray<
              import('@sinclair/typebox').TUnion<
                [
                  import('@sinclair/typebox').TOptional<
                    import('@sinclair/typebox').TObject<{
                      id: import('@sinclair/typebox').TOptional<
                        import('@sinclair/typebox').TUnion<
                          [
                            import('@sinclair/typebox').TNumber,
                            import('@sinclair/typebox').TPartial<
                              import('@sinclair/typebox').TIntersect<
                                [
                                  import('@sinclair/typebox').TObject<{
                                    $gt: import('@sinclair/typebox').TNumber
                                    $gte: import('@sinclair/typebox').TNumber
                                    $lt: import('@sinclair/typebox').TNumber
                                    $lte: import('@sinclair/typebox').TNumber
                                    $ne: import('@sinclair/typebox').TNumber
                                    $in: import('@sinclair/typebox').TArray<
                                      import('@sinclair/typebox').TNumber
                                    >
                                    $nin: import('@sinclair/typebox').TArray<
                                      import('@sinclair/typebox').TNumber
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
                      text: import('@sinclair/typebox').TOptional<
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
                    }>
                  >,
                  import('@sinclair/typebox').TObject<{
                    $or: import('@sinclair/typebox').TArray<
                      import('@sinclair/typebox').TOptional<
                        import('@sinclair/typebox').TObject<{
                          id: import('@sinclair/typebox').TOptional<
                            import('@sinclair/typebox').TUnion<
                              [
                                import('@sinclair/typebox').TNumber,
                                import('@sinclair/typebox').TPartial<
                                  import('@sinclair/typebox').TIntersect<
                                    [
                                      import('@sinclair/typebox').TObject<{
                                        $gt: import('@sinclair/typebox').TNumber
                                        $gte: import('@sinclair/typebox').TNumber
                                        $lt: import('@sinclair/typebox').TNumber
                                        $lte: import('@sinclair/typebox').TNumber
                                        $ne: import('@sinclair/typebox').TNumber
                                        $in: import('@sinclair/typebox').TArray<
                                          import('@sinclair/typebox').TNumber
                                        >
                                        $nin: import('@sinclair/typebox').TArray<
                                          import('@sinclair/typebox').TNumber
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
                          text: import('@sinclair/typebox').TOptional<
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
                  id: import('@sinclair/typebox').TOptional<
                    import('@sinclair/typebox').TUnion<
                      [
                        import('@sinclair/typebox').TNumber,
                        import('@sinclair/typebox').TPartial<
                          import('@sinclair/typebox').TIntersect<
                            [
                              import('@sinclair/typebox').TObject<{
                                $gt: import('@sinclair/typebox').TNumber
                                $gte: import('@sinclair/typebox').TNumber
                                $lt: import('@sinclair/typebox').TNumber
                                $lte: import('@sinclair/typebox').TNumber
                                $ne: import('@sinclair/typebox').TNumber
                                $in: import('@sinclair/typebox').TArray<import('@sinclair/typebox').TNumber>
                                $nin: import('@sinclair/typebox').TArray<import('@sinclair/typebox').TNumber>
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
                  text: import('@sinclair/typebox').TOptional<
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
                }>
              >
            >
          }>
        >,
        import('@sinclair/typebox').TOptional<
          import('@sinclair/typebox').TObject<{
            id: import('@sinclair/typebox').TOptional<
              import('@sinclair/typebox').TUnion<
                [
                  import('@sinclair/typebox').TNumber,
                  import('@sinclair/typebox').TPartial<
                    import('@sinclair/typebox').TIntersect<
                      [
                        import('@sinclair/typebox').TObject<{
                          $gt: import('@sinclair/typebox').TNumber
                          $gte: import('@sinclair/typebox').TNumber
                          $lt: import('@sinclair/typebox').TNumber
                          $lte: import('@sinclair/typebox').TNumber
                          $ne: import('@sinclair/typebox').TNumber
                          $in: import('@sinclair/typebox').TArray<import('@sinclair/typebox').TNumber>
                          $nin: import('@sinclair/typebox').TArray<import('@sinclair/typebox').TNumber>
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
            text: import('@sinclair/typebox').TOptional<
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
          }>
        >
      ]
    >,
    import('@sinclair/typebox').TObject<{}>
  ]
>
export type ApprovalQuery = Static<typeof approvalQuerySchema>
export declare const approvalQueryValidator: import('@feathersjs/schema').Validator<any, any>
export declare const approvalQueryResolver: import('@feathersjs/schema').Resolver<
  Partial<{
    $limit: number
    $skip: number
    $sort: {
      id?: number | undefined
      text?: number | undefined
    }
    $select: ('id' | 'text')[]
    $and: (
      | {
          id?:
            | number
            | Partial<
                {
                  $gt: number
                  $gte: number
                  $lt: number
                  $lte: number
                  $ne: number
                  $in: number[]
                  $nin: number[]
                } & {}
              >
            | undefined
          text?:
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
            id?:
              | number
              | Partial<
                  {
                    $gt: number
                    $gte: number
                    $lt: number
                    $lte: number
                    $ne: number
                    $in: number[]
                    $nin: number[]
                  } & {}
                >
              | undefined
            text?:
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
      id?:
        | number
        | Partial<
            {
              $gt: number
              $gte: number
              $lt: number
              $lte: number
              $ne: number
              $in: number[]
              $nin: number[]
            } & {}
          >
        | undefined
      text?:
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
    id?:
      | number
      | Partial<
          {
            $gt: number
            $gte: number
            $lt: number
            $lte: number
            $ne: number
            $in: number[]
            $nin: number[]
          } & {}
        >
      | undefined
    text?:
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
