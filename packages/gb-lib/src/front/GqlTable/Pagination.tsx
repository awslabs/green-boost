import { Button, SelectField, Text } from "@aws-amplify/ui-react";
import { ReactElement } from "react";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import { Box } from "../Box.jsx";
import { styled } from "../stitches.config.js";

const StyledButton = styled(Button, {
  "&:hover": { backgroundColor: "$primary3" },
});
const StyledText = styled(Text, {
  alignSelf: "center",
  mr: "$2",
});

interface PaginationProps {
  disableNext: boolean;
  disablePrev: boolean;
  onPageChange: (newPage: number) => void;
  onPageSizeChange: (size: number) => void;
  page: number;
  pageSize: number;
  pageSizeOptions: number[];
}

export function Pagination(props: PaginationProps): ReactElement {
  const {
    disableNext,
    disablePrev,
    onPageChange,
    onPageSizeChange,
    page,
    pageSize,
    pageSizeOptions,
  } = props;
  return (
    <Box css={{ display: "flex", justifyContent: "end", mt: "$2" }}>
      <StyledText>Page Size:</StyledText>
      <SelectField
        label="Page Size"
        labelHidden={true}
        onChange={(e) => onPageSizeChange(Number(e.target.value))}
        value={pageSize.toString()}
        size="small"
      >
        {pageSizeOptions.map((s) => (
          <option key={s} value={s}>
            {s}
          </option>
        ))}
      </SelectField>
      <StyledButton
        disabled={disablePrev}
        variation="link"
        onClick={() => onPageChange(page - 1)}
      >
        <MdChevronLeft size="30" />
      </StyledButton>
      <StyledButton
        disabled={disableNext}
        variation="link"
        onClick={() => onPageChange(page + 1)}
      >
        <MdChevronRight size="30" />
      </StyledButton>
    </Box>
  );
}
