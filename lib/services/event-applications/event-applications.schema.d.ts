import type { Static } from '@feathersjs/typebox';
import type { HookContext } from '../../declarations';
import { ResponseType } from '../event-application-responses/event-application-responses.schema';
export declare const eventApplicationSchema: import("@sinclair/typebox").TObject<{
    id: import("@sinclair/typebox").TString<"uuid">;
    public_key: import("@sinclair/typebox").TString<string>;
    keystore: import("@sinclair/typebox").TString<string>;
    event_id: import("@sinclair/typebox").TString<"uuid">;
    message: import("@sinclair/typebox").TString<string>;
    contacts: import("@sinclair/typebox").TString<string>;
    vault_id: import("@sinclair/typebox").TString<string>;
    proof: import("@sinclair/typebox").TString<string>;
    shared_key: import("@sinclair/typebox").TString<string>;
    timestamp: import("@sinclair/typebox").TString<"date-time">;
    signature: import("@sinclair/typebox").TString<string>;
    owner: import("@sinclair/typebox").TString<string>;
    version: import("@sinclair/typebox").TNumber;
    event: import("@sinclair/typebox").TRef<import("@sinclair/typebox").TObject<{
        id: import("@sinclair/typebox").TString<"uuid">;
        title: import("@sinclair/typebox").TString<string>;
        description: import("@sinclair/typebox").TString<string>;
        image: import("@sinclair/typebox").TString<"uri">;
        application_template: import("@sinclair/typebox").TString<string>;
        contacts: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TEnum<typeof import("../events/events.schema").EventApplicationContacts>>;
        public_key: import("@sinclair/typebox").TString<string>;
        signature_public_key: import("@sinclair/typebox").TString<string>;
        keystore: import("@sinclair/typebox").TString<string>;
        tags: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString<string>>;
        link: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<"uri">>;
        note: import("@sinclair/typebox").TString<string>;
        location: import("@sinclair/typebox").TString<string>;
        capacity: import("@sinclair/typebox").TNumber;
        price: import("@sinclair/typebox").TNumber;
        sismo: import("@sinclair/typebox").TObject<{
            auths: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
                authType: import("@sinclair/typebox").TEnum<typeof import("../events/events.schema").AuthType>;
                isAnon: import("@sinclair/typebox").TBoolean;
                userId: import("@sinclair/typebox").TString<string>;
                isOptional: import("@sinclair/typebox").TBoolean;
                isSelectableByUser: import("@sinclair/typebox").TBoolean;
                extraData: import("@sinclair/typebox").TString<string>;
            }>>;
            claims: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
                claimType: import("@sinclair/typebox").TEnum<typeof import("../events/events.schema").ClaimType>;
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
        applications: import("@sinclair/typebox").TNumber;
        timestamp: import("@sinclair/typebox").TString<"date-time">;
        signature: import("@sinclair/typebox").TString<string>;
        owner: import("@sinclair/typebox").TString<string>;
        version: import("@sinclair/typebox").TNumber;
        organizer: import("@sinclair/typebox").TString<string>;
        cid: import("@sinclair/typebox").TString<string>;
    }>>;
    response: import("@sinclair/typebox").TRef<import("@sinclair/typebox").TObject<{
        id: import("@sinclair/typebox").TString<"uuid">;
        type: import("@sinclair/typebox").TEnum<typeof ResponseType>;
        event_application_id: import("@sinclair/typebox").TString<"uuid">;
        shared_key: import("@sinclair/typebox").TString<string>;
        timestamp: import("@sinclair/typebox").TString<"date-time">;
        signature: import("@sinclair/typebox").TString<string>;
        version: import("@sinclair/typebox").TNumber;
        cid: import("@sinclair/typebox").TString<string>;
    }>>;
    organizer: import("@sinclair/typebox").TString<string>;
    cid: import("@sinclair/typebox").TString<string>;
}>;
export type EventApplication = Static<typeof eventApplicationSchema>;
export declare const eventApplicationValidator: import("@feathersjs/schema").Validator<any, any>;
export declare const eventApplicationResolver: import("@feathersjs/schema").Resolver<{
    message: string;
    id: string;
    event: {
        link?: string | undefined;
        location: string;
        id: string;
        end: string;
        start: string;
        title: string;
        image: string;
        description: string;
        version: number;
        timestamp: string;
        sismo: {
            auths: {
                authType: import("../events/events.schema").AuthType;
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
                claimType: import("../events/events.schema").ClaimType;
                groupId: string;
                groupTimestamp: string;
            }[];
        };
        application_template: string;
        contacts: import("../events/events.schema").EventApplicationContacts[];
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
        organizer: string;
        cid: string;
    };
    response: {
        type: ResponseType;
        id: string;
        version: number;
        timestamp: string;
        signature: string;
        cid: string;
        shared_key: string;
        event_application_id: string;
    };
    version: number;
    timestamp: string;
    contacts: string;
    public_key: string;
    keystore: string;
    signature: string;
    owner: string;
    organizer: string;
    cid: string;
    event_id: string;
    vault_id: string;
    proof: string;
    shared_key: string;
}, HookContext>;
export declare const eventApplicationExternalResolver: import("@feathersjs/schema").Resolver<{
    message: string;
    id: string;
    event: {
        link?: string | undefined;
        location: string;
        id: string;
        end: string;
        start: string;
        title: string;
        image: string;
        description: string;
        version: number;
        timestamp: string;
        sismo: {
            auths: {
                authType: import("../events/events.schema").AuthType;
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
                claimType: import("../events/events.schema").ClaimType;
                groupId: string;
                groupTimestamp: string;
            }[];
        };
        application_template: string;
        contacts: import("../events/events.schema").EventApplicationContacts[];
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
        organizer: string;
        cid: string;
    };
    response: {
        type: ResponseType;
        id: string;
        version: number;
        timestamp: string;
        signature: string;
        cid: string;
        shared_key: string;
        event_application_id: string;
    };
    version: number;
    timestamp: string;
    contacts: string;
    public_key: string;
    keystore: string;
    signature: string;
    owner: string;
    organizer: string;
    cid: string;
    event_id: string;
    vault_id: string;
    proof: string;
    shared_key: string;
}, HookContext>;
export declare const eventApplicationDataSchema: import("@sinclair/typebox").TPick<import("@sinclair/typebox").TObject<{
    id: import("@sinclair/typebox").TString<"uuid">;
    public_key: import("@sinclair/typebox").TString<string>;
    keystore: import("@sinclair/typebox").TString<string>;
    event_id: import("@sinclair/typebox").TString<"uuid">;
    message: import("@sinclair/typebox").TString<string>;
    contacts: import("@sinclair/typebox").TString<string>;
    vault_id: import("@sinclair/typebox").TString<string>;
    proof: import("@sinclair/typebox").TString<string>;
    shared_key: import("@sinclair/typebox").TString<string>;
    timestamp: import("@sinclair/typebox").TString<"date-time">;
    signature: import("@sinclair/typebox").TString<string>;
    owner: import("@sinclair/typebox").TString<string>;
    version: import("@sinclair/typebox").TNumber;
    event: import("@sinclair/typebox").TRef<import("@sinclair/typebox").TObject<{
        id: import("@sinclair/typebox").TString<"uuid">;
        title: import("@sinclair/typebox").TString<string>;
        description: import("@sinclair/typebox").TString<string>;
        image: import("@sinclair/typebox").TString<"uri">;
        application_template: import("@sinclair/typebox").TString<string>;
        contacts: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TEnum<typeof import("../events/events.schema").EventApplicationContacts>>;
        public_key: import("@sinclair/typebox").TString<string>;
        signature_public_key: import("@sinclair/typebox").TString<string>;
        keystore: import("@sinclair/typebox").TString<string>;
        tags: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString<string>>;
        link: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<"uri">>;
        note: import("@sinclair/typebox").TString<string>;
        location: import("@sinclair/typebox").TString<string>;
        capacity: import("@sinclair/typebox").TNumber;
        price: import("@sinclair/typebox").TNumber;
        sismo: import("@sinclair/typebox").TObject<{
            auths: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
                authType: import("@sinclair/typebox").TEnum<typeof import("../events/events.schema").AuthType>;
                isAnon: import("@sinclair/typebox").TBoolean;
                userId: import("@sinclair/typebox").TString<string>;
                isOptional: import("@sinclair/typebox").TBoolean;
                isSelectableByUser: import("@sinclair/typebox").TBoolean;
                extraData: import("@sinclair/typebox").TString<string>;
            }>>;
            claims: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
                claimType: import("@sinclair/typebox").TEnum<typeof import("../events/events.schema").ClaimType>;
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
        applications: import("@sinclair/typebox").TNumber;
        timestamp: import("@sinclair/typebox").TString<"date-time">;
        signature: import("@sinclair/typebox").TString<string>;
        owner: import("@sinclair/typebox").TString<string>;
        version: import("@sinclair/typebox").TNumber;
        organizer: import("@sinclair/typebox").TString<string>;
        cid: import("@sinclair/typebox").TString<string>;
    }>>;
    response: import("@sinclair/typebox").TRef<import("@sinclair/typebox").TObject<{
        id: import("@sinclair/typebox").TString<"uuid">;
        type: import("@sinclair/typebox").TEnum<typeof ResponseType>;
        event_application_id: import("@sinclair/typebox").TString<"uuid">;
        shared_key: import("@sinclair/typebox").TString<string>;
        timestamp: import("@sinclair/typebox").TString<"date-time">;
        signature: import("@sinclair/typebox").TString<string>;
        version: import("@sinclair/typebox").TNumber;
        cid: import("@sinclair/typebox").TString<string>;
    }>>;
    organizer: import("@sinclair/typebox").TString<string>;
    cid: import("@sinclair/typebox").TString<string>;
}>, ["id", "public_key", "keystore", "event_id", "message", "contacts", "proof", "shared_key", "timestamp", "signature", "owner", "version"]>;
export type EventApplicationData = Static<typeof eventApplicationDataSchema>;
export declare const eventApplicationDataValidator: import("@feathersjs/schema").Validator<any, any>;
export declare const eventApplicationDataResolver: import("@feathersjs/schema").Resolver<{
    message: string;
    id: string;
    event: {
        link?: string | undefined;
        location: string;
        id: string;
        end: string;
        start: string;
        title: string;
        image: string;
        description: string;
        version: number;
        timestamp: string;
        sismo: {
            auths: {
                authType: import("../events/events.schema").AuthType;
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
                claimType: import("../events/events.schema").ClaimType;
                groupId: string;
                groupTimestamp: string;
            }[];
        };
        application_template: string;
        contacts: import("../events/events.schema").EventApplicationContacts[];
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
        organizer: string;
        cid: string;
    };
    response: {
        type: ResponseType;
        id: string;
        version: number;
        timestamp: string;
        signature: string;
        cid: string;
        shared_key: string;
        event_application_id: string;
    };
    version: number;
    timestamp: string;
    contacts: string;
    public_key: string;
    keystore: string;
    signature: string;
    owner: string;
    organizer: string;
    cid: string;
    event_id: string;
    vault_id: string;
    proof: string;
    shared_key: string;
}, HookContext>;
export declare const eventApplicationPatchSchema: import("@sinclair/typebox").TPartial<import("@sinclair/typebox").TObject<{
    id: import("@sinclair/typebox").TString<"uuid">;
    public_key: import("@sinclair/typebox").TString<string>;
    keystore: import("@sinclair/typebox").TString<string>;
    event_id: import("@sinclair/typebox").TString<"uuid">;
    message: import("@sinclair/typebox").TString<string>;
    contacts: import("@sinclair/typebox").TString<string>;
    vault_id: import("@sinclair/typebox").TString<string>;
    proof: import("@sinclair/typebox").TString<string>;
    shared_key: import("@sinclair/typebox").TString<string>;
    timestamp: import("@sinclair/typebox").TString<"date-time">;
    signature: import("@sinclair/typebox").TString<string>;
    owner: import("@sinclair/typebox").TString<string>;
    version: import("@sinclair/typebox").TNumber;
    event: import("@sinclair/typebox").TRef<import("@sinclair/typebox").TObject<{
        id: import("@sinclair/typebox").TString<"uuid">;
        title: import("@sinclair/typebox").TString<string>;
        description: import("@sinclair/typebox").TString<string>;
        image: import("@sinclair/typebox").TString<"uri">;
        application_template: import("@sinclair/typebox").TString<string>;
        contacts: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TEnum<typeof import("../events/events.schema").EventApplicationContacts>>;
        public_key: import("@sinclair/typebox").TString<string>;
        signature_public_key: import("@sinclair/typebox").TString<string>;
        keystore: import("@sinclair/typebox").TString<string>;
        tags: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString<string>>;
        link: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<"uri">>;
        note: import("@sinclair/typebox").TString<string>;
        location: import("@sinclair/typebox").TString<string>;
        capacity: import("@sinclair/typebox").TNumber;
        price: import("@sinclair/typebox").TNumber;
        sismo: import("@sinclair/typebox").TObject<{
            auths: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
                authType: import("@sinclair/typebox").TEnum<typeof import("../events/events.schema").AuthType>;
                isAnon: import("@sinclair/typebox").TBoolean;
                userId: import("@sinclair/typebox").TString<string>;
                isOptional: import("@sinclair/typebox").TBoolean;
                isSelectableByUser: import("@sinclair/typebox").TBoolean;
                extraData: import("@sinclair/typebox").TString<string>;
            }>>;
            claims: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
                claimType: import("@sinclair/typebox").TEnum<typeof import("../events/events.schema").ClaimType>;
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
        applications: import("@sinclair/typebox").TNumber;
        timestamp: import("@sinclair/typebox").TString<"date-time">;
        signature: import("@sinclair/typebox").TString<string>;
        owner: import("@sinclair/typebox").TString<string>;
        version: import("@sinclair/typebox").TNumber;
        organizer: import("@sinclair/typebox").TString<string>;
        cid: import("@sinclair/typebox").TString<string>;
    }>>;
    response: import("@sinclair/typebox").TRef<import("@sinclair/typebox").TObject<{
        id: import("@sinclair/typebox").TString<"uuid">;
        type: import("@sinclair/typebox").TEnum<typeof ResponseType>;
        event_application_id: import("@sinclair/typebox").TString<"uuid">;
        shared_key: import("@sinclair/typebox").TString<string>;
        timestamp: import("@sinclair/typebox").TString<"date-time">;
        signature: import("@sinclair/typebox").TString<string>;
        version: import("@sinclair/typebox").TNumber;
        cid: import("@sinclair/typebox").TString<string>;
    }>>;
    organizer: import("@sinclair/typebox").TString<string>;
    cid: import("@sinclair/typebox").TString<string>;
}>>;
export type EventApplicationPatch = Static<typeof eventApplicationPatchSchema>;
export declare const eventApplicationPatchValidator: import("@feathersjs/schema").Validator<any, any>;
export declare const eventApplicationPatchResolver: import("@feathersjs/schema").Resolver<{
    message: string;
    id: string;
    event: {
        link?: string | undefined;
        location: string;
        id: string;
        end: string;
        start: string;
        title: string;
        image: string;
        description: string;
        version: number;
        timestamp: string;
        sismo: {
            auths: {
                authType: import("../events/events.schema").AuthType;
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
                claimType: import("../events/events.schema").ClaimType;
                groupId: string;
                groupTimestamp: string;
            }[];
        };
        application_template: string;
        contacts: import("../events/events.schema").EventApplicationContacts[];
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
        organizer: string;
        cid: string;
    };
    response: {
        type: ResponseType;
        id: string;
        version: number;
        timestamp: string;
        signature: string;
        cid: string;
        shared_key: string;
        event_application_id: string;
    };
    version: number;
    timestamp: string;
    contacts: string;
    public_key: string;
    keystore: string;
    signature: string;
    owner: string;
    organizer: string;
    cid: string;
    event_id: string;
    vault_id: string;
    proof: string;
    shared_key: string;
}, HookContext>;
export declare const eventApplicationQueryProperties: import("@sinclair/typebox").TPick<import("@sinclair/typebox").TObject<{
    id: import("@sinclair/typebox").TString<"uuid">;
    public_key: import("@sinclair/typebox").TString<string>;
    keystore: import("@sinclair/typebox").TString<string>;
    event_id: import("@sinclair/typebox").TString<"uuid">;
    message: import("@sinclair/typebox").TString<string>;
    contacts: import("@sinclair/typebox").TString<string>;
    vault_id: import("@sinclair/typebox").TString<string>;
    proof: import("@sinclair/typebox").TString<string>;
    shared_key: import("@sinclair/typebox").TString<string>;
    timestamp: import("@sinclair/typebox").TString<"date-time">;
    signature: import("@sinclair/typebox").TString<string>;
    owner: import("@sinclair/typebox").TString<string>;
    version: import("@sinclair/typebox").TNumber;
    event: import("@sinclair/typebox").TRef<import("@sinclair/typebox").TObject<{
        id: import("@sinclair/typebox").TString<"uuid">;
        title: import("@sinclair/typebox").TString<string>;
        description: import("@sinclair/typebox").TString<string>;
        image: import("@sinclair/typebox").TString<"uri">;
        application_template: import("@sinclair/typebox").TString<string>;
        contacts: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TEnum<typeof import("../events/events.schema").EventApplicationContacts>>;
        public_key: import("@sinclair/typebox").TString<string>;
        signature_public_key: import("@sinclair/typebox").TString<string>;
        keystore: import("@sinclair/typebox").TString<string>;
        tags: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString<string>>;
        link: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<"uri">>;
        note: import("@sinclair/typebox").TString<string>;
        location: import("@sinclair/typebox").TString<string>;
        capacity: import("@sinclair/typebox").TNumber;
        price: import("@sinclair/typebox").TNumber;
        sismo: import("@sinclair/typebox").TObject<{
            auths: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
                authType: import("@sinclair/typebox").TEnum<typeof import("../events/events.schema").AuthType>;
                isAnon: import("@sinclair/typebox").TBoolean;
                userId: import("@sinclair/typebox").TString<string>;
                isOptional: import("@sinclair/typebox").TBoolean;
                isSelectableByUser: import("@sinclair/typebox").TBoolean;
                extraData: import("@sinclair/typebox").TString<string>;
            }>>;
            claims: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
                claimType: import("@sinclair/typebox").TEnum<typeof import("../events/events.schema").ClaimType>;
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
        applications: import("@sinclair/typebox").TNumber;
        timestamp: import("@sinclair/typebox").TString<"date-time">;
        signature: import("@sinclair/typebox").TString<string>;
        owner: import("@sinclair/typebox").TString<string>;
        version: import("@sinclair/typebox").TNumber;
        organizer: import("@sinclair/typebox").TString<string>;
        cid: import("@sinclair/typebox").TString<string>;
    }>>;
    response: import("@sinclair/typebox").TRef<import("@sinclair/typebox").TObject<{
        id: import("@sinclair/typebox").TString<"uuid">;
        type: import("@sinclair/typebox").TEnum<typeof ResponseType>;
        event_application_id: import("@sinclair/typebox").TString<"uuid">;
        shared_key: import("@sinclair/typebox").TString<string>;
        timestamp: import("@sinclair/typebox").TString<"date-time">;
        signature: import("@sinclair/typebox").TString<string>;
        version: import("@sinclair/typebox").TNumber;
        cid: import("@sinclair/typebox").TString<string>;
    }>>;
    organizer: import("@sinclair/typebox").TString<string>;
    cid: import("@sinclair/typebox").TString<string>;
}>, ["id", "timestamp", "owner", "event_id"]>;
export declare const eventApplicationQuerySchema: import("@sinclair/typebox").TIntersect<[import("@sinclair/typebox").TIntersect<[import("@sinclair/typebox").TPartial<import("@sinclair/typebox").TObject<{
    $limit: import("@sinclair/typebox").TNumber;
    $skip: import("@sinclair/typebox").TNumber;
    $sort: import("@sinclair/typebox").TObject<{
        id: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TInteger>;
        timestamp: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TInteger>;
        owner: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TInteger>;
        event_id: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TInteger>;
    }>;
    $select: import("@sinclair/typebox").TUnsafe<("id" | "timestamp" | "owner" | "event_id")[]>;
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
        event_id: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString<"uuid">, import("@sinclair/typebox").TPartial<import("@sinclair/typebox").TIntersect<[import("@sinclair/typebox").TObject<{
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
            event_id: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString<"uuid">, import("@sinclair/typebox").TPartial<import("@sinclair/typebox").TIntersect<[import("@sinclair/typebox").TObject<{
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
        event_id: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString<"uuid">, import("@sinclair/typebox").TPartial<import("@sinclair/typebox").TIntersect<[import("@sinclair/typebox").TObject<{
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
    event_id: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString<"uuid">, import("@sinclair/typebox").TPartial<import("@sinclair/typebox").TIntersect<[import("@sinclair/typebox").TObject<{
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
export type EventApplicationQuery = Static<typeof eventApplicationQuerySchema>;
export declare const eventApplicationQueryValidator: import("@feathersjs/schema").Validator<any, any>;
export declare const eventApplicationQueryResolver: import("@feathersjs/schema").Resolver<Partial<{
    $limit: number;
    $skip: number;
    $sort: {
        id?: number | undefined;
        timestamp?: number | undefined;
        owner?: number | undefined;
        event_id?: number | undefined;
    };
    $select: ("id" | "timestamp" | "owner" | "event_id")[];
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
        event_id?: string | Partial<{
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
            event_id?: string | Partial<{
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
        event_id?: string | Partial<{
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
    event_id?: string | Partial<{
        $gt: string;
        $gte: string;
        $lt: string;
        $lte: string;
        $ne: string;
        $in: string[];
        $nin: string[];
    } & {}> | undefined;
} & {}, HookContext>;
