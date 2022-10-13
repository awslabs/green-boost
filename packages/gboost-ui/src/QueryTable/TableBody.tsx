import { ReactElement, useCallback, useMemo } from "react";
import {
  TableBody as AmplifyTableBody,
  TableRow,
  TableCell,
} from "@aws-amplify/ui-react";
import { styled } from "../stitches.config.js";
import { SelectionCell } from "./SelectionCell.js";
import type { Column } from "./types/column.js";
import type { OnChangeSelectedParams } from "./types/selected.js";

const StyledTableBody = styled(AmplifyTableBody, {
  display: "contents !important",
});
const StyledTableRow = styled(TableRow, {
  display: "contents !important",
  gridRow: "auto !important",
});
export const StyledTableCell = styled(TableCell, {
  overflow: "hidden",
  textOverflow: "ellipsis",
  whiteSpace: "nowrap",
});

interface TableBodyProps<T> {
  columns: Column<T>[];
  enableSingleSelect: boolean;
  getRowId: (row: T) => string;
  onChangeSelected?: (params: OnChangeSelectedParams<T>) => void;
  padding: string;
  rows: T[];
  selected?: T[];
  visibleColumns: Column<T>[];
}

export function TableBody<T>(props: TableBodyProps<T>): ReactElement {
  const {
    columns,
    enableSingleSelect,
    getRowId,
    onChangeSelected,
    padding,
    rows,
    selected,
    visibleColumns,
  } = props;
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
  return (
    <StyledTableBody>
      {rows.map((r) => (
        <StyledTableRow key={getRowId(r)} rowSpan={columns.length}>
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
          {visibleColumns.map((c) => {
            let Cell: ReactElement | undefined | string = undefined;
            if (String(c.id) in r) {
              if (c.renderCell) {
                Cell = c.renderCell(r[c.id as keyof T], r);
              } else {
                Cell = String(r[c.id as keyof T]);
              }
            }
            return (
              <StyledTableCell key={String(c.id)} css={{ padding }}>
                {Cell}
              </StyledTableCell>
            );
          })}
        </StyledTableRow>
      ))}
    </StyledTableBody>
  );
}
