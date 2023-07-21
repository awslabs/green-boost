// @ts-nocheck
import List from "@mui/material/List";
import { type ReactElement } from "react";
import { DrawerListItem } from "./DrawerListItem";
import WavingHandIcon from "@mui/icons-material/WavingHand";
import { useTheme } from "@mui/material/styles";

interface DrawerListProps {
  open: boolean;
}

export function DrawerList(props: DrawerListProps): ReactElement {
  const theme = useTheme();
  const { open } = props;
  // TODO: highlight based on path
  return (
    <List sx={{ width: "100%", bgcolor: "background.paper" }}>
      <DrawerListItem
        href="/hello/world"
        icon={<WavingHandIcon htmlColor={theme.palette.primary.main} />}
        open={open}
        text="Hello"
      />
      <DrawerListItem
        href="/goodbye/world"
        icon={<WavingHandIcon htmlColor={theme.palette.primary.main} />}
        open={open}
        text="Goodbye"
      />
    </List>
  );
}
