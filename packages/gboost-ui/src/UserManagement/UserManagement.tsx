import { type ReactElement, useEffect, useMemo, useState } from "react";
import { Link, Tabs, TabItem } from "@aws-amplify/ui-react";
import {
  Link as ReactRouterLink,
  Navigate,
  Route,
  Routes,
  useResolvedPath,
  useMatch,
  useNavigate,
} from "react-router-dom";
import { Box } from "../index.js";
import { UpdateUser } from "./UpdateUser.js";
import { CreateUser } from "./CreateUser.js";
import { GroupsTable } from "./GroupsTable.js";
import { UsersTable } from "./UsersTable.js";
import { UsersInGroupTable } from "./UsersInGroupTable.js";
import { type CognitoUser } from "gboost-common";

export interface UserManagementProps {
  groupNames: string[];
}

const usersPath = "users";
const groupsPath = "groups";

/**
 * Page that enables management of users in Cognito User Pool or view of
 * federated users in Cognito User Pool
 * @deprecatedd
 */
export function UserManagement(props: UserManagementProps): ReactElement {
  const { groupNames } = props;
  const [users, setUsers] = useState<CognitoUser[]>([]);
  const groupNameOptions = useMemo(
    () =>
      groupNames.map((g) => ({
        value: g,
        label: g.replace(/([A-Z])/g, " $1").trim(), // add space between capital letters
      })),
    [groupNames],
  );
  const [tab, setTab] = useState(0);
  const [showTabs, setShowTabs] = useState(true);
  const { pathname: usersPathname } = useResolvedPath(usersPath);
  const usersMatch = useMatch({ path: usersPathname, end: true });
  const { pathname: groupsPathname } = useResolvedPath(groupsPath);
  const groupsMatch = useMatch({ path: groupsPathname, end: true });
  const navigate = useNavigate();
  useEffect(() => {
    if (usersMatch) {
      setTab(0);
      setShowTabs(true);
    } else if (groupsMatch) {
      setTab(1);
      setShowTabs(true);
    } else {
      setShowTabs(false);
    }
  }, [usersMatch, groupsMatch]);
  return (
    <Box css={{ m: "$2" }}>
      {showTabs && (
        <Tabs
          currentIndex={tab}
          onChange={(t: number | string) => setTab(Number(t))}
        >
          <TabItem
            onClick={() => navigate(usersPath)}
            title={
              <Link as={ReactRouterLink} to={usersPath}>
                Users
              </Link>
            }
          />
          <TabItem
            onClick={() => navigate(groupsPath)}
            title={
              <Link as={ReactRouterLink} to={groupsPath}>
                Groups
              </Link>
            }
          />
        </Tabs>
      )}
      <Routes>
        <Route index element={<Navigate to={usersPath} />} />
        <Route
          path="create-user"
          element={<CreateUser groupNameOptions={groupNameOptions} />}
        />
        <Route
          path={usersPath}
          element={<UsersTable setUsers={setUsers} users={users} />}
        />
        <Route
          path={`${groupsPath}/:groupName`}
          element={<UsersInGroupTable />}
        />
        <Route path={groupsPath} element={<GroupsTable />} />
        <Route
          path=":username"
          element={
            <UpdateUser groupNameOptions={groupNameOptions} users={users} />
          }
        />
      </Routes>
    </Box>
  );
}
