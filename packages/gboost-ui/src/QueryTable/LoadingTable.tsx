import { ReactElement } from "react";
import { Placeholder } from "@aws-amplify/ui-react";
import { Box, styled } from "../index";
import type { Column } from "./types/column.js";
import { Row } from "./types/row.js";

// note: need StyledDiv* components so that we can nest div inside "table"
// avoids: warning validateDOMNesting: <div> cannot appear as a child of <tr>
const StyledDivTable = styled("div", {
  display: "grid",
  borderCollapse: "collapse",
  minWidth: "100%",
  overflow: "auto", // TODO: why won't responsive scrolling work like
  // this example: https://codepen.io/adam-lynch/pen/XwKWdG
});
const StyledDivBody = styled("div", {
  display: "contents !important",
});
const StyledDivRow = styled("div", {
  display: "contents !important",
  gridRow: "auto !important",
});
const StyledPlaceholder = styled(Placeholder);

interface TableBodyProps<T extends Row> {
  padding: string;
  pageSize: number;
  rowHeight: number;
  selected?: T[];
  visibleColumns: Column<T>[];
}

export function LoadingTable<T extends Row>(
  props: TableBodyProps<T>
): ReactElement {
  const { padding, pageSize, rowHeight, selected, visibleColumns } = props;
  return (
    <StyledDivTable>
      <StyledDivBody>
        {Array.from({ length: pageSize }).map((_, i) => (
          <StyledDivRow key={i}>
            {selected && (
              <Box css={{ padding, height: rowHeight }}>
                <StyledPlaceholder height="100%" />
              </Box>
            )}
            {visibleColumns.map((c) => (
              <Box css={{ padding, height: rowHeight }} key={String(c.id)}>
                <StyledPlaceholder height="100%" />
              </Box>
            ))}
          </StyledDivRow>
        ))}
      </StyledDivBody>
    </StyledDivTable>
  );
}
