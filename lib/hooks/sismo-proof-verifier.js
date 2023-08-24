"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sismoProofVerifier = void 0;
// For more information about this file see https://dove.feathersjs.com/guides/cli/hook.html
const sismo_connect_server_1 = require("@sismo-core/sismo-connect-server");
const sismoProofVerifier = async (context) => {
    if (context.data.sismo.auths.length === 0 && context.data.sismo.claims.length === 0)
        return;
    const sismoConnect = (0, sismo_connect_server_1.SismoConnect)({
        config: {
            appId: context.app.get('sismo').appId
        }
    });
    const result = await sismoConnect.verify(context.data.proof, {
        auths: context.data.auths,
        claims: context.data.claims
    });
    console.log(result);
};
exports.sismoProofVerifier = sismoProofVerifier;
//# sourceMappingURL=sismo-proof-verifier.js.map