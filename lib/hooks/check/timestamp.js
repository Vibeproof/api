"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkTimestamp = void 0;
const constants_1 = require("../../utils/constants");
const errors_1 = require("@feathersjs/errors");
const checkTimestamp = async (context) => {
    // Check timestamp not too old
    const age = Date.now() - Date.parse(context.data.timestamp);
    if (age > constants_1.EVENT_AGE_SECONDS * 1000) {
        throw new errors_1.GeneralError('Timestamp too old');
    }
};
exports.checkTimestamp = checkTimestamp;
//# sourceMappingURL=timestamp.js.map