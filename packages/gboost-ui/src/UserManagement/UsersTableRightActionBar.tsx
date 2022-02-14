import { ReactElement, useState } from "react";
import { useClickOutside } from "@mantine/hooks";
import { Button, Menu, MenuItem } from "@aws-amplify/ui-react";
import { MdArrowDropDown, MdArrowDropUp } from "react-icons/md";
import { styled } from "../stitches.config.js";

const StyledSuccessButton = styled(Button, { backgroundColor: "$success3" });
const StyledInfoButton = styled(Button, {
  backgroundColor: "$info3",
  gap: "$2",
});

export function UsersTableRightActionBar(): ReactElement {
  const [open, setOpen] = useState(false);
  const ref = useClickOutside(() => setOpen(false));
  return (
    <>
      <Menu
        ref={ref}
        isOpen={open}
        onOpenChange={() => setOpen(true)}
        trigger={
          <StyledInfoButton css={{ gap: "$2" }}>
            Actions {open ? <MdArrowDropUp /> : <MdArrowDropDown />}
          </StyledInfoButton>
        }
      >
        <MenuItem>Update</MenuItem>
        <MenuItem>Delete</MenuItem>
        <MenuItem>Enable</MenuItem>
        <MenuItem>Disable</MenuItem>
        <MenuItem>Reset Password</MenuItem>
      </Menu>
      <StyledSuccessButton>Create User</StyledSuccessButton>
    </>
  );
}
