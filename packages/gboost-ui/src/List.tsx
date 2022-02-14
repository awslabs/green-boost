import { styled } from "./stitches.config.js";

export const List = styled("ul", {
  listStyle: "none",
  p: "$3",
});

export const ListItem = styled("li", {
  cursor: "pointer",
  display: "grid",
  py: "$3",
  "&:hover": {
    bc: "$gray4",
  },
});
