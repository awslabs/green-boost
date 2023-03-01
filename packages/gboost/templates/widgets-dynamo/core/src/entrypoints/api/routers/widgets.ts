// @ts-nocheck
import { listWidgetsSchema } from "@schemas/widget-schemas.js";
import { widgetService } from "@services/widget-service.js";
import { t } from "../trpc.js";

export const widgetsRouter = t.router({
  list: t.procedure
    .input(listWidgetsSchema)
    .query((req) => widgetService.list(req.input)),
});
