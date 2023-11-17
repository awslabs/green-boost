import { type ReactElement } from "react";
import { styled } from "../stitches.config.js";
import { type Column } from "./types/column.js";
import { type Row } from "./types/row.js";

const StyledTableCell = styled("div", {
  overflow: "hidden",
  textOverflow: "ellipsis",
  whiteSpace: "nowrap",
});

interface TableCellProps<T extends Row> {
  row: T;
  col: Column<T>;
  padding: string;
}
export function TableCell<T extends Row>(
  props: TableCellProps<T>,
): ReactElement {
  const { col, padding, row } = props;
  let Cell: ReactElement | undefined | string = undefined;
  const value = row[col.id as keyof T];
  if (col.renderCell) {
    Cell = col.renderCell(value, row);
  } else {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    Cell = value as any;
  }
  return (
    <StyledTableCell css={{ padding }} className="amplify-table__td">
      {Cell}
    </StyledTableCell>
  );
}
