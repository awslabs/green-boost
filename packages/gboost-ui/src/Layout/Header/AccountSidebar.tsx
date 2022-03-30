import { ReactElement } from "react";
import { MdLogout } from "react-icons/md";
import { List, ListItem } from "../../List.js";
import { styled } from "../../stitches.config.js";
const StyledLogout = styled(MdLogout, { fontSize: "$7" });

interface AccountSidebarProps {
  email: string;
  fullName: string;
  signOut: () => unknown;
}

export function AccountSidebar(props: AccountSidebarProps): ReactElement {
  const { fullName, email, signOut } = props;
  return (
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
  );
}
