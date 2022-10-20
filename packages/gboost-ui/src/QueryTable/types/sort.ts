export type SortDirection = "asc" | "desc";

export interface Sort {
  columnId: string;
  direction: SortDirection;
}
