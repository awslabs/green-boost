// @ts-nocheck
import type { Options, PostgresType } from "postgres";
import { getDbAuthToken } from "./utils/get-db-auth-token";
import { getDbPassword } from "./utils/get-db-password";
import { ServerConfig } from "../config/server-config";
import postgres from "postgres";

/**
 * If DB_SECRET_ARN environment variable is available, then use user/pass
 * auth, otherwise use DB IAM Auth. Prefer DB IAM Auth.
 */
const isDbIamAuth = Boolean(!process.env["DB_SECRET_ARN"]);
const host = String(process.env["PGHOST"] || "0.0.0.0");
const port = 5432;
const user = isDbIamAuth
  ? ServerConfig.dbIamUsername
  : ServerConfig.dbAdminUsername;

const writeConfig: Options<Record<string, PostgresType>> = {
  host,
  port,
  database: ServerConfig.dbName,
  user,
  password: () =>
    isDbIamAuth ? getDbAuthToken({ host, port, user }) : getDbPassword(),
  // https://github.com/porsager/postgres#ssl
  ssl: { rejectUnauthorized: false },
  // https://solidstudio.io/blog/aws-handle-database-connection
  max: 1, // number of connections
  idle_timeout: 1, // seconds
  transform: {
    // need to transform until https://github.com/drizzle-team/drizzle-orm/issues/806 is resolved
    value(value) {
      if (value instanceof Date) {
        return value.toISOString();
      } else {
        return value;
      }
    },
  },
};
export const sqlWrite = postgres(writeConfig);

const readConfig: Options<Record<string, PostgresType>> = {
  ...writeConfig,
  host: process.env["PGHOST_RO"] || host,
};
export const sqlRead = postgres(readConfig);
