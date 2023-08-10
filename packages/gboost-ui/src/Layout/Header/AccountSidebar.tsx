import { type ReactElement } from "react";
import { MdLogout } from "react-icons/md";
import { List, ListItem, styled } from "../../index.js";

const StyledLogout = styled(MdLogout, { fontSize: "$7" });

interface AccountSidebarProps {
  email: string;
  fullName: string;
  signOut: () => unknown;
}
/**
 * @deprecated
 */
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
