"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.types = exports.domain = void 0;
exports.domain = {
    name: 'Snaphost',
    version: '1',
    chainId: 1,
    verifyingContract: '0xCcCCccccCCCCcCCCCCCcCcCccCcCCCcCcccccccC',
};
// The named list of all type definitions
exports.types = {
    SismoAuth: [
        { name: 'authType', type: 'uint8' },
        { name: 'isAnon', type: 'bool' },
    ],
    SismoClaim: [
        { name: 'claimType', type: 'uint8' },
        { name: 'groupId', type: 'string' },
        { name: 'value', type: 'uint' },
    ],
    Event: [
        { name: 'id', type: 'string' },
        { name: 'title', type: 'string' },
        { name: 'organizer', type: 'string' },
        { name: 'description', type: 'string' },
        { name: 'tags', type: 'string' },
        { name: 'link', type: 'string' },
        { name: 'note', type: 'string' },
        { name: 'note_encrypted', type: 'bool' },
        { name: 'location', type: 'string' },
        { name: 'registration_start', type: 'uint' },
        { name: 'registration_end', type: 'uint' },
        { name: 'capacity', type: 'uint' },
        { name: 'start', type: 'uint' },
        { name: 'end', type: 'uint' },
        { name: 'price', type: 'uint' },
        { name: 'auths', type: 'SismoAuth[]' },
        { name: 'claims', type: 'SismoClaim[]' },
        { name: 'owner', type: 'address' },
        { name: 'timestamp', type: 'uint' },
    ],
};
//# sourceMappingURL=utils.js.map