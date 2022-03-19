import { Icon } from "@aws-amplify/ui-react";
import { ReactElement } from "react";
import {
  MdOutlineCheckBoxOutlineBlank,
  MdOutlineCheckBox,
  MdOutlineIndeterminateCheckBox,
} from "react-icons/md";
import { styled } from "../stitches.config.js";
import { StyledTableCell } from "./QueryTable.js";

export const iconSize = 25;
export const CheckBox = styled(MdOutlineCheckBox, {
  cursor: "pointer",
  width: iconSize,
  height: iconSize,
});
export const CheckBoxBlank = styled(MdOutlineCheckBoxOutlineBlank, {
  cursor: "pointer",
  width: iconSize,
  height: iconSize,
});
const CheckBoxIndeterminate = styled(MdOutlineIndeterminateCheckBox, {
  cursor: "pointer",
  width: iconSize,
  height: iconSize,
});

interface SelectionHeaderProps<T> {
  backgroundColor: string;
  enableSingleSelect: boolean;
  onSelectAll: (s: T[]) => void;
  onUnselectAll: () => void;
  padding: string;
  rows: T[];
  selected: T[];
}

export function SelectionHeader<T>(
  props: SelectionHeaderProps<T>
): ReactElement {
  const {
    backgroundColor,
    enableSingleSelect,
    onSelectAll: handleSelectAll,
    onUnselectAll: handleUnselectAll,
    padding,
    rows,
    selected,
  } = props;
  let checkbox = (
    <Icon
      as={CheckBoxBlank}
      ariaLabel="blank checkbox"
      onClick={() => handleSelectAll(rows)}
    />
  );
  if (rows.length > 0 && selected.length === rows.length) {
    checkbox = (
      <Icon
        as={CheckBox}
        ariaLabel="checked box"
        onClick={() => handleUnselectAll()}
      />
    );
  } else if (selected.length) {
    checkbox = (
      <Icon
        as={CheckBoxIndeterminate}
        ariaLabel="indeterminate box"
        onClick={() => handleUnselectAll()}
      />
    );
  }
  return (
    <StyledTableCell
      as="th"
      // amplify-table__th is removed when using display: "contents"
      // is used for thead, tbody, and tr's
      css={{
        padding,
        backgroundColor,
        textOverflow: "clip",
      }}
    >
      {!enableSingleSelect && checkbox}
    </StyledTableCell>
  );
}
