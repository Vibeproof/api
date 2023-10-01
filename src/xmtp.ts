import { Wallet } from "ethers";
import { Application } from "./declarations";
import { Client } from "@xmtp/xmtp-js";


declare module './declarations' {
    interface Configuration {
        xmtpClient: Client | null;
    }
}


export const xmtp = async (app: Application) => {
    const xmtpConfig = app.get('xmtp');

    if (!xmtpConfig) {
        return;
    }

    const wallet = Wallet.fromPhrase(xmtpConfig.seed);
    const xmtp = await Client.create(wallet, {
        env: xmtpConfig.production ? 'production' : 'dev'
    });

    app.set('xmtpClient', xmtp);
}