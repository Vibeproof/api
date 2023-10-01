"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.decrypt = exports.encrypt = exports.generateKeyPair = void 0;
const tweetnacl_1 = require("tweetnacl");
const tweetnacl_util_1 = require("tweetnacl-util");
const newNonce = () => (0, tweetnacl_1.randomBytes)(tweetnacl_1.box.nonceLength);
const generateKeyPair = (seed = null) => {
    if (seed === null)
        return tweetnacl_1.box.keyPair();
    return tweetnacl_1.box.keyPair.fromSecretKey((0, tweetnacl_util_1.decodeBase64)(seed));
};
exports.generateKeyPair = generateKeyPair;
const encrypt = (secretOrSharedKey, message, key) => {
    const nonce = newNonce();
    const messageUint8 = (0, tweetnacl_util_1.decodeUTF8)(message);
    const encrypted = key
        ? (0, tweetnacl_1.box)(messageUint8, nonce, key, secretOrSharedKey)
        : tweetnacl_1.box.after(messageUint8, nonce, secretOrSharedKey);
    const fullMessage = new Uint8Array(nonce.length + encrypted.length);
    fullMessage.set(nonce);
    fullMessage.set(encrypted, nonce.length);
    const base64FullMessage = (0, tweetnacl_util_1.encodeBase64)(fullMessage);
    return base64FullMessage;
};
exports.encrypt = encrypt;
const decrypt = (secretOrSharedKey, messageWithNonce, key) => {
    const messageWithNonceAsUint8Array = (0, tweetnacl_util_1.decodeBase64)(messageWithNonce);
    const nonce = messageWithNonceAsUint8Array.slice(0, tweetnacl_1.box.nonceLength);
    const message = messageWithNonceAsUint8Array.slice(tweetnacl_1.box.nonceLength, messageWithNonce.length);
    const decrypted = key
        ? tweetnacl_1.box.open(message, nonce, key, secretOrSharedKey)
        : tweetnacl_1.box.open.after(message, nonce, secretOrSharedKey);
    if (!decrypted) {
        throw new Error('Could not decrypt message');
    }
    const base64DecryptedMessage = (0, tweetnacl_util_1.encodeUTF8)(decrypted);
    return base64DecryptedMessage;
};
exports.decrypt = decrypt;
//# sourceMappingURL=assymetric.js.map