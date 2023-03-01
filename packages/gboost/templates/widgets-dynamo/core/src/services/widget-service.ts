// @ts-nocheck
import { widgetsDbRepo } from "@adapters/widgets-db-repo.js";
import type { Widget } from "@models/widget.js";
import type { ListWidgetsSchema } from "@schemas/widget-schemas.js";

async function list(params: ListWidgetsSchema): Promise<Widget[]> {
  return widgetsDbRepo.list({
    lastEvaluatedKey: params.cursor,
    pageSize: params.pageSize,
  });
}

export const widgetService = {
  list,
};
