"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.xmtp = void 0;
const ethers_1 = require("ethers");
const xmtp_js_1 = require("@xmtp/xmtp-js");
const xmtp = async (app) => {
    const xmtpConfig = app.get('xmtp');
    if (!xmtpConfig) {
        return;
    }
    const wallet = ethers_1.Wallet.fromPhrase(xmtpConfig.seed);
    const xmtp = await xmtp_js_1.Client.create(wallet, {
        env: xmtpConfig.production ? 'production' : 'dev'
    });
    app.set('xmtpClient', xmtp);
};
exports.xmtp = xmtp;
//# sourceMappingURL=xmtp.js.map