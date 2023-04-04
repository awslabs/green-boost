// @ts-nocheck
import type { CdkCustomResourceHandler } from "aws-lambda";
import pg from "pg";
import { CamelCasePlugin, Kysely, PostgresDialect } from "kysely";
import { migrate } from "./migration-core.js";
import { config } from "../config/config.js";
import { getDbPassword } from "../utils/get-db-password.js";

export const handler: CdkCustomResourceHandler = async (event) => {
  console.log({ event });
  const type = event.RequestType;
  if (type === "Create" || type === "Update") {
    console.log("Running migration");
    const db = new Kysely<unknown>({
      dialect: new PostgresDialect({
        pool: new pg.Pool({
          user: config.dbAdminUsername,
          password: () => getDbPassword(),
          host: config.dbHost,
          database: config.dbName,
        }),
      }),
      log: ["error", "query"],
      plugins: [new CamelCasePlugin()],
    });
    await migrate({ db, action: "migrateToLatest" });
    db.destroy();
  } else if (type === "Delete") {
    console.log("Custom Resource `event.RequestType` is Delete. Skipping.");
  }
  return {};
};
