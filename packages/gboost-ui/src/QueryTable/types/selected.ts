export interface OnChangeSelectedParams<T> {
  action: "select" | "unselect";
  actionRows: T[];
  selectedRows: T[];
}
