import { ReactElement, useCallback, useEffect, useMemo } from "react";
import { Placeholder } from "@aws-amplify/ui-react";
import { Box, styled } from "../index";
import { SelectionCell } from "./SelectionCell.js";
import type { Column } from "./types/column.js";
import type { OnChangeSelectedParams } from "./types/selected.js";
import { Row } from "./types/row.js";
import { TableCell } from "./TableCell.js";

const StyledTableBody = styled("div", {
  display: "contents !important",
});
const StyledTableRow = styled("div", {
  display: "contents !important",
  gridRow: "auto !important",
});
const StyledPlaceholder = styled(Placeholder);

interface TableBodyProps<T extends Row> {
  enableSingleSelect: boolean;
  getRowId: (row: T) => string;
  loading: boolean;
  onChangeSelected?: (params: OnChangeSelectedParams<T>) => void;
  padding: string;
  pageSize: number;
  rows: T[];
  rowHeight: number;
  selected?: T[];
  visibleColumns: Column<T>[];
}

export function TableBody<T extends Row>(
  props: TableBodyProps<T>
): ReactElement {
  const {
    enableSingleSelect,
    getRowId,
    loading,
    onChangeSelected,
    padding,
    pageSize,
    rows,
    rowHeight,
    selected,
    visibleColumns,
  } = props;
  const rowsFirstElement = rows[0];
  useEffect(() => {
    if (rowsFirstElement && !getRowId(rowsFirstElement)) {
      console.warn(
        "QueryTable: Either 'id' is not a key in rows[0] or getRowId(rows[0]) is returning undefined. Please fix so that each row has a unique identifier."
      );
    }
  }, [getRowId, rowsFirstElement]);
  const selectedMap: Record<string, boolean> = useMemo(() => {
    if (selected) {
      return selected.reduce(
        (prev, cur) => ({ ...prev, [getRowId(cur)]: true }),
        {}
      );
    } else {
      return {};
    }
  }, [getRowId, selected]);
  const handleSelect = useCallback(
    (row: T) => {
      if (onChangeSelected && selected) {
        onChangeSelected({
          action: "select",
          actionRows: [row],
          selectedRows: [...selected, row],
        });
      }
    },
    [onChangeSelected, selected]
  );
  const handleUnselect = useCallback(
    (row: T) => {
      if (onChangeSelected && selected) {
        onChangeSelected({
          action: "unselect",
          actionRows: [row],
          selectedRows: selected.filter((s) => getRowId(s) !== getRowId(row)),
        });
      }
    },
    [getRowId, onChangeSelected, selected]
  );
  let body: ReactElement[];
  if (!rows.length && loading) {
    body = Array.from({ length: pageSize }).map((_, i) => (
      <StyledTableRow key={i} className="amplify-table__row">
        {selected && (
          <Box css={{ padding, height: rowHeight }}>
            <StyledPlaceholder height="100%" />
          </Box>
        )}
        {visibleColumns.map((c) => (
          <Box css={{ padding, height: rowHeight }} key={String(c.id)}>
            <StyledPlaceholder key={String(c.id)} height="100%" />
          </Box>
        ))}
      </StyledTableRow>
    ));
  } else {
    body = rows.map((r) => (
      <StyledTableRow key={getRowId(r)} className="amplify-table__row">
        {selected && (
          <SelectionCell
            enableSingleSelect={enableSingleSelect}
            padding={padding}
            onSelect={handleSelect}
            onUnselect={handleUnselect}
            row={r}
            selected={selectedMap[getRowId(r)]}
          />
        )}
        {visibleColumns.map((c) => (
          <TableCell col={c} key={String(c.id)} padding={padding} row={r} />
        ))}
      </StyledTableRow>
    ));
  }
  return (
    <StyledTableBody className="amplify-table__body">{body}</StyledTableBody>
  );
}
