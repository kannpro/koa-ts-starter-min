import Router from '@koa/router';
import { KoaCtx } from '../context';

const newRouterV1 = () => {
  let r = new Router({
    prefix: '/api/v1'
  });

  r.get('/ping', async (ctx: KoaCtx) => {
    ctx.ok('pong');
  });

  return r;
};

export default () => {
  return newRouterV1();
};
