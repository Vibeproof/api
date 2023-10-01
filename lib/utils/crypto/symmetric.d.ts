export declare const newNonce: () => Uint8Array;
export declare const generateKey: (seed?: string | null) => string;
export declare const encrypt: (text: string, key: string) => string;
export declare const decrypt: (messageWithNonce: string, key: string) => string;
