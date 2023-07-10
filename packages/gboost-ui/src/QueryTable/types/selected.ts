import { type Row } from "./row.js";

export interface OnChangeSelectedParams<T extends Row> {
  action: "select" | "unselect";
  actionRows: T[];
  selectedRows: T[];
}
