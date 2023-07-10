import { type ReactElement } from "react";
import { Icon } from "@aws-amplify/ui-react";
import { MdRadioButtonChecked, MdRadioButtonUnchecked } from "react-icons/md";
import { styled } from "../stitches.config.js";
import { StyledTableCell } from "./StyledTableCell.js";
import { CheckBox, CheckBoxBlank, iconSize } from "./SelectionHeader.js";
import { type Row } from "./types/row.js";

export const RadioChecked = styled(MdRadioButtonChecked, {
  cursor: "pointer",
  width: iconSize,
  height: iconSize,
});
export const RadioUnchecked = styled(MdRadioButtonUnchecked, {
  cursor: "pointer",
  width: iconSize,
  height: iconSize,
});

interface SelectionCellProps<T extends Row> {
  enableSingleSelect: boolean;
  onSelect: (row: T) => void;
  onUnselect: (row: T) => void;
  padding: string;
  row: T;
  selected: boolean;
}

export function SelectionCell<T extends Row>(
  props: SelectionCellProps<T>
): ReactElement {
  const { enableSingleSelect, padding, onSelect, onUnselect, row, selected } =
    props;
  let selectEl;
  if (selected) {
    selectEl = (
      <Icon
        as={enableSingleSelect ? RadioChecked : CheckBox}
        ariaLabel={enableSingleSelect ? "radio checked" : "checkbox"}
        onClick={() => onUnselect(row)}
      />
    );
  } else {
    selectEl = (
      <Icon
        as={enableSingleSelect ? RadioUnchecked : CheckBoxBlank}
        ariaLabel={enableSingleSelect ? "radio unchecked" : "blank checkbox"}
        onClick={() => onSelect(row)}
      />
    );
  }
  return (
    <StyledTableCell
      css={{ padding, textOverflow: "clip" }}
      className="amplify-table__td"
    >
      {selectEl}
    </StyledTableCell>
  );
}
