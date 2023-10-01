// For more information about this file see https://dove.feathersjs.com/guides/cli/logging.html
import { Logtail } from '@logtail/node';
import { LogtailTransport } from '@logtail/winston';
import { createLogger, format, transports } from 'winston'

// Configure the Winston logger. For the complete documentation see https://github.com/winstonjs/winston
export const logger = createLogger({
  // To see more detailed errors, change this to 'debug'
  level: 'info',
  format: format.json(),
  transports: [
    new transports.Console()
  ]
});



const betterstackSourceToken = process.env.BETTERSTACK_SOURCE_TOKEN;

if (betterstackSourceToken !== undefined) {
  const logtail = new Logtail(betterstackSourceToken);

  logger.add(new LogtailTransport(logtail));
}
