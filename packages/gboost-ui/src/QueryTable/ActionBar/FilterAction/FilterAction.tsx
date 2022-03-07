import { ReactElement, useCallback, useMemo } from "react";
import { Button, Icon } from "@aws-amplify/ui-react";
import { MdFilterList } from "react-icons/md";
import { Box } from "../../../Box.jsx";
import { Dialog } from "../../../Dialog.jsx";
import { Column } from "../../QueryTable.jsx";
import { FilterRow } from "./FilterRow.jsx";
import { NewFilterRow } from "./NewFilterRow.jsx";

export interface Filter {
  column: string;
  comparator: string;
  value: string;
}
export interface InternalFilter extends Filter {
  id: string;
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

interface FilterActionProps {
  filterColumns: Column[];
  filters: InternalFilter[];
  onFilter: (filters: InternalFilter[]) => void;
}

export function FilterAction({
  filterColumns,
  filters,
  onFilter,
}: FilterActionProps): ReactElement {
  const filterColumnsObj = useMemo(
    () =>
      filterColumns.reduce((prev, cur) => {
        prev[cur.accessor] = {
          filterOptions: cur.filterOptions,
          name: cur.name,
        };
        return prev;
      }, {} as Record<string, { filterOptions?: FilterOptions; name: string }>),
    [filterColumns]
  );
  const columnOptions: ColumnOption[] = useMemo(
    () =>
      Object.entries(filterColumnsObj).map(([k, v]) => ({
        accessor: k,
        name: v.name,
      })),
    [filterColumnsObj]
  );
  const handleCreateFilter = useCallback(
    (filter: InternalFilter) => {
      const newFilters = [...filters];
      newFilters.push(filter);
      onFilter(newFilters);
    },
    [filters, onFilter]
  );
  const handleUpdateFilter = useCallback(
    (id: string, filter: InternalFilter) => {
      const idx = filters.findIndex((f) => f.id === id);
      onFilter([...filters.slice(0, idx), filter, ...filters.slice(idx)]);
    },
    [filters, onFilter]
  );
  const handleRemoveFilter = useCallback(
    (id: string) => {
      const newFilters = filters.filter((f) => f.id !== id);
      onFilter(newFilters);
    },
    [filters, onFilter]
  );
  return (
    <Dialog
      title={filters.length <= 1 ? "Filter" : "Filters"}
      trigger={
        <Button size="large">
          <Icon ariaLabel="filter" as={MdFilterList} />
        </Button>
      }
      maxWidth="700px"
    >
      <Box
        css={{
          display: "grid",
          gap: "$2",
          gridTemplateColumns: "repeat(4, auto)",
        }}
      >
        {[...filters].map((f) => (
          <FilterRow
            key={f.id}
            columnOptions={columnOptions}
            filterColumnsObj={filterColumnsObj}
            filter={f}
            id={f.id}
            onUpdateFilter={handleUpdateFilter}
            onRemoveFilter={handleRemoveFilter}
          />
        ))}
        <NewFilterRow
          columnOptions={columnOptions}
          filterColumnsObj={filterColumnsObj}
          onCreateFilter={handleCreateFilter}
        />
      </Box>
    </Dialog>
  );
}
