export interface Filter {
  columnId: string;
  comparator: string;
  value: string;
}
export interface ColumnOption {
  accessor: string;
  name: string;
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
