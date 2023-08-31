"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.applicationTypes = exports.eventTypes = exports.domain = void 0;
exports.domain = {
    name: 'Snaphost',
    version: '1',
    chainId: 1,
    verifyingContract: '0xCcCCccccCCCCcCCCCCCcCcCccCcCCCcCcccccccC'
};
// The named list of all type definitions
exports.eventTypes = {
    SismoAuth: [
        { name: 'authType', type: 'uint8' },
        { name: 'isAnon', type: 'bool' },
        { name: 'userId', type: 'string' },
        { name: 'isOptional', type: 'bool' },
        { name: 'isSelectableByUser', type: 'bool' },
        { name: 'extraData', type: 'string' },
    ],
    SismoClaim: [
        { name: 'claimType', type: 'uint8' },
        { name: 'groupId', type: 'string' },
        { name: 'groupTimestamp', type: 'string' },
        { name: 'value', type: 'uint' },
        { name: 'isOptional', type: 'bool' },
        { name: 'isSelectableByUser', type: 'bool' },
        { name: 'extraData', type: 'string' },
    ],
    Sismo: [
        { name: 'auths', type: 'SismoAuth[]' },
        { name: 'claims', type: 'SismoClaim[]' },
    ],
    Event: [
        { name: 'id', type: 'string' },
        { name: 'title', type: 'string' },
        { name: 'description', type: 'string' },
        { name: 'public_key', type: 'string' },
        { name: 'keystore', type: 'string' },
        { name: 'tags', type: 'string[]' },
        { name: 'link', type: 'string' },
        { name: 'note', type: 'string' },
        { name: 'location', type: 'string' },
        { name: 'capacity', type: 'uint' },
        { name: 'price', type: 'uint' },
        { name: 'sismo', type: 'Sismo' },
        { name: 'registration_start', type: 'string' },
        { name: 'registration_end', type: 'string' },
        { name: 'start', type: 'string' },
        { name: 'end', type: 'string' },
        { name: 'owner', type: 'address' },
        { name: 'timestamp', type: 'string' },
        { name: 'version', type: 'uint8' }
    ]
};
exports.applicationTypes = {
    Application: [
        { name: 'id', type: 'string' },
        { name: 'public_key', type: 'string' },
        { name: 'keystore', type: 'string' },
        { name: 'event_id', type: 'string' },
        { name: 'message', type: 'string' },
        { name: 'proof', type: 'string' },
        { name: 'owner', type: 'address' },
        { name: 'timestamp', type: 'string' },
        { name: 'version', type: 'uint8' },
    ]
};
//# sourceMappingURL=eip712.js.map