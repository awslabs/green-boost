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
          <NavItem
            icon={p.icon}
            key={p.path}
            name={p.name}
            open={open}
            to={p.path}
          />
        ))}
      </List>
      {bottomPages.length > 0 && (
        <List css={{ flex: "0", px: 0 }}>
          {bottomPages.map((i) => (
            <NavItem
              icon={i.icon}
              name={i.name}
              open={open}
              {...getNavItemProps(i)}
            />
          ))}
        </List>
      )}
    </ListContainer>
  );
}

function getNavItemProps(pageOrNavLink: Page | NavLink) {
  let href: string | undefined;
  let to: string | undefined;
  let key: string | undefined;
  if ("path" in pageOrNavLink) {
    to = pageOrNavLink.path;
    key = pageOrNavLink.path;
  } else {
    href = pageOrNavLink.href;
    key = pageOrNavLink.href;
  }
  return { href, to, key };
}
