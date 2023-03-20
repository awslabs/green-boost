import { style } from "@vanilla-extract/css";

export const link = style({
  textDecoration: "none",
});

export const activeLink = style({
  backgroundColor: "var(--amplify-colors-neutral-40)",
});
