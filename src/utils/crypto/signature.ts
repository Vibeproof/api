import { sign as sign_, randomBytes } from 'tweetnacl';
import { decodeUTF8, encodeBase64, decodeBase64 } from 'tweetnacl-util';


export const generateKeyPair = () => sign_.keyPair();


export const sign = (message: string, secretKey: Uint8Array) => {
    const messageUint8 = decodeUTF8(message);

    return encodeBase64(sign_.detached(messageUint8, secretKey));
} 

export const verify = (message: string, signature: string, publicKey: string) => {
    const messageUint8 = decodeUTF8(message);
    const sig = decodeBase64(signature);

    return sign_.detached.verify(messageUint8, sig, decodeBase64(publicKey));
}