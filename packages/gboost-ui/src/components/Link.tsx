import {
  Link as AmplifyLink,
  LinkProps as AmplifyLinkProps,
} from "@aws-amplify/ui-react";
import { ReactElement } from "react";
import { Link as RouterLink } from "react-router-dom";

interface LinkProps extends AmplifyLinkProps {
  href?: string;
}

export function Link(props: LinkProps): ReactElement {
  if (props.to) {
    return <AmplifyLink {...props} as={RouterLink} />;
  } else {
    return <AmplifyLink {...props} />;
  }
}
