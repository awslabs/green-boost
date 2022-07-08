import { ReactElement } from "react";
import { List, Page, styled } from "../../index.js";
import { NavItem } from "./NavItem.js";
import { NavLink } from "./NavLink.js";

const ListContainer = styled("div", {
  display: "flex",
  flexDirection: "column",
  justifyItems: "space-between",
  height: "100%",
  maxHeight: "calc(100vh - $header)",
});

interface NavListProps {
  bottomPages?: (NavLink | Page)[];
  open: boolean;
  pages: Page[];
}

export function NavList(props: NavListProps): ReactElement {
  const { bottomPages = [], pages, open } = props;
  return (
    <ListContainer>
      <List css={{ flex: "1 1", px: 0 }}>
        {pages.map((p) => (
          <NavItem key={p.path} open={open} page={p} />
        ))}
      </List>
      <List css={{ flex: "0", px: 0 }}>
        {bottomPages.map((i) => {
          if ("path" in i) {
            return <NavItem key={i.path} open={open} page={i} />;
          } else {
            return <NavItem key={i.href} open={open} navLink={i} />;
          }
        })}
      </List>
    </ListContainer>
  );
}
