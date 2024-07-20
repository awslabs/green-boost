// @ts-nocheck
import { asc, desc, eq, like } from "drizzle-orm";
import { dbRead, dbWrite } from "../../adapters/secondary";
import type {
  ItemInputSchema,
  ListItemsSchema,
  UpdateItemInputSchema,
} from "./item.schema";
import { ItemEntity } from "./item.entity";
import { item, type SelectItem } from "./item.db";
import { transformNullToUndefined } from "../../utils/transform-null-to-undefined";

function dbToEntity(dbItem: SelectItem): ItemEntity {
  return new ItemEntity(transformNullToUndefined(dbItem));
}

async function create(input: ItemInputSchema): Promise<void> {
  await dbWrite.insert(item).values(input).execute();
}

async function get(id: string): Promise<ItemEntity | undefined> {
  const itemRows = await dbRead
    .select()
    .from(item)
    .where(eq(item.id, id))
    .execute();
  const itemRow = itemRows.at(0);
  if (itemRow) {
    return dbToEntity(itemRow);
  }
  return;
}

async function list(input: ListItemsSchema): Promise<ItemEntity[]> {
  let qb = dbRead.select().from(item).$dynamic();
  const {
    filterField,
    filterOperator,
    filterValue,
    page,
    pageSize,
    sortDirection,
    sortField,
  } = input;
  const filterColumn = filterField ? item[filterField] : undefined;
  if (filterColumn && filterOperator && filterValue) {
    if (filterOperator === "contains") {
      qb = qb.where(like(filterColumn, `%${filterValue}%`));
    } else if (filterOperator === "equals") {
      qb = qb.where(eq(filterColumn, filterValue));
    } else if (filterOperator === "endsWith") {
      qb = qb.where(like(filterColumn, `%${filterValue}`));
    } else if (filterOperator === "startsWith") {
      qb = qb.where(like(filterColumn, `${filterValue}%`));
    }
  }
  const sortColumn = item[sortField];
  if (sortDirection && sortColumn) {
    if (sortDirection === "asc") {
      qb = qb.orderBy(asc(sortColumn));
    } else if (sortDirection === "desc") {
      qb = qb.orderBy(desc(sortColumn));
    }
  }
  const batchRows = await qb
    .offset(page * pageSize)
    .limit(pageSize)
    .execute();
  return batchRows.map((row) => dbToEntity(row));
}

async function remove(id: string): Promise<void> {
  await dbWrite.delete(item).where(eq(item.id, id)).execute();
}

async function update(input: UpdateItemInputSchema): Promise<void> {
  const { id, ...rest } = input;
  await dbWrite
    .update(item)
    .set({ ...rest, updatedAt: new Date().toISOString() })
    .where(eq(item.id, id))
    .execute();
}

/**
 * Item Repository
 */
export const itemRepo = {
  create,
  get,
  list,
  remove,
  update,
};
