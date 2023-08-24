"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.types = exports.domain = void 0;
exports.domain = {
    name: 'Snaphost',
    version: '1',
    chainId: 1,
    verifyingContract: '0xCcCCccccCCCCcCCCCCCcCcCccCcCCCcCcccccccC'
};
// The named list of all type definitions
exports.types = {
    SismoAuth: [
        { name: 'authType', type: 'uint8' },
        { name: 'isAnon', type: 'bool' }
    ],
    SismoClaim: [
        { name: 'claimType', type: 'uint8' },
        { name: 'groupId', type: 'string' },
        { name: 'value', type: 'uint' }
    ],
    Sismo: [
        { name: 'auths', type: 'SismoAuth[]' },
        { name: 'claims', type: 'SismoClaim[]' },
    ],
    Event: [
        { name: 'id', type: 'string' },
        { name: 'title', type: 'string' },
        { name: 'organizer', type: 'string' },
        { name: 'description', type: 'string' },
        { name: 'tags', type: 'string[]' },
        { name: 'link', type: 'string' },
        { name: 'note', type: 'string' },
        { name: 'location', type: 'string' },
        { name: 'registration_start', type: 'string' },
        { name: 'registration_end', type: 'string' },
        { name: 'capacity', type: 'uint' },
        { name: 'start', type: 'string' },
        { name: 'end', type: 'string' },
        { name: 'price', type: 'uint' },
        { name: 'sismo', type: 'Sismo' },
        { name: 'owner', type: 'address' },
        { name: 'timestamp', type: 'string' }
    ]
};
//# sourceMappingURL=eip712.js.map