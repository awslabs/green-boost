import { Heading, Image } from "@aws-amplify/ui-react";
import { MdMenu, MdMenuOpen } from "react-icons/md";
import { Dispatch, ReactElement, SetStateAction, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Box, styled, useBps } from "../../index.js";
import { Drawer } from "../Drawer.js";
import { AccountMenu as DefaultAccountMenu } from "./AccountMenu.js";
import { AccountSidebar as DefaultAccountSidebar } from "./AccountSidebar.js";
import type { CognitoUser } from "../Layout.js";

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
const StyledMenu = styled(MdMenu, { fontSize: "$7", cursor: "pointer" });
const StyledMenuOpen = styled(MdMenuOpen, {
  fontSize: "$7",
  cursor: "pointer",
});

interface HeaderProps {
  logoSrc: string;
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  signOut: () => unknown;
  title: string;
  user: CognitoUser;
  AccountMenu?: ReactElement;
  AccountSidebar?: ReactElement;
  HeaderTitle?: ReactElement;
}

export function Header(props: HeaderProps): ReactElement {
  const {
    logoSrc,
    setOpen,
    open,
    signOut,
    title,
    user,
    AccountMenu,
    AccountSidebar,
    HeaderTitle,
  } = props;
  const [leftOpen, setLeftOpen] = useState(false);
  const bps = useBps();
  const navigate = useNavigate();
  const username = user.username || "unknown";
  const email = user?.attributes?.email || "unknown";
  const family_name = user?.attributes?.family_name || "Unknown";
  const given_name = user?.attributes?.given_name || "Unknown";
  const fullName = `${given_name} ${family_name}`;
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
        {bps.bp1 && (
          <StyledImage alt="logo" src={logoSrc} maxHeight={headerHeight} />
        )}
      </>
    );
  }
  let accountMenu: ReactElement;
  const handleClick = bps.bp3 ? undefined : () => setLeftOpen(true);
  if (AccountMenu) {
    accountMenu = <div onClick={handleClick}>{AccountMenu}</div>;
  } else {
    accountMenu = (
      <div onClick={handleClick}>
        <DefaultAccountMenu
          email={email}
          fullName={fullName}
          signOut={signOut}
          username={username}
        />
      </div>
    );
  }
  let accountSidebar: ReactElement;
  if (AccountSidebar) {
    accountSidebar = AccountSidebar;
  } else {
    accountSidebar = (
      <DefaultAccountSidebar
        email={email}
        fullName={fullName}
        signOut={signOut}
      />
    );
  }
  return (
    <StyledHeader>
      <Box css={{ display: "flex" }}>
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
            <StyledMenu onClick={() => setOpen(true)} />
          )}
          {headerTitle}
        </Box>
        <Box css={{ display: "flex" }}>{accountMenu}</Box>
      </Box>
      <Drawer
        open={leftOpen}
        position="right"
        onClose={() => setLeftOpen(false)}
      >
        {accountSidebar}
      </Drawer>
    </StyledHeader>
  );
}
