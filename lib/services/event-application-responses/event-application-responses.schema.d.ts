import type { Static } from '@feathersjs/typebox';
import type { HookContext } from '../../declarations';
export declare enum ResponseType {
    APPROVED = 0,
    REJECTED = 1
}
export declare const eventApplicationResponseSchema: import("@sinclair/typebox").TObject<{
    id: import("@sinclair/typebox").TString<"uuid">;
    type: import("@sinclair/typebox").TEnum<typeof ResponseType>;
    event_application_id: import("@sinclair/typebox").TString<"uuid">;
    shared_key: import("@sinclair/typebox").TString<string>;
    timestamp: import("@sinclair/typebox").TString<"date-time">;
    signature: import("@sinclair/typebox").TString<string>;
    version: import("@sinclair/typebox").TNumber;
    cid: import("@sinclair/typebox").TString<string>;
}>;
export type EventApplicationResponse = Static<typeof eventApplicationResponseSchema>;
export declare const eventApplicationResponseValidator: import("@feathersjs/schema").Validator<any, any>;
export declare const eventApplicationResponseResolver: import("@feathersjs/schema").Resolver<{
    type: ResponseType;
    id: string;
    version: number;
    timestamp: string;
    signature: string;
    cid: string;
    shared_key: string;
    event_application_id: string;
}, HookContext>;
export declare const eventApplicationResponseExternalResolver: import("@feathersjs/schema").Resolver<{
    type: ResponseType;
    id: string;
    version: number;
    timestamp: string;
    signature: string;
    cid: string;
    shared_key: string;
    event_application_id: string;
}, HookContext>;
export declare const eventApplicationResponseDataSchema: import("@sinclair/typebox").TPick<import("@sinclair/typebox").TObject<{
    id: import("@sinclair/typebox").TString<"uuid">;
    type: import("@sinclair/typebox").TEnum<typeof ResponseType>;
    event_application_id: import("@sinclair/typebox").TString<"uuid">;
    shared_key: import("@sinclair/typebox").TString<string>;
    timestamp: import("@sinclair/typebox").TString<"date-time">;
    signature: import("@sinclair/typebox").TString<string>;
    version: import("@sinclair/typebox").TNumber;
    cid: import("@sinclair/typebox").TString<string>;
}>, ["id", "type", "event_application_id", "shared_key", "timestamp", "signature", "version"]>;
export type EventApplicationResponseData = Static<typeof eventApplicationResponseDataSchema>;
export declare const eventApplicationResponseDataValidator: import("@feathersjs/schema").Validator<any, any>;
export declare const eventApplicationResponseDataResolver: import("@feathersjs/schema").Resolver<{
    type: ResponseType;
    id: string;
    version: number;
    timestamp: string;
    signature: string;
    cid: string;
    shared_key: string;
    event_application_id: string;
}, HookContext>;
export declare const eventApplicationResponsePatchSchema: import("@sinclair/typebox").TPartial<import("@sinclair/typebox").TObject<{
    id: import("@sinclair/typebox").TString<"uuid">;
    type: import("@sinclair/typebox").TEnum<typeof ResponseType>;
    event_application_id: import("@sinclair/typebox").TString<"uuid">;
    shared_key: import("@sinclair/typebox").TString<string>;
    timestamp: import("@sinclair/typebox").TString<"date-time">;
    signature: import("@sinclair/typebox").TString<string>;
    version: import("@sinclair/typebox").TNumber;
    cid: import("@sinclair/typebox").TString<string>;
}>>;
export type EventApplicationResponsePatch = Static<typeof eventApplicationResponsePatchSchema>;
export declare const eventApplicationResponsePatchValidator: import("@feathersjs/schema").Validator<any, any>;
export declare const eventApplicationResponsePatchResolver: import("@feathersjs/schema").Resolver<{
    type: ResponseType;
    id: string;
    version: number;
    timestamp: string;
    signature: string;
    cid: string;
    shared_key: string;
    event_application_id: string;
}, HookContext>;
export declare const eventApplicationResponseQueryProperties: import("@sinclair/typebox").TPick<import("@sinclair/typebox").TObject<{
    id: import("@sinclair/typebox").TString<"uuid">;
    type: import("@sinclair/typebox").TEnum<typeof ResponseType>;
    event_application_id: import("@sinclair/typebox").TString<"uuid">;
    shared_key: import("@sinclair/typebox").TString<string>;
    timestamp: import("@sinclair/typebox").TString<"date-time">;
    signature: import("@sinclair/typebox").TString<string>;
    version: import("@sinclair/typebox").TNumber;
    cid: import("@sinclair/typebox").TString<string>;
}>, ["id", "event_application_id", "timestamp", "type"]>;
export declare const eventApplicationResponseQuerySchema: import("@sinclair/typebox").TIntersect<[import("@sinclair/typebox").TIntersect<[import("@sinclair/typebox").TPartial<import("@sinclair/typebox").TObject<{
    $limit: import("@sinclair/typebox").TNumber;
    $skip: import("@sinclair/typebox").TNumber;
    $sort: import("@sinclair/typebox").TObject<{
        type: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TInteger>;
        id: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TInteger>;
        timestamp: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TInteger>;
        event_application_id: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TInteger>;
    }>;
    $select: import("@sinclair/typebox").TUnsafe<("type" | "id" | "timestamp" | "event_application_id")[]>;
    $and: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{
        type: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TEnum<typeof ResponseType>, import("@sinclair/typebox").TPartial<import("@sinclair/typebox").TIntersect<[import("@sinclair/typebox").TObject<{
            $gt: import("@sinclair/typebox").TEnum<typeof ResponseType>;
            $gte: import("@sinclair/typebox").TEnum<typeof ResponseType>;
            $lt: import("@sinclair/typebox").TEnum<typeof ResponseType>;
            $lte: import("@sinclair/typebox").TEnum<typeof ResponseType>;
            $ne: import("@sinclair/typebox").TEnum<typeof ResponseType>;
            $in: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TEnum<typeof ResponseType>>;
            $nin: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TEnum<typeof ResponseType>>;
        }>, import("@sinclair/typebox").TObject<{
            [key: string]: import("@sinclair/typebox").TSchema;
        } | undefined>]>>]>>;
        id: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString<"uuid">, import("@sinclair/typebox").TPartial<import("@sinclair/typebox").TIntersect<[import("@sinclair/typebox").TObject<{
            $gt: import("@sinclair/typebox").TString<"uuid">;
            $gte: import("@sinclair/typebox").TString<"uuid">;
            $lt: import("@sinclair/typebox").TString<"uuid">;
            $lte: import("@sinclair/typebox").TString<"uuid">;
            $ne: import("@sinclair/typebox").TString<"uuid">;
            $in: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString<"uuid">>;
            $nin: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString<"uuid">>;
        }>, import("@sinclair/typebox").TObject<{
            [key: string]: import("@sinclair/typebox").TSchema;
        } | undefined>]>>]>>;
        timestamp: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString<"date-time">, import("@sinclair/typebox").TPartial<import("@sinclair/typebox").TIntersect<[import("@sinclair/typebox").TObject<{
            $gt: import("@sinclair/typebox").TString<"date-time">;
            $gte: import("@sinclair/typebox").TString<"date-time">;
            $lt: import("@sinclair/typebox").TString<"date-time">;
            $lte: import("@sinclair/typebox").TString<"date-time">;
            $ne: import("@sinclair/typebox").TString<"date-time">;
            $in: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString<"date-time">>;
            $nin: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString<"date-time">>;
        }>, import("@sinclair/typebox").TObject<{
            [key: string]: import("@sinclair/typebox").TSchema;
        } | undefined>]>>]>>;
        event_application_id: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString<"uuid">, import("@sinclair/typebox").TPartial<import("@sinclair/typebox").TIntersect<[import("@sinclair/typebox").TObject<{
            $gt: import("@sinclair/typebox").TString<"uuid">;
            $gte: import("@sinclair/typebox").TString<"uuid">;
            $lt: import("@sinclair/typebox").TString<"uuid">;
            $lte: import("@sinclair/typebox").TString<"uuid">;
            $ne: import("@sinclair/typebox").TString<"uuid">;
            $in: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString<"uuid">>;
            $nin: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString<"uuid">>;
        }>, import("@sinclair/typebox").TObject<{
            [key: string]: import("@sinclair/typebox").TSchema;
        } | undefined>]>>]>>;
    }>>, import("@sinclair/typebox").TObject<{
        $or: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{
            type: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TEnum<typeof ResponseType>, import("@sinclair/typebox").TPartial<import("@sinclair/typebox").TIntersect<[import("@sinclair/typebox").TObject<{
                $gt: import("@sinclair/typebox").TEnum<typeof ResponseType>;
                $gte: import("@sinclair/typebox").TEnum<typeof ResponseType>;
                $lt: import("@sinclair/typebox").TEnum<typeof ResponseType>;
                $lte: import("@sinclair/typebox").TEnum<typeof ResponseType>;
                $ne: import("@sinclair/typebox").TEnum<typeof ResponseType>;
                $in: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TEnum<typeof ResponseType>>;
                $nin: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TEnum<typeof ResponseType>>;
            }>, import("@sinclair/typebox").TObject<{
                [key: string]: import("@sinclair/typebox").TSchema;
            } | undefined>]>>]>>;
            id: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString<"uuid">, import("@sinclair/typebox").TPartial<import("@sinclair/typebox").TIntersect<[import("@sinclair/typebox").TObject<{
                $gt: import("@sinclair/typebox").TString<"uuid">;
                $gte: import("@sinclair/typebox").TString<"uuid">;
                $lt: import("@sinclair/typebox").TString<"uuid">;
                $lte: import("@sinclair/typebox").TString<"uuid">;
                $ne: import("@sinclair/typebox").TString<"uuid">;
                $in: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString<"uuid">>;
                $nin: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString<"uuid">>;
            }>, import("@sinclair/typebox").TObject<{
                [key: string]: import("@sinclair/typebox").TSchema;
            } | undefined>]>>]>>;
            timestamp: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString<"date-time">, import("@sinclair/typebox").TPartial<import("@sinclair/typebox").TIntersect<[import("@sinclair/typebox").TObject<{
                $gt: import("@sinclair/typebox").TString<"date-time">;
                $gte: import("@sinclair/typebox").TString<"date-time">;
                $lt: import("@sinclair/typebox").TString<"date-time">;
                $lte: import("@sinclair/typebox").TString<"date-time">;
                $ne: import("@sinclair/typebox").TString<"date-time">;
                $in: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString<"date-time">>;
                $nin: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString<"date-time">>;
            }>, import("@sinclair/typebox").TObject<{
                [key: string]: import("@sinclair/typebox").TSchema;
            } | undefined>]>>]>>;
            event_application_id: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString<"uuid">, import("@sinclair/typebox").TPartial<import("@sinclair/typebox").TIntersect<[import("@sinclair/typebox").TObject<{
                $gt: import("@sinclair/typebox").TString<"uuid">;
                $gte: import("@sinclair/typebox").TString<"uuid">;
                $lt: import("@sinclair/typebox").TString<"uuid">;
                $lte: import("@sinclair/typebox").TString<"uuid">;
                $ne: import("@sinclair/typebox").TString<"uuid">;
                $in: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString<"uuid">>;
                $nin: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString<"uuid">>;
            }>, import("@sinclair/typebox").TObject<{
                [key: string]: import("@sinclair/typebox").TSchema;
            } | undefined>]>>]>>;
        }>>>;
    }>]>>;
    $or: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{
        type: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TEnum<typeof ResponseType>, import("@sinclair/typebox").TPartial<import("@sinclair/typebox").TIntersect<[import("@sinclair/typebox").TObject<{
            $gt: import("@sinclair/typebox").TEnum<typeof ResponseType>;
            $gte: import("@sinclair/typebox").TEnum<typeof ResponseType>;
            $lt: import("@sinclair/typebox").TEnum<typeof ResponseType>;
            $lte: import("@sinclair/typebox").TEnum<typeof ResponseType>;
            $ne: import("@sinclair/typebox").TEnum<typeof ResponseType>;
            $in: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TEnum<typeof ResponseType>>;
            $nin: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TEnum<typeof ResponseType>>;
        }>, import("@sinclair/typebox").TObject<{
            [key: string]: import("@sinclair/typebox").TSchema;
        } | undefined>]>>]>>;
        id: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString<"uuid">, import("@sinclair/typebox").TPartial<import("@sinclair/typebox").TIntersect<[import("@sinclair/typebox").TObject<{
            $gt: import("@sinclair/typebox").TString<"uuid">;
            $gte: import("@sinclair/typebox").TString<"uuid">;
            $lt: import("@sinclair/typebox").TString<"uuid">;
            $lte: import("@sinclair/typebox").TString<"uuid">;
            $ne: import("@sinclair/typebox").TString<"uuid">;
            $in: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString<"uuid">>;
            $nin: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString<"uuid">>;
        }>, import("@sinclair/typebox").TObject<{
            [key: string]: import("@sinclair/typebox").TSchema;
        } | undefined>]>>]>>;
        timestamp: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString<"date-time">, import("@sinclair/typebox").TPartial<import("@sinclair/typebox").TIntersect<[import("@sinclair/typebox").TObject<{
            $gt: import("@sinclair/typebox").TString<"date-time">;
            $gte: import("@sinclair/typebox").TString<"date-time">;
            $lt: import("@sinclair/typebox").TString<"date-time">;
            $lte: import("@sinclair/typebox").TString<"date-time">;
            $ne: import("@sinclair/typebox").TString<"date-time">;
            $in: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString<"date-time">>;
            $nin: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString<"date-time">>;
        }>, import("@sinclair/typebox").TObject<{
            [key: string]: import("@sinclair/typebox").TSchema;
        } | undefined>]>>]>>;
        event_application_id: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString<"uuid">, import("@sinclair/typebox").TPartial<import("@sinclair/typebox").TIntersect<[import("@sinclair/typebox").TObject<{
            $gt: import("@sinclair/typebox").TString<"uuid">;
            $gte: import("@sinclair/typebox").TString<"uuid">;
            $lt: import("@sinclair/typebox").TString<"uuid">;
            $lte: import("@sinclair/typebox").TString<"uuid">;
            $ne: import("@sinclair/typebox").TString<"uuid">;
            $in: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString<"uuid">>;
            $nin: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString<"uuid">>;
        }>, import("@sinclair/typebox").TObject<{
            [key: string]: import("@sinclair/typebox").TSchema;
        } | undefined>]>>]>>;
    }>>>;
}>>, import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{
    type: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TEnum<typeof ResponseType>, import("@sinclair/typebox").TPartial<import("@sinclair/typebox").TIntersect<[import("@sinclair/typebox").TObject<{
        $gt: import("@sinclair/typebox").TEnum<typeof ResponseType>;
        $gte: import("@sinclair/typebox").TEnum<typeof ResponseType>;
        $lt: import("@sinclair/typebox").TEnum<typeof ResponseType>;
        $lte: import("@sinclair/typebox").TEnum<typeof ResponseType>;
        $ne: import("@sinclair/typebox").TEnum<typeof ResponseType>;
        $in: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TEnum<typeof ResponseType>>;
        $nin: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TEnum<typeof ResponseType>>;
    }>, import("@sinclair/typebox").TObject<{
        [key: string]: import("@sinclair/typebox").TSchema;
    } | undefined>]>>]>>;
    id: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString<"uuid">, import("@sinclair/typebox").TPartial<import("@sinclair/typebox").TIntersect<[import("@sinclair/typebox").TObject<{
        $gt: import("@sinclair/typebox").TString<"uuid">;
        $gte: import("@sinclair/typebox").TString<"uuid">;
        $lt: import("@sinclair/typebox").TString<"uuid">;
        $lte: import("@sinclair/typebox").TString<"uuid">;
        $ne: import("@sinclair/typebox").TString<"uuid">;
        $in: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString<"uuid">>;
        $nin: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString<"uuid">>;
    }>, import("@sinclair/typebox").TObject<{
        [key: string]: import("@sinclair/typebox").TSchema;
    } | undefined>]>>]>>;
    timestamp: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString<"date-time">, import("@sinclair/typebox").TPartial<import("@sinclair/typebox").TIntersect<[import("@sinclair/typebox").TObject<{
        $gt: import("@sinclair/typebox").TString<"date-time">;
        $gte: import("@sinclair/typebox").TString<"date-time">;
        $lt: import("@sinclair/typebox").TString<"date-time">;
        $lte: import("@sinclair/typebox").TString<"date-time">;
        $ne: import("@sinclair/typebox").TString<"date-time">;
        $in: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString<"date-time">>;
        $nin: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString<"date-time">>;
    }>, import("@sinclair/typebox").TObject<{
        [key: string]: import("@sinclair/typebox").TSchema;
    } | undefined>]>>]>>;
    event_application_id: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString<"uuid">, import("@sinclair/typebox").TPartial<import("@sinclair/typebox").TIntersect<[import("@sinclair/typebox").TObject<{
        $gt: import("@sinclair/typebox").TString<"uuid">;
        $gte: import("@sinclair/typebox").TString<"uuid">;
        $lt: import("@sinclair/typebox").TString<"uuid">;
        $lte: import("@sinclair/typebox").TString<"uuid">;
        $ne: import("@sinclair/typebox").TString<"uuid">;
        $in: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString<"uuid">>;
        $nin: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString<"uuid">>;
    }>, import("@sinclair/typebox").TObject<{
        [key: string]: import("@sinclair/typebox").TSchema;
    } | undefined>]>>]>>;
}>>]>, import("@sinclair/typebox").TObject<{}>]>;
export type EventApplicationResponseQuery = Static<typeof eventApplicationResponseQuerySchema>;
export declare const eventApplicationResponseQueryValidator: import("@feathersjs/schema").Validator<any, any>;
export declare const eventApplicationResponseQueryResolver: import("@feathersjs/schema").Resolver<Partial<{
    $limit: number;
    $skip: number;
    $sort: {
        type?: number | undefined;
        id?: number | undefined;
        timestamp?: number | undefined;
        event_application_id?: number | undefined;
    };
    $select: ("type" | "id" | "timestamp" | "event_application_id")[];
    $and: ({
        type?: ResponseType | Partial<{
            $gt: ResponseType;
            $gte: ResponseType;
            $lt: ResponseType;
            $lte: ResponseType;
            $ne: ResponseType;
            $in: ResponseType[];
            $nin: ResponseType[];
        } & {}> | undefined;
        id?: string | Partial<{
            $gt: string;
            $gte: string;
            $lt: string;
            $lte: string;
            $ne: string;
            $in: string[];
            $nin: string[];
        } & {}> | undefined;
        timestamp?: string | Partial<{
            $gt: string;
            $gte: string;
            $lt: string;
            $lte: string;
            $ne: string;
            $in: string[];
            $nin: string[];
        } & {}> | undefined;
        event_application_id?: string | Partial<{
            $gt: string;
            $gte: string;
            $lt: string;
            $lte: string;
            $ne: string;
            $in: string[];
            $nin: string[];
        } & {}> | undefined;
    } | {
        $or: {
            type?: ResponseType | Partial<{
                $gt: ResponseType;
                $gte: ResponseType;
                $lt: ResponseType;
                $lte: ResponseType;
                $ne: ResponseType;
                $in: ResponseType[];
                $nin: ResponseType[];
            } & {}> | undefined;
            id?: string | Partial<{
                $gt: string;
                $gte: string;
                $lt: string;
                $lte: string;
                $ne: string;
                $in: string[];
                $nin: string[];
            } & {}> | undefined;
            timestamp?: string | Partial<{
                $gt: string;
                $gte: string;
                $lt: string;
                $lte: string;
                $ne: string;
                $in: string[];
                $nin: string[];
            } & {}> | undefined;
            event_application_id?: string | Partial<{
                $gt: string;
                $gte: string;
                $lt: string;
                $lte: string;
                $ne: string;
                $in: string[];
                $nin: string[];
            } & {}> | undefined;
        }[];
    })[];
    $or: {
        type?: ResponseType | Partial<{
            $gt: ResponseType;
            $gte: ResponseType;
            $lt: ResponseType;
            $lte: ResponseType;
            $ne: ResponseType;
            $in: ResponseType[];
            $nin: ResponseType[];
        } & {}> | undefined;
        id?: string | Partial<{
            $gt: string;
            $gte: string;
            $lt: string;
            $lte: string;
            $ne: string;
            $in: string[];
            $nin: string[];
        } & {}> | undefined;
        timestamp?: string | Partial<{
            $gt: string;
            $gte: string;
            $lt: string;
            $lte: string;
            $ne: string;
            $in: string[];
            $nin: string[];
        } & {}> | undefined;
        event_application_id?: string | Partial<{
            $gt: string;
            $gte: string;
            $lt: string;
            $lte: string;
            $ne: string;
            $in: string[];
            $nin: string[];
        } & {}> | undefined;
    }[];
}> & {
    type?: ResponseType | Partial<{
        $gt: ResponseType;
        $gte: ResponseType;
        $lt: ResponseType;
        $lte: ResponseType;
        $ne: ResponseType;
        $in: ResponseType[];
        $nin: ResponseType[];
    } & {}> | undefined;
    id?: string | Partial<{
        $gt: string;
        $gte: string;
        $lt: string;
        $lte: string;
        $ne: string;
        $in: string[];
        $nin: string[];
    } & {}> | undefined;
    timestamp?: string | Partial<{
        $gt: string;
        $gte: string;
        $lt: string;
        $lte: string;
        $ne: string;
        $in: string[];
        $nin: string[];
    } & {}> | undefined;
    event_application_id?: string | Partial<{
        $gt: string;
        $gte: string;
        $lt: string;
        $lte: string;
        $ne: string;
        $in: string[];
        $nin: string[];
    } & {}> | undefined;
} & {}, HookContext>;
