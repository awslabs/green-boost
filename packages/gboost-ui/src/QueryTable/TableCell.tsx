import { ReactElement } from "react";
import { styled } from "../stitches.config.js";
import { Column } from "./types/column.js";

const StyledTableCell = styled("div", {
  overflow: "hidden",
  textOverflow: "ellipsis",
  whiteSpace: "nowrap",
});

interface TableCellProps<T> {
  row: T;
  col: Column<T>;
  padding: string;
}
export function TableCell<T>(props: TableCellProps<T>): ReactElement {
  const { col, padding, row } = props;
  let Cell: ReactElement | undefined | string = undefined;
  let value = "";
  const id = String(col.id);
  if (id in row) {
    value = String(row[col.id as keyof T]);
  }
  if (col.renderCell) {
    Cell = col.renderCell(value, row);
  } else {
    Cell = value;
  }
  return (
    <StyledTableCell css={{ padding }} className="amplify-table__td">
      {Cell}
    </StyledTableCell>
  );
}
