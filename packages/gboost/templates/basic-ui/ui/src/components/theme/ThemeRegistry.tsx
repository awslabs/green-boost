// @ts-nocheck
"use client";

import { Experimental_CssVarsProvider as CssVarsProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { NextAppDirEmotionCacheProvider } from "./EmotionCache";
import { theme } from "./theme";

interface ThemeRegistryProps {
  children: React.ReactNode;
  nonce: string | null;
}
export function ThemeRegistry(props: ThemeRegistryProps) {
  return (
    <NextAppDirEmotionCacheProvider
      options={{ key: "mui", nonce: props.nonce || undefined }}
    >
      <CssVarsProvider theme={theme}>
        <CssBaseline />
        {props.children}
      </CssVarsProvider>
    </NextAppDirEmotionCacheProvider>
  );
}
