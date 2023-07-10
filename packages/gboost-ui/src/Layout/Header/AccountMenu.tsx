import { type ReactElement } from "react";
import { Menu, MenuItem, MenuButton, useTheme } from "@aws-amplify/ui-react";
import { MdAccountCircle, MdLogout } from "react-icons/md";
import { styled } from "../../stitches.config.js";
import { useMediaQuery } from "@mantine/hooks";

const StyledAccountCircle = styled(MdAccountCircle, { fontSize: "$7" });
const StyledLogout = styled(MdLogout, { fontSize: "$7" });
const StyledMenuButton = styled(MenuButton, {
  gap: "$2",
});
const StyledMenuItem = styled(MenuItem, { gap: "$2" });

interface AccountMenuProps {
  email: string;
  fullName: string;
  signOut: () => unknown;
  username: string;
}

export function AccountMenu(props: AccountMenuProps): ReactElement {
  const { email, fullName, signOut, username } = props;
  const theme = useTheme();
  const mqLg = useMediaQuery(
    `(min-width: ${theme.breakpoints?.values?.large}px)`
  );
  const mqSm = useMediaQuery(
    `(min-width: ${theme.breakpoints?.values?.small}px)`
  );
  if (mqLg) {
    return (
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
    return (
      <StyledMenuButton variation="primary">
        {mqSm && username}
        <StyledAccountCircle />
      </StyledMenuButton>
    );
  }
}
