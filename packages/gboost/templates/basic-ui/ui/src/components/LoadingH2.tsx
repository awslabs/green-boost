// @ts-nocheck
"use client";

import Skeleton from "@mui/material/Skeleton";
import Typography from "@mui/material/Typography";

export function LoadingH2() {
  return (
    <Typography variant="h2">
      <Skeleton />
    </Typography>
  );
}
