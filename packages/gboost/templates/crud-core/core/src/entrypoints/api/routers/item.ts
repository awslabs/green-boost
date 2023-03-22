// @ts-nocheck
import {
  createItemSchema,
  getItemSchema,
  listItemsSchema,
  removeItemSchema,
  updateItemSchema,
} from "#schemas/item-schemas";
import { itemService } from "#services/item-service";
import { t } from "../trpc.js";

export const itemRouter = t.router({
  create: t.procedure
    .input(createItemSchema)
    .mutation((req) => itemService.create(req.input)),
  get: t.procedure
    .input(getItemSchema)
    .query((req) => itemService.get(req.input)),
  list: t.procedure
    .input(listItemsSchema)
    .query((req) => itemService.list(req.input)),
  remove: t.procedure
    .input(removeItemSchema)
    .mutation((req) => itemService.remove(req.input)),
  update: t.procedure
    .input(updateItemSchema)
    .mutation((req) => itemService.update(req.input)),
});
