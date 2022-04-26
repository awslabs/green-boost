import { Component, ErrorInfo, ReactElement } from "react";
import {
  Alert,
  Button,
  Expander,
  ExpanderItem,
  Flex,
} from "@aws-amplify/ui-react";
import { styled } from "./stitches.config.js";

const Container = styled("div", {
  height: "95vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});
const StyledAlert = styled(Alert, { fontSize: "$5" });
const StyledButton = styled(Button, { bc: "$info9 !important" });

interface State {
  hasError: boolean;
  errorDetails: string;
}
interface Props {
  ErrorComponent?: ReactElement;
}

export class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { errorDetails: "", hasError: false };
  }

  static getDerivedStateFromError(error: Error): Partial<State> {
    // Update state so the next render will show the fallback UI.
    return { errorDetails: error.message, hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error(error);
    console.error(errorInfo);
    // send to CloudWatch RUM
  }

  render() {
    if (this.state.hasError) {
      if (this.props.ErrorComponent) {
        return this.props.ErrorComponent;
      } else {
        return (
          <Container>
            <Flex direction="column">
              <StyledAlert variation="error">
                An unexpected error has occurred. Please try again.
              </StyledAlert>
              <Flex justifyContent="center">
                <StyledButton
                  onClick={() => window.location.reload()}
                  variation="primary"
                >
                  Try Again
                </StyledButton>
              </Flex>
              <Expander isCollapsible type="single">
                <ExpanderItem title="Error Details" value="error-details">
                  {this.state.errorDetails}
                </ExpanderItem>
              </Expander>
            </Flex>
          </Container>
        );
      }
    } else {
      return this.props.children;
    }
  }
}
