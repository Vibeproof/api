"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createClient = exports.cryptography = exports.applicationTypes = exports.eventTypes = exports.domain = exports.ResponseType = void 0;
// For more information about this file see https://dove.feathersjs.com/guides/cli/client.html
const feathers_1 = require("@feathersjs/feathers");
const authentication_client_1 = __importDefault(require("@feathersjs/authentication-client"));
const event_application_responses_shared_1 = require("./services/event-application-responses/event-application-responses.shared");
const event_application_responses_schema_1 = require("./services/event-application-responses/event-application-responses.schema");
Object.defineProperty(exports, "ResponseType", { enumerable: true, get: function () { return event_application_responses_schema_1.ResponseType; } });
const event_applications_shared_1 = require("./services/event-applications/event-applications.shared");
const events_shared_1 = require("./services/events/events.shared");
const eip712_1 = require("./utils/eip712");
Object.defineProperty(exports, "domain", { enumerable: true, get: function () { return eip712_1.domain; } });
Object.defineProperty(exports, "eventTypes", { enumerable: true, get: function () { return eip712_1.eventTypes; } });
Object.defineProperty(exports, "applicationTypes", { enumerable: true, get: function () { return eip712_1.applicationTypes; } });
const symmetric = __importStar(require("./utils/crypto/symmetric"));
const assymetric = __importStar(require("./utils/crypto/assymetric"));
const signature = __importStar(require("./utils/crypto/signature"));
exports.cryptography = {
    symmetric,
    assymetric,
    signature
};
/**
 * Returns a typed client for the api app.
 *
 * @param connection The REST or Socket.io Feathers client connection
 * @param authenticationOptions Additional settings for the authentication client
 * @see https://dove.feathersjs.com/api/client.html
 * @returns The Feathers client application
 */
const createClient = (connection, authenticationOptions = {}) => {
    const client = (0, feathers_1.feathers)();
    client.configure(connection);
    client.configure((0, authentication_client_1.default)(authenticationOptions));
    client.set('connection', connection);
    client.configure(events_shared_1.eventClient);
    client.configure(event_applications_shared_1.eventApplicationClient);
    client.configure(event_application_responses_shared_1.eventApplicationResponseClient);
    return client;
};
exports.createClient = createClient;
//# sourceMappingURL=client.js.map