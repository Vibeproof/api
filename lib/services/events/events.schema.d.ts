import type { Static } from '@feathersjs/typebox';
import type { HookContext } from '../../declarations';
export declare enum ClaimType {
    GTE = 0,
    GT = 1,
    EQ = 2,
    LT = 3,
    LTE = 4
}
export declare enum AuthType {
    VAULT = 0,
    GITHUB = 1,
    TWITTER = 2,
    EVM_ACCOUNT = 3,
    TELEGRAM = 4
}
declare const SismoClaimSchema: import("@sinclair/typebox").TObject<{
    claimType: import("@sinclair/typebox").TEnum<typeof ClaimType>;
    groupId: import("@sinclair/typebox").TString<string>;
    groupTimestamp: import("@sinclair/typebox").TString<string>;
    value: import("@sinclair/typebox").TNumber;
    isOptional: import("@sinclair/typebox").TBoolean;
    isSelectableByUser: import("@sinclair/typebox").TBoolean;
    extraData: import("@sinclair/typebox").TString<string>;
}>;
export type SismoClaim = Static<typeof SismoClaimSchema>;
export declare enum EventApplicationContacts {
    EMAIL = "Email",
    PHONE = "Phone",
    NAME = "Name",
    TWITTER = "Twitter",
    TELEGRAM = "Telegram",
    DISCORD = "Discord",
    FACEBOOK = "Facebook",
    INSTAGRAM = "Instagram"
}
export declare const eventSchema: import("@sinclair/typebox").TObject<{
    id: import("@sinclair/typebox").TString<"uuid">;
    title: import("@sinclair/typebox").TString<string>;
    description: import("@sinclair/typebox").TString<string>;
    seed: import("@sinclair/typebox").TNumber;
    application_template: import("@sinclair/typebox").TString<string>;
    contacts: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TEnum<typeof EventApplicationContacts>>;
    public_key: import("@sinclair/typebox").TString<string>;
    signature_public_key: import("@sinclair/typebox").TString<string>;
    keystore: import("@sinclair/typebox").TString<string>;
    tags: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString<string>>;
    link: import("@sinclair/typebox").TString<string>;
    note: import("@sinclair/typebox").TString<string>;
    location: import("@sinclair/typebox").TString<string>;
    capacity: import("@sinclair/typebox").TNumber;
    price: import("@sinclair/typebox").TNumber;
    sismo: import("@sinclair/typebox").TObject<{
        auths: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
            authType: import("@sinclair/typebox").TEnum<typeof AuthType>;
            isAnon: import("@sinclair/typebox").TBoolean;
            userId: import("@sinclair/typebox").TString<string>;
            isOptional: import("@sinclair/typebox").TBoolean;
            isSelectableByUser: import("@sinclair/typebox").TBoolean;
            extraData: import("@sinclair/typebox").TString<string>;
        }>>;
        claims: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
            claimType: import("@sinclair/typebox").TEnum<typeof ClaimType>;
            groupId: import("@sinclair/typebox").TString<string>;
            groupTimestamp: import("@sinclair/typebox").TString<string>;
            value: import("@sinclair/typebox").TNumber;
            isOptional: import("@sinclair/typebox").TBoolean;
            isSelectableByUser: import("@sinclair/typebox").TBoolean;
            extraData: import("@sinclair/typebox").TString<string>;
        }>>;
    }>;
    registration_start: import("@sinclair/typebox").TString<"date-time">;
    registration_end: import("@sinclair/typebox").TString<"date-time">;
    start: import("@sinclair/typebox").TString<"date-time">;
    end: import("@sinclair/typebox").TString<"date-time">;
    public: import("@sinclair/typebox").TBoolean;
    paused: import("@sinclair/typebox").TBoolean;
    applications: import("@sinclair/typebox").TNumber;
    timestamp: import("@sinclair/typebox").TString<"date-time">;
    signature: import("@sinclair/typebox").TString<string>;
    owner: import("@sinclair/typebox").TString<string>;
    version: import("@sinclair/typebox").TNumber;
    image: import("@sinclair/typebox").TObject<{
        src: import("@sinclair/typebox").TString<"uri">;
        prompt: import("@sinclair/typebox").TString<string>;
        updatedAt: import("@sinclair/typebox").TString<"date-time">;
    }>;
    cid: import("@sinclair/typebox").TString<string>;
    banned: import("@sinclair/typebox").TBoolean;
    rating: import("@sinclair/typebox").TNumber;
}>;
export type Event = Static<typeof eventSchema>;
export declare const eventValidator: import("@feathersjs/schema").Validator<any, any>;
export declare const eventResolver: import("@feathersjs/schema").Resolver<{
    link: string;
    location: string;
    id: string;
    end: string;
    start: string;
    paused: boolean;
    public: boolean;
    title: string;
    image: {
        prompt: string;
        src: string;
        updatedAt: string;
    };
    description: string;
    version: number;
    timestamp: string;
    sismo: {
        auths: {
            authType: AuthType;
            isAnon: boolean;
            userId: string;
            isOptional: boolean;
            isSelectableByUser: boolean;
            extraData: string;
        }[];
        claims: {
            value: number;
            isOptional: boolean;
            isSelectableByUser: boolean;
            extraData: string;
            claimType: ClaimType;
            groupId: string;
            groupTimestamp: string;
        }[];
    };
    seed: number;
    application_template: string;
    contacts: EventApplicationContacts[];
    public_key: string;
    signature_public_key: string;
    keystore: string;
    tags: string[];
    note: string;
    capacity: number;
    price: number;
    registration_start: string;
    registration_end: string;
    applications: number;
    signature: string;
    owner: string;
    cid: string;
    banned: boolean;
    rating: number;
}, HookContext>;
export declare const eventExternalResolver: import("@feathersjs/schema").Resolver<{
    link: string;
    location: string;
    id: string;
    end: string;
    start: string;
    paused: boolean;
    public: boolean;
    title: string;
    image: {
        prompt: string;
        src: string;
        updatedAt: string;
    };
    description: string;
    version: number;
    timestamp: string;
    sismo: {
        auths: {
            authType: AuthType;
            isAnon: boolean;
            userId: string;
            isOptional: boolean;
            isSelectableByUser: boolean;
            extraData: string;
        }[];
        claims: {
            value: number;
            isOptional: boolean;
            isSelectableByUser: boolean;
            extraData: string;
            claimType: ClaimType;
            groupId: string;
            groupTimestamp: string;
        }[];
    };
    seed: number;
    application_template: string;
    contacts: EventApplicationContacts[];
    public_key: string;
    signature_public_key: string;
    keystore: string;
    tags: string[];
    note: string;
    capacity: number;
    price: number;
    registration_start: string;
    registration_end: string;
    applications: number;
    signature: string;
    owner: string;
    cid: string;
    banned: boolean;
    rating: number;
}, HookContext>;
export declare const eventDataSchema: import("@sinclair/typebox").TPick<import("@sinclair/typebox").TObject<{
    id: import("@sinclair/typebox").TString<"uuid">;
    title: import("@sinclair/typebox").TString<string>;
    description: import("@sinclair/typebox").TString<string>;
    seed: import("@sinclair/typebox").TNumber;
    application_template: import("@sinclair/typebox").TString<string>;
    contacts: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TEnum<typeof EventApplicationContacts>>;
    public_key: import("@sinclair/typebox").TString<string>;
    signature_public_key: import("@sinclair/typebox").TString<string>;
    keystore: import("@sinclair/typebox").TString<string>;
    tags: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString<string>>;
    link: import("@sinclair/typebox").TString<string>;
    note: import("@sinclair/typebox").TString<string>;
    location: import("@sinclair/typebox").TString<string>;
    capacity: import("@sinclair/typebox").TNumber;
    price: import("@sinclair/typebox").TNumber;
    sismo: import("@sinclair/typebox").TObject<{
        auths: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
            authType: import("@sinclair/typebox").TEnum<typeof AuthType>;
            isAnon: import("@sinclair/typebox").TBoolean;
            userId: import("@sinclair/typebox").TString<string>;
            isOptional: import("@sinclair/typebox").TBoolean;
            isSelectableByUser: import("@sinclair/typebox").TBoolean;
            extraData: import("@sinclair/typebox").TString<string>;
        }>>;
        claims: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
            claimType: import("@sinclair/typebox").TEnum<typeof ClaimType>;
            groupId: import("@sinclair/typebox").TString<string>;
            groupTimestamp: import("@sinclair/typebox").TString<string>;
            value: import("@sinclair/typebox").TNumber;
            isOptional: import("@sinclair/typebox").TBoolean;
            isSelectableByUser: import("@sinclair/typebox").TBoolean;
            extraData: import("@sinclair/typebox").TString<string>;
        }>>;
    }>;
    registration_start: import("@sinclair/typebox").TString<"date-time">;
    registration_end: import("@sinclair/typebox").TString<"date-time">;
    start: import("@sinclair/typebox").TString<"date-time">;
    end: import("@sinclair/typebox").TString<"date-time">;
    public: import("@sinclair/typebox").TBoolean;
    paused: import("@sinclair/typebox").TBoolean;
    applications: import("@sinclair/typebox").TNumber;
    timestamp: import("@sinclair/typebox").TString<"date-time">;
    signature: import("@sinclair/typebox").TString<string>;
    owner: import("@sinclair/typebox").TString<string>;
    version: import("@sinclair/typebox").TNumber;
    image: import("@sinclair/typebox").TObject<{
        src: import("@sinclair/typebox").TString<"uri">;
        prompt: import("@sinclair/typebox").TString<string>;
        updatedAt: import("@sinclair/typebox").TString<"date-time">;
    }>;
    cid: import("@sinclair/typebox").TString<string>;
    banned: import("@sinclair/typebox").TBoolean;
    rating: import("@sinclair/typebox").TNumber;
}>, ["id", "title", "description", "seed", "application_template", "contacts", "public_key", "signature_public_key", "keystore", "tags", "link", "note", "location", "capacity", "price", "sismo", "registration_start", "registration_end", "start", "end", "paused", "public", "timestamp", "signature", "owner", "version"]>;
export type EventData = Static<typeof eventDataSchema>;
export declare const eventDataValidator: import("@feathersjs/schema").Validator<any, any>;
export declare const eventDataResolver: import("@feathersjs/schema").Resolver<{
    link: string;
    location: string;
    id: string;
    end: string;
    start: string;
    paused: boolean;
    public: boolean;
    title: string;
    image: {
        prompt: string;
        src: string;
        updatedAt: string;
    };
    description: string;
    version: number;
    timestamp: string;
    sismo: {
        auths: {
            authType: AuthType;
            isAnon: boolean;
            userId: string;
            isOptional: boolean;
            isSelectableByUser: boolean;
            extraData: string;
        }[];
        claims: {
            value: number;
            isOptional: boolean;
            isSelectableByUser: boolean;
            extraData: string;
            claimType: ClaimType;
            groupId: string;
            groupTimestamp: string;
        }[];
    };
    seed: number;
    application_template: string;
    contacts: EventApplicationContacts[];
    public_key: string;
    signature_public_key: string;
    keystore: string;
    tags: string[];
    note: string;
    capacity: number;
    price: number;
    registration_start: string;
    registration_end: string;
    applications: number;
    signature: string;
    owner: string;
    cid: string;
    banned: boolean;
    rating: number;
}, HookContext>;
export declare const eventPatchSchema: import("@sinclair/typebox").TIntersect<[import("@sinclair/typebox").TPartial<import("@sinclair/typebox").TPick<import("@sinclair/typebox").TObject<{
    id: import("@sinclair/typebox").TString<"uuid">;
    title: import("@sinclair/typebox").TString<string>;
    description: import("@sinclair/typebox").TString<string>;
    seed: import("@sinclair/typebox").TNumber;
    application_template: import("@sinclair/typebox").TString<string>;
    contacts: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TEnum<typeof EventApplicationContacts>>;
    public_key: import("@sinclair/typebox").TString<string>;
    signature_public_key: import("@sinclair/typebox").TString<string>;
    keystore: import("@sinclair/typebox").TString<string>;
    tags: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString<string>>;
    link: import("@sinclair/typebox").TString<string>;
    note: import("@sinclair/typebox").TString<string>;
    location: import("@sinclair/typebox").TString<string>;
    capacity: import("@sinclair/typebox").TNumber;
    price: import("@sinclair/typebox").TNumber;
    sismo: import("@sinclair/typebox").TObject<{
        auths: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
            authType: import("@sinclair/typebox").TEnum<typeof AuthType>;
            isAnon: import("@sinclair/typebox").TBoolean;
            userId: import("@sinclair/typebox").TString<string>;
            isOptional: import("@sinclair/typebox").TBoolean;
            isSelectableByUser: import("@sinclair/typebox").TBoolean;
            extraData: import("@sinclair/typebox").TString<string>;
        }>>;
        claims: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
            claimType: import("@sinclair/typebox").TEnum<typeof ClaimType>;
            groupId: import("@sinclair/typebox").TString<string>;
            groupTimestamp: import("@sinclair/typebox").TString<string>;
            value: import("@sinclair/typebox").TNumber;
            isOptional: import("@sinclair/typebox").TBoolean;
            isSelectableByUser: import("@sinclair/typebox").TBoolean;
            extraData: import("@sinclair/typebox").TString<string>;
        }>>;
    }>;
    registration_start: import("@sinclair/typebox").TString<"date-time">;
    registration_end: import("@sinclair/typebox").TString<"date-time">;
    start: import("@sinclair/typebox").TString<"date-time">;
    end: import("@sinclair/typebox").TString<"date-time">;
    public: import("@sinclair/typebox").TBoolean;
    paused: import("@sinclair/typebox").TBoolean;
    applications: import("@sinclair/typebox").TNumber;
    timestamp: import("@sinclair/typebox").TString<"date-time">;
    signature: import("@sinclair/typebox").TString<string>;
    owner: import("@sinclair/typebox").TString<string>;
    version: import("@sinclair/typebox").TNumber;
    image: import("@sinclair/typebox").TObject<{
        src: import("@sinclair/typebox").TString<"uri">;
        prompt: import("@sinclair/typebox").TString<string>;
        updatedAt: import("@sinclair/typebox").TString<"date-time">;
    }>;
    cid: import("@sinclair/typebox").TString<string>;
    banned: import("@sinclair/typebox").TBoolean;
    rating: import("@sinclair/typebox").TNumber;
}>, ["title", "description", "seed", "application_template", "contacts", "tags", "link", "note", "location", "capacity", "public", "paused", "start", "end"]>>, import("@sinclair/typebox").TPick<import("@sinclair/typebox").TObject<{
    id: import("@sinclair/typebox").TString<"uuid">;
    title: import("@sinclair/typebox").TString<string>;
    description: import("@sinclair/typebox").TString<string>;
    seed: import("@sinclair/typebox").TNumber;
    application_template: import("@sinclair/typebox").TString<string>;
    contacts: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TEnum<typeof EventApplicationContacts>>;
    public_key: import("@sinclair/typebox").TString<string>;
    signature_public_key: import("@sinclair/typebox").TString<string>;
    keystore: import("@sinclair/typebox").TString<string>;
    tags: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString<string>>;
    link: import("@sinclair/typebox").TString<string>;
    note: import("@sinclair/typebox").TString<string>;
    location: import("@sinclair/typebox").TString<string>;
    capacity: import("@sinclair/typebox").TNumber;
    price: import("@sinclair/typebox").TNumber;
    sismo: import("@sinclair/typebox").TObject<{
        auths: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
            authType: import("@sinclair/typebox").TEnum<typeof AuthType>;
            isAnon: import("@sinclair/typebox").TBoolean;
            userId: import("@sinclair/typebox").TString<string>;
            isOptional: import("@sinclair/typebox").TBoolean;
            isSelectableByUser: import("@sinclair/typebox").TBoolean;
            extraData: import("@sinclair/typebox").TString<string>;
        }>>;
        claims: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
            claimType: import("@sinclair/typebox").TEnum<typeof ClaimType>;
            groupId: import("@sinclair/typebox").TString<string>;
            groupTimestamp: import("@sinclair/typebox").TString<string>;
            value: import("@sinclair/typebox").TNumber;
            isOptional: import("@sinclair/typebox").TBoolean;
            isSelectableByUser: import("@sinclair/typebox").TBoolean;
            extraData: import("@sinclair/typebox").TString<string>;
        }>>;
    }>;
    registration_start: import("@sinclair/typebox").TString<"date-time">;
    registration_end: import("@sinclair/typebox").TString<"date-time">;
    start: import("@sinclair/typebox").TString<"date-time">;
    end: import("@sinclair/typebox").TString<"date-time">;
    public: import("@sinclair/typebox").TBoolean;
    paused: import("@sinclair/typebox").TBoolean;
    applications: import("@sinclair/typebox").TNumber;
    timestamp: import("@sinclair/typebox").TString<"date-time">;
    signature: import("@sinclair/typebox").TString<string>;
    owner: import("@sinclair/typebox").TString<string>;
    version: import("@sinclair/typebox").TNumber;
    image: import("@sinclair/typebox").TObject<{
        src: import("@sinclair/typebox").TString<"uri">;
        prompt: import("@sinclair/typebox").TString<string>;
        updatedAt: import("@sinclair/typebox").TString<"date-time">;
    }>;
    cid: import("@sinclair/typebox").TString<string>;
    banned: import("@sinclair/typebox").TBoolean;
    rating: import("@sinclair/typebox").TNumber;
}>, ["signature"]>]>;
export type EventPatch = Static<typeof eventPatchSchema>;
export declare const eventPatchValidator: import("@feathersjs/schema").Validator<any, any>;
export declare const eventPatchResolver: import("@feathersjs/schema").Resolver<Partial<{
    link: string;
    location: string;
    end: string;
    start: string;
    paused: boolean;
    public: boolean;
    title: string;
    description: string;
    seed: number;
    application_template: string;
    contacts: EventApplicationContacts[];
    tags: string[];
    note: string;
    capacity: number;
}> & {
    signature: string;
}, HookContext>;
export declare const eventQueryProperties: import("@sinclair/typebox").TPick<import("@sinclair/typebox").TObject<{
    id: import("@sinclair/typebox").TString<"uuid">;
    title: import("@sinclair/typebox").TString<string>;
    description: import("@sinclair/typebox").TString<string>;
    seed: import("@sinclair/typebox").TNumber;
    application_template: import("@sinclair/typebox").TString<string>;
    contacts: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TEnum<typeof EventApplicationContacts>>;
    public_key: import("@sinclair/typebox").TString<string>;
    signature_public_key: import("@sinclair/typebox").TString<string>;
    keystore: import("@sinclair/typebox").TString<string>;
    tags: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString<string>>;
    link: import("@sinclair/typebox").TString<string>;
    note: import("@sinclair/typebox").TString<string>;
    location: import("@sinclair/typebox").TString<string>;
    capacity: import("@sinclair/typebox").TNumber;
    price: import("@sinclair/typebox").TNumber;
    sismo: import("@sinclair/typebox").TObject<{
        auths: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
            authType: import("@sinclair/typebox").TEnum<typeof AuthType>;
            isAnon: import("@sinclair/typebox").TBoolean;
            userId: import("@sinclair/typebox").TString<string>;
            isOptional: import("@sinclair/typebox").TBoolean;
            isSelectableByUser: import("@sinclair/typebox").TBoolean;
            extraData: import("@sinclair/typebox").TString<string>;
        }>>;
        claims: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
            claimType: import("@sinclair/typebox").TEnum<typeof ClaimType>;
            groupId: import("@sinclair/typebox").TString<string>;
            groupTimestamp: import("@sinclair/typebox").TString<string>;
            value: import("@sinclair/typebox").TNumber;
            isOptional: import("@sinclair/typebox").TBoolean;
            isSelectableByUser: import("@sinclair/typebox").TBoolean;
            extraData: import("@sinclair/typebox").TString<string>;
        }>>;
    }>;
    registration_start: import("@sinclair/typebox").TString<"date-time">;
    registration_end: import("@sinclair/typebox").TString<"date-time">;
    start: import("@sinclair/typebox").TString<"date-time">;
    end: import("@sinclair/typebox").TString<"date-time">;
    public: import("@sinclair/typebox").TBoolean;
    paused: import("@sinclair/typebox").TBoolean;
    applications: import("@sinclair/typebox").TNumber;
    timestamp: import("@sinclair/typebox").TString<"date-time">;
    signature: import("@sinclair/typebox").TString<string>;
    owner: import("@sinclair/typebox").TString<string>;
    version: import("@sinclair/typebox").TNumber;
    image: import("@sinclair/typebox").TObject<{
        src: import("@sinclair/typebox").TString<"uri">;
        prompt: import("@sinclair/typebox").TString<string>;
        updatedAt: import("@sinclair/typebox").TString<"date-time">;
    }>;
    cid: import("@sinclair/typebox").TString<string>;
    banned: import("@sinclair/typebox").TBoolean;
    rating: import("@sinclair/typebox").TNumber;
}>, ["id", "title", "description", "public", "banned", "rating", "tags", "location", "timestamp", "capacity", "registration_start", "registration_end", "start", "end", "owner"]>;
export declare const eventQuerySchema: import("@sinclair/typebox").TIntersect<[import("@sinclair/typebox").TIntersect<[import("@sinclair/typebox").TPartial<import("@sinclair/typebox").TObject<{
    $limit: import("@sinclair/typebox").TNumber;
    $skip: import("@sinclair/typebox").TNumber;
    $sort: import("@sinclair/typebox").TObject<{
        location: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TInteger>;
        id: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TInteger>;
        end: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TInteger>;
        start: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TInteger>;
        public: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TInteger>;
        title: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TInteger>;
        description: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TInteger>;
        timestamp: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TInteger>;
        tags: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TInteger>;
        capacity: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TInteger>;
        registration_start: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TInteger>;
        registration_end: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TInteger>;
        owner: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TInteger>;
        banned: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TInteger>;
        rating: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TInteger>;
    }>;
    $select: import("@sinclair/typebox").TUnsafe<("location" | "id" | "end" | "start" | "public" | "title" | "description" | "timestamp" | "tags" | "capacity" | "registration_start" | "registration_end" | "owner" | "banned" | "rating")[]>;
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
        end: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString<"date-time">, import("@sinclair/typebox").TPartial<import("@sinclair/typebox").TIntersect<[import("@sinclair/typebox").TObject<{
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
        start: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString<"date-time">, import("@sinclair/typebox").TPartial<import("@sinclair/typebox").TIntersect<[import("@sinclair/typebox").TObject<{
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
        public: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TBoolean, import("@sinclair/typebox").TPartial<import("@sinclair/typebox").TIntersect<[import("@sinclair/typebox").TObject<{
            $gt: import("@sinclair/typebox").TBoolean;
            $gte: import("@sinclair/typebox").TBoolean;
            $lt: import("@sinclair/typebox").TBoolean;
            $lte: import("@sinclair/typebox").TBoolean;
            $ne: import("@sinclair/typebox").TBoolean;
            $in: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TBoolean>;
            $nin: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TBoolean>;
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
        capacity: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TNumber, import("@sinclair/typebox").TPartial<import("@sinclair/typebox").TIntersect<[import("@sinclair/typebox").TObject<{
            $gt: import("@sinclair/typebox").TNumber;
            $gte: import("@sinclair/typebox").TNumber;
            $lt: import("@sinclair/typebox").TNumber;
            $lte: import("@sinclair/typebox").TNumber;
            $ne: import("@sinclair/typebox").TNumber;
            $in: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TNumber>;
            $nin: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TNumber>;
        }>, import("@sinclair/typebox").TObject<{
            [key: string]: import("@sinclair/typebox").TSchema;
        } | undefined>]>>]>>;
        registration_start: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString<"date-time">, import("@sinclair/typebox").TPartial<import("@sinclair/typebox").TIntersect<[import("@sinclair/typebox").TObject<{
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
        registration_end: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString<"date-time">, import("@sinclair/typebox").TPartial<import("@sinclair/typebox").TIntersect<[import("@sinclair/typebox").TObject<{
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
        banned: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TBoolean, import("@sinclair/typebox").TPartial<import("@sinclair/typebox").TIntersect<[import("@sinclair/typebox").TObject<{
            $gt: import("@sinclair/typebox").TBoolean;
            $gte: import("@sinclair/typebox").TBoolean;
            $lt: import("@sinclair/typebox").TBoolean;
            $lte: import("@sinclair/typebox").TBoolean;
            $ne: import("@sinclair/typebox").TBoolean;
            $in: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TBoolean>;
            $nin: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TBoolean>;
        }>, import("@sinclair/typebox").TObject<{
            [key: string]: import("@sinclair/typebox").TSchema;
        } | undefined>]>>]>>;
        rating: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TNumber, import("@sinclair/typebox").TPartial<import("@sinclair/typebox").TIntersect<[import("@sinclair/typebox").TObject<{
            $gt: import("@sinclair/typebox").TNumber;
            $gte: import("@sinclair/typebox").TNumber;
            $lt: import("@sinclair/typebox").TNumber;
            $lte: import("@sinclair/typebox").TNumber;
            $ne: import("@sinclair/typebox").TNumber;
            $in: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TNumber>;
            $nin: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TNumber>;
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
            end: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString<"date-time">, import("@sinclair/typebox").TPartial<import("@sinclair/typebox").TIntersect<[import("@sinclair/typebox").TObject<{
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
            start: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString<"date-time">, import("@sinclair/typebox").TPartial<import("@sinclair/typebox").TIntersect<[import("@sinclair/typebox").TObject<{
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
            public: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TBoolean, import("@sinclair/typebox").TPartial<import("@sinclair/typebox").TIntersect<[import("@sinclair/typebox").TObject<{
                $gt: import("@sinclair/typebox").TBoolean;
                $gte: import("@sinclair/typebox").TBoolean;
                $lt: import("@sinclair/typebox").TBoolean;
                $lte: import("@sinclair/typebox").TBoolean;
                $ne: import("@sinclair/typebox").TBoolean;
                $in: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TBoolean>;
                $nin: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TBoolean>;
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
            capacity: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TNumber, import("@sinclair/typebox").TPartial<import("@sinclair/typebox").TIntersect<[import("@sinclair/typebox").TObject<{
                $gt: import("@sinclair/typebox").TNumber;
                $gte: import("@sinclair/typebox").TNumber;
                $lt: import("@sinclair/typebox").TNumber;
                $lte: import("@sinclair/typebox").TNumber;
                $ne: import("@sinclair/typebox").TNumber;
                $in: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TNumber>;
                $nin: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TNumber>;
            }>, import("@sinclair/typebox").TObject<{
                [key: string]: import("@sinclair/typebox").TSchema;
            } | undefined>]>>]>>;
            registration_start: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString<"date-time">, import("@sinclair/typebox").TPartial<import("@sinclair/typebox").TIntersect<[import("@sinclair/typebox").TObject<{
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
            registration_end: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString<"date-time">, import("@sinclair/typebox").TPartial<import("@sinclair/typebox").TIntersect<[import("@sinclair/typebox").TObject<{
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
            banned: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TBoolean, import("@sinclair/typebox").TPartial<import("@sinclair/typebox").TIntersect<[import("@sinclair/typebox").TObject<{
                $gt: import("@sinclair/typebox").TBoolean;
                $gte: import("@sinclair/typebox").TBoolean;
                $lt: import("@sinclair/typebox").TBoolean;
                $lte: import("@sinclair/typebox").TBoolean;
                $ne: import("@sinclair/typebox").TBoolean;
                $in: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TBoolean>;
                $nin: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TBoolean>;
            }>, import("@sinclair/typebox").TObject<{
                [key: string]: import("@sinclair/typebox").TSchema;
            } | undefined>]>>]>>;
            rating: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TNumber, import("@sinclair/typebox").TPartial<import("@sinclair/typebox").TIntersect<[import("@sinclair/typebox").TObject<{
                $gt: import("@sinclair/typebox").TNumber;
                $gte: import("@sinclair/typebox").TNumber;
                $lt: import("@sinclair/typebox").TNumber;
                $lte: import("@sinclair/typebox").TNumber;
                $ne: import("@sinclair/typebox").TNumber;
                $in: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TNumber>;
                $nin: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TNumber>;
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
        end: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString<"date-time">, import("@sinclair/typebox").TPartial<import("@sinclair/typebox").TIntersect<[import("@sinclair/typebox").TObject<{
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
        start: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString<"date-time">, import("@sinclair/typebox").TPartial<import("@sinclair/typebox").TIntersect<[import("@sinclair/typebox").TObject<{
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
        public: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TBoolean, import("@sinclair/typebox").TPartial<import("@sinclair/typebox").TIntersect<[import("@sinclair/typebox").TObject<{
            $gt: import("@sinclair/typebox").TBoolean;
            $gte: import("@sinclair/typebox").TBoolean;
            $lt: import("@sinclair/typebox").TBoolean;
            $lte: import("@sinclair/typebox").TBoolean;
            $ne: import("@sinclair/typebox").TBoolean;
            $in: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TBoolean>;
            $nin: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TBoolean>;
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
        capacity: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TNumber, import("@sinclair/typebox").TPartial<import("@sinclair/typebox").TIntersect<[import("@sinclair/typebox").TObject<{
            $gt: import("@sinclair/typebox").TNumber;
            $gte: import("@sinclair/typebox").TNumber;
            $lt: import("@sinclair/typebox").TNumber;
            $lte: import("@sinclair/typebox").TNumber;
            $ne: import("@sinclair/typebox").TNumber;
            $in: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TNumber>;
            $nin: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TNumber>;
        }>, import("@sinclair/typebox").TObject<{
            [key: string]: import("@sinclair/typebox").TSchema;
        } | undefined>]>>]>>;
        registration_start: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString<"date-time">, import("@sinclair/typebox").TPartial<import("@sinclair/typebox").TIntersect<[import("@sinclair/typebox").TObject<{
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
        registration_end: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString<"date-time">, import("@sinclair/typebox").TPartial<import("@sinclair/typebox").TIntersect<[import("@sinclair/typebox").TObject<{
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
        banned: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TBoolean, import("@sinclair/typebox").TPartial<import("@sinclair/typebox").TIntersect<[import("@sinclair/typebox").TObject<{
            $gt: import("@sinclair/typebox").TBoolean;
            $gte: import("@sinclair/typebox").TBoolean;
            $lt: import("@sinclair/typebox").TBoolean;
            $lte: import("@sinclair/typebox").TBoolean;
            $ne: import("@sinclair/typebox").TBoolean;
            $in: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TBoolean>;
            $nin: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TBoolean>;
        }>, import("@sinclair/typebox").TObject<{
            [key: string]: import("@sinclair/typebox").TSchema;
        } | undefined>]>>]>>;
        rating: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TNumber, import("@sinclair/typebox").TPartial<import("@sinclair/typebox").TIntersect<[import("@sinclair/typebox").TObject<{
            $gt: import("@sinclair/typebox").TNumber;
            $gte: import("@sinclair/typebox").TNumber;
            $lt: import("@sinclair/typebox").TNumber;
            $lte: import("@sinclair/typebox").TNumber;
            $ne: import("@sinclair/typebox").TNumber;
            $in: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TNumber>;
            $nin: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TNumber>;
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
    end: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString<"date-time">, import("@sinclair/typebox").TPartial<import("@sinclair/typebox").TIntersect<[import("@sinclair/typebox").TObject<{
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
    start: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString<"date-time">, import("@sinclair/typebox").TPartial<import("@sinclair/typebox").TIntersect<[import("@sinclair/typebox").TObject<{
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
    public: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TBoolean, import("@sinclair/typebox").TPartial<import("@sinclair/typebox").TIntersect<[import("@sinclair/typebox").TObject<{
        $gt: import("@sinclair/typebox").TBoolean;
        $gte: import("@sinclair/typebox").TBoolean;
        $lt: import("@sinclair/typebox").TBoolean;
        $lte: import("@sinclair/typebox").TBoolean;
        $ne: import("@sinclair/typebox").TBoolean;
        $in: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TBoolean>;
        $nin: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TBoolean>;
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
    capacity: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TNumber, import("@sinclair/typebox").TPartial<import("@sinclair/typebox").TIntersect<[import("@sinclair/typebox").TObject<{
        $gt: import("@sinclair/typebox").TNumber;
        $gte: import("@sinclair/typebox").TNumber;
        $lt: import("@sinclair/typebox").TNumber;
        $lte: import("@sinclair/typebox").TNumber;
        $ne: import("@sinclair/typebox").TNumber;
        $in: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TNumber>;
        $nin: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TNumber>;
    }>, import("@sinclair/typebox").TObject<{
        [key: string]: import("@sinclair/typebox").TSchema;
    } | undefined>]>>]>>;
    registration_start: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString<"date-time">, import("@sinclair/typebox").TPartial<import("@sinclair/typebox").TIntersect<[import("@sinclair/typebox").TObject<{
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
    registration_end: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString<"date-time">, import("@sinclair/typebox").TPartial<import("@sinclair/typebox").TIntersect<[import("@sinclair/typebox").TObject<{
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
    banned: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TBoolean, import("@sinclair/typebox").TPartial<import("@sinclair/typebox").TIntersect<[import("@sinclair/typebox").TObject<{
        $gt: import("@sinclair/typebox").TBoolean;
        $gte: import("@sinclair/typebox").TBoolean;
        $lt: import("@sinclair/typebox").TBoolean;
        $lte: import("@sinclair/typebox").TBoolean;
        $ne: import("@sinclair/typebox").TBoolean;
        $in: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TBoolean>;
        $nin: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TBoolean>;
    }>, import("@sinclair/typebox").TObject<{
        [key: string]: import("@sinclair/typebox").TSchema;
    } | undefined>]>>]>>;
    rating: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TNumber, import("@sinclair/typebox").TPartial<import("@sinclair/typebox").TIntersect<[import("@sinclair/typebox").TObject<{
        $gt: import("@sinclair/typebox").TNumber;
        $gte: import("@sinclair/typebox").TNumber;
        $lt: import("@sinclair/typebox").TNumber;
        $lte: import("@sinclair/typebox").TNumber;
        $ne: import("@sinclair/typebox").TNumber;
        $in: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TNumber>;
        $nin: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TNumber>;
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
        end?: number | undefined;
        start?: number | undefined;
        public?: number | undefined;
        title?: number | undefined;
        description?: number | undefined;
        timestamp?: number | undefined;
        tags?: number | undefined;
        capacity?: number | undefined;
        registration_start?: number | undefined;
        registration_end?: number | undefined;
        owner?: number | undefined;
        banned?: number | undefined;
        rating?: number | undefined;
    };
    $select: ("location" | "id" | "end" | "start" | "public" | "title" | "description" | "timestamp" | "tags" | "capacity" | "registration_start" | "registration_end" | "owner" | "banned" | "rating")[];
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
        end?: string | Partial<{
            $gt: string;
            $gte: string;
            $lt: string;
            $lte: string;
            $ne: string;
            $in: string[];
            $nin: string[];
        } & {}> | undefined;
        start?: string | Partial<{
            $gt: string;
            $gte: string;
            $lt: string;
            $lte: string;
            $ne: string;
            $in: string[];
            $nin: string[];
        } & {}> | undefined;
        public?: boolean | Partial<{
            $gt: boolean;
            $gte: boolean;
            $lt: boolean;
            $lte: boolean;
            $ne: boolean;
            $in: boolean[];
            $nin: boolean[];
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
        timestamp?: string | Partial<{
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
        capacity?: number | Partial<{
            $gt: number;
            $gte: number;
            $lt: number;
            $lte: number;
            $ne: number;
            $in: number[];
            $nin: number[];
        } & {}> | undefined;
        registration_start?: string | Partial<{
            $gt: string;
            $gte: string;
            $lt: string;
            $lte: string;
            $ne: string;
            $in: string[];
            $nin: string[];
        } & {}> | undefined;
        registration_end?: string | Partial<{
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
        banned?: boolean | Partial<{
            $gt: boolean;
            $gte: boolean;
            $lt: boolean;
            $lte: boolean;
            $ne: boolean;
            $in: boolean[];
            $nin: boolean[];
        } & {}> | undefined;
        rating?: number | Partial<{
            $gt: number;
            $gte: number;
            $lt: number;
            $lte: number;
            $ne: number;
            $in: number[];
            $nin: number[];
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
            end?: string | Partial<{
                $gt: string;
                $gte: string;
                $lt: string;
                $lte: string;
                $ne: string;
                $in: string[];
                $nin: string[];
            } & {}> | undefined;
            start?: string | Partial<{
                $gt: string;
                $gte: string;
                $lt: string;
                $lte: string;
                $ne: string;
                $in: string[];
                $nin: string[];
            } & {}> | undefined;
            public?: boolean | Partial<{
                $gt: boolean;
                $gte: boolean;
                $lt: boolean;
                $lte: boolean;
                $ne: boolean;
                $in: boolean[];
                $nin: boolean[];
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
            timestamp?: string | Partial<{
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
            capacity?: number | Partial<{
                $gt: number;
                $gte: number;
                $lt: number;
                $lte: number;
                $ne: number;
                $in: number[];
                $nin: number[];
            } & {}> | undefined;
            registration_start?: string | Partial<{
                $gt: string;
                $gte: string;
                $lt: string;
                $lte: string;
                $ne: string;
                $in: string[];
                $nin: string[];
            } & {}> | undefined;
            registration_end?: string | Partial<{
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
            banned?: boolean | Partial<{
                $gt: boolean;
                $gte: boolean;
                $lt: boolean;
                $lte: boolean;
                $ne: boolean;
                $in: boolean[];
                $nin: boolean[];
            } & {}> | undefined;
            rating?: number | Partial<{
                $gt: number;
                $gte: number;
                $lt: number;
                $lte: number;
                $ne: number;
                $in: number[];
                $nin: number[];
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
        end?: string | Partial<{
            $gt: string;
            $gte: string;
            $lt: string;
            $lte: string;
            $ne: string;
            $in: string[];
            $nin: string[];
        } & {}> | undefined;
        start?: string | Partial<{
            $gt: string;
            $gte: string;
            $lt: string;
            $lte: string;
            $ne: string;
            $in: string[];
            $nin: string[];
        } & {}> | undefined;
        public?: boolean | Partial<{
            $gt: boolean;
            $gte: boolean;
            $lt: boolean;
            $lte: boolean;
            $ne: boolean;
            $in: boolean[];
            $nin: boolean[];
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
        timestamp?: string | Partial<{
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
        capacity?: number | Partial<{
            $gt: number;
            $gte: number;
            $lt: number;
            $lte: number;
            $ne: number;
            $in: number[];
            $nin: number[];
        } & {}> | undefined;
        registration_start?: string | Partial<{
            $gt: string;
            $gte: string;
            $lt: string;
            $lte: string;
            $ne: string;
            $in: string[];
            $nin: string[];
        } & {}> | undefined;
        registration_end?: string | Partial<{
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
        banned?: boolean | Partial<{
            $gt: boolean;
            $gte: boolean;
            $lt: boolean;
            $lte: boolean;
            $ne: boolean;
            $in: boolean[];
            $nin: boolean[];
        } & {}> | undefined;
        rating?: number | Partial<{
            $gt: number;
            $gte: number;
            $lt: number;
            $lte: number;
            $ne: number;
            $in: number[];
            $nin: number[];
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
    end?: string | Partial<{
        $gt: string;
        $gte: string;
        $lt: string;
        $lte: string;
        $ne: string;
        $in: string[];
        $nin: string[];
    } & {}> | undefined;
    start?: string | Partial<{
        $gt: string;
        $gte: string;
        $lt: string;
        $lte: string;
        $ne: string;
        $in: string[];
        $nin: string[];
    } & {}> | undefined;
    public?: boolean | Partial<{
        $gt: boolean;
        $gte: boolean;
        $lt: boolean;
        $lte: boolean;
        $ne: boolean;
        $in: boolean[];
        $nin: boolean[];
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
    timestamp?: string | Partial<{
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
    capacity?: number | Partial<{
        $gt: number;
        $gte: number;
        $lt: number;
        $lte: number;
        $ne: number;
        $in: number[];
        $nin: number[];
    } & {}> | undefined;
    registration_start?: string | Partial<{
        $gt: string;
        $gte: string;
        $lt: string;
        $lte: string;
        $ne: string;
        $in: string[];
        $nin: string[];
    } & {}> | undefined;
    registration_end?: string | Partial<{
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
    banned?: boolean | Partial<{
        $gt: boolean;
        $gte: boolean;
        $lt: boolean;
        $lte: boolean;
        $ne: boolean;
        $in: boolean[];
        $nin: boolean[];
    } & {}> | undefined;
    rating?: number | Partial<{
        $gt: number;
        $gte: number;
        $lt: number;
        $lte: number;
        $ne: number;
        $in: number[];
        $nin: number[];
    } & {}> | undefined;
} & {}, HookContext>;
export {};
