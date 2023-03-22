import { globalStyle } from "@vanilla-extract/css";

// https://www.joshwcomeau.com/css/custom-css-reset/
globalStyle("*, *::before, *::after", {
  boxSizing: "border-box",
});
globalStyle("*", {
  margin: 0,
  fontFamily: "var(--amplify-fonts-default-variable)",
});
globalStyle("html,body", {
  height: "100%",
});
globalStyle("body", {
  lineHeight: 1.5,
  fontSmooth: "antialiased",
});
globalStyle("img, picture, video, canvas, svg, iframe", {
  display: "block",
  maxWidth: "100%",
});
globalStyle("p, h1, h2, h3, h4, h5, h6", {
  overflowWrap: "break-word",
});
globalStyle("#root, #__next", {
  isolation: "isolate",
});
// Green Boost Global Styles
globalStyle("a", {
  all: "unset",
});
