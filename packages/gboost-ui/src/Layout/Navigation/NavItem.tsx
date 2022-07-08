import { ReactElement } from "react";
import { useLocation } from "react-router-dom";
import { Box, ListItem, Page } from "../../index.js";
import type { NavLink } from "./NavLink.js";

interface NavItemBaseProps {
  open: boolean;
}

interface NavItemWithPageProps extends NavItemBaseProps {
  page: Page;
}

interface NavItemWithLinkProps extends NavItemBaseProps {
  navLink: NavLink;
}

type NavItemProps = NavItemWithPageProps | NavItemWithLinkProps;

export function NavItem(props: NavItemProps): ReactElement {
  const { open } = props;
  const location = useLocation();
  let icon: undefined | ReactElement;
  let name = "";
  const listItemProps = {
    key: "",
    css: {},
    to: "",
    href: "",
  };
  if ("page" in props) {
    const page = props.page;
    icon = page.icon;
    name = page.name;
    listItemProps.key = page.path;
    listItemProps.to = page.path;
    listItemProps.css = {
      bc: location.pathname.startsWith(page.path) ? "$gray5" : "",
    };
  } else if ("navLink" in props) {
    const navLink = props.navLink;
    icon = navLink.icon;
    name = navLink.name;
    listItemProps.key = navLink.href;
    listItemProps.href = navLink.href;
  }
  return (
    <ListItem {...listItemProps}>
      <Box css={{ display: "flex" }}>
        <Box
          css={{
            display: "flex",
            flex: "1 1 0",
            justifyContent: "center",
          }}
        >
          {icon}
        </Box>
        {open && <Box css={{ flex: "3 1 0" }}>{name}</Box>}
      </Box>
    </ListItem>
  );
}
