import type { ReactElement } from "react";
import { styled, keyframes } from "../index.js";
import * as TooltipPrimitive from "@radix-ui/react-tooltip";

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

const StyledContent = styled(TooltipPrimitive.Content, {
  borderRadius: 4,
  padding: "10px 15px",
  fontSize: 15,
  lineHeight: 1,
  color: "black", // TODO: why doesn"t $primary11 show correct color? always shows green
  backgroundColor: "white",
  boxShadow:
    "hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px",
  "@media (prefers-reduced-motion: no-preference)": {
    animationDuration: "400ms",
    animationTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
    animationFillMode: "forwards",
    willChange: "transform, opacity",
    '&[data-state="delayed-open"]': {
      '&[data-side="top"]': { animationName: slideDownAndFade },
      '&[data-side="right"]': { animationName: slideLeftAndFade },
      '&[data-side="bottom"]': { animationName: slideUpAndFade },
      '&[data-side="left"]': { animationName: slideRightAndFade },
    },
  },
});

const StyledArrow = styled(TooltipPrimitive.Arrow, {
  fill: "white",
});

export type TooltipAlign = "start" | "center" | "end";
export type TooltipSide = "bottom" | "left" | "right" | "top";

interface TooltipProps {
  align?: TooltipAlign;
  alignOffset?: number;
  content: string | ReactElement;
  children: ReactElement;
  defaultOpen?: boolean;
  delayDuration?: number;
  maxWidth?: string | number;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  side?: TooltipSide;
  sideOffset?: number;
}

/**
 * Tooltip - a popup that displays information related to an element when the
 * element is focused via keyboard or mouse hover
 */
export function Tooltip(props: TooltipProps): ReactElement {
  const {
    align,
    alignOffset,
    children,
    content,
    defaultOpen,
    delayDuration = 500,
    maxWidth = 450,
    open,
    onOpenChange,
    side,
    sideOffset,
  } = props;
  return (
    <TooltipPrimitive.Root
      defaultOpen={defaultOpen}
      delayDuration={delayDuration}
      open={open}
      onOpenChange={onOpenChange}
    >
      <TooltipPrimitive.Trigger asChild>{children}</TooltipPrimitive.Trigger>
      <StyledContent
        align={align}
        alignOffset={alignOffset}
        css={{ maxWidth }}
        side={side}
        sideOffset={sideOffset}
      >
        {content}
        <StyledArrow />
      </StyledContent>
    </TooltipPrimitive.Root>
  );
}
