import { TableCell } from "@aws-amplify/ui-react";
import { styled } from "../stitches.config.js";

export const StyledTableCell = styled(TableCell, {
  overflow: "hidden",
  textOverflow: "ellipsis",
  whiteSpace: "nowrap",
});
