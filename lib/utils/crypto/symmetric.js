"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.decrypt = exports.encrypt = exports.generateKey = exports.newNonce = void 0;
const tweetnacl_1 = require("tweetnacl");
const tweetnacl_util_1 = require("tweetnacl-util");
const newNonce = () => (0, tweetnacl_1.randomBytes)(tweetnacl_1.secretbox.nonceLength);
exports.newNonce = newNonce;
const generateKey = (seed = null) => {
    if (seed === null)
        return (0, tweetnacl_util_1.encodeBase64)((0, tweetnacl_1.randomBytes)(tweetnacl_1.secretbox.keyLength));
    const seedUint8Array = Uint8Array.from(Buffer.from(seed.replace('0x', '').slice(0, 64), "hex"));
    return (0, tweetnacl_util_1.encodeBase64)(seedUint8Array);
};
exports.generateKey = generateKey;
const encrypt = (text, key) => {
    const keyUint8Array = (0, tweetnacl_util_1.decodeBase64)(key);
    const nonce = (0, exports.newNonce)();
    const messageUint8 = (0, tweetnacl_util_1.decodeUTF8)(text);
    const box = (0, tweetnacl_1.secretbox)(messageUint8, nonce, keyUint8Array);
    const fullMessage = new Uint8Array(nonce.length + box.length);
    fullMessage.set(nonce);
    fullMessage.set(box, nonce.length);
    const base64FullMessage = (0, tweetnacl_util_1.encodeBase64)(fullMessage);
    return base64FullMessage;
};
exports.encrypt = encrypt;
const decrypt = (messageWithNonce, key) => {
    const keyUint8Array = (0, tweetnacl_util_1.decodeBase64)(key);
    const messageWithNonceAsUint8Array = (0, tweetnacl_util_1.decodeBase64)(messageWithNonce);
    const nonce = messageWithNonceAsUint8Array.slice(0, tweetnacl_1.secretbox.nonceLength);
    const message = messageWithNonceAsUint8Array.slice(tweetnacl_1.secretbox.nonceLength, messageWithNonce.length);
    const decrypted = tweetnacl_1.secretbox.open(message, nonce, keyUint8Array);
    if (!decrypted) {
        throw new Error("Could not decrypt message");
    }
    const base64DecryptedMessage = (0, tweetnacl_util_1.encodeUTF8)(decrypted);
    return base64DecryptedMessage;
};
exports.decrypt = decrypt;
//# sourceMappingURL=symmetric.js.map