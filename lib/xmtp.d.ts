import { Application } from "./declarations";
import { Client } from "@xmtp/xmtp-js";
declare module './declarations' {
    interface Configuration {
        xmtpClient: Client | null;
    }
}
export declare const xmtp: (app: Application) => Promise<void>;
