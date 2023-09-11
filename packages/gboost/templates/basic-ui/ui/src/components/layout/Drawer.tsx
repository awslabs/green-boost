// @ts-nocheck
import { type ReactElement } from "react";
import Box from "@mui/material/Box";
import { useTheme } from "@mui/material/styles";
import { DrawerList } from "./DrawerList";

interface DrawerProps {
  open: boolean;
}

export function Drawer(props: DrawerProps): ReactElement {
  const { open } = props;
  const theme = useTheme();
  const transition = open
    ? theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      })
    : theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      });
  return (
    <Box
      bgcolor={(t) => t.palette["background"].paper}
      display="flex"
      height="100%"
      width={open ? "var(--drawer-width)" : "60px"}
      style={{ transition }}
    >
      <DrawerList open={open} />
    </Box>
  );
}
