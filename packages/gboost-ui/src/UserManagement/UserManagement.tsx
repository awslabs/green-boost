import { ReactElement, useEffect, useMemo, useState } from "react";
import { Link, Tabs, TabItem } from "@aws-amplify/ui-react";
import {
  Link as ReactRouterLink,
  Navigate,
  Route,
  Routes,
  useResolvedPath,
  useMatch,
} from "react-router-dom";
import { Box } from "../Box.jsx";
import { UpdateUser } from "./UpdateUser.jsx";
import { CreateUser } from "./CreateUser.jsx";
import { GroupsTable } from "./GroupsTable.jsx";
import { UsersTable } from "./UsersTable.jsx";
import { UsersInGroupTable } from "./UsersInGroupTable.jsx";

export interface UserManagementProps {
  groupNames: string[];
}

const usersPath = "users";
const groupsPath = "groups";

/**
 * Page that enables management of users in Cognito User Pool or view of
 * federated users in Cognito User Pool
 */
export function UserManagement(props: UserManagementProps): ReactElement {
  const { groupNames } = props;
  const groupNameOptions = useMemo(
    () =>
      groupNames.map((g) => ({
        value: g,
        label: g.replace(/([A-Z])/g, " $1").trim(), // add space between capital letters
      })),
    [groupNames]
  );
  const [tab, setTab] = useState(0);
  const { pathname: usersPathname } = useResolvedPath(usersPath);
  const usersMatch = useMatch({ path: usersPathname, end: true });
  const { pathname: groupsPathname } = useResolvedPath(groupsPath);
  const groupsMatch = useMatch({ path: groupsPathname, end: true });
  useEffect(() => {
    if (usersMatch) {
      setTab(0);
    } else if (groupsMatch) {
      setTab(1);
    }
  }, [usersMatch, groupsMatch]);
  return (
    <Box css={{ m: "$2" }}>
      <Tabs currentIndex={tab} onChange={(t) => setTab(t as number)}>
        <TabItem
          title={
            <Link as={ReactRouterLink} to={usersPath}>
              Users
            </Link>
          }
        >
          <div />
        </TabItem>
        <TabItem
          title={
            <Link as={ReactRouterLink} to={groupsPath}>
              Groups
            </Link>
          }
        >
          <div />
        </TabItem>
      </Tabs>
      <Routes>
        <Route index element={<Navigate to={usersPath} />} />
        <Route
          path="create-user"
          element={<CreateUser groupNameOptions={groupNameOptions} />}
        />
        <Route path={usersPath} element={<UsersTable />} />
        <Route
          path={`${groupsPath}/:groupName`}
          element={<UsersInGroupTable />}
        />
        <Route path={groupsPath} element={<GroupsTable />} />
        <Route
          path=":username"
          element={<UpdateUser groupNameOptions={groupNameOptions} />}
        />
      </Routes>
    </Box>
  );
}
