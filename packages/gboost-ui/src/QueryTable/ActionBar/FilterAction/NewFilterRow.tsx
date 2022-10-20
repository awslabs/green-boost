import {
  ChangeEvent,
  ChangeEventHandler,
  ReactElement,
  useCallback,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { Button, Icon, SelectField } from "@aws-amplify/ui-react";
import { MdCheck } from "react-icons/md";
import { FilterValue as FilterValueComponent } from "./FilterValue.js";
import { ColumnOption, Filter, FilterColumnsObj } from "../../types/filter.js";

interface NewFilterProps {
  columnOptions: ColumnOption[];
  filterColumnsObj: FilterColumnsObj;
  onCreateFilter: (filter: Filter) => void;
}

export function NewFilterRow({
  columnOptions,
  filterColumnsObj,
  onCreateFilter,
}: NewFilterProps): ReactElement {
  const initFilter = useMemo<Filter>(() => {
    // select first comparator by default
    const firstColumnId = columnOptions[0].id;
    const firstComparator =
      filterColumnsObj[firstColumnId]?.filterOptions?.comparators[0]?.value;
    return {
      columnId: firstColumnId || "",
      comparator: firstComparator || "",
      value: "",
    };
  }, [columnOptions, filterColumnsObj]);
  const [filter, setFilter] = useState<Filter>(initFilter);
  const columnRef = useRef<HTMLSelectElement>(null);
  useLayoutEffect(() => {
    columnRef.current?.focus();
  }, []);
  const filterOptions = filterColumnsObj[filter.columnId]?.filterOptions;
  const handleCreateFilter = useCallback(() => {
    onCreateFilter(filter);
    setFilter(initFilter);
  }, [filter, initFilter, onCreateFilter]);
  const handleChangeColumn: ChangeEventHandler<HTMLSelectElement> = useCallback(
    (e) => {
      setFilter((f) => {
        const newFilter: Filter = {
          ...filter,
          columnId: e.target.value,
        };
        const newComparators =
          filterColumnsObj[e.target.value]?.filterOptions?.comparators || [];
        // select first comparator by default
        newFilter.comparator = newComparators[0].value;
        return newFilter;
      });
    },
    [filter, filterColumnsObj]
  );
  return (
    <>
      <SelectField
        ref={columnRef}
        label="Column"
        labelHidden
        onChange={handleChangeColumn}
        placeholder="Column"
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
        onChange={(e: ChangeEvent<HTMLSelectElement>) =>
          setFilter((f) => ({ ...f, comparator: e.target.value }))
        }
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
        onEnterValue={handleCreateFilter}
        onChangeValue={(value) => setFilter((f) => ({ ...f, value }))}
        value={filter.value}
      />
      <Button isDisabled={!filter.value} onClick={handleCreateFilter}>
        <Icon ariaLabel="create" as={MdCheck} />
      </Button>
    </>
  );
}
