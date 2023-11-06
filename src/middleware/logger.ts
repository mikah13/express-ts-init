import { createLogger, format, transports } from 'winston';
import config from '../config/config';
const logger = createLogger({
  level: config.node_env === 'production' ? 'info' : 'debug',
  format: format.json(),
  defaultMeta: { service: 'user-service' },
  transports: [
    new transports.File({ filename: 'logs/error.log', level: 'error' }),
    new transports.File({ filename: 'logs/status.log' }),
  ],
  exceptionHandlers: [new transports.File({ filename: 'logs/exceptions.log' })],
});
if (config.node_env !== 'production') {
  logger.add(
    new transports.Console({
      format: format.simple(),
    })
  );
}
export default logger;
