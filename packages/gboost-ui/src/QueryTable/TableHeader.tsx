import {
  type RefObject,
  type ReactElement,
  useCallback,
  useEffect,
} from "react";
import { TableHeaderCell } from "./TableHeaderCell.js";
import { SelectionHeader } from "./SelectionHeader.js";
import { styled } from "../stitches.config.js";
import { type Sort, type SortDirection } from "./types/sort.js";
import { type Filter } from "./types/filter.js";
import { type Column } from "./types/column.js";
import { type OnChangeSelectedParams } from "./types/selected.js";
import { type Row } from "./types/row.js";

// https://adamlynch.com/flexible-data-tables-with-css-grid/
const StyledTableHead = styled("div", {
  display: "contents !important",
});
const StyledTableRow = styled("div", {
  display: "contents !important",
  gridRow: "auto !important",
});

interface TableHeaderProps<T extends Row> {
  enableSingleSelect: boolean;
  filters?: Filter[];
  filterButtonRef: RefObject<HTMLButtonElement>;
  getRowId: (row: T) => string;
  onChangeSelected?: (params: OnChangeSelectedParams<T>) => void;
  onChangeSorts?: (sorts: Sort[]) => void;
  padding: string;
  rows: T[];
  selected?: T[];
  sorts?: Sort[];
  visibleColumns: Column<T>[];
}

export function TableHeader<T extends Row>(
  props: TableHeaderProps<T>
): ReactElement {
  const {
    enableSingleSelect,
    filters,
    filterButtonRef,
    onChangeSelected,
    onChangeSorts,
    padding,
    rows,
    selected,
    sorts,
    visibleColumns,
  } = props;
  useEffect(() => {
    const sortColumnIds = visibleColumns
      .filter((c) => c.sortable)
      .map((c) => c.id)
      .join(",");
    if (sortColumnIds) {
      if (!sorts) {
        console.warn(
          `sortable was set to true for column(s): ${sortColumnIds} but sorts wasn't passed to QueryTable as a prop`
        );
      }
      if (!onChangeSorts) {
        console.warn(
          `sortable was set to true for column(s): ${sortColumnIds} but onChangeSorts wasn't passed to QueryTable as a prop`
        );
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const handleSelectAll = useCallback(() => {
    if (onChangeSelected && selected) {
      onChangeSelected({
        action: "select",
        actionRows: [...rows],
        selectedRows: [...rows],
      });
    }
  }, [onChangeSelected, rows, selected]);
  const handleUnselectAll = useCallback(() => {
    if (onChangeSelected && selected) {
      onChangeSelected({
        action: "unselect",
        actionRows: [],
        selectedRows: [],
      });
    }
  }, [onChangeSelected, selected]);
  const handleCreateSort = useCallback(
    (sort: Sort) => {
      if (onChangeSorts) {
        onChangeSorts(sorts ? [...sorts, sort] : [sort]);
      }
    },
    [onChangeSorts, sorts]
  );
  const handleUpdateSort = useCallback(
    (columnId: string, direction: SortDirection) => {
      if (sorts && onChangeSorts) {
        const newSorts: Sort[] = [];
        for (const sort of sorts) {
          if (sort.columnId === columnId) {
            newSorts.push({ columnId, direction });
          } else {
            newSorts.push(sort);
          }
        }
        onChangeSorts(newSorts);
      }
    },
    [onChangeSorts, sorts]
  );
  const handleRemoveSort = useCallback(
    (columnId: string) => {
      if (sorts && onChangeSorts) {
        const newSorts: Sort[] = sorts.filter((s) => s.columnId !== columnId);
        onChangeSorts(newSorts);
      }
    },
    [onChangeSorts, sorts]
  );
  return (
    <StyledTableHead className="amplify_table__head">
      <StyledTableRow className="amplify-table__tr">
        {selected && (
          <SelectionHeader
            enableSingleSelect={Boolean(enableSingleSelect)}
            onSelectAll={handleSelectAll}
            onUnselectAll={handleUnselectAll}
            padding={padding}
            rows={rows}
            selected={selected}
          />
        )}
        {visibleColumns.map((c) => (
          <TableHeaderCell
            key={String(c.id)}
            activeFilter={Boolean(filters?.some((f) => f.columnId === c.id))}
            column={c}
            filterButtonRef={filterButtonRef}
            onCreateSort={handleCreateSort}
            onUpdateSort={handleUpdateSort}
            onRemoveSort={handleRemoveSort}
            padding={padding}
            sort={sorts?.find((s) => s.columnId === c.id)}
          />
        ))}
      </StyledTableRow>
    </StyledTableHead>
  );
}
