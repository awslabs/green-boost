import { ReactElement } from "react";
import { Icon } from "@aws-amplify/ui-react";
import { MdRadioButtonChecked, MdRadioButtonUnchecked } from "react-icons/md";
import { styled } from "../stitches.config.js";
import { StyledTableCell } from "./QueryTable.js";
import { CheckBox, CheckBoxBlank, iconSize } from "./SelectionHeader.js";

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

interface SelectionCellProps<T> {
  enableSingleSelect: boolean;
  onSelect: (row: T) => void;
  onUnselect: (row: T) => void;
  padding: string;
  row: T;
  selected: boolean;
}

export function SelectionCell<T>(props: SelectionCellProps<T>): ReactElement {
  const {
    padding,
    enableSingleSelect,
    onSelect: handleSelect,
    onUnselect: handleUnselect,
    row,
    selected,
  } = props;
  let selectEl;
  if (enableSingleSelect) {
    if (selected) {
      selectEl = (
        <Icon
          as={RadioChecked}
          ariaLabel="radio checked"
          onClick={() => handleSelect(row)}
        />
      );
    } else {
      selectEl = (
        <Icon
          as={RadioUnchecked}
          ariaLabel="radio unchecked"
          onClick={() => handleSelect(row)}
        />
      );
    }
  } else {
    if (selected) {
      selectEl = (
        <Icon
          as={CheckBox}
          ariaLabel="checkbox"
          onClick={() => handleUnselect(row)}
        />
      );
    } else {
      selectEl = (
        <Icon
          as={CheckBoxBlank}
          ariaLabel="blank checkbox"
          onClick={() => handleSelect(row)}
        />
      );
    }
  }
  return (
    <StyledTableCell css={{ padding, textOverflow: "clip" }}>
      {selectEl}
    </StyledTableCell>
  );
}
