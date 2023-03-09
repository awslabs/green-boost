import { createContainer, style } from "@vanilla-extract/css";

export const navAsideContainer = createContainer();

export const navAside = style({
  transition: "width 225ms ease",
  containerType: "inline-size",
  containerName: navAsideContainer,
});
