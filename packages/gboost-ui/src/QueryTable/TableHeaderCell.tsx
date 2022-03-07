import { ReactElement, useCallback, useRef } from "react";
import { Button, TableCell } from "@aws-amplify/ui-react";
import { config, styled } from "../stitches.config.js";
import * as Stitches from "@stitches/react";
import { MdArrowDownward, MdArrowUpward } from "react-icons/md";
import { Column, Sort } from "./QueryTable.jsx";

const StyledTableCell = styled(TableCell, {
  overflow: "hidden",
  textOverflow: "ellipsis",
  whiteSpace: "nowrap",
});
const StyledSortButton = styled(Button, {
  display: "inline",
  px: "$1",
  ml: "$1",
});
const StyledArrowUpward = styled(MdArrowUpward);
const StyledArrowDownward = styled(MdArrowDownward);

interface TableHeaderCellProps {
  column: Column;
  onCreateSort: (sort: Sort) => void;
  onRemoveSort: (column: string) => void;
  onUpdateSort: (column: string, direction: "asc" | "desc") => void;
  padding: string;
  sort?: Sort;
}

export function TableHeaderCell(props: TableHeaderCellProps): ReactElement {
  const {
    column,
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
        handleUpdateSort(column.accessor, "desc");
      } else {
        handleRemoveSort(column.accessor);
        sortButton.current?.blur();
      }
    } else {
      handleCreateSort({ column: column.accessor, direction: "asc" });
    }
  }, [
    column.accessor,
    handleUpdateSort,
    handleRemoveSort,
    handleCreateSort,
    sort,
  ]);
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
          [`& ${StyledSortButton}`]: {
            visibility: "visible",
            width: "auto",
          },
        },
      }}
    >
      {column.name}
      <StyledSortButton
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
      </StyledSortButton>
    </StyledTableCell>
  );
}
