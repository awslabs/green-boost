// @ts-nocheck
import { createWidgetSchema, listWidgetsSchema } from "#schemas/widget-schemas";
import { widgetService } from "#services/widget-service";
import { t } from "../trpc.js";

export const widgetRouter = t.router({
  list: t.procedure
    .input(listWidgetsSchema)
    .query((req) => widgetService.list(req.input)),
  create: t.procedure
    .input(createWidgetSchema)
    .mutation((req) => widgetService.create(req.input)),
});
