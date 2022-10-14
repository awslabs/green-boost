import { ReactElement, RefObject, useMemo } from "react";
import { Heading } from "@aws-amplify/ui-react";
import { Box } from "../../index.js";
import { Column } from "../types/column.js";
import { FilterAction } from "./FilterAction/FilterAction.js";
import { ColumnVisibilityAction } from "./ColumnVisibilityAction.js";
import { Density, DensityAction } from "./DensityAction.js";
import { Filter } from "../types/filter.js";
import { Row } from "../types/row.js";

interface ActionBarProps<T extends Row> {
  columns: Column<T>[];
  columnVisibility: Record<string, boolean>;
  density: Density;
  disableMultiFilter: boolean;
  filters?: Filter[];
  filterButtonRef: RefObject<HTMLButtonElement>;
  heading?: string;
  onChangeColumnVisibility: (columnVisibility: Record<string, boolean>) => void;
  onChangeDensity: (density: Density) => void;
  onChangeFilters?: (filters: Filter[]) => void;
  AdditionalActions?: ReactElement;
}

/**
 * Bar of actions across top of table
 */
export function ActionBar<T extends Row>(
  props: ActionBarProps<T>
): ReactElement {
  const {
    columns,
    columnVisibility,
    density,
    disableMultiFilter,
    filters = [],
    filterButtonRef,
    heading,
    onChangeColumnVisibility: handleChangeColumnVisibility,
    onChangeDensity: handleChangeDensity,
    onChangeFilters,
    AdditionalActions,
  } = props;
  const filterColumns = useMemo(
    () => columns.filter((c) => c.filterOptions),
    [columns]
  );
  return (
    <Box
      css={{
        display: "flex",
        justifyContent: "space-between",
        my: "$1",
        ml: "$1",
      }}
    >
      {heading ? <Heading level={3}>{heading}</Heading> : <Heading />}
      <Box css={{ display: "flex", gap: "$2" }}>
        {filterColumns.length !== 0 && (
          <FilterAction
            disableMultiFilter={disableMultiFilter}
            filterColumns={filterColumns}
            filters={filters}
            filterButtonRef={filterButtonRef}
            onChangeFilters={onChangeFilters}
          />
        )}
        <ColumnVisibilityAction
          columnVisibility={columnVisibility}
          onChangeColumnVisibility={handleChangeColumnVisibility}
        />
        <DensityAction
          density={density}
          onChangeDensity={handleChangeDensity}
        />
        {AdditionalActions}
      </Box>
    </Box>
  );
}
