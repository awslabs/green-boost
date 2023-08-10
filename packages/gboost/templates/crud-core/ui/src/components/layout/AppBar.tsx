// @ts-nocheck
import { Box, IconButton, Typography } from "@mui/material";
import type { Dispatch, ReactElement, SetStateAction } from "react";
import { AccountMenu } from "@/components/layout/AccountMenu";
import MenuIcon from "@mui/icons-material/Menu";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";
import { clientConfig } from "@/config/client-config";

interface AppBarProps {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}

export function AppBar(props: AppBarProps): ReactElement {
  const { open, setOpen } = props;
  return (
    <Box display="flex" justifyContent="space-between" m={(t) => t.spacing(1)}>
      <Box display="flex" gap={(t) => t.spacing(2)}>
        <IconButton
          color="inherit"
          size="large"
          aria-label="menu"
          onClick={() => setOpen((o) => !o)}
        >
          {open ? <MenuOpenIcon /> : <MenuIcon />}
        </IconButton>
        {/* <Icon sx={{ m: "auto" }}>
          <FaSeedling />
        </Icon> */}
        <Typography fontSize={30} m="auto" variant="h1">
          {clientConfig.appTitle}
        </Typography>
      </Box>
      <Box display="flex" gap={(t) => t.spacing(1)}>
        <AccountMenu />
      </Box>
    </Box>
  );
}
