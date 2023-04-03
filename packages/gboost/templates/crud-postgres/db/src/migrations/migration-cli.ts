// @ts-nocheck
import { CamelCasePlugin, Kysely, PostgresDialect } from "kysely";
import pg from "pg";
import { config } from "../config/config.js";
import { migrate } from "./migration-core.js";
import { getDbPassword } from "../utils/get-db-password.js";

const action = process.argv[2];
if (action !== "up" && action !== "down" && action !== "to") {
  exitWithUsage();
}
const db = getDb();
if (action === "up") {
  await migrate({ db, action: "migrateUp" });
} else if (action === "down") {
  await migrate({ db, action: "migrateDown" });
} else {
  const migrationName = process.argv[3];
  if (!migrationName) {
    exitWithUsage();
  }
  if (migrationName === "latest") {
    await migrate({ db, action: "migrateToLatest" });
  } else {
    await migrate({
      db,
      action: "migrateTo",
      targetMigrationName: migrationName as string,
    });
  }
}

function exitWithUsage() {
  console.log(
    "usage: pnpm migrate up | down | to latest | to empty | to <migration-file-name>"
  );
  process.exit(1);
}

function getDb() {
  return new Kysely<unknown>({
    dialect: new PostgresDialect({
      pool: new pg.Pool({
        user: config.dbAdminUsername,
        password: () => getDbPassword(),
        host: "localhost",
        port: 5432,
      }),
    }),
    // log: ["query"], // log all queries for troubleshooting
    plugins: [new CamelCasePlugin()],
  });
}
