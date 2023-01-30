// @ts-nocheck
import { createTheme as createStitchesTheme, config } from "gboost-ui";
import { createTheme } from "@aws-amplify/ui-react";

export const theme = createTheme({
  name: "base",
  tokens: {
    colors: {
      brand: {
        // add primary/secondary brand colors
        primary: {},
        secondary: {},
      },
    },
  },
});

// Temporarily need Stitches Theme until GB migrates to Vanilla Extract
export const stitchesTheme = createStitchesTheme({
  ...config.theme,
  colors: {
    ...config.theme.colors,
  },
});
