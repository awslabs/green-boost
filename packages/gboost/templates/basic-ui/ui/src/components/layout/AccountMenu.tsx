// @ts-nocheck
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { useState, type ReactElement, useRef } from "react";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import { ListItemIcon } from "@mui/material";
import BadgeIcon from "@mui/icons-material/Badge";
import EmailIcon from "@mui/icons-material/Email";
import LogoutIcon from "@mui/icons-material/Logout";

export function AccountMenu(): ReactElement {
  const anchorEl = useRef<HTMLButtonElement>(null);
  const [open, setOpen] = useState(false);
  const user = {
    name: "John Smith",
    email: "jsmith@gmail.com",
  };
  if (!user) return <></>;
  return (
    <Box display="flex" gap={(t) => t.spacing(1)}>
      <Typography fontSize={20} m="auto" variant="body1">
        {user.name}
      </Typography>
      <IconButton ref={anchorEl} onClick={() => setOpen(true)}>
        <AccountCircleIcon fontSize="large" />
      </IconButton>
      <Menu
        anchorEl={anchorEl.current}
        open={open}
        onClose={() => setOpen(false)}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        <MenuItem>
          <ListItemIcon>
            <BadgeIcon fontSize="small" />
          </ListItemIcon>
          {user.name}
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <EmailIcon fontSize="small" />
          </ListItemIcon>
          {user.email}
        </MenuItem>
        <MenuItem onClick={() => console.log("logged out")}>
          <ListItemIcon>
            <LogoutIcon fontSize="small" />
          </ListItemIcon>
          Logout
        </MenuItem>
      </Menu>
    </Box>
  );
}
