import { Text } from "@aws-amplify/ui-react";
import { type ReactElement, type ReactNode } from "react";

interface ErrorMessageProps {
  children: ReactNode;
}

export function ErrorMessage(props: ErrorMessageProps): ReactElement | null {
  const { children } = props;
  if (children) {
    return <Text className="amplify-field__error-message">{children}</Text>;
  } else {
    return null;
  }
}
