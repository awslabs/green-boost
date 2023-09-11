// @ts-nocheck
"use client";

import { Box, useMediaQuery } from "@mui/material";
import { AppBar } from "./AppBar";
import { Drawer } from "./Drawer";
import { Footer } from "./Footer";
import { type ReactNode, useState, useEffect } from "react";
import { useTheme } from "@mui/material/styles";

export default function AppLayout({ children }: { children: ReactNode }) {
  const theme = useTheme();
  const mq = useMediaQuery(theme.breakpoints.up("md"));
  useEffect(() => {
    setOpen(mq);
  }, [mq]);
  const [open, setOpen] = useState(false);
  return (
    <Box
      sx={{
        display: "grid",
        width: "100%",
        height: "100vh",
        gridTemplateAreas: '"header header" "drawer main" "footer footer"',
        gridTemplateRows: "auto 1fr auto",
        gridTemplateColumns: "auto 1fr",
      }}
    >
      <Box
        bgcolor={(t) => t.palette["primary"].main}
        sx={{
          height: "var(--app-bar-height)",
          gridArea: "header",
        }}
      >
        <AppBar open={open} setOpen={setOpen} />
      </Box>
      <Box
        sx={{
          gridArea: "drawer",
        }}
      >
        <Drawer open={open} />
      </Box>
      <Box
        sx={{
          gridArea: "main",
          m: (t) => t.spacing(2),
        }}
      >
        {children}
      </Box>
      <Box gridArea="footer">
        <Footer />
      </Box>
    </Box>
  );
}
