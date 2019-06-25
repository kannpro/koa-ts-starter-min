import Koa from 'koa2';
import cors from '@koa/cors';
import { useLogger } from './utils/logger';
import bodyparser from 'koa-bodyparser';
import koaLogger from 'koa-logger';
import v1Router from './router/v1';
import { noCache } from './middlewares';
import { AppConfig } from './config';

const logger = useLogger();

export const startApp = (cfg: AppConfig) => {
  let app = new Koa();
  let router = v1Router();

  app
    .use(cors())
    .use(noCache)
    .use(
      koaLogger(str => {
        logger.info(str);
      })
    )
    .use(bodyparser())
    .use(router.routes())
    .use(router.allowedMethods());

  app.listen(cfg.hostPort, () => {
    logger.info('Server starting');
  });
};
