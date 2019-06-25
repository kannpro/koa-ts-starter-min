import { normalizePort } from './utils';
import { startApp } from './app';
import { AppConfig } from './config';
import { initLogger } from './utils/logger';
import { DefaultLogger } from './utils/logger/default';

const main = async () => {
  const config: AppConfig = {
    hostPort: normalizePort(process.env.PORT) || 3000,
    verbose: process.env.VERBOSE === 'true' || false
  };

  const logger = initLogger(new DefaultLogger(config.verbose));
  logger.info('Config: ', config);

  startApp(config);
};

main().then();
