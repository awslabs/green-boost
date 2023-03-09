import { style } from "@vanilla-extract/css";

export const footerArea = style({
  gridArea: "footer",
  backgroundColor: "var(--amplify-colors-background-secondary)",
  borderTopStyle: "solid",
  borderTopWidth: "var(--amplify-border-widths-small)",
  borderTopColor: "var(--amplify-colors-border-secondary)",
});
