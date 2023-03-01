import {
  ChangeEventHandler,
  ReactElement,
  useCallback,
  useEffect,
  useState,
} from "react";
import { Button, Icon, SelectField } from "@aws-amplify/ui-react";
import { MdCheck, MdDelete } from "react-icons/md";
import { FilterValue as FilterValueComponent } from "./FilterValue.js";
import {
  ColumnOption,
  InternalFilter,
  FilterColumnsObj,
} from "./FilterAction.js";

interface FilterProps {
  columnOptions: ColumnOption[];
  filterColumnsObj: FilterColumnsObj;
  id: string;
  filter: InternalFilter;
  onRemoveFilter: (key: string) => void;
  onUpdateFilter: (key: string, filter: InternalFilter) => void;
}

export function FilterRow({
  columnOptions,
  filterColumnsObj,
  id,
  filter,
  onRemoveFilter: handleRemoveFilter,
  onUpdateFilter: handleUpdateFilter,
}: FilterProps): ReactElement {
  const filterOptions = filterColumnsObj[filter.column]?.filterOptions;
  // dirty is true when user changes any part of filter
  const [dirty, setDirty] = useState(false);
  // value is used to temporarily hold user's dirty input value so that we're not
  // calling onFilter each keystroke
  const [value, setValue] = useState("");
  const handleChangeColumn: ChangeEventHandler<HTMLSelectElement> = useCallback(
    (e) => {
      setDirty(true);
      const newFilter: InternalFilter = {
        ...filter,
        column: e.target.value,
        comparator: "",
        value: "",
      };
      const newComparators =
        filterColumnsObj[e.target.value]?.filterOptions?.comparators || [];
      // if there is only 1 comparator for the column, pre-select it for user
      if (!filter.comparator && newComparators.length === 1) {
        newFilter.comparator = newComparators[0].value;
      }
      handleUpdateFilter(id, newFilter);
    },
    [filter, filterColumnsObj, handleUpdateFilter, id]
  );
  const handleChangeComparator: ChangeEventHandler<HTMLSelectElement> =
    useCallback(
      (e) => {
        setDirty(true);
        handleUpdateFilter(id, {
          ...filter,
          comparator: e.target.value,
          value: "",
        });
      },
      [filter, handleUpdateFilter, id]
    );
  const handleChangeValue = useCallback(() => {
    handleUpdateFilter(id, { ...filter, value });
    setDirty(false);
  }, [filter, handleUpdateFilter, id, value]);
  const handleChangeTempValue = useCallback((value: string) => {
    setDirty(true);
    setValue(value);
  }, []);
  const handleEnterValue = useCallback(() => {
    handleUpdateFilter(id, { ...filter, value });
    setDirty(false);
  }, [filter, handleUpdateFilter, id, value]);
  useEffect(() => {
    // if only 1 comparator option, pre-select it
    if (!filter.comparator && filterOptions?.comparators.length === 1) {
      handleUpdateFilter(id, {
        ...filter,
        comparator: filterOptions?.comparators[0].value,
        value: "",
      });
    }
  }, [filter, filterOptions?.comparators, handleUpdateFilter, id]);
  return (
    <>
      <SelectField
        label="Column"
        labelHidden
        onChange={handleChangeColumn}
        placeholder="Column"
        value={filter.column}
      >
        {columnOptions.map((n) => (
          <option key={n.accessor} value={n.accessor}>
            {n.name}
          </option>
        ))}
      </SelectField>
      <SelectField
        disabled={!filter.column}
        label="Comparator"
        labelHidden
        onChange={handleChangeComparator}
        placeholder="Comparator"
        value={filter.comparator}
      >
        {filterOptions?.comparators.map((c) => (
          <option key={c.value} value={c.value}>
            {c.name}
          </option>
        ))}
      </SelectField>
      <FilterValueComponent
        comparator={filter.comparator}
        filterOptions={filterOptions}
        onEnterValue={handleEnterValue}
        onChangeValue={handleChangeTempValue}
        value={dirty ? value : filter.value}
      />
      {dirty ? (
        <Button onClick={handleChangeValue}>
          <Icon ariaLabel="update" as={MdCheck} />
        </Button>
      ) : (
        <Button onClick={() => handleRemoveFilter(id)}>
          <Icon ariaLabel="delete" as={MdDelete} />
        </Button>
      )}
    </>
  );
}
