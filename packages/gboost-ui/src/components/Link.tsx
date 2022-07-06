import {
  Link as AmplifyLink,
  LinkProps as AmplifyLinkProps,
} from "@aws-amplify/ui-react";
import { ReactElement, AnchorHTMLAttributes } from "react";
import { Link as RouterLink } from "react-router-dom";

interface LinkProps
  extends AmplifyLinkProps,
    Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "color" | "children"> {
  href?: string;
}

export function Link(props: LinkProps): ReactElement {
  if (props.to) {
    return <AmplifyLink {...props} as={RouterLink} />;
  } else {
    return <AmplifyLink {...props} />;
  }
}
