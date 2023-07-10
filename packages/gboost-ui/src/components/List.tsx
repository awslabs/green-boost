import { type ReactElement, type ReactNode } from "react";
import { config, styled } from "../index.js";
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
}

export function ListItem(props: ListItemProps): ReactElement {
  const { children, css, onClick } = props;
  return (
    <StyledListItem css={css} onClick={onClick}>
      {children}
    </StyledListItem>
  );
}
