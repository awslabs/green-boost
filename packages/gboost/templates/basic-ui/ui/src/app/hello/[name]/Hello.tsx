// @ts-nocheck
"use client";

import Typography from "@mui/material/Typography";
import { useMemo } from "react";
import { kebabToTitle } from "@/utils/kebab-to-title";

interface HelloProps {
  name: string;
}

export function Hello(props: HelloProps) {
  const { name } = props;
  const pascalCaseName = useMemo(() => kebabToTitle(name), [name]);
  return (
    <Typography variant="h2" alignContent="center">
      {`Hello, ${pascalCaseName}!`}
    </Typography>
  );
}
