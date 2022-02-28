import {
  ChangeEvent,
  KeyboardEvent,
  ReactElement,
  useCallback,
  useMemo,
  useState,
} from "react";
import { Button, SelectField, Text, TextField } from "@aws-amplify/ui-react";
import { MdCheck, MdClose } from "react-icons/md";
import { Box } from "../Box.jsx";
import { Column, Filter } from "./QueryTable.jsx";
import { styled } from "../stitches.config.js";

const StyledText = styled(Text, { alignSelf: "center" });
const StyledButton = styled(Button, { bc: "$primary4" });
const StyledRoundButton = styled(Button, {
  bc: "$info3",
  borderRadius: "$pill",
  gap: "$2",
});

export type FilterValue =
  | { type: "text" }
  | { type: "select"; options: { value: string; name: string }[] };
type FilterComparator = {
  value: string;
  name: string;
};
export interface FilterOptions {
  comparators: FilterComparator[];
  value: FilterValue;
}

interface ActionBarProps {
  columns: Column[];
  filters: Filter[];
  onFilter: (filters: Filter[]) => void;
  RightActionBar?: ReactElement;
}

export function ActionBar(props: ActionBarProps): ReactElement {
  const { columns, filters, onFilter, RightActionBar } = props;
  const [column, setColumn] = useState("");
  const [comparator, setComparator] = useState("");
  const [value, setValue] = useState("");
  const filter = { column, comparator, value };
  const filterColumns = useMemo(
    () =>
      columns
        .filter((c) => c.filterOptions)
        .reduce(
          (prev, cur) => ({
            [cur.accessor]: {
              filterOptions: cur.filterOptions,
              name: cur.name,
            },
            ...prev,
          }),
          {} as Record<string, { filterOptions?: FilterOptions; name: string }>
        ),
    [columns]
  );
  const columnNames = useMemo(
    () =>
      Object.entries(filterColumns).map(([k, v]) => ({
        accessor: k,
        name: v.name,
      })),
    [filterColumns]
  );
  let comparators: FilterComparator[] = [];
  let valueInput: ReactElement | undefined = undefined;
  const filterOptions = filterColumns[column]?.filterOptions;
  if (filterOptions) {
    comparators = filterOptions.comparators;
    const filterValue = filterOptions.value;
    if (filterValue?.type === "select") {
      const options = filterValue.options;
      valueInput = (
        <SelectField
          disabled={!comparator}
          label="Value"
          labelHidden
          onChange={(e) => setValue(e.target.value)}
          onKeyPress={(e) => e.key === "Enter" && handleCreateFilter(filter)}
          placeholder="Value"
          size="small"
          value={value}
          width={125}
        >
          {options.map((o) => (
            <option key={o.value} value={o.value}>
              {o.name}
            </option>
          ))}
        </SelectField>
      );
    } else if (filterValue?.type === "text") {
      valueInput = (
        <TextField
          disabled={!comparator}
          label="Value"
          labelHidden
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setValue(e.currentTarget.value)
          }
          onKeyPress={(e: KeyboardEvent<HTMLInputElement>) =>
            e.key === "Enter" && handleCreateFilter(filter)
          }
          placeholder="Value"
          size="small"
          value={value}
          width={125}
        />
      );
    }
  } else {
    valueInput = (
      <TextField disabled label="Value" labelHidden placeholder="Value" />
    );
  }
  const showCheck = column && comparator && value;
  const handleCreateFilter = useCallback(
    (filter: { column: string; comparator: string; value: string }) => {
      const newFilters = [...filters];
      newFilters.push(filter);
      onFilter(newFilters);
      setValue("");
      setComparator("");
      setColumn("");
    },
    [filters, onFilter]
  );
  const handleRemoveFilter = useCallback(
    (idx: number) => {
      const newFilters = filters.filter((f, i) => i !== idx);
      onFilter(newFilters);
    },
    [filters, onFilter]
  );
  return (
    <Box
      css={{
        display: "flex",
        justifyContent: "space-between",
        my: "$2",
      }}
    >
      <Box css={{ display: "flex", gap: "$2" }}>
        {columnNames.length !== 0 && (
          <>
            <StyledText>Filters:</StyledText>
            <SelectField
              label="Column"
              labelHidden
              onChange={(e) => setColumn(e.target.value)}
              placeholder="Column"
              size="small"
              value={column}
              width={125}
            >
              {columnNames.map((n) => (
                <option key={n.accessor} value={n.accessor}>
                  {n.name}
                </option>
              ))}
            </SelectField>
            <SelectField
              disabled={!column}
              label="Comparator"
              width={125}
              labelHidden
              onChange={(e) => setComparator(e.target.value)}
              placeholder="Comparator"
              size="small"
              value={comparator}
            >
              {comparators.map((c) => (
                <option key={c.value} value={c.value}>
                  {c.name}
                </option>
              ))}
            </SelectField>
            {valueInput}
            {showCheck && (
              <StyledButton
                onClick={() =>
                  handleCreateFilter({ column, comparator, value })
                }
              >
                <MdCheck />
              </StyledButton>
            )}
            {filters.map((f, i) => (
              <StyledRoundButton size="small">
                {`${f.column} ${f.comparator} ${f.value}`}{" "}
                <MdClose onClick={() => handleRemoveFilter(i)} />
              </StyledRoundButton>
            ))}
          </>
        )}
      </Box>
      <Box css={{ display: "flex", gap: "$2", justifyContent: "end" }}>
        {RightActionBar}
      </Box>
    </Box>
  );
}
