import type { Static } from '@feathersjs/typebox';
import type { HookContext } from '../../declarations';
import { AuthType, ClaimType } from '@sismo-core/sismo-connect-server';
declare const SismoClaimSchema: import("@sinclair/typebox").TObject<{
    claimType: import("@sinclair/typebox").TEnum<typeof ClaimType>;
    groupId: import("@sinclair/typebox").TString<string>;
    value: import("@sinclair/typebox").TNumber;
}>;
export type SismoClaim = Static<typeof SismoClaimSchema>;
export declare const eventSchema: import("@sinclair/typebox").TObject<{
    id: import("@sinclair/typebox").TString<"uuid">;
    title: import("@sinclair/typebox").TString<string>;
    organizer: import("@sinclair/typebox").TString<string>;
    description: import("@sinclair/typebox").TString<string>;
    tags: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString<string>>;
    link: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<"uri">>;
    capacity: import("@sinclair/typebox").TNumber;
    note: import("@sinclair/typebox").TString<string>;
    location: import("@sinclair/typebox").TString<string>;
    registration_start: import("@sinclair/typebox").TString<"date-time">;
    registration_end: import("@sinclair/typebox").TString<"date-time">;
    start: import("@sinclair/typebox").TString<"date-time">;
    end: import("@sinclair/typebox").TString<"date-time">;
    price: import("@sinclair/typebox").TNumber;
    sismo: import("@sinclair/typebox").TObject<{
        auths: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
            authType: import("@sinclair/typebox").TEnum<typeof AuthType>;
            isAnon: import("@sinclair/typebox").TBoolean;
        }>>;
        claims: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
            claimType: import("@sinclair/typebox").TEnum<typeof ClaimType>;
            groupId: import("@sinclair/typebox").TString<string>;
            value: import("@sinclair/typebox").TNumber;
        }>>;
    }>;
    proof: import("@sinclair/typebox").TString<string>;
    timestamp: import("@sinclair/typebox").TString<"date-time">;
    signature: import("@sinclair/typebox").TString<string>;
    owner: import("@sinclair/typebox").TString<string>;
    cid: import("@sinclair/typebox").TString<string>;
}>;
export type Event = Static<typeof eventSchema>;
export declare const eventValidator: import("@feathersjs/schema").Validator<any, any>;
export declare const eventResolver: import("@feathersjs/schema").Resolver<{
    link?: string | undefined;
    location: string;
    id: string;
    end: string;
    start: string;
    title: string;
    description: string;
    timestamp: string;
    sismo: {
        auths: {
            authType: AuthType;
            isAnon: boolean;
        }[];
        claims: {
            value: number;
            claimType: ClaimType;
            groupId: string;
        }[];
    };
    organizer: string;
    tags: string[];
    capacity: number;
    note: string;
    registration_start: string;
    registration_end: string;
    price: number;
    proof: string;
    signature: string;
    owner: string;
    cid: string;
}, HookContext>;
export declare const eventExternalResolver: import("@feathersjs/schema").Resolver<{
    link?: string | undefined;
    location: string;
    id: string;
    end: string;
    start: string;
    title: string;
    description: string;
    timestamp: string;
    sismo: {
        auths: {
            authType: AuthType;
            isAnon: boolean;
        }[];
        claims: {
            value: number;
            claimType: ClaimType;
            groupId: string;
        }[];
    };
    organizer: string;
    tags: string[];
    capacity: number;
    note: string;
    registration_start: string;
    registration_end: string;
    price: number;
    proof: string;
    signature: string;
    owner: string;
    cid: string;
}, HookContext>;
export declare const eventDataSchema: import("@sinclair/typebox").TPick<import("@sinclair/typebox").TObject<{
    id: import("@sinclair/typebox").TString<"uuid">;
    title: import("@sinclair/typebox").TString<string>;
    organizer: import("@sinclair/typebox").TString<string>;
    description: import("@sinclair/typebox").TString<string>;
    tags: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString<string>>;
    link: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<"uri">>;
    capacity: import("@sinclair/typebox").TNumber;
    note: import("@sinclair/typebox").TString<string>;
    location: import("@sinclair/typebox").TString<string>;
    registration_start: import("@sinclair/typebox").TString<"date-time">;
    registration_end: import("@sinclair/typebox").TString<"date-time">;
    start: import("@sinclair/typebox").TString<"date-time">;
    end: import("@sinclair/typebox").TString<"date-time">;
    price: import("@sinclair/typebox").TNumber;
    sismo: import("@sinclair/typebox").TObject<{
        auths: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
            authType: import("@sinclair/typebox").TEnum<typeof AuthType>;
            isAnon: import("@sinclair/typebox").TBoolean;
        }>>;
        claims: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
            claimType: import("@sinclair/typebox").TEnum<typeof ClaimType>;
            groupId: import("@sinclair/typebox").TString<string>;
            value: import("@sinclair/typebox").TNumber;
        }>>;
    }>;
    proof: import("@sinclair/typebox").TString<string>;
    timestamp: import("@sinclair/typebox").TString<"date-time">;
    signature: import("@sinclair/typebox").TString<string>;
    owner: import("@sinclair/typebox").TString<string>;
    cid: import("@sinclair/typebox").TString<string>;
}>, ["id", "title", "organizer", "description", "tags", "link", "note", "location", "registration_start", "registration_end", "capacity", "start", "end", "price", "sismo", "proof", "timestamp", "signature", "owner"]>;
export type EventData = Static<typeof eventDataSchema>;
export declare const eventDataValidator: import("@feathersjs/schema").Validator<any, any>;
export declare const eventDataResolver: import("@feathersjs/schema").Resolver<{
    link?: string | undefined;
    location: string;
    id: string;
    end: string;
    start: string;
    title: string;
    description: string;
    timestamp: string;
    sismo: {
        auths: {
            authType: AuthType;
            isAnon: boolean;
        }[];
        claims: {
            value: number;
            claimType: ClaimType;
            groupId: string;
        }[];
    };
    organizer: string;
    tags: string[];
    capacity: number;
    note: string;
    registration_start: string;
    registration_end: string;
    price: number;
    proof: string;
    signature: string;
    owner: string;
    cid: string;
}, HookContext>;
export declare const eventPatchSchema: import("@sinclair/typebox").TPartial<import("@sinclair/typebox").TObject<{
    id: import("@sinclair/typebox").TString<"uuid">;
    title: import("@sinclair/typebox").TString<string>;
    organizer: import("@sinclair/typebox").TString<string>;
    description: import("@sinclair/typebox").TString<string>;
    tags: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString<string>>;
    link: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<"uri">>;
    capacity: import("@sinclair/typebox").TNumber;
    note: import("@sinclair/typebox").TString<string>;
    location: import("@sinclair/typebox").TString<string>;
    registration_start: import("@sinclair/typebox").TString<"date-time">;
    registration_end: import("@sinclair/typebox").TString<"date-time">;
    start: import("@sinclair/typebox").TString<"date-time">;
    end: import("@sinclair/typebox").TString<"date-time">;
    price: import("@sinclair/typebox").TNumber;
    sismo: import("@sinclair/typebox").TObject<{
        auths: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
            authType: import("@sinclair/typebox").TEnum<typeof AuthType>;
            isAnon: import("@sinclair/typebox").TBoolean;
        }>>;
        claims: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
            claimType: import("@sinclair/typebox").TEnum<typeof ClaimType>;
            groupId: import("@sinclair/typebox").TString<string>;
            value: import("@sinclair/typebox").TNumber;
        }>>;
    }>;
    proof: import("@sinclair/typebox").TString<string>;
    timestamp: import("@sinclair/typebox").TString<"date-time">;
    signature: import("@sinclair/typebox").TString<string>;
    owner: import("@sinclair/typebox").TString<string>;
    cid: import("@sinclair/typebox").TString<string>;
}>>;
export type EventPatch = Static<typeof eventPatchSchema>;
export declare const eventPatchValidator: import("@feathersjs/schema").Validator<any, any>;
export declare const eventPatchResolver: import("@feathersjs/schema").Resolver<{
    link?: string | undefined;
    location: string;
    id: string;
    end: string;
    start: string;
    title: string;
    description: string;
    timestamp: string;
    sismo: {
        auths: {
            authType: AuthType;
            isAnon: boolean;
        }[];
        claims: {
            value: number;
            claimType: ClaimType;
            groupId: string;
        }[];
    };
    organizer: string;
    tags: string[];
    capacity: number;
    note: string;
    registration_start: string;
    registration_end: string;
    price: number;
    proof: string;
    signature: string;
    owner: string;
    cid: string;
}, HookContext>;
export declare const eventQueryProperties: import("@sinclair/typebox").TPick<import("@sinclair/typebox").TObject<{
    id: import("@sinclair/typebox").TString<"uuid">;
    title: import("@sinclair/typebox").TString<string>;
    organizer: import("@sinclair/typebox").TString<string>;
    description: import("@sinclair/typebox").TString<string>;
    tags: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString<string>>;
    link: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<"uri">>;
    capacity: import("@sinclair/typebox").TNumber;
    note: import("@sinclair/typebox").TString<string>;
    location: import("@sinclair/typebox").TString<string>;
    registration_start: import("@sinclair/typebox").TString<"date-time">;
    registration_end: import("@sinclair/typebox").TString<"date-time">;
    start: import("@sinclair/typebox").TString<"date-time">;
    end: import("@sinclair/typebox").TString<"date-time">;
    price: import("@sinclair/typebox").TNumber;
    sismo: import("@sinclair/typebox").TObject<{
        auths: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
            authType: import("@sinclair/typebox").TEnum<typeof AuthType>;
            isAnon: import("@sinclair/typebox").TBoolean;
        }>>;
        claims: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
            claimType: import("@sinclair/typebox").TEnum<typeof ClaimType>;
            groupId: import("@sinclair/typebox").TString<string>;
            value: import("@sinclair/typebox").TNumber;
        }>>;
    }>;
    proof: import("@sinclair/typebox").TString<string>;
    timestamp: import("@sinclair/typebox").TString<"date-time">;
    signature: import("@sinclair/typebox").TString<string>;
    owner: import("@sinclair/typebox").TString<string>;
    cid: import("@sinclair/typebox").TString<string>;
}>, ["id", "title", "description", "organizer", "tags", "location"]>;
export declare const eventQuerySchema: import("@sinclair/typebox").TIntersect<[import("@sinclair/typebox").TIntersect<[import("@sinclair/typebox").TPartial<import("@sinclair/typebox").TObject<{
    $limit: import("@sinclair/typebox").TNumber;
    $skip: import("@sinclair/typebox").TNumber;
    $sort: import("@sinclair/typebox").TObject<{
        location: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TInteger>;
        id: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TInteger>;
        title: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TInteger>;
        description: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TInteger>;
        organizer: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TInteger>;
        tags: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TInteger>;
    }>;
    $select: import("@sinclair/typebox").TUnsafe<("location" | "id" | "title" | "description" | "organizer" | "tags")[]>;
    $and: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{
        location: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString<string>, import("@sinclair/typebox").TPartial<import("@sinclair/typebox").TIntersect<[import("@sinclair/typebox").TObject<{
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
        title: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString<string>, import("@sinclair/typebox").TPartial<import("@sinclair/typebox").TIntersect<[import("@sinclair/typebox").TObject<{
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
        description: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString<string>, import("@sinclair/typebox").TPartial<import("@sinclair/typebox").TIntersect<[import("@sinclair/typebox").TObject<{
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
        organizer: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString<string>, import("@sinclair/typebox").TPartial<import("@sinclair/typebox").TIntersect<[import("@sinclair/typebox").TObject<{
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
        tags: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString<string>>, import("@sinclair/typebox").TPartial<import("@sinclair/typebox").TIntersect<[import("@sinclair/typebox").TObject<{
            $gt: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString<string>>;
            $gte: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString<string>>;
            $lt: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString<string>>;
            $lte: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString<string>>;
            $ne: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString<string>>;
            $in: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString<string>>>;
            $nin: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString<string>>>;
        }>, import("@sinclair/typebox").TObject<{
            [key: string]: import("@sinclair/typebox").TSchema;
        } | undefined>]>>]>>;
    }>>, import("@sinclair/typebox").TObject<{
        $or: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{
            location: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString<string>, import("@sinclair/typebox").TPartial<import("@sinclair/typebox").TIntersect<[import("@sinclair/typebox").TObject<{
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
            title: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString<string>, import("@sinclair/typebox").TPartial<import("@sinclair/typebox").TIntersect<[import("@sinclair/typebox").TObject<{
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
            description: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString<string>, import("@sinclair/typebox").TPartial<import("@sinclair/typebox").TIntersect<[import("@sinclair/typebox").TObject<{
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
            organizer: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString<string>, import("@sinclair/typebox").TPartial<import("@sinclair/typebox").TIntersect<[import("@sinclair/typebox").TObject<{
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
            tags: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString<string>>, import("@sinclair/typebox").TPartial<import("@sinclair/typebox").TIntersect<[import("@sinclair/typebox").TObject<{
                $gt: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString<string>>;
                $gte: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString<string>>;
                $lt: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString<string>>;
                $lte: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString<string>>;
                $ne: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString<string>>;
                $in: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString<string>>>;
                $nin: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString<string>>>;
            }>, import("@sinclair/typebox").TObject<{
                [key: string]: import("@sinclair/typebox").TSchema;
            } | undefined>]>>]>>;
        }>>>;
    }>]>>;
    $or: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{
        location: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString<string>, import("@sinclair/typebox").TPartial<import("@sinclair/typebox").TIntersect<[import("@sinclair/typebox").TObject<{
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
        title: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString<string>, import("@sinclair/typebox").TPartial<import("@sinclair/typebox").TIntersect<[import("@sinclair/typebox").TObject<{
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
        description: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString<string>, import("@sinclair/typebox").TPartial<import("@sinclair/typebox").TIntersect<[import("@sinclair/typebox").TObject<{
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
        organizer: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString<string>, import("@sinclair/typebox").TPartial<import("@sinclair/typebox").TIntersect<[import("@sinclair/typebox").TObject<{
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
        tags: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString<string>>, import("@sinclair/typebox").TPartial<import("@sinclair/typebox").TIntersect<[import("@sinclair/typebox").TObject<{
            $gt: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString<string>>;
            $gte: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString<string>>;
            $lt: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString<string>>;
            $lte: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString<string>>;
            $ne: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString<string>>;
            $in: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString<string>>>;
            $nin: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString<string>>>;
        }>, import("@sinclair/typebox").TObject<{
            [key: string]: import("@sinclair/typebox").TSchema;
        } | undefined>]>>]>>;
    }>>>;
}>>, import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{
    location: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString<string>, import("@sinclair/typebox").TPartial<import("@sinclair/typebox").TIntersect<[import("@sinclair/typebox").TObject<{
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
    title: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString<string>, import("@sinclair/typebox").TPartial<import("@sinclair/typebox").TIntersect<[import("@sinclair/typebox").TObject<{
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
    description: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString<string>, import("@sinclair/typebox").TPartial<import("@sinclair/typebox").TIntersect<[import("@sinclair/typebox").TObject<{
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
    organizer: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString<string>, import("@sinclair/typebox").TPartial<import("@sinclair/typebox").TIntersect<[import("@sinclair/typebox").TObject<{
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
    tags: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString<string>>, import("@sinclair/typebox").TPartial<import("@sinclair/typebox").TIntersect<[import("@sinclair/typebox").TObject<{
        $gt: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString<string>>;
        $gte: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString<string>>;
        $lt: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString<string>>;
        $lte: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString<string>>;
        $ne: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString<string>>;
        $in: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString<string>>>;
        $nin: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString<string>>>;
    }>, import("@sinclair/typebox").TObject<{
        [key: string]: import("@sinclair/typebox").TSchema;
    } | undefined>]>>]>>;
}>>]>, import("@sinclair/typebox").TObject<{}>]>;
export type EventQuery = Static<typeof eventQuerySchema>;
export declare const eventQueryValidator: import("@feathersjs/schema").Validator<any, any>;
export declare const eventQueryResolver: import("@feathersjs/schema").Resolver<Partial<{
    $limit: number;
    $skip: number;
    $sort: {
        location?: number | undefined;
        id?: number | undefined;
        title?: number | undefined;
        description?: number | undefined;
        organizer?: number | undefined;
        tags?: number | undefined;
    };
    $select: ("location" | "id" | "title" | "description" | "organizer" | "tags")[];
    $and: ({
        location?: string | Partial<{
            $gt: string;
            $gte: string;
            $lt: string;
            $lte: string;
            $ne: string;
            $in: string[];
            $nin: string[];
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
        title?: string | Partial<{
            $gt: string;
            $gte: string;
            $lt: string;
            $lte: string;
            $ne: string;
            $in: string[];
            $nin: string[];
        } & {}> | undefined;
        description?: string | Partial<{
            $gt: string;
            $gte: string;
            $lt: string;
            $lte: string;
            $ne: string;
            $in: string[];
            $nin: string[];
        } & {}> | undefined;
        organizer?: string | Partial<{
            $gt: string;
            $gte: string;
            $lt: string;
            $lte: string;
            $ne: string;
            $in: string[];
            $nin: string[];
        } & {}> | undefined;
        tags?: string[] | Partial<{
            $gt: string[];
            $gte: string[];
            $lt: string[];
            $lte: string[];
            $ne: string[];
            $in: string[][];
            $nin: string[][];
        } & {}> | undefined;
    } | {
        $or: {
            location?: string | Partial<{
                $gt: string;
                $gte: string;
                $lt: string;
                $lte: string;
                $ne: string;
                $in: string[];
                $nin: string[];
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
            title?: string | Partial<{
                $gt: string;
                $gte: string;
                $lt: string;
                $lte: string;
                $ne: string;
                $in: string[];
                $nin: string[];
            } & {}> | undefined;
            description?: string | Partial<{
                $gt: string;
                $gte: string;
                $lt: string;
                $lte: string;
                $ne: string;
                $in: string[];
                $nin: string[];
            } & {}> | undefined;
            organizer?: string | Partial<{
                $gt: string;
                $gte: string;
                $lt: string;
                $lte: string;
                $ne: string;
                $in: string[];
                $nin: string[];
            } & {}> | undefined;
            tags?: string[] | Partial<{
                $gt: string[];
                $gte: string[];
                $lt: string[];
                $lte: string[];
                $ne: string[];
                $in: string[][];
                $nin: string[][];
            } & {}> | undefined;
        }[];
    })[];
    $or: {
        location?: string | Partial<{
            $gt: string;
            $gte: string;
            $lt: string;
            $lte: string;
            $ne: string;
            $in: string[];
            $nin: string[];
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
        title?: string | Partial<{
            $gt: string;
            $gte: string;
            $lt: string;
            $lte: string;
            $ne: string;
            $in: string[];
            $nin: string[];
        } & {}> | undefined;
        description?: string | Partial<{
            $gt: string;
            $gte: string;
            $lt: string;
            $lte: string;
            $ne: string;
            $in: string[];
            $nin: string[];
        } & {}> | undefined;
        organizer?: string | Partial<{
            $gt: string;
            $gte: string;
            $lt: string;
            $lte: string;
            $ne: string;
            $in: string[];
            $nin: string[];
        } & {}> | undefined;
        tags?: string[] | Partial<{
            $gt: string[];
            $gte: string[];
            $lt: string[];
            $lte: string[];
            $ne: string[];
            $in: string[][];
            $nin: string[][];
        } & {}> | undefined;
    }[];
}> & {
    location?: string | Partial<{
        $gt: string;
        $gte: string;
        $lt: string;
        $lte: string;
        $ne: string;
        $in: string[];
        $nin: string[];
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
    title?: string | Partial<{
        $gt: string;
        $gte: string;
        $lt: string;
        $lte: string;
        $ne: string;
        $in: string[];
        $nin: string[];
    } & {}> | undefined;
    description?: string | Partial<{
        $gt: string;
        $gte: string;
        $lt: string;
        $lte: string;
        $ne: string;
        $in: string[];
        $nin: string[];
    } & {}> | undefined;
    organizer?: string | Partial<{
        $gt: string;
        $gte: string;
        $lt: string;
        $lte: string;
        $ne: string;
        $in: string[];
        $nin: string[];
    } & {}> | undefined;
    tags?: string[] | Partial<{
        $gt: string[];
        $gte: string[];
        $lt: string[];
        $lte: string[];
        $ne: string[];
        $in: string[][];
        $nin: string[][];
    } & {}> | undefined;
} & {}, HookContext>;
export {};
