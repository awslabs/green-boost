// @ts-nocheck
import { Kysely, MigrationResultSet, Migrator, NoMigrations } from "kysely";
import { migrationProvider } from "./migration-provider.js";

type MigrateParams = {
  db: Kysely<unknown>;
} & (
  | {
      action: "migrateToLatest" | "migrateUp" | "migrateDown";
    }
  | {
      action: "migrateTo";
      targetMigrationName: string | NoMigrations;
    }
);

export async function migrate(params: MigrateParams) {
  const { db, action } = params;
  const migrator = new Migrator({
    db,
    provider: migrationProvider,
  });
  let resultSet: MigrationResultSet | undefined = undefined;
  if (action === "migrateTo") {
    resultSet = await migrator[action](params.targetMigrationName);
  } else {
    resultSet = await migrator[action]();
  }
  if (resultSet) {
    handleMigrationResultSet(resultSet);
  }

  await db.destroy();
}

function handleMigrationResultSet(resultSet: MigrationResultSet) {
  const { error, results } = resultSet;

  if (results) {
    for (const result of results) {
      if (result.status === "Success") {
        console.log(
          `${result.direction} migration "${result.migrationName}" was executed successfully`
        );
      } else if (result.status === "Error") {
        console.error(`failed to execute migration "${result.migrationName}"`);
      }
    }
  }

  if (error) {
    console.error("failed to migrate");
    console.error(error);
    process.exit(1);
  }
}
