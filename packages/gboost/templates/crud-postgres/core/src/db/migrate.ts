// @ts-nocheck
import { drizzle } from "drizzle-orm/postgres-js";
import { migrate } from "drizzle-orm/postgres-js/migrator";
import { sqlWrite } from "./config";
import config from "./drizzle.config";
import type { CdkCustomResourceHandler } from "aws-lambda";
import { fileURLToPath } from "url";

/**
 * This file can be run locally with `pnpm db:migrate` or in Lambda by custom
 * resource. This allows us to configure differently per environment.
 */
const isRunLocally = process.argv[1] === fileURLToPath(import.meta.url);
const db = drizzle(sqlWrite, { logger: true });

/**
 * Separate function to run migration so we can invoke in handler or if running locally
 */
async function runMigrate() {
  try {
    await migrate(db, {
      // so we don't have to create nested /src/adapters/secondary/db-adapters/drizzle in lambda zip
      migrationsFolder: isRunLocally ? config.out : "drizzle",
    });
    console.log("✅ Migration succeeded");
  } catch (err) {
    console.error("⛔ Migration failed", err);
  }
}

// run in lambda
export const handler: CdkCustomResourceHandler = async (event) => {
  if (event.RequestType === "Create" || event.RequestType === "Update") {
    await runMigrate();
  }
  return {};
};

// run locally
if (isRunLocally) {
  await runMigrate();
}
