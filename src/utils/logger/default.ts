export class DefaultLogger {
  private verbose: boolean;
  constructor(verbose: boolean) {
    this.verbose = verbose === true;
  }

  error = (...args) => {
    console.error(...args);
  };

  info = (...args) => {
    console.log(...args);
  };

  debug = (...args) => {
    if (this.verbose) {
      console.log(...args);
    }
  };
}
