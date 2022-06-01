import { ReactElement } from "react";
import { Menu, MenuItem, MenuButton } from "@aws-amplify/ui-react";
import { MdAccountCircle, MdLogout } from "react-icons/md";
import { styled } from "../../stitches.config.js";
import { useBps } from "../../context/BreakpointsContext.js";

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
  const bps = useBps();
  if (bps.bp3) {
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
        {bps.bp1 && username}
        <StyledAccountCircle />
      </StyledMenuButton>
    );
  }
}
