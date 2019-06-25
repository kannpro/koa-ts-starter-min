import { KoaCtx } from '../context';

export const noCache = async (ctx: KoaCtx, next: () => any) => {
  ctx.set('Cache-Control', 'no-store, no-cache, must-revalidate');
  ctx.set('Pragma', 'no-cache');
  ctx.set('Expires', '0');
  await next();
};
