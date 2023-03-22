// @ts-nocheck
import { itemRouter } from "./routers/item.js";
import { t } from "./trpc.js";

export const router = t.router({
  item: itemRouter,
});
export type AppRouter = typeof router;
