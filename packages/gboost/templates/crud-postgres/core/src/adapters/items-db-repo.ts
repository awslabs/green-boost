// @ts-nocheck
import { CreateItem, Item } from "../domain/models/item.js";
import type { UpdateItemSchema } from "../domain/schemas/item-schemas.js";
import { dbRead, dbWrite } from "@{{GB_APP_ID}}/db";

interface ItemsDbRepo {
  create: (params: CreateItem) => Promise<Item>;
  get: (id: string) => Promise<Item>;
  list: (params: ListItemsDbParams) => Promise<ListItemsDbResponse>;
  remove: (id: string) => Promise<void>;
  update: (params: UpdateItemSchema) => Promise<void>;
}

async function create(params: CreateItem): Promise<Item> {
  const result = await dbWrite
    .insertInto("item")
    .values(params)
    .returningAll()
    .executeTakeFirstOrThrow();
  return new Item(result);
}

async function get(id: string) {
  const result = await dbRead
    .selectFrom("item")
    .selectAll()
    .where("id", "=", id)
    .executeTakeFirstOrThrow();
  return new Item(result);
}

interface ListItemsDbParams {
  limit: number;
  cursor: number | undefined;
}
interface ListItemsDbResponse {
  items: Item[];
  nextCursor: number | undefined;
}
async function list(params: ListItemsDbParams): Promise<ListItemsDbResponse> {
  let qb = dbRead
    .selectFrom("item")
    .selectAll()
    .limit(params.limit + 1);
  const cursor = params.cursor;
  if (cursor) {
    qb = qb.offset(cursor);
  }
  const results = await qb.execute();
  let nextCursor: number | undefined = undefined;
  if (results.length > params.limit) {
    nextCursor = params.cursor || 0 + params.limit;
  }
  const items: Item[] = [];
  for (const result of results) {
    items.push(new Item(result));
  }
  return { items, nextCursor };
}

async function remove(id: string) {
  await dbWrite.deleteFrom("item").where("id", "=", id).execute();
}

async function update(params: UpdateItemSchema) {
  const { id, ...attributes } = params;
  await dbWrite
    .updateTable("item")
    .set(attributes)
    .where("id", "=", id)
    .execute();
}

export const itemsDbRepo: ItemsDbRepo = {
  create,
  get,
  list,
  remove,
  update,
};
