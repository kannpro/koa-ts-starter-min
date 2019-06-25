import Koa from 'koa';
import cors from '@koa/cors';
import { useLogger } from './utils/logger';
import koaLogger from 'koa-logger';
import v1Router from './router/v1';
import { noCache } from './middlewares';
import { AppConfig } from './config';
import { WrapCtx } from './context';

const logger = useLogger();

export const startApp = (cfg: AppConfig) => {
  let app = new Koa();
  let router = v1Router();

  app
    .use(WrapCtx)
    .use(cors())
    .use(noCache)
    .use(
      koaLogger(str => {
        logger.info(str);
      })
    )
    .use(router.routes())
    .use(router.allowedMethods());

  app.listen(cfg.hostPort, () => {
    logger.info('Server starting');
  });
};
