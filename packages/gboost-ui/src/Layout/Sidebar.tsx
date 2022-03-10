import { ReactElement } from "react";
import { styled } from "../stitches.config.js";
import { Page } from "../page.js";
import { NavList } from "./NavList.js";

const StyledAside = styled("aside", {
  display: "none",
  backgroundColor: "$gray1",
  borderRight: "1px solid $gray6",
  gridArea: "sidebar",
  transition: "$sidebar",
  "@bp3": {
    display: "block",
  },
});

interface SidebarProps {
  pages: Page[];
  open: boolean;
}

export function Sidebar(props: SidebarProps): ReactElement {
  const { pages, open } = props;
  return (
    <StyledAside css={{ width: open ? 250 : 70 }}>
      <NavList pages={pages} open={open} />
    </StyledAside>
  );
}
