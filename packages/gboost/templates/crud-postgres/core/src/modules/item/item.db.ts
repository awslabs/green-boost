// @ts-nocheck
import { text, timestamp, uuid } from "drizzle-orm/pg-core";
import { schema } from "../../db";
import type { InferModel } from "drizzle-orm";

export const item = schema.table("item", {
  createdAt: timestamp("created_at", {
    withTimezone: true,
    mode: "string",
  })
    .notNull()
    .defaultNow(),
  description: text("description").notNull(),
  id: uuid("id").defaultRandom().primaryKey(),
  name: text("name").notNull(),
  updatedAt: timestamp("updated_at", {
    withTimezone: true,
    mode: "string",
  })
    .notNull()
    .defaultNow(),
});

export type SelectItem = InferModel<typeof item, "select">;
export type InsertItem = InferModel<typeof item, "insert">;
