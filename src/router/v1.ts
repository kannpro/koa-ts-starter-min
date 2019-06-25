import Router from '@koa/router';
import ctxWrapper from '../middlewares/ctxWrapper';

const newRouterV1 = () => {
  let r = new Router({
    prefix: '/api/v1'
  });

  r.get('/ping', async rawCtx => {
    let ctx = ctxWrapper(rawCtx);
    ctx.ok('pong');
  });

  return r;
};

export default () => {
  return newRouterV1();
};
