import {
  type ChangeEventHandler,
  type ReactElement,
  useCallback,
  useEffect,
  useState,
} from "react";
import { Button, Icon, SelectField } from "@aws-amplify/ui-react";
import { MdCheck, MdDelete } from "react-icons/md";
import { FilterValue as FilterValueComponent } from "./FilterValue.js";
import {
  type ColumnOption,
  type Filter,
  type FilterColumnsObj,
} from "../../types/filter.js";

interface FilterProps {
  columnOptions: ColumnOption[];
  filterColumnsObj: FilterColumnsObj;
  filter: Filter;
  onRemoveFilter: (filter: Filter) => void;
  onUpdateFilter: (oldFilter: Filter, newFilter: Filter) => void;
}

export function FilterRow({
  columnOptions,
  filterColumnsObj,
  filter,
  onRemoveFilter: handleRemoveFilter,
  onUpdateFilter: handleUpdateFilter,
}: FilterProps): ReactElement {
  const filterOptions = filterColumnsObj[filter.columnId]?.filterOptions;
  // dirty is true when user changes any part of filter
  const [dirty, setDirty] = useState(false);
  // value is used to temporarily hold user's dirty input value so that we're not
  // calling onFilter each keystroke
  const [value, setValue] = useState("");
  const handleChangeColumn: ChangeEventHandler<HTMLSelectElement> = useCallback(
    (e) => {
      setDirty(true);
      const newFilter: Filter = {
        columnId: e.target.value,
        comparator: "",
        value: "",
      };
      const newComparators =
        filterColumnsObj[e.target.value]?.filterOptions?.comparators || [];
      // if there is only 1 comparator for the column, pre-select it for user
      if (!filter.comparator && newComparators.length === 1) {
        newFilter.comparator = newComparators[0]?.value;
      }
      handleUpdateFilter(filter, newFilter);
    },
    [filter, filterColumnsObj, handleUpdateFilter],
  );
  const handleChangeComparator: ChangeEventHandler<HTMLSelectElement> =
    useCallback(
      (e) => {
        setDirty(true);
        const newFilter: Filter = {
          ...filter,
          comparator: e.target.value,
          value: "",
        };
        handleUpdateFilter(filter, newFilter);
      },
      [filter, handleUpdateFilter],
    );
  const handleChangeValue = useCallback(() => {
    handleUpdateFilter(filter, { ...filter, value });
    setDirty(false);
  }, [filter, handleUpdateFilter, value]);
  const handleChangeTempValue = useCallback((value: string) => {
    setDirty(true);
    setValue(value);
  }, []);
  const handleEnterValue = useCallback(() => {
    handleUpdateFilter(filter, { ...filter, value });
    setDirty(false);
  }, [filter, handleUpdateFilter, value]);
  useEffect(() => {
    // if only 1 comparator option, pre-select it
    if (!filter.comparator && filterOptions?.comparators.length === 1) {
      handleUpdateFilter(filter, {
        ...filter,
        comparator: filterOptions?.comparators[0]?.value,
        value: "",
      });
    }
  }, [filter, filterOptions?.comparators, handleUpdateFilter]);
  return (
    <>
      <SelectField
        label="Column"
        labelHidden
        onChange={handleChangeColumn}
        value={filter.columnId}
      >
        {columnOptions.map((n) => (
          <option key={n.id} value={n.id}>
            {n.headerName}
          </option>
        ))}
      </SelectField>
      <SelectField
        disabled={!filter.columnId}
        label="Comparator"
        labelHidden
        onChange={handleChangeComparator}
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
        <Button onClick={() => handleRemoveFilter(filter)}>
          <Icon ariaLabel="delete" as={MdDelete} />
        </Button>
      )}
    </>
  );
}
