/* eslint-disable @typescript-eslint/no-explicit-any */
/**
 * @deprecated
 */
export interface Filter {
  columnId: any; // allows literal string typing by tRPC schema
  comparator: any; // allows literal string typing by tRPC schema
  value: any; // allows literal string typing by tRPC schema
}
export interface ColumnOption {
  id: string;
  headerName: string;
}
export type FilterValue =
  | { type: "text" }
  | { type: "select"; options: { value: string; name: string }[] };
export type FilterColumnsObj = Record<
  string,
  { name: string; filterOptions?: FilterOptions }
>;
type FilterComparator = {
  value: string;
  name: string;
};
export interface FilterOptions {
  comparators: FilterComparator[];
  value: FilterValue;
}
