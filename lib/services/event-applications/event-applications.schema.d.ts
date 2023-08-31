import type { Static } from '@feathersjs/typebox';
import type { HookContext } from '../../declarations';
export declare const eventApplicationSchema: import("@sinclair/typebox").TObject<{
    id: import("@sinclair/typebox").TString<"uuid">;
    public_key: import("@sinclair/typebox").TString<string>;
    keystore: import("@sinclair/typebox").TString<string>;
    event_id: import("@sinclair/typebox").TString<"uuid">;
    message: import("@sinclair/typebox").TString<string>;
    proof: import("@sinclair/typebox").TString<string>;
    timestamp: import("@sinclair/typebox").TString<"date-time">;
    signature: import("@sinclair/typebox").TString<string>;
    owner: import("@sinclair/typebox").TString<string>;
    version: import("@sinclair/typebox").TNumber;
    organizer: import("@sinclair/typebox").TString<string>;
    cid: import("@sinclair/typebox").TString<string>;
}>;
export type EventApplication = Static<typeof eventApplicationSchema>;
export declare const eventApplicationValidator: import("@feathersjs/schema").Validator<any, any>;
export declare const eventApplicationResolver: import("@feathersjs/schema").Resolver<{
    message: string;
    id: string;
    version: number;
    timestamp: string;
    public_key: string;
    keystore: string;
    event_id: string;
    proof: string;
    signature: string;
    owner: string;
    organizer: string;
    cid: string;
}, HookContext>;
export declare const eventApplicationExternalResolver: import("@feathersjs/schema").Resolver<{
    message: string;
    id: string;
    version: number;
    timestamp: string;
    public_key: string;
    keystore: string;
    event_id: string;
    proof: string;
    signature: string;
    owner: string;
    organizer: string;
    cid: string;
}, HookContext>;
export declare const eventApplicationDataSchema: import("@sinclair/typebox").TPick<import("@sinclair/typebox").TObject<{
    id: import("@sinclair/typebox").TString<"uuid">;
    public_key: import("@sinclair/typebox").TString<string>;
    keystore: import("@sinclair/typebox").TString<string>;
    event_id: import("@sinclair/typebox").TString<"uuid">;
    message: import("@sinclair/typebox").TString<string>;
    proof: import("@sinclair/typebox").TString<string>;
    timestamp: import("@sinclair/typebox").TString<"date-time">;
    signature: import("@sinclair/typebox").TString<string>;
    owner: import("@sinclair/typebox").TString<string>;
    version: import("@sinclair/typebox").TNumber;
    organizer: import("@sinclair/typebox").TString<string>;
    cid: import("@sinclair/typebox").TString<string>;
}>, ["id", "public_key", "keystore", "event_id", "message", "proof", "timestamp", "signature", "owner", "version"]>;
export type EventApplicationData = Static<typeof eventApplicationDataSchema>;
export declare const eventApplicationDataValidator: import("@feathersjs/schema").Validator<any, any>;
export declare const eventApplicationDataResolver: import("@feathersjs/schema").Resolver<{
    message: string;
    id: string;
    version: number;
    timestamp: string;
    public_key: string;
    keystore: string;
    event_id: string;
    proof: string;
    signature: string;
    owner: string;
    organizer: string;
    cid: string;
}, HookContext>;
export declare const eventApplicationPatchSchema: import("@sinclair/typebox").TPartial<import("@sinclair/typebox").TObject<{
    id: import("@sinclair/typebox").TString<"uuid">;
    public_key: import("@sinclair/typebox").TString<string>;
    keystore: import("@sinclair/typebox").TString<string>;
    event_id: import("@sinclair/typebox").TString<"uuid">;
    message: import("@sinclair/typebox").TString<string>;
    proof: import("@sinclair/typebox").TString<string>;
    timestamp: import("@sinclair/typebox").TString<"date-time">;
    signature: import("@sinclair/typebox").TString<string>;
    owner: import("@sinclair/typebox").TString<string>;
    version: import("@sinclair/typebox").TNumber;
    organizer: import("@sinclair/typebox").TString<string>;
    cid: import("@sinclair/typebox").TString<string>;
}>>;
export type EventApplicationPatch = Static<typeof eventApplicationPatchSchema>;
export declare const eventApplicationPatchValidator: import("@feathersjs/schema").Validator<any, any>;
export declare const eventApplicationPatchResolver: import("@feathersjs/schema").Resolver<{
    message: string;
    id: string;
    version: number;
    timestamp: string;
    public_key: string;
    keystore: string;
    event_id: string;
    proof: string;
    signature: string;
    owner: string;
    organizer: string;
    cid: string;
}, HookContext>;
export declare const eventApplicationQueryProperties: import("@sinclair/typebox").TPick<import("@sinclair/typebox").TObject<{
    id: import("@sinclair/typebox").TString<"uuid">;
    public_key: import("@sinclair/typebox").TString<string>;
    keystore: import("@sinclair/typebox").TString<string>;
    event_id: import("@sinclair/typebox").TString<"uuid">;
    message: import("@sinclair/typebox").TString<string>;
    proof: import("@sinclair/typebox").TString<string>;
    timestamp: import("@sinclair/typebox").TString<"date-time">;
    signature: import("@sinclair/typebox").TString<string>;
    owner: import("@sinclair/typebox").TString<string>;
    version: import("@sinclair/typebox").TNumber;
    organizer: import("@sinclair/typebox").TString<string>;
    cid: import("@sinclair/typebox").TString<string>;
}>, ["id", "timestamp", "owner"]>;
export declare const eventApplicationQuerySchema: import("@sinclair/typebox").TIntersect<[import("@sinclair/typebox").TIntersect<[import("@sinclair/typebox").TPartial<import("@sinclair/typebox").TObject<{
    $limit: import("@sinclair/typebox").TNumber;
    $skip: import("@sinclair/typebox").TNumber;
    $sort: import("@sinclair/typebox").TObject<{
        id: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TInteger>;
        timestamp: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TInteger>;
        owner: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TInteger>;
    }>;
    $select: import("@sinclair/typebox").TUnsafe<("id" | "timestamp" | "owner")[]>;
    $and: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{
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
        owner: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString<string>, import("@sinclair/typebox").TPartial<import("@sinclair/typebox").TIntersect<[import("@sinclair/typebox").TObject<{
            $gt: import("@sinclair/typebox").TString<string>;
            $gte: import("@sinclair/typebox").TString<string>;
            $lt: import("@sinclair/typebox").TString<string>;
            $lte: import("@sinclair/typebox").TString<string>;
            $ne: import("@sinclair/typebox").TString<string>;
            $in: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString<string>>;
            $nin: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString<string>>;
        }>, import("@sinclair/typebox").TObject<{
            [key: string]: import("@sinclair/typebox").TSchema;
        } | undefined>]>>]>>;
    }>>, import("@sinclair/typebox").TObject<{
        $or: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{
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
            owner: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString<string>, import("@sinclair/typebox").TPartial<import("@sinclair/typebox").TIntersect<[import("@sinclair/typebox").TObject<{
                $gt: import("@sinclair/typebox").TString<string>;
                $gte: import("@sinclair/typebox").TString<string>;
                $lt: import("@sinclair/typebox").TString<string>;
                $lte: import("@sinclair/typebox").TString<string>;
                $ne: import("@sinclair/typebox").TString<string>;
                $in: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString<string>>;
                $nin: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString<string>>;
            }>, import("@sinclair/typebox").TObject<{
                [key: string]: import("@sinclair/typebox").TSchema;
            } | undefined>]>>]>>;
        }>>>;
    }>]>>;
    $or: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{
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
        owner: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString<string>, import("@sinclair/typebox").TPartial<import("@sinclair/typebox").TIntersect<[import("@sinclair/typebox").TObject<{
            $gt: import("@sinclair/typebox").TString<string>;
            $gte: import("@sinclair/typebox").TString<string>;
            $lt: import("@sinclair/typebox").TString<string>;
            $lte: import("@sinclair/typebox").TString<string>;
            $ne: import("@sinclair/typebox").TString<string>;
            $in: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString<string>>;
            $nin: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString<string>>;
        }>, import("@sinclair/typebox").TObject<{
            [key: string]: import("@sinclair/typebox").TSchema;
        } | undefined>]>>]>>;
    }>>>;
}>>, import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{
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
    owner: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString<string>, import("@sinclair/typebox").TPartial<import("@sinclair/typebox").TIntersect<[import("@sinclair/typebox").TObject<{
        $gt: import("@sinclair/typebox").TString<string>;
        $gte: import("@sinclair/typebox").TString<string>;
        $lt: import("@sinclair/typebox").TString<string>;
        $lte: import("@sinclair/typebox").TString<string>;
        $ne: import("@sinclair/typebox").TString<string>;
        $in: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString<string>>;
        $nin: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString<string>>;
    }>, import("@sinclair/typebox").TObject<{
        [key: string]: import("@sinclair/typebox").TSchema;
    } | undefined>]>>]>>;
}>>]>, import("@sinclair/typebox").TObject<{}>]>;
export type EventApplicationQuery = Static<typeof eventApplicationQuerySchema>;
export declare const eventApplicationQueryValidator: import("@feathersjs/schema").Validator<any, any>;
export declare const eventApplicationQueryResolver: import("@feathersjs/schema").Resolver<Partial<{
    $limit: number;
    $skip: number;
    $sort: {
        id?: number | undefined;
        timestamp?: number | undefined;
        owner?: number | undefined;
    };
    $select: ("id" | "timestamp" | "owner")[];
    $and: ({
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
        owner?: string | Partial<{
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
            owner?: string | Partial<{
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
        owner?: string | Partial<{
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
    owner?: string | Partial<{
        $gt: string;
        $gte: string;
        $lt: string;
        $lte: string;
        $ne: string;
        $in: string[];
        $nin: string[];
    } & {}> | undefined;
} & {}, HookContext>;
