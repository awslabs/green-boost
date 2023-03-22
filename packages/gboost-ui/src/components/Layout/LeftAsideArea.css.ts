import { style } from "@vanilla-extract/css";

export const leftAsideArea = style({
  gridArea: "leftAside",
  backgroundColor: "var(--amplify-colors-background-secondary)",
  borderRightStyle: "solid",
  borderRightWidth: "var(--amplify-border-widths-small)",
  borderRightColor: "var(--amplify-colors-border-secondary)",
});
