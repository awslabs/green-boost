// @ts-nocheck
import type { Widget } from "@models/widget.js";

interface WidgetsDbRepo {
  list: (params: ListWidgetsDbParams) => Promise<Widget[]>;
}
async function list(params: ListWidgetsDbParams): Promise<Widget[]> {
  params;
  return [];
}

interface ListWidgetsDbParams {
  pageSize: number;
  lastEvaluatedKey: string;
}

export const widgetsDbRepo: WidgetsDbRepo = {
  list,
};
