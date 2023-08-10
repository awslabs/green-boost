// @ts-nocheck
import { List } from "@mui/material";
import { type ReactElement } from "react";
import { DrawerListItem } from "./DrawerListItem";
import ListIcon from "@mui/icons-material/List";
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
        href="/items"
        icon={<ListIcon htmlColor={theme.palette.primary.main} />}
        open={open}
        text="Items"
      />
    </List>
  );
}
