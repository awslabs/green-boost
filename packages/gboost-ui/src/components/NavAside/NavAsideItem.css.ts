import { style } from "@vanilla-extract/css";
import { navAsideContainer } from "./NavAside.css";

export const itemContainer = style({
  cursor: "pointer",
  width: "100%",
  paddingBlock: "var(--amplify-space-xs)",
  paddingInlineStart: "var(--amplify-space-medium)",
  ":hover": {
    backgroundColor: "var(--amplify-colors-neutral-40)",
  },
});

export const labelContainer = style({
  "@container": {
    [`${navAsideContainer} (max-width: 200px)`]: {
      display: "none",
    },
  },
});
