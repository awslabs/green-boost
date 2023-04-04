import type { ReactElement } from "react";
// NOTE: use HoverCard instead of Tooltip from radix-ui b/c Tooltip doesn't
// let you select text from within tooltip
import * as HoverCard from "@radix-ui/react-hover-card";
import { MdInfoOutline } from "react-icons/md";
import { Icon } from "@aws-amplify/ui-react";
import * as styles from "./Tooltip.css.js";

export function TooltipIcon() {
  return <Icon ariaLabel="info" fontSize={20} as={MdInfoOutline} />;
}

export type TooltipAlign = "start" | "center" | "end";
export type TooltipSide = "bottom" | "left" | "right" | "top";

interface TooltipProps {
  align?: TooltipAlign;
  alignOffset?: number;
  content: string | ReactElement;
  children?: ReactElement;
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
    children = (
      <span>
        <TooltipIcon />
      </span>
    ),
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
    <HoverCard.Root
      defaultOpen={defaultOpen}
      closeDelay={delayDuration}
      open={open}
      onOpenChange={onOpenChange}
    >
      <HoverCard.Trigger asChild>{children}</HoverCard.Trigger>
      <HoverCard.HoverCardContent
        className={styles.content}
        align={align}
        alignOffset={alignOffset}
        side={side}
        sideOffset={sideOffset}
        style={{ maxWidth }}
      >
        {content}
        <HoverCard.Arrow className={styles.arrow} />
      </HoverCard.HoverCardContent>
    </HoverCard.Root>
  );
}
