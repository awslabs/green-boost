// @ts-nocheck
import { itemsDbRepo } from "../adapters/items-db-repo.js";
import type {
  CreateItemSchema,
  GetItemSchema,
  ListItemsSchema,
  RemoveItemSchema,
  UpdateItemSchema,
} from "../domain/schemas/item-schemas.js";

function create(params: CreateItemSchema) {
  return itemsDbRepo.create(params);
}

function get({ id }: GetItemSchema) {
  return itemsDbRepo.get(id);
}

function list(params: ListItemsSchema) {
  return itemsDbRepo.list({
    cursor: params.cursor,
    limit: params.pageSize,
  });
}

function remove({ id }: RemoveItemSchema) {
  return itemsDbRepo.remove(id);
}

function update(params: UpdateItemSchema) {
  return itemsDbRepo.update(params);
}

export const itemService = {
  create,
  get,
  list,
  remove,
  update,
};
