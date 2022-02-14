import { MouseEventHandler, ReactElement, useMemo } from "react";
import { CSS } from "../stitches.config.js";
import { Box } from "../Box.jsx";

interface OverlayProps {
  onClick: MouseEventHandler;
  show: boolean;
}

export function Overlay(props: OverlayProps): ReactElement {
  const { onClick, show } = props;
  const overlayCss: CSS = useMemo(
    () =>
      show
        ? {
            visibility: "visible",
            opacity: 1,
            pointerEvents: "auto",
          }
        : {},
    [show]
  );
  return (
    <Box
      css={{
        visibility: "hidden",
        opacity: 0,
        bc: "$blackA11",
        transition: "$fadeIn",
        width: "100%",
        height: "100%",
        top: 0,
        left: 0,
        position: "fixed",
        pointerEvents: "none",
        zIndex: "$1",
        ...overlayCss,
      }}
      onClick={onClick}
    ></Box>
  );
}
