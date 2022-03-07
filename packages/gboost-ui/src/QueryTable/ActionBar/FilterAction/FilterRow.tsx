import { ChangeEventHandler, ReactElement, useCallback } from "react";
import { Button, Icon, SelectField } from "@aws-amplify/ui-react";
import { MdDelete } from "react-icons/md";
import { FilterValue as FilterValueComponent } from "./FilterValue.jsx";
import {
  ColumnOption,
  InternalFilter,
  FilterColumnsObj,
} from "./FilterAction.jsx";

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
  const handleChangeColumn: ChangeEventHandler<HTMLSelectElement> = useCallback(
    (e) => handleUpdateFilter(id, { ...filter, column: e.target.value }),
    [filter, handleUpdateFilter, id]
  );
  const handleChangeComparator: ChangeEventHandler<HTMLSelectElement> =
    useCallback(
      (e) => handleUpdateFilter(id, { ...filter, comparator: e.target.value }),
      [filter, handleUpdateFilter, id]
    );
  const handleChangeValue = useCallback(
    (value) => handleUpdateFilter(id, { ...filter, value }),
    [filter, handleUpdateFilter, id]
  );
  const handleEnterValue = useCallback(() => {
    handleUpdateFilter(id, filter);
  }, [filter, handleUpdateFilter, id]);
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
        onChangeValue={handleChangeValue}
        value={filter.value}
      />
      <Button onClick={() => handleRemoveFilter(id)}>
        <Icon ariaLabel="delete" as={MdDelete} />
      </Button>
    </>
  );
}
