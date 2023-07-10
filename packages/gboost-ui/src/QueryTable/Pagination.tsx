import {
  Pagination as AmplifyPagination,
  SelectField,
  Text,
} from "@aws-amplify/ui-react";
import {
  type ChangeEvent,
  type ReactElement,
  useCallback,
  useEffect,
} from "react";
import { Box, styled } from "../index.js";
import { type Pagination as PaginationState } from "./types/pagination.js";

const StyledText = styled(Text, {
  alignSelf: "center",
  mr: "$2",
});
const StyledSelectField = styled(SelectField, {
  mr: "$2",
});

interface PaginationProps extends PaginationState {
  onChangePagination?: (params: PaginationState) => void;
  pageSizeOptions: number[];
  siblingCount: number;
}

export function Pagination(props: PaginationProps): ReactElement {
  const {
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
  const onChange = useCallback(
    (newPageIndex?: number) => {
      if (newPageIndex && onChangePagination) {
        onChangePagination({
          currentPage: newPageIndex,
          pageSize,
          totalPages,
          hasMorePages,
        });
      }
    },
    [hasMorePages, onChangePagination, pageSize, totalPages]
  );
  return (
    <Box css={{ mt: "$2" }}>
      <Box css={{ display: "flex", justifyContent: "end" }}>
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
          onNext={() => onChange(currentPage + 1)}
          onPrevious={() => onChange(currentPage - 1)}
          onChange={onChange}
        />
      </Box>
    </Box>
  );
}
