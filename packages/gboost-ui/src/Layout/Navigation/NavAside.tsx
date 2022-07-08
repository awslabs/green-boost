import { styled } from "../../index";

export const NavAside = styled("aside", {
  display: "none",
  backgroundColor: "$gray1",
  borderRight: "1px solid $gray6",
  gridArea: "sidebar",
  transition: "$sidebar",
  "@bp3": {
    display: "block",
  },
});
