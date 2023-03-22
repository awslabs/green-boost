import {
  createWidgetSchema,
  getWidgetSchema,
  listWidgetsSchema,
  removeWidgetSchema,
  updateWidgetSchema,
} from "#schemas/widget-schemas";
import { widgetService } from "#services/widget-service";
import { t } from "../trpc.js";

export const widgetRouter = t.router({
  create: t.procedure
    .input(createWidgetSchema)
    .mutation((req) => widgetService.create(req.input)),
  get: t.procedure
    .input(getWidgetSchema)
    .query((req) => widgetService.get(req.input)),
  list: t.procedure
    .input(listWidgetsSchema)
    .query((req) => widgetService.list(req.input)),
  remove: t.procedure
    .input(removeWidgetSchema)
    .mutation((req) => widgetService.remove(req.input)),
  update: t.procedure
    .input(updateWidgetSchema)
    .mutation((req) => widgetService.update(req.input)),
});
