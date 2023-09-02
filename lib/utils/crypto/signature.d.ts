export declare const generateKeyPair: () => import("tweetnacl").SignKeyPair;
export declare const sign: (message: string, secretKey: Uint8Array) => string;
export declare const verify: (message: string, signature: string, publicKey: string) => boolean;
