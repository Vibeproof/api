"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.pineapple = void 0;
// For more information about this file see https://dove.feathersjs.com/guides/cli/hook.html
const errors_1 = require("@feathersjs/errors");
const axios_1 = __importDefault(require("axios"));
const pineapple = async (context) => {
    const pineapple = context.app.get('pineapple');
    const response = await axios_1.default.post(pineapple, {
        params: context.data
    });
    if (response.status === 200) {
        context.data.cid = response.data.result.cid;
    }
    else {
        throw new errors_1.GeneralError('Pineapple error');
    }
};
exports.pineapple = pineapple;
//# sourceMappingURL=pineapple.js.map