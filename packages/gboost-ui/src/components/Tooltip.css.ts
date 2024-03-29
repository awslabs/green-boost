import { keyframes, style } from "@vanilla-extract/css";

const slideUpAndFade = keyframes({
  "0%": { opacity: 0, transform: "translateY(2px)" },
  "100%": { opacity: 1, transform: "translateY(0)" },
});

const slideRightAndFade = keyframes({
  "0%": { opacity: 0, transform: "translateX(-2px)" },
  "100%": { opacity: 1, transform: "translateX(0)" },
});

const slideDownAndFade = keyframes({
  "0%": { opacity: 0, transform: "translateY(-2px)" },
  "100%": { opacity: 1, transform: "translateY(0)" },
});

const slideLeftAndFade = keyframes({
  "0%": { opacity: 0, transform: "translateX(2px)" },
  "100%": { opacity: 1, transform: "translateX(0)" },
});

export const content = style({
  zIndex: 100,
  borderRadius: 4,
  padding: "10px 15px",
  fontSize: 15,
  lineHeight: 1,
  color: "black",
  backgroundColor: "white",
  boxShadow:
    "hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px",
  "@media": {
    "(prefers-reduced-motion: no-preference)": {
      animationDuration: "400ms",
      animationTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
      animationFillMode: "forwards",
      willChange: "transform, opacity",
      selectors: {
        '&[data-state="delayed-open"][data-side="top"]': {
          animationName: slideDownAndFade,
        },
        '&[data-state="delayed-open"][data-side="right"]': {
          animationName: slideLeftAndFade,
        },
        '&[data-state="delayed-open"][data-side="bottom"]': {
          animationName: slideUpAndFade,
        },
        '&[data-state="delayed-open"][data-side="left"]': {
          animationName: slideRightAndFade,
        },
      },
    },
  },
});

export const arrow = style({
  fill: "white",
});
