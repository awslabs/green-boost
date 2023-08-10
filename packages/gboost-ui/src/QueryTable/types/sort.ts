export type SortDirection = "asc" | "desc";

/**
 * @deprecated
 */
export interface Sort {
  columnId: any; // allows literal string typing by tRPC schema
  direction: SortDirection;
}
