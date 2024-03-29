"use strict";
// For more information about this file see https://dove.feathersjs.com/guides/cli/service.html
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
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.event = void 0;
const schema_1 = require("@feathersjs/schema");
const events_schema_1 = require("./events.schema");
const events_class_1 = require("./events.class");
const events_shared_1 = require("./events.shared");
const viem_1 = require("viem");
const eip712_1 = require("../../utils/eip712");
const errors_1 = require("@feathersjs/errors");
const pineapple_1 = require("../../hooks/derive/pineapple");
const event_artist_1 = require("../../hooks/derive/event-artist");
const logger_1 = require("../../logger");
__exportStar(require("./events.class"), exports);
__exportStar(require("./events.schema"), exports);
class WrongSignatureError extends errors_1.FeathersError {
    constructor(message, data) {
        super(message, 'WrongSignature', 500, 'wrong-signature', data);
    }
}
// A configure function that registers the service and its hooks via `app.configure`
const event = (app) => {
    // Register our service on the Feathers application
    app.use(events_shared_1.eventPath, new events_class_1.EventService((0, events_class_1.getOptions)(app)), {
        // A list of all methods this service exposes externally
        methods: events_shared_1.eventMethods,
        // You can add additional custom events to be sent to clients here
        events: []
    });
    // Initialize hooks
    app.service(events_shared_1.eventPath).hooks({
        around: {
            all: [schema_1.hooks.resolveExternal(events_schema_1.eventExternalResolver), schema_1.hooks.resolveResult(events_schema_1.eventResolver)]
        },
        before: {
            all: [schema_1.hooks.validateQuery(events_schema_1.eventQueryValidator), schema_1.hooks.resolveQuery(events_schema_1.eventQueryResolver)],
            find: [
                async (context) => {
                    const query = context.service.createQuery(context.params);
                    // // do something with query here
                    // query.orderBy('timestamp', 'desc')
                    context.params.knex = query;
                }
            ],
            get: [],
            create: [
                schema_1.hooks.validateData(events_schema_1.eventDataValidator),
                schema_1.hooks.resolveData(events_schema_1.eventDataResolver),
                async (context) => {
                    // Copy data
                    const data = { ...context.data };
                    delete data.signature;
                    // Check signature matches the owner
                    const valid = await (0, viem_1.verifyTypedData)({
                        address: context.data.owner,
                        domain: eip712_1.domain,
                        types: eip712_1.eventTypes,
                        primaryType: 'Event',
                        message: {
                            ...data
                        },
                        signature: context.data.signature
                    });
                    if (!valid) {
                        throw new errors_1.GeneralError('Bad signature');
                    }
                },
                async (context) => {
                    const image = await (0, event_artist_1.eventArtist)({
                        // @ts-ignore
                        app: context.app,
                        description: context.data.description,
                        seed: context.data.seed,
                        event_id: context.data.id
                    });
                    context.data.image = image;
                },
                pineapple_1.pineapple,
                async (context) => {
                    context.data.banned = false;
                    context.data.rating = 10;
                },
                async (context) => {
                    const xmtp = app.get('xmtpClient');
                    if (!xmtp)
                        return;
                    const canMessage = await xmtp.canMessage(context.data.owner);
                    if (!canMessage) {
                        logger_1.logger.warn(`User ${context.data.owner} cannot be messaged`);
                        return;
                    }
                    const conversation = await xmtp.conversations.newConversation(context.data.owner);
                    await conversation.send('Congratulations! Your event has been created!');
                }
            ],
            patch: [
                schema_1.hooks.validateData(events_schema_1.eventPatchValidator),
                schema_1.hooks.resolveData(events_schema_1.eventPatchResolver),
                async (context) => {
                    const [event_id] = context.arguments;
                    const event = await app.service('events').get(event_id);
                    console.log(context.data);
                    const data = {
                        ...event,
                        ...context.data
                    };
                    console.log('signing');
                    console.log(data.id);
                    console.log(data.title);
                    console.log(data.description);
                    console.log(data.seed);
                    console.log(data.application_template);
                    console.log(data.contacts);
                    console.log(data.public_key);
                    console.log(data.signature);
                    console.log(data.keystore);
                    console.log(data.tags);
                    console.log(data.link);
                    console.log(data.note);
                    console.log(data.location);
                    console.log(data.capacity);
                    console.log(data.price);
                    console.log(data.sismo);
                    console.log(data.registration_start);
                    console.log(data.registration_end);
                    console.log(data.start);
                    console.log(data.end);
                    console.log(data.paused);
                    console.log(data.public);
                    console.log(data.owner);
                    console.log(data.timestamp);
                    console.log(data.version);
                    console.log(eip712_1.domain);
                    console.log(eip712_1.eventTypes);
                    // Check signature matches the owner
                    const valid = await (0, viem_1.verifyTypedData)({
                        // @ts-ignore
                        address: event.owner,
                        domain: eip712_1.domain,
                        types: eip712_1.eventTypes,
                        primaryType: 'Event',
                        message: {
                            ...data
                        },
                        signature: context.data.signature
                    });
                    if (!valid) {
                        throw new errors_1.GeneralError('Bad signature');
                    }
                },
                async (context) => {
                    // Update image if new seed is provided
                    if (context.data.seed === undefined)
                        return;
                    const [event_id] = context.arguments;
                    const event = await app.service('events').get(event_id);
                    if (event.seed === context.data.seed)
                        return;
                    const image = await (0, event_artist_1.eventArtist)({
                        // @ts-ignore
                        app: context.app,
                        description: event.description,
                        seed: context.data.seed,
                        event_id: event_id
                    });
                    context.data.image = image;
                }
            ],
            remove: []
        },
        after: {
            all: []
        },
        error: {
            all: []
        }
    });
};
exports.event = event;
//# sourceMappingURL=events.js.map