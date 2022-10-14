import { ReactElement, useCallback, useRef } from "react";
import { Button, TableCell } from "@aws-amplify/ui-react";
import * as Stitches from "@stitches/react";
import { MdArrowDownward, MdArrowUpward, MdFilterList } from "react-icons/md";
import type { Column } from "./types/column.js";
import type { Sort } from "./types/sort.js";
import { Box, config, styled } from "../index.js";
import { RefObject } from "react";
import { Row } from "./types/row.js";

const StyledTableCell = styled(TableCell, {
  overflow: "hidden",
  textOverflow: "ellipsis",
  whiteSpace: "nowrap",
});
const StyledHeaderButton = styled(Button, { px: "$1" });
const StyledArrowUpward = styled(MdArrowUpward);
const StyledArrowDownward = styled(MdArrowDownward);
const StyledFilterList = styled(MdFilterList);

interface TableHeaderCellProps<T extends Row> {
  activeFilter: boolean;
  column: Column<T>;
  filterButtonRef: RefObject<HTMLButtonElement>;
  onCreateSort: (sort: Sort) => void;
  onRemoveSort: (column: string) => void;
  onUpdateSort: (column: string, direction: "asc" | "desc") => void;
  padding: string;
  sort?: Sort;
}

export function TableHeaderCell<T extends Row>(
  props: TableHeaderCellProps<T>
): ReactElement {
  const {
    activeFilter,
    column,
    filterButtonRef,
    onCreateSort: handleCreateSort,
    onRemoveSort: handleRemoveSort,
    onUpdateSort: handleUpdateSort,
    padding,
    sort,
  } = props;
  const sortButton = useRef<HTMLButtonElement>(null);
  const handleClick = useCallback(() => {
    if (sort) {
      if (sort.direction === "asc") {
        handleUpdateSort(String(column.id), "desc");
      } else {
        handleRemoveSort(String(column.id));
        sortButton.current?.blur();
      }
    } else {
      handleCreateSort({ columnId: String(column.id), direction: "asc" });
    }
  }, [column.id, handleUpdateSort, handleRemoveSort, handleCreateSort, sort]);
  let buttonCss: Stitches.CSS<typeof config> = {};
  let iconCss: Stitches.CSS<typeof config> = {};
  if (sort) {
    buttonCss = {
      visibility: "visible",
      width: "auto",
    };
    iconCss = {
      color: "black",
      fontWeight: "bolder",
    };
  } else {
    buttonCss = {
      visibility: "hidden",
      width: 0,
    };
    iconCss = {
      color: "$grey7",
    };
  }
  return (
    <StyledTableCell
      as="th"
      // amplify-table__th is removed when using display: "contents"
      // is used for thead, tbody, and tr's
      className="amplify-table__th"
      css={{
        padding,
        bc: "$primary5",
        [`&:hover`]: {
          [`& ${StyledHeaderButton}`]: {
            visibility: "visible",
            width: "auto",
          },
        },
      }}
    >
      <Box css={{ display: "flex", gap: "$1", height: "100%" }}>
        <Box css={{ alignSelf: "end" }}>{column.headerName}</Box>
        {activeFilter && (
          <StyledHeaderButton
            variation="link"
            onClick={() => filterButtonRef.current?.click()}
          >
            <StyledFilterList css={{ color: "black" }} />
          </StyledHeaderButton>
        )}
        {column.sortable && (
          <StyledHeaderButton
            ref={sortButton}
            css={buttonCss}
            onClick={handleClick}
            variation="link"
          >
            {sort?.direction === "desc" ? (
              <StyledArrowDownward css={iconCss} />
            ) : (
              <StyledArrowUpward css={iconCss} />
            )}
          </StyledHeaderButton>
        )}
      </Box>
    </StyledTableCell>
  );
}
