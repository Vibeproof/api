"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.logger = void 0;
// For more information about this file see https://dove.feathersjs.com/guides/cli/logging.html
const node_1 = require("@logtail/node");
const winston_1 = require("@logtail/winston");
const winston_2 = require("winston");
// Configure the Winston logger. For the complete documentation see https://github.com/winstonjs/winston
exports.logger = (0, winston_2.createLogger)({
    // To see more detailed errors, change this to 'debug'
    level: 'info',
    format: winston_2.format.json(),
    transports: [
        new winston_2.transports.Console()
    ]
});
const betterstackSourceToken = process.env.BETTERSTACK_SOURCE_TOKEN;
if (betterstackSourceToken !== undefined) {
    const logtail = new node_1.Logtail(betterstackSourceToken);
    exports.logger.add(new winston_1.LogtailTransport(logtail));
}
//# sourceMappingURL=logger.js.map