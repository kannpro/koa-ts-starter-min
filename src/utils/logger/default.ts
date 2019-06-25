export class DefaultLogger {
  private verbose: boolean;
  constructor(verbose: boolean) {
    this.verbose = verbose === true;
  }

  error = (...args: any) => {
    console.error(...args);
  };

  info = (...args: any) => {
    console.log(...args);
  };

  debug = (...args: any) => {
    if (this.verbose) {
      console.log(...args);
    }
  };
}
