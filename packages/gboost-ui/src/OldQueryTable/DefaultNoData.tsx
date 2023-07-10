import { Alert } from "@aws-amplify/ui-react";
import { type ReactElement } from "react";
import { styled } from "../index.js";

const StyledAlert = styled(Alert, { mt: "$1" });

interface DefaultNoDataProps {
  height?: number;
}

export function DefaultNoData(props: DefaultNoDataProps): ReactElement {
  const { height } = props;
  return (
    <StyledAlert height={height} variation="info">
      No Data
    </StyledAlert>
  );
}
