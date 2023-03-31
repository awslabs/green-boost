// @ts-nocheck
import type { ItemTable } from "./tables/item.js";
import {
  CamelCasePlugin,
  Kysely,
  KyselyPlugin,
  LogConfig,
  PostgresDialect,
} from "kysely";
import pg from "pg";
import { StageName } from "@{{GB_APP_ID}}/core";
import { config } from "./config/config.js";
import { getDbAuthToken } from "./utils/get-db-auth-token.js";

export interface Database {
  item: ItemTable;
}

pg.types.setTypeParser(pg.types.builtins.NUMERIC, (v) => parseFloat(v));
pg.types.setTypeParser(pg.types.builtins.INT4, (v) => parseInt(v, 10));
pg.types.setTypeParser(pg.types.builtins.TIMESTAMPTZ, (v) =>
  new Date(v).toISOString()
);

export const dbWrite = new Kysely<Database>({
  dialect: new PostgresDialect({
    pool: new pg.Pool(getPoolConfig()),
  }),
  log: getLogConfig(),
  plugins: getPlugins(),
});

export const dbRead = new Kysely<Database>({
  dialect: new PostgresDialect({
    pool: new pg.Pool(getPoolConfig(true)),
  }),
  log: getLogConfig(),
  plugins: getPlugins(),
});

function getPoolConfig(readOnly = false): pg.PoolConfig {
  const host = readOnly ? config.dbHostReadOnly : config.dbHost;
  const port = readOnly ? config.dbPortReadOnly : config.dbPort;
  return {
    host,
    database: config.dbName,
    user: config.dbIamUsername,
    port,
    password() {
      return getDbAuthToken({
        host,
        port,
        username: config.dbIamUsername,
      });
    },
    ssl: {
      rejectUnauthorized: false,
    },
  };
}

function getLogConfig(): LogConfig {
  const logConfig: ("error" | "query")[] = ["error"];
  if (config.stageName !== StageName.Prod) {
    logConfig.push("query");
  }
  return logConfig;
}

function getPlugins(): KyselyPlugin[] {
  return [new CamelCasePlugin()];
}
