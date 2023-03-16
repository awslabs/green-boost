// @ts-nocheck
import { widgetRouter } from "./routers/widget.js";
import { t } from "./trpc.js";

export const router = t.router({
  widget: widgetRouter,
});
export type AppRouter = typeof router;
