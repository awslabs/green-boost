import { widgetRouter } from "./routers/widget.js";
import { t } from "./trpc.js";
import { componentRouter } from "./routers/components.js";

export const router = t.router({
  widget: widgetRouter,
  component: componentRouter,
});
export type AppRouter = typeof router;
