"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.configurationValidator = exports.configurationSchema = void 0;
const typebox_1 = require("@feathersjs/typebox");
const validators_1 = require("./validators");
exports.configurationSchema = typebox_1.Type.Intersect([
    typebox_1.defaultAppConfiguration,
    typebox_1.Type.Object({
        host: typebox_1.Type.String(),
        port: typebox_1.Type.Number(),
        public: typebox_1.Type.String(),
        db_ca: typebox_1.Type.Optional(typebox_1.Type.String()),
        pineapple: typebox_1.Type.String(),
        sismo: typebox_1.Type.Object({
            appId: typebox_1.Type.String()
        }),
        openai_api_key: typebox_1.Type.String(),
        getimg_api_key: typebox_1.Type.String(),
        s3: typebox_1.Type.Object({
            access_key: typebox_1.Type.String(),
            secret_access_key: typebox_1.Type.String(),
            region: typebox_1.Type.String(),
            bucket: typebox_1.Type.String(),
            endpoint: typebox_1.Type.String({
                format: 'uri'
            }),
        }),
    })
]);
exports.configurationValidator = (0, typebox_1.getValidator)(exports.configurationSchema, validators_1.dataValidator);
//# sourceMappingURL=configuration.js.map