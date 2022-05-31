import {
  MutableRefObject,
  ReactElement,
  useCallback,
  useMemo,
  useState,
} from "react";
import { useClickOutside } from "@mantine/hooks";
import { ButtonGroup, Menu, MenuItem, Text } from "@aws-amplify/ui-react";
import { MdArrowDropDown, MdArrowDropUp } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { CognitoUser, CognitoUserStatus } from "gboost-common";
import {
  deleteUsers,
  disableUsers,
  enableUsers,
  resetPasswords,
} from "./gql.js";
import { gQuery } from "../utils/gQuery.js";
import { useNotifications } from "../context/NotificationsContext.js";
import { Dialog } from "../Dialog.js";
import { StyledButton } from "../components/index.js";
import { styled } from "../index.js";

const CenteredText = styled(Text, { textAlign: "center", mb: "$4" });

type UserAction = "update" | "delete" | "disable" | "enable" | "resetPassword";
type DialogAction = Exclude<UserAction, "update" | "enable">;

interface UsersTableActionBarProps {
  refreshRef: MutableRefObject<HTMLButtonElement | null>;
  selectedUsers: CognitoUser[];
}

export function UsersTableActionBar(
  props: UsersTableActionBarProps
): ReactElement {
  const { refreshRef, selectedUsers } = props;
  const { notify } = useNotifications();
  const [menuOpen, setMenuOpen] = useState(false);
  const ref = useClickOutside(() => setMenuOpen(false));
  const navigate = useNavigate();
  const [dialogOpen, setDialogOpen] = useState<Record<DialogAction, boolean>>({
    delete: false,
    disable: false,
    resetPassword: false,
  });
  const [loading, setLoading] = useState<Record<UserAction, boolean>>({
    delete: false,
    disable: false,
    enable: false,
    resetPassword: false,
    update: false,
  });
  const disable: Record<UserAction, boolean> = useMemo(() => {
    return {
      delete: selectedUsers.length === 0,
      disable:
        selectedUsers.length === 0 || selectedUsers.some((u) => !u.enabled),
      enable:
        selectedUsers.length === 0 || selectedUsers.some((u) => u.enabled),
      resetPassword:
        selectedUsers.length === 0 ||
        selectedUsers.some(
          (u) =>
            !u.enabled ||
            !u.email_verified ||
            u.status !== CognitoUserStatus.Confirmed
        ),
      update: selectedUsers.length !== 1,
    };
  }, [selectedUsers]);
  const usernames = useMemo(
    () => selectedUsers.map((u) => u.username),
    [selectedUsers]
  );
  const joinedUsernames = useMemo(() => usernames.join(", "), [usernames]);
  const handleDelete = useCallback(async () => {
    setLoading((l) => ({ ...l, delete: true }));
    try {
      await gQuery<string>({
        query: deleteUsers,
        vars: { usernames },
      });
      refreshRef.current?.click();
      notify({
        body: `Successfully deleted ${joinedUsernames}`,
        variation: "success",
      });
    } catch (e) {
      console.error(e);
      notify({
        body: `Error deleting ${joinedUsernames}`,
        variation: "error",
      });
    } finally {
      setLoading((l) => ({ ...l, delete: false }));
      setDialogOpen((o) => ({ ...o, delete: false }));
    }
  }, [joinedUsernames, notify, refreshRef, usernames]);
  const handleDisable = useCallback(async () => {
    setLoading((l) => ({ ...l, disable: true }));
    try {
      await gQuery<string>({
        query: disableUsers,
        vars: { usernames },
      });
      refreshRef.current?.click();
      notify({
        body: `Successfully disabled ${joinedUsernames}`,
        variation: "success",
      });
    } catch (e) {
      console.error(e);
      notify({
        body: `Error disabling ${joinedUsernames}`,
        variation: "error",
      });
    } finally {
      setLoading((l) => ({ ...l, disable: false }));
      setDialogOpen((o) => ({ ...o, disable: false }));
    }
  }, [joinedUsernames, notify, refreshRef, usernames]);
  const handleEnable = useCallback(async () => {
    setLoading((l) => ({ ...l, enable: true }));
    try {
      await gQuery<string>({
        query: enableUsers,
        vars: { usernames },
      });
      refreshRef.current?.click();
      notify({
        body: `Successfully enabled ${joinedUsernames}`,
        variation: "success",
      });
    } catch (e) {
      console.error(e);
      notify({
        body: `Error enabling ${joinedUsernames}`,
        variation: "error",
      });
    } finally {
      setLoading((l) => ({ ...l, enable: false }));
      setDialogOpen((o) => ({ ...o, enable: false }));
    }
  }, [joinedUsernames, notify, refreshRef, usernames]);
  const handleResetPassword = useCallback(async () => {
    setLoading((l) => ({ ...l, resetPassword: true }));
    try {
      await gQuery<string>({
        query: resetPasswords,
        vars: { usernames },
      });
      refreshRef.current?.click();
      notify({
        body: `Successfully reset password${
          usernames.length > 1 ? "s" : ""
        } for ${joinedUsernames}`,
        variation: "success",
      });
    } catch (e) {
      console.error(e);
      notify({
        body: `Error resetting password${
          usernames.length > 1 ? "s" : ""
        } for ${joinedUsernames}`,
        variation: "error",
      });
    } finally {
      setLoading((l) => ({ ...l, resetPassword: false }));
      setDialogOpen((o) => ({ ...o, resetPassword: false }));
    }
  }, [joinedUsernames, notify, refreshRef, usernames]);
  const openDialog = useCallback((type: DialogAction) => {
    setMenuOpen(false);
    setDialogOpen((o) => ({ ...o, [type]: true }));
  }, []);
  return (
    <>
      <Menu
        ref={ref}
        isOpen={menuOpen}
        onOpenChange={(isOpen) => {
          // let open action be "controlled" by Menu component but for closing
          // require it to be done externally
          // not sure why clicking off menu still closes menu ???
          if (isOpen) setMenuOpen(isOpen);
        }}
        trigger={
          <StyledButton color="info" css={{ gap: "$2" }}>
            Actions {menuOpen ? <MdArrowDropUp /> : <MdArrowDropDown />}
          </StyledButton>
        }
      >
        <MenuItem
          isDisabled={disable.update}
          isLoading={loading.update}
          onClick={() => navigate(`../${selectedUsers[0].username}`)}
        >
          Update
        </MenuItem>
        <MenuItem
          isDisabled={disable.delete}
          isLoading={loading.delete}
          onClick={() => openDialog("delete")}
        >
          Delete
        </MenuItem>
        <MenuItem
          isDisabled={disable.enable}
          isLoading={loading.enable}
          onClick={handleEnable}
        >
          Enable
        </MenuItem>
        <MenuItem
          isDisabled={disable.disable}
          isLoading={loading.disable}
          onClick={() => openDialog("disable")}
        >
          Disable
        </MenuItem>
        <MenuItem
          isDisabled={disable.resetPassword}
          isLoading={loading.resetPassword}
          onClick={() => openDialog("resetPassword")}
        >
          Reset Password
        </MenuItem>
      </Menu>
      <StyledButton color="success" onClick={() => navigate("../create-user")}>
        Create User
      </StyledButton>
      <Dialog
        open={dialogOpen.delete}
        onOpenChange={(o) => setDialogOpen((open) => ({ ...open, delete: o }))}
        title={`Delete User${usernames.length > 1 ? "s" : ""}`}
      >
        <div>
          <CenteredText>
            Are you sure you want to delete {joinedUsernames}?
          </CenteredText>
          <ButtonGroup variation="primary" justifyContent="center">
            <StyledButton
              color="info"
              onClick={() => setDialogOpen((o) => ({ ...o, delete: false }))}
            >
              Cancel
            </StyledButton>
            <StyledButton
              color="error"
              onClick={handleDelete}
              isLoading={loading.delete}
              loadingText="Deleting..."
            >
              Delete
            </StyledButton>
          </ButtonGroup>
        </div>
      </Dialog>
      <Dialog
        open={dialogOpen.disable}
        onOpenChange={(o) => setDialogOpen((open) => ({ ...open, disable: o }))}
        title={`Disable User${usernames.length > 1 ? "s" : ""}`}
      >
        <div>
          <CenteredText>
            Are you sure you want to disable {joinedUsernames}?
          </CenteredText>
          <ButtonGroup variation="primary" justifyContent="center">
            <StyledButton
              color="info"
              onClick={() => setDialogOpen((o) => ({ ...o, disable: false }))}
            >
              Cancel
            </StyledButton>
            <StyledButton
              color="error"
              onClick={handleDisable}
              isLoading={loading.disable}
              loadingText="Disabling..."
            >
              Disable
            </StyledButton>
          </ButtonGroup>
        </div>
      </Dialog>
      <Dialog
        open={dialogOpen.resetPassword}
        onOpenChange={(o) =>
          setDialogOpen((open) => ({ ...open, resetPassword: o }))
        }
        title={`Reset Password${usernames.length > 1 ? "s" : ""}`}
      >
        <div>
          <CenteredText>
            {`Are you sure you want to reset password${
              usernames.length > 1 ? "s" : ""
            } for ${joinedUsernames}?`}
          </CenteredText>
          <ButtonGroup variation="primary" justifyContent="center">
            <StyledButton
              color="info"
              onClick={() =>
                setDialogOpen((o) => ({ ...o, resetPassword: false }))
              }
            >
              Cancel
            </StyledButton>
            <StyledButton
              color="error"
              onClick={handleResetPassword}
              isLoading={loading.resetPassword}
              loadingText="Resetting..."
            >
              Reset Password
            </StyledButton>
          </ButtonGroup>
        </div>
      </Dialog>
    </>
  );
}
