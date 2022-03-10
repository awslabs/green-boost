import { ReactElement, useCallback, useMemo } from "react";
import { Button, Icon } from "@aws-amplify/ui-react";
import { MdFilterList } from "react-icons/md";
import { Box } from "../../../Box.js";
import { Dialog } from "../../../Dialog.js";
import { Column } from "../../QueryTable.js";
import { FilterRow } from "./FilterRow.js";
import { NewFilterRow } from "./NewFilterRow.js";
import { RefObject } from "react";

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
  disableMultiFilter: boolean;
  filterColumns: Column[];
  filters: InternalFilter[];
  filterButtonRef: RefObject<HTMLButtonElement>;
  onFilter: (filters: InternalFilter[]) => void;
}

export function FilterAction({
  disableMultiFilter,
  filterColumns,
  filters,
  filterButtonRef,
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
      const newFilters = disableMultiFilter ? [] : [...filters];
      newFilters.push(filter);
      onFilter(newFilters);
    },
    [disableMultiFilter, filters, onFilter]
  );
  const handleUpdateFilter = useCallback(
    (id: string, filter: InternalFilter) => {
      const newFilters: InternalFilter[] = [];
      for (const f of filters) {
        if (f.id === id) {
          newFilters.push(filter);
        } else {
          newFilters.push(f);
        }
      }
      onFilter(newFilters);
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
  const showNewFilter =
    (disableMultiFilter && filters.length === 0) || !disableMultiFilter;
  return (
    <Dialog
      title={filters.length <= 1 ? "Filter" : "Filters"}
      trigger={
        <Button ref={filterButtonRef} size="large">
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
        {showNewFilter && (
          <NewFilterRow
            columnOptions={columnOptions}
            filterColumnsObj={filterColumnsObj}
            onCreateFilter={handleCreateFilter}
          />
        )}
      </Box>
    </Dialog>
  );
}
