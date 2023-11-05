import app from './app';
import config from './config/config';
const server = app.listen(parseInt(config.port), () => {
  logger.log('info', `Server is running on Port: ${config.port}`);
});
