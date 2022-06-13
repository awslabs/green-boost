import { ReactElement, ReactNode } from "react";
import { Link as AmplifyLink } from "@aws-amplify/ui-react";
import { Link } from "./Link.js";
import { Box, config, styled } from "../index.js";
import type { CSS } from "@stitches/react";

export const List = styled("ul", {
  listStyle: "none",
  p: "$3",
});

const StyledListItem = styled("li", {
  cursor: "pointer",
  "&:hover": {
    bc: "$gray4",
  },
});

export interface ListItemProps {
  children: ReactNode;
  css?: CSS<typeof config>;
  href?: string;
  onClick?: () => unknown;
  /**
   * Wraps ListItem child in ReactRouter Link
   */
  to?: string;
}

export function ListItem(props: ListItemProps): ReactElement {
  const { children, css, href, onClick, to } = props;
  const content = <Box css={{ py: "$3" }}>{children}</Box>;
  let listItem: undefined | ReactElement;
  if (to) {
    listItem = <Link to={to}>{content}</Link>;
  } else if (href) {
    listItem = (
      <AmplifyLink href={href} target="_blank">
        {content}
      </AmplifyLink>
    );
  } else {
    listItem = content;
  }
  return (
    <StyledListItem css={css} onClick={onClick}>
      {listItem}
    </StyledListItem>
  );
}
