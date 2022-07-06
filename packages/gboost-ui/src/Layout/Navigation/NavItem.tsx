import { ReactElement } from "react";
import { useLocation } from "react-router-dom";
import { Box, ListItem } from "../../index.js";

interface NavItemProps {
  open: boolean;
  href?: string;
  icon: ReactElement;
  name: string;
  to?: string;
}

export function NavItem(props: NavItemProps): ReactElement {
  const { href, icon, name, open, to } = props;
  const location = useLocation();
  const listItem = (
    <ListItem
      css={{ bc: to && location.pathname.startsWith(to) ? "$gray5" : "" }}
      href={href}
      to={to}
    >
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
  return listItem;
  // TODO: using Amplify's Expander adds extra styling we don't need for this
  // maybe try Radix UI's Collapsible primitive
  // if (!children) {
  //   return listItem;
  // } else {
  //   return (
  //     <Expander type="multiple">
  //       <ExpanderItem title={listItem} value={name}>
  //         {children}
  //       </ExpanderItem>
  //     </Expander>
  //   );
  // }
}
