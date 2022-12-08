import { Icon, useTheme } from "@aws-amplify/ui-react";
import { MdMenu, MdMenuOpen } from "react-icons/md";
import { Dispatch, ReactElement, SetStateAction, useState } from "react";
import { Box, Drawer, styled } from "../../index.js";
import { useMediaQuery } from "@mantine/hooks";

const StyledHeader = styled("header", {
  bc: "$primary9",
  boxSizing: "border-box",
  color: "white",
  gridArea: "header",
  width: "100%",
  height: "$header",
  px: "$4",
  py: "$2",
  minWidth: "320px", // small mobile
});
const StyledIcon = styled(Icon, {
  fontSize: "$7",
  cursor: "pointer",
});

interface HeaderProps {
  AccountMenu?: ReactElement;
  AccountSidebar?: ReactElement;
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  HeaderTitle?: ReactElement;
}

export function Header(props: HeaderProps): ReactElement {
  const { setOpen, open, AccountMenu, AccountSidebar, HeaderTitle } = props;
  const [leftOpen, setLeftOpen] = useState(false);
  const theme = useTheme();
  const mqLg = useMediaQuery(
    `(min-width: ${theme.breakpoints?.values?.large}px)`
  );
  const handleClick = mqLg ? undefined : () => setLeftOpen(true);
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
            <StyledIcon as={MdMenuOpen} onClick={() => setOpen(false)} />
          ) : (
            <StyledIcon as={MdMenu} onClick={() => setOpen(true)} />
          )}
          {HeaderTitle}
        </Box>
        <Box css={{ display: "flex" }}>
          <div onClick={handleClick}>{AccountMenu}</div>
        </Box>
      </Box>
      <Drawer
        open={leftOpen}
        position="right"
        onClose={() => setLeftOpen(false)}
      >
        {AccountSidebar}
      </Drawer>
    </StyledHeader>
  );
}
