export declare const generateKeyPair: (seed?: string | null) => import("tweetnacl").BoxKeyPair;
export declare const encrypt: (secretOrSharedKey: Uint8Array, message: string, key?: Uint8Array) => string;
export declare const decrypt: (secretOrSharedKey: Uint8Array, messageWithNonce: string, key?: Uint8Array) => string;
