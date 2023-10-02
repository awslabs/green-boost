import {
  type ChangeEvent,
  type KeyboardEventHandler,
  type ReactElement,
  useCallback,
} from "react";
import { SelectField, TextField } from "@aws-amplify/ui-react";
import { type FilterOptions } from "../../types/filter.js";

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
          onChange={(e: ChangeEvent<HTMLSelectElement>) =>
            handleChangeValue(e.target.value)
          }
          onKeyPress={handleKeyPress}
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
          crossOrigin
          disabled={!comparator}
          label="Value"
          labelHidden
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            handleChangeValue(e.target.value)
          }
          onKeyPress={handleKeyPress}
          value={value}
        />
      );
    }
  } else {
    element = (
      <TextField crossOrigin disabled label="Value" labelHidden value="" />
    );
  }
  return element;
}
