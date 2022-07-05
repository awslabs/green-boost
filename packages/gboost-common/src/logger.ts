export enum LogLevel {
  error = "error",
  warn = "warn",
  info = "info",
  debug = "debug",
}

const logRank: Record<LogLevel, number> = {
  error: 1,
  warn: 2,
  info: 3,
  debug: 4,
};

export class Logger {
  #level: LogLevel = LogLevel.error;
  constructor(level: LogLevel) {
    if (level) {
      this.#level = level;
    } else {
      this.#level = process.env.LOG_LEVEL as LogLevel;
    }
  }

  error(msg: string): void {
    if (logRank[this.#level] >= logRank[LogLevel.error]) {
      console.error(msg);
    }
  }

  warn(msg: string): void {
    if (logRank[this.#level] >= logRank[LogLevel.warn]) {
      console.warn(msg);
    }
  }

  info(msg: string): void {
    if (logRank[this.#level] >= logRank[LogLevel.info]) {
      console.log(msg);
    }
  }

  debug(msg: string): void {
    if (logRank[this.#level] >= logRank[LogLevel.debug]) {
      console.log(msg);
    }
  }
}
