import type { Static } from '@feathersjs/typebox'
import type { HookContext } from '../../declarations'
export declare const submissionSchema: import('@sinclair/typebox').TObject<{
  id: import('@sinclair/typebox').TNumber
  text: import('@sinclair/typebox').TString<string>
}>
export type Submission = Static<typeof submissionSchema>
export declare const submissionValidator: import('@feathersjs/schema').Validator<any, any>
export declare const submissionResolver: import('@feathersjs/schema').Resolver<
  {
    id: number
    text: string
  },
  HookContext
>
export declare const submissionExternalResolver: import('@feathersjs/schema').Resolver<
  {
    id: number
    text: string
  },
  HookContext
>
export declare const submissionDataSchema: import('@sinclair/typebox').TPick<
  import('@sinclair/typebox').TObject<{
    id: import('@sinclair/typebox').TNumber
    text: import('@sinclair/typebox').TString<string>
  }>,
  ['text']
>
export type SubmissionData = Static<typeof submissionDataSchema>
export declare const submissionDataValidator: import('@feathersjs/schema').Validator<any, any>
export declare const submissionDataResolver: import('@feathersjs/schema').Resolver<
  {
    id: number
    text: string
  },
  HookContext
>
export declare const submissionPatchSchema: import('@sinclair/typebox').TPartial<
  import('@sinclair/typebox').TObject<{
    id: import('@sinclair/typebox').TNumber
    text: import('@sinclair/typebox').TString<string>
  }>
>
export type SubmissionPatch = Static<typeof submissionPatchSchema>
export declare const submissionPatchValidator: import('@feathersjs/schema').Validator<any, any>
export declare const submissionPatchResolver: import('@feathersjs/schema').Resolver<
  {
    id: number
    text: string
  },
  HookContext
>
export declare const submissionQueryProperties: import('@sinclair/typebox').TPick<
  import('@sinclair/typebox').TObject<{
    id: import('@sinclair/typebox').TNumber
    text: import('@sinclair/typebox').TString<string>
  }>,
  ['id', 'text']
>
export declare const submissionQuerySchema: import('@sinclair/typebox').TIntersect<
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
export type SubmissionQuery = Static<typeof submissionQuerySchema>
export declare const submissionQueryValidator: import('@feathersjs/schema').Validator<any, any>
export declare const submissionQueryResolver: import('@feathersjs/schema').Resolver<
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
