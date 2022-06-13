import { Link as AmplifyLink, LinkProps } from "@aws-amplify/ui-react";
import { ReactElement } from "react";
import { Link as RouterLink } from "react-router-dom";

export function Link(props: LinkProps): ReactElement {
  return <AmplifyLink {...props} as={RouterLink} />;
}
