// @ts-nocheck
import { drizzle } from "drizzle-orm/postgres-js";
import { item } from "../../modules/item/item.db";
import type { DrizzleConfig } from "drizzle-orm";
import { sqlRead, sqlWrite } from "../../db/config";

const schema = {
  item,
};
const drizzleConfig: DrizzleConfig<typeof schema> = {
  logger: process.env["NODE_ENV"] !== "production",
  schema,
};

/**
 * DB Write Instance
 */
export const dbWrite = drizzle(sqlWrite, drizzleConfig);

/**
 * DB Reader Instance
 *
 */
export const dbRead = drizzle(sqlRead, drizzleConfig);
