import { style } from "@vanilla-extract/css";

export const rightAsideArea = style({
  gridArea: "rightAside",
  backgroundColor: "var(--amplify-colors-background-secondary)",
  borderLeftStyle: "solid",
  borderLeftWidth: "var(--amplify-border-widths-small)",
  borderLeftColor: "var(--amplify-colors-border-secondary)",
});
