import { sign as sign_, randomBytes } from 'tweetnacl';
import { decodeUTF8, encodeBase64 } from 'tweetnacl-util';


export const generateKeyPair = () => sign_.keyPair();


export const sign = (message: string, secretKey: Uint8Array) => {
    const messageUint8 = decodeUTF8(message);

    return encodeBase64(sign_(messageUint8, secretKey));
} 