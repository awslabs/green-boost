import { Alert } from "@aws-amplify/ui-react";
import { type ReactElement, type ReactNode } from "react";
import { styled } from "../index.js";

const StyledAlert = styled(Alert, { mt: "$1" });

export interface ErrorMessageProps {
  children: ReactNode;
  height?: number;
}

export function ErrorMessage(props: ErrorMessageProps): ReactElement {
  const { height, children } = props;
  return (
    <StyledAlert height={height} variation="error">
      {children}
    </StyledAlert>
  );
}
