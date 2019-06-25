import { DefaultLogger } from './default';

export interface Logger {
  error: (...args: any) => void;
  info: (...args: any) => void;
  debug: (...args: any) => void;
}

class loggerWrapper implements Logger {
  private logger: Logger;
  constructor(logger: Logger) {
    this.logger = logger;
  }

  error = (...args: any) => this.logger.error(...args);
  info = (...args: any) => this.logger.info(...args);
  debug = (...args: any) => this.logger.debug(...args);
  setLogger = (logger: Logger) => {
    this.logger = logger;
  };
}

let logger = new loggerWrapper(new DefaultLogger(false));

export const initLogger = (v: Logger) => {
  logger.setLogger(v);
  return logger as Logger;
};

export const useLogger = () => {
  return logger as Logger;
};
