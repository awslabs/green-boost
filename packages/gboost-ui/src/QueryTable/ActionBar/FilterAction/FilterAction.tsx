import { RefObject, ReactElement, useCallback, useMemo } from "react";
import { Button, Icon } from "@aws-amplify/ui-react";
import { MdFilterList } from "react-icons/md";
import { Box, Dialog } from "../../../index.js";
import { Column } from "../../types/column.js";
import { FilterRow } from "./FilterRow.js";
import { NewFilterRow } from "./NewFilterRow.js";
import { ColumnOption, Filter, FilterOptions } from "../../types/filter.js";
import { Row } from "../../types/row.js";

interface FilterActionProps<T extends Row> {
  disableMultiFilter: boolean;
  filterColumns: Column<T>[];
  filters: Filter[];
  filterButtonRef: RefObject<HTMLButtonElement>;
  onChangeFilters?: (filters: Filter[]) => void;
}

function serializeFilter(f: Filter): string {
  return f.columnId + f.comparator + f.value;
}

export function FilterAction<T extends Row>(
  props: FilterActionProps<T>
): ReactElement {
  const {
    disableMultiFilter,
    filterColumns,
    filters,
    filterButtonRef,
    onChangeFilters,
  } = props;
  const filterColumnsObj = useMemo(
    () =>
      filterColumns.reduce((prev, cur) => {
        prev[String(cur.id)] = {
          filterOptions: cur.filterOptions,
          name: cur.headerName,
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
    (filter: Filter) => {
      if (onChangeFilters) {
        onChangeFilters(disableMultiFilter ? [filter] : [...filters, filter]);
      }
    },
    [disableMultiFilter, filters, onChangeFilters]
  );
  const handleUpdateFilter = useCallback(
    (oldFilter: Filter, newFilter: Filter) => {
      if (onChangeFilters) {
        const newFilters: Filter[] = [];
        for (const f of filters) {
          if (serializeFilter(f) === serializeFilter(oldFilter)) {
            newFilters.push(newFilter);
          } else {
            newFilters.push(f);
          }
        }
        onChangeFilters(newFilters);
      }
    },
    [filters, onChangeFilters]
  );
  const handleRemoveFilter = useCallback(
    (filter: Filter) => {
      if (onChangeFilters) {
        const newFilters = filters.filter(
          (f) => serializeFilter(f) === serializeFilter(filter)
        );
        onChangeFilters(newFilters);
      }
    },
    [filters, onChangeFilters]
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
            key={serializeFilter(f)}
            columnOptions={columnOptions}
            filterColumnsObj={filterColumnsObj}
            filter={f}
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
