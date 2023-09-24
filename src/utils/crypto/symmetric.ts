import { box, hash, secretbox, randomBytes, BoxKeyPair } from "tweetnacl";
import { decodeBase64, decodeUTF8, encodeBase64, encodeUTF8 } from "tweetnacl-util";


export const newNonce = () => randomBytes(secretbox.nonceLength);

export const generateKey = (seed: string | null = null) => {
  if (seed === null) return encodeBase64(randomBytes(secretbox.keyLength));

  const seedUint8Array = Uint8Array.from(Buffer.from(seed.replace('0x', '').slice(0, 64), "hex"));

  return encodeBase64(seedUint8Array);
};

export const encrypt = (text: string, key: string) => {
  const keyUint8Array = decodeBase64(key);

  const nonce = newNonce();
  const messageUint8 = decodeUTF8(text);
  const box = secretbox(messageUint8, nonce, keyUint8Array);

  const fullMessage = new Uint8Array(nonce.length + box.length);
  fullMessage.set(nonce);
  fullMessage.set(box, nonce.length);

  const base64FullMessage = encodeBase64(fullMessage);
  return base64FullMessage;
};


export const decrypt = (messageWithNonce: string, key: string) => {
    const keyUint8Array = decodeBase64(key);
    const messageWithNonceAsUint8Array = decodeBase64(messageWithNonce);
    const nonce = messageWithNonceAsUint8Array.slice(0, secretbox.nonceLength);
    const message = messageWithNonceAsUint8Array.slice(
      secretbox.nonceLength,
      messageWithNonce.length
    );
  
    const decrypted = secretbox.open(message, nonce, keyUint8Array);
  
    if (!decrypted) {
      throw new Error("Could not decrypt message");
    }
  
    const base64DecryptedMessage = encodeUTF8(decrypted);
    return base64DecryptedMessage;
};
  