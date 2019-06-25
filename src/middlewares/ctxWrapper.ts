type MsgType = string | Object;

class ctxWrapper {
  public readonly ctx;

  constructor(ctx) {
    this.ctx = ctx;
  }

  resp = (status: number, msg: MsgType) => {
    this.ctx.status = status;
    this.ctx.body = msg;
  };

  ok = (msg: MsgType) => {
    this.resp(200, msg);
  };

  error = (status: number, msg: MsgType) => this.resp(status, msg);
}

export default ctx => new ctxWrapper(ctx);
