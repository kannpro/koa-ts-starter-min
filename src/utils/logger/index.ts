import { DefaultLogger } from './default';

export interface Logger {
  error: (...args) => void;
  info: (...args) => void;
  debug: (...args) => void;
}

class loggerWrapper implements Logger {
  private logger: Logger;
  constructor(logger: Logger) {
    this.logger =  logger;
  }

  error = (...args) => this.logger.error(...args);
  info = (...args) => this.logger.info(...args);
  debug = (...args) => this.logger.debug(...args);
  setLogger = (logger: Logger) => {
    this.logger = logger;
  }
}

let logger = new loggerWrapper(new DefaultLogger(false));

export const initLogger = (v: Logger) => {
  logger.setLogger(v);
  return logger as Logger;
};

export const useLogger = () => {
  return logger as Logger;
};
