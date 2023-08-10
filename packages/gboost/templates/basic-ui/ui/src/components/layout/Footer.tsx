// @ts-nocheck
import { clientConfig } from "@/config/client-config";
import Typography from "@mui/material/Typography";
import { type ReactElement } from "react";

export function Footer(): ReactElement {
  return (
    <Typography sx={{ textAlign: "center" }}>
      {clientConfig.appTitle}
    </Typography>
  );
}
