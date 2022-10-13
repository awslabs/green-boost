import {
  Pagination as AmplifyPagination,
  SelectField,
  Text,
} from "@aws-amplify/ui-react";
import { ChangeEvent, ReactElement, useEffect } from "react";
import { Box, styled } from "../index.js";
import type { CSS } from "@stitches/react";
import { Pagination as PaginationState } from "./types/pagination.js";

const StyledText = styled(Text, {
  alignSelf: "center",
  mr: "$2",
});
const StyledSelectField = styled(SelectField, {
  mr: "$2",
});

interface PaginationProps extends PaginationState {
  css?: CSS;
  onChangePagination?: (params: PaginationState) => void;
  // disableNext: boolean;
  // disablePrev: boolean;
  // onPageChange: (newPage: number) => void;
  // onPageSizeChange: (size: number) => void;
  // page: number;
  // pageSize: number;
  pageSizeOptions: number[];
  siblingCount: number;
}

export function Pagination(props: PaginationProps): ReactElement {
  const {
    css = {},
    currentPage,
    hasMorePages,
    onChangePagination,
    pageSize,
    pageSizeOptions,
    totalPages,
    siblingCount,
  } = props;
  useEffect(() => {
    if (!pageSizeOptions.includes(pageSize)) {
      console.warn(
        `pageSize of ${pageSize} passed into QueryTable is not in pageSizeOptions: ${JSON.stringify(
          pageSizeOptions
        )}. This will likely cause unexpected behavior.`
      );
    }
  }, [pageSize, pageSizeOptions]);
  return (
    <Box css={{ display: "flex", justifyContent: "end", mt: "$2", ...css }}>
      <StyledText>Page Size:</StyledText>
      <StyledSelectField
        label="Page Size"
        labelHidden={true}
        onChange={(e: ChangeEvent<HTMLSelectElement>) => {
          if (onChangePagination) {
            onChangePagination({
              currentPage,
              pageSize: Number(e.target.value),
              totalPages,
              hasMorePages,
            });
          }
        }}
        value={pageSize.toString()}
      >
        {pageSizeOptions.map((s) => (
          <option key={s} value={s}>
            {s}
          </option>
        ))}
      </StyledSelectField>
      <AmplifyPagination
        currentPage={currentPage}
        hasMorePages={hasMorePages}
        siblingCount={siblingCount}
        totalPages={totalPages}
        onChange={(newPageIndex: number) => {
          if (onChangePagination) {
            onChangePagination({
              currentPage: newPageIndex,
              pageSize,
              totalPages,
              hasMorePages,
            });
          }
        }}
      />
    </Box>
  );
}
