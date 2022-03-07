import { ReactElement, useMemo } from "react";
import { Heading } from "@aws-amplify/ui-react";
import { Box } from "../../Box.jsx";
import { Column } from "../QueryTable.jsx";
import { DownloadAction } from "./DownloadAction.jsx";
import { FilterAction, InternalFilter } from "./FilterAction/FilterAction.jsx";
import { ColumnsAction } from "./ColumnsAction.jsx";
import { Density, DensityAction } from "./DensityAction.jsx";

interface ActionBarProps {
  columns: Column[];
  density: Density;
  download: boolean;
  downloadFileName: string;
  filters: InternalFilter[];
  heading?: string;
  onChangeDensity: (density: Density) => void;
  onFilter: (filters: InternalFilter[]) => void;
  rows: Record<string, string>[];
  RightActionBar?: ReactElement;
}

/**
 * @internal
 */
export function ActionBar(props: ActionBarProps): ReactElement {
  const {
    columns,
    density,
    download,
    downloadFileName,
    filters,
    heading,
    onChangeDensity: handleChangeDensity,
    onFilter,
    rows,
    RightActionBar,
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
        my: "$2",
        ml: "$1",
      }}
    >
      {heading ? <Heading level={3}>{heading}</Heading> : <Heading />}
      <Box css={{ display: "flex", gap: "$2" }}>
        {filterColumns.length && (
          <FilterAction
            filterColumns={filterColumns}
            filters={filters}
            onFilter={onFilter}
          />
        )}
        <ColumnsAction />
        <DensityAction
          density={density}
          onChangeDensity={handleChangeDensity}
        />
        {download && (
          <DownloadAction downloadFileName={downloadFileName} rows={rows} />
        )}
        {RightActionBar}
      </Box>
    </Box>
  );
}
