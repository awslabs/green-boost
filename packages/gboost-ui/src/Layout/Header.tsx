import {
  Heading,
  Menu,
  MenuItem,
  MenuButton,
  Image,
} from "@aws-amplify/ui-react";
import { Dispatch, ReactElement, SetStateAction, useState } from "react";
import { MdAccountCircle, MdLogout, MdMenu, MdMenuOpen } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { useAuthenticator } from "@aws-amplify/ui-react";
import { useBps } from "../context/BreakpointsContext";
import { styled } from "../stitches.config.js";
import { Box } from "../Box.js";
import { Drawer } from "./Drawer.js";
import { List, ListItem } from "../List.js";
import type { CognitoUser } from "./Layout.js";

const headerHeight = "$8";

const StyledHeader = styled("header", {
  bc: "$primary9",
  boxSizing: "border-box",
  color: "white",
  gridArea: "header",
  width: "100%",
  height: headerHeight,
  px: "$4",
  py: "$2",
  minWidth: "320px", // small mobile
});
const StyledHeading = styled(Heading);
const StyledImage = styled(Image, { maxWidth: `calc(${headerHeight} - $4)` });
const StyledMenuIcon = styled(MdMenu, { fontSize: "$7", cursor: "pointer" });
const StyledMenuOpen = styled(MdMenuOpen, {
  fontSize: "$7",
  cursor: "pointer",
});
const StyledAccountCircle = styled(MdAccountCircle, { fontSize: "$7" });
const StyledLogout = styled(MdLogout, { fontSize: "$7" });
const StyledMenuButton = styled(MenuButton, {
  gap: "$2",
});
const StyledMenuItem = styled(MenuItem, { gap: "$2" });

interface HeaderProps {
  logoSrc: string;
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  title: string;
  user?: CognitoUser;
  HeaderTitle?: ReactElement;
}

export function Header(props: HeaderProps): ReactElement {
  const { logoSrc, setOpen, open, title, user: propUser, HeaderTitle } = props;
  const { user: hookUser, signOut } = useAuthenticator();
  const user = propUser || hookUser;
  const [leftOpen, setLeftOpen] = useState(false);
  const bps = useBps();
  const navigate = useNavigate();
  const username = user.username;
  let email = "",
    family_name = "",
    given_name = "";
  if (user.attributes) {
    email = user.attributes.email;
    family_name = user.attributes.family_name;
    given_name = user.attributes.given_name;
  }
  const fullName = `${given_name} ${family_name}`;
  let menu: ReactElement;
  if (bps.bp3) {
    menu = (
      <Menu
        trigger={
          <StyledMenuButton
            css={{ bc: "$whiteA7 !important" }}
            variation="primary"
          >
            {username}
            <StyledAccountCircle />
          </StyledMenuButton>
        }
      >
        <MenuItem>{fullName}</MenuItem>
        <MenuItem>{email}</MenuItem>
        <StyledMenuItem onClick={() => signOut()}>
          <StyledLogout />
          Sign Out
        </StyledMenuItem>
      </Menu>
    );
  } else {
    menu = (
      <StyledMenuButton onClick={() => setLeftOpen(true)} variation="primary">
        {user.username}
        <StyledAccountCircle />
      </StyledMenuButton>
    );
  }
  let headerTitle: ReactElement;
  if (HeaderTitle) {
    headerTitle = HeaderTitle;
  } else {
    headerTitle = (
      <>
        <StyledHeading
          level={4}
          css={{ color: "white", cursor: "pointer" }}
          onClick={() => navigate("/")}
        >
          {title}
        </StyledHeading>
        <StyledImage alt="logo" src={logoSrc} maxHeight={headerHeight} />
      </>
    );
  }
  return (
    <StyledHeader>
      <Box css={{ alignItems: "center", display: "flex" }}>
        <Box
          css={{
            alignItems: "center",
            display: "flex",
            flexGrow: 1,
            gap: "$2",
          }}
        >
          {open ? (
            <StyledMenuOpen onClick={() => setOpen(false)} />
          ) : (
            <StyledMenuIcon onClick={() => setOpen(true)} />
          )}
          {headerTitle}
        </Box>
        <Box css={{ display: "flex" }}>{menu}</Box>
      </Box>
      <Drawer
        open={leftOpen}
        position="right"
        onClose={() => setLeftOpen(false)}
      >
        <List>
          <ListItem>{fullName}</ListItem>
          <ListItem>{email}</ListItem>
          <ListItem
            css={{ gridTemplateColumns: "1fr 1fr" }}
            onClick={() => signOut()}
          >
            <StyledLogout />
            <div>Sign Out</div>
          </ListItem>
        </List>
      </Drawer>
    </StyledHeader>
  );
}
