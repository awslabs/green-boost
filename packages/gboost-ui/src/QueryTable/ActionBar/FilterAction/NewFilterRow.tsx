import {
  ReactElement,
  useCallback,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import { Button, Icon, SelectField } from "@aws-amplify/ui-react";
import { MdCheck } from "react-icons/md";
import { FilterValue as FilterValueComponent } from "./FilterValue.js";
import {
  ColumnOption,
  FilterColumnsObj,
  InternalFilter,
} from "./FilterAction.js";
import { randomId } from "@mantine/hooks";

const initFilter: InternalFilter = {
  column: "",
  comparator: "",
  id: "",
  value: "",
};

interface NewFilterProps {
  columnOptions: ColumnOption[];
  filterColumnsObj: FilterColumnsObj;
  onCreateFilter: (filter: InternalFilter) => void;
}

export function NewFilterRow({
  columnOptions,
  filterColumnsObj,
  onCreateFilter,
}: NewFilterProps): ReactElement {
  const [filter, setFilter] = useState<InternalFilter>(initFilter);
  const columnRef = useRef<HTMLSelectElement>(null);
  useLayoutEffect(() => {
    columnRef.current?.focus();
  }, []);
  const filterOptions = filterColumnsObj[filter.column]?.filterOptions;
  const handleCreateFilter = useCallback(() => {
    onCreateFilter({ ...filter, id: randomId() });
    setFilter(initFilter);
  }, [filter, onCreateFilter]);
  return (
    <>
      <SelectField
        ref={columnRef}
        label="Column"
        labelHidden
        onChange={(e) => setFilter((f) => ({ ...f, column: e.target.value }))}
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
        onChange={(e) =>
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
