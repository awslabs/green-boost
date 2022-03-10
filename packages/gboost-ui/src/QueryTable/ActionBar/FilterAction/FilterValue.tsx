import {
  ChangeEvent,
  KeyboardEventHandler,
  ReactElement,
  useCallback,
} from "react";
import { SelectField, TextField } from "@aws-amplify/ui-react";
import { FilterOptions } from "./FilterAction.js";

interface FilterValueProps {
  comparator?: string;
  filterOptions?: FilterOptions;
  onEnterValue: () => void;
  onChangeValue: (value: string) => void;
  value: string;
}

export function FilterValue({
  comparator,
  filterOptions,
  onEnterValue: handleEnterValue,
  onChangeValue: handleChangeValue,
  value,
}: FilterValueProps): ReactElement {
  const handleKeyPress: KeyboardEventHandler<
    HTMLInputElement | HTMLSelectElement
  > = useCallback(
    (e) => {
      if (e.key === "Enter") handleEnterValue();
    },
    [handleEnterValue]
  );
  let element: ReactElement;
  if (filterOptions) {
    const filterValue = filterOptions?.value;
    if (filterValue?.type === "select") {
      const options = filterValue.options;
      element = (
        <SelectField
          disabled={!comparator}
          label="Value"
          labelHidden
          onChange={(e) => handleChangeValue(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="Value"
          value={value}
        >
          {options.map((o) => (
            <option key={o.value} value={o.value}>
              {o.name}
            </option>
          ))}
        </SelectField>
      );
    } else {
      element = (
        <TextField
          disabled={!comparator}
          label="Value"
          labelHidden
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            handleChangeValue(e.target.value)
          }
          onKeyPress={handleKeyPress}
          placeholder="Value"
          value={value}
        />
      );
    }
  } else {
    element = (
      <TextField
        disabled
        label="Value"
        labelHidden
        placeholder="Value"
        value=""
      />
    );
  }
  return element;
}
