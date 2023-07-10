import {
  type ReactElement,
  type ReactNode,
  type RefObject,
  useMemo,
} from "react";
import { Heading } from "@aws-amplify/ui-react";
import { Box } from "../../index.js";
import { type Column } from "../types/column.js";
import { FilterAction } from "./FilterAction/FilterAction.js";
import { ColumnVisibilityAction } from "./ColumnVisibilityAction.js";
import { type Density, DensityAction } from "./DensityAction.js";
import { type Filter } from "../types/filter.js";
import { type Row } from "../types/row.js";
import { RefreshAction } from "./RefreshAction.js";

interface ActionBarProps<T extends Row> {
  columns: Column<T>[];
  columnVisibility: Record<string, boolean>;
  density: Density;
  disableMultiFilter: boolean;
  filters?: Filter[];
  filterButtonRef: RefObject<HTMLButtonElement>;
  heading?: ReactNode;
  onChangeColumnVisibility: (columnVisibility: Record<string, boolean>) => void;
  onChangeDensity: (density: Density) => void;
  onChangeFilters?: (filters: Filter[]) => void;
  refreshFn?: () => unknown;
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
    filters,
    filterButtonRef,
    heading,
    onChangeColumnVisibility: handleChangeColumnVisibility,
    onChangeDensity: handleChangeDensity,
    onChangeFilters,
    refreshFn,
    AdditionalActions,
  } = props;
  const filterColumns = useMemo(
    () => columns.filter((c) => c.filterOptions),
    [columns]
  );
  let finalHeading: ReactNode;
  if (typeof heading === "string") {
    finalHeading = <Heading level={3}>{heading}</Heading>;
  } else if (heading) {
    finalHeading = heading;
  } else {
    finalHeading = <Heading />;
  }
  return (
    <Box
      css={{
        display: "flex",
        justifyContent: "space-between",
        my: "$1",
        ml: "$1",
      }}
    >
      {finalHeading}
      <Box css={{ display: "flex", gap: "$2" }}>
        {refreshFn && <RefreshAction refreshFn={refreshFn} />}
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
          columns={columns}
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
