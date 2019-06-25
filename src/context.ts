import { Context } from 'koa';

type MsgType = string | Object;

export interface KoaCtx extends Context {
  resp: (status: number, msg: MsgType) => void;
  ok: (msg: MsgType) => void;
  error: (status: number, msg: MsgType) => void;
  badRequest: (msg: MsgType) => void;
}

export const WrapCtx = async (ctx: Context, next: () => any) => {
  ctx.resp = (status: number, msg: MsgType) => {
    ctx.status = status;
    ctx.body = msg;
  };

  ctx.ok = (msg: MsgType) => {
    ctx.resp(200, msg);
  };

  ctx.error = (status: number, msg: MsgType) => ctx.resp(status, msg);

  ctx.badRequest = (msg: MsgType) => ctx.resp(400, msg);
  await next();
};
