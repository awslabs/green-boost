// @ts-nocheck
import { widgetsDbRepo } from "#adapters/widgets-db-repo";
import type { Widget } from "#models/widget";
import type {
  CreateWidgetSchema,
  ListWidgetsSchema,
} from "#schemas/widget-schemas";

interface ListOutput<T> {
  items: T[];
  nextCursor: string | undefined;
}

async function create(params: CreateWidgetSchema) {
  return widgetsDbRepo.create(params);
}

async function list(params: ListWidgetsSchema): Promise<ListOutput<Widget>> {
  const items = await widgetsDbRepo.list({
    cursor: params.cursor,
    limit: params.pageSize,
  });
  return { items, nextCursor: items.at(-1)?.id };
}

export const widgetService = {
  create,
  list,
};
