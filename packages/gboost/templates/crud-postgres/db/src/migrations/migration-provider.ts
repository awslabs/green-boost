// @ts-nocheck
import { ItemStep } from "@{{GB_APP_ID}}/core/models";
import { config } from "../config/config.js";
import { Kysely, Migration, MigrationProvider, sql } from "kysely";

/**
 * # Migration Provider Guide
 *
 * In order to run migrations in a Lambda Custom Resource via CloudFormation,
 * we implement our own `MigrationProvider` since the `FileMigrationProvider`
 * depends upon the file system which is difficult in Lambda environments.
 *
 * Object keys returned by `getMigrations` will be ordered by kysely
 * alphabetically. The order you specify the keys in the object does not matter.
 *
 * To follow the same convention below, create migration
 * objects like `m${Number(new Date())}DescriptionOfMigration`. Using an unix
 * timestamp prevents ordering issues that would occur if 1, 10, 11, 2, ... was used.
 */
export const migrationProvider: MigrationProvider = {
  getMigrations: async () => ({
    m1679582273812Init,
    m1679582273813NextMigration,
  }),
};

const m1679582273812Init: Migration = {
  async up(db: Kysely<unknown>) {
    await sql`create user ${sql.raw(config.dbIamUsername)} with login`.execute(
      db
    );
    await sql`grant rds_iam to ${sql.raw(config.dbIamUsername)}`.execute(db);
    await sql`
    create function create_updated_date_trigger() 
    returns trigger as $$
    begin
      new.updated_date = now();
      return new; 
    end;
    $$ language 'plpgsql';
  `.execute(db);
    await db.schema
      .createType("itemStep")
      .asEnum(Object.values(ItemStep))
      .execute();
    await db.schema
      .createTable("item")
      .addColumn("id", "uuid", (c) =>
        c.primaryKey().defaultTo(sql`gen_random_uuid()`)
      )
      .addColumn("active", "boolean", (c) => c.notNull())
      .addColumn("description", "text")
      .addColumn("expirationDate", "timestamptz", (c) => c.notNull())
      .addColumn("name", "text", (c) => c.notNull())
      .addColumn("price", "numeric", (c) => c.notNull())
      .addColumn("rating", "numeric", (c) => c.notNull())
      .addColumn("step", sql`item_step`, (c) => c.notNull())
      .execute();
    await baseTableOperations(db, "item");
  },
  async down(db: Kysely<unknown>) {
    await db.schema.dropTable("item").execute();
    await db.schema.dropType("itemStep").execute();
    await sql`drop function create_updated_date_trigger`.execute(db);
    await sql`drop user cosmos_iam_user`.execute(db);
  },
};

const m1679582273813NextMigration: Migration = {
  async up(db: Kysely<unknown>) {
    db;
  },
  async down(db: Kysely<unknown>) {
    db;
  },
};

async function baseTableOperations(db: Kysely<unknown>, tableName: string) {
  db.schema
    .alterTable(tableName)
    .addColumn("createdDate", "timestamptz", (c) =>
      c.notNull().defaultTo(sql`now()`)
    )
    .addColumn("updatedDate", "timestamptz", (c) =>
      c.notNull().defaultTo(sql`now()`)
    )
    .execute();
  await sql`grant insert, select, update, delete on table ${sql.raw(
    tableName
  )} to ${sql.raw(config.dbIamUsername)};`.execute(db);
}
