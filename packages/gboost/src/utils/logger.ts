/* eslint-disable @typescript-eslint/no-explicit-any */
enum LogLevel {
  DEBUG = "DEBUG",
  WARN = "WARN",
  ERROR = "ERROR",
}

const logLevelPriority: Record<LogLevel, number> = {
  [LogLevel.DEBUG]: 1,
  [LogLevel.WARN]: 2,
  [LogLevel.ERROR]: 3,
};

export const logger = {
  get logLevel(): LogLevel {
    const envVar = process.env.LOGLEVEL ?? LogLevel.ERROR;
    return envVar in LogLevel ? (envVar as LogLevel) : LogLevel.ERROR;
  },
  get logLevelPriority(): number {
    return logLevelPriority[this.logLevel];
  },
  getString(v: any): string {
    if (typeof v === "object") {
      return JSON.stringify(v, null, 2);
    } else {
      return String(v);
    }
  },
  log(v: any) {
    console.log(this.getString(v));
  },
  debug(v: any) {
    if (this.logLevelPriority <= logLevelPriority.DEBUG) {
      this.log(v);
    }
  },
  warn(v: any) {
    if (this.logLevelPriority <= logLevelPriority.WARN) {
      console.warn(this.getString(v));
    }
  },
  error(v: any) {
    if (this.logLevelPriority <= logLevelPriority.ERROR) {
      console.error(this.getString(v));
    }
  },
};
