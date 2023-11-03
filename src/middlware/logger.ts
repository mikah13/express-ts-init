import winston from 'winston';
import config from '@/config/config';
const logger = winston.createLogger({
  level: config.node_env === 'production' ? 'info' : 'debug',
  format: winston.format.json(),
  transports: [new winston.transports.Console()],
});
