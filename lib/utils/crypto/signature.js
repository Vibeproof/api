"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.verify = exports.sign = exports.generateKeyPair = void 0;
const tweetnacl_1 = require("tweetnacl");
const tweetnacl_util_1 = require("tweetnacl-util");
const generateKeyPair = () => tweetnacl_1.sign.keyPair();
exports.generateKeyPair = generateKeyPair;
const sign = (message, secretKey) => {
    const messageUint8 = (0, tweetnacl_util_1.decodeUTF8)(message);
    return (0, tweetnacl_util_1.encodeBase64)(tweetnacl_1.sign.detached(messageUint8, secretKey));
};
exports.sign = sign;
const verify = (message, signature, publicKey) => {
    const messageUint8 = (0, tweetnacl_util_1.decodeUTF8)(message);
    const sig = (0, tweetnacl_util_1.decodeBase64)(signature);
    return tweetnacl_1.sign.detached.verify(messageUint8, sig, (0, tweetnacl_util_1.decodeBase64)(publicKey));
};
exports.verify = verify;
//# sourceMappingURL=signature.js.map