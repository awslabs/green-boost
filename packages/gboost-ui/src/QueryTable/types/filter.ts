export interface Filter {
  columnId: any;
  comparator: any;
  value: any;
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
