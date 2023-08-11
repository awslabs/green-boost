export type SortDirection = "asc" | "desc";

/**
 * @deprecated
 */
export interface Sort {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  columnId: any; // allows literal string typing by tRPC schema
  direction: SortDirection;
}
