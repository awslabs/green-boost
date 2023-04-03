// @ts-nocheck
import type { ColumnType } from "kysely";
import type { ItemStep } from "@{{GB_APP_ID}}/core/models";

export interface ItemTable {
  active: boolean;
  createdDate: ColumnType<string, never, never>;
  description?: string | undefined;
  expirationDate: string;
  id: ColumnType<string, never, never>;
  name: string;
  price: number;
  rating: number;
  step: ItemStep;
  updatedDate: ColumnType<string, never, never>;
}
