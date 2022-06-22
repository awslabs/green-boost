import {
  MouseEventHandler,
  ReactElement,
  useEffect,
  useMemo,
  useRef,
} from "react";
import { useHotkeys, useFocusTrap } from "@mantine/hooks";
import * as Portal from "@radix-ui/react-portal";
import { Box, CSS, Overlay } from "../index.js";

interface DrawerProps {
  open: boolean;
  children: ReactElement;
  onClose: MouseEventHandler | ((e: KeyboardEvent) => void);
  position?: "left" | "top" | "right" | "bottom";
  drawerLength?: number;
}

/**
 * Drawer
 * @see https://letsbuildui.dev/articles/building-a-drawer-component-with-react-portals
 */
export function Drawer(props: DrawerProps): ReactElement | null {
  const {
    open,
    children,
    drawerLength = 250,
    onClose,
    position = "left",
  } = props;
  const focusTrapRef = useFocusTrap(open);
  const bodyRef = useRef(document.querySelector("body") as HTMLBodyElement);
  const drawerCss: CSS = useMemo(() => {
    if (position === "left") {
      return {
        top: "$8",
        left: 0,
        height: "calc(100% - $8)", // $8 is height of header
        width: drawerLength,
        transform: open ? "translateX(0)" : "translateX(-105%)",
      };
    } else if (position === "top") {
      return {
        top: `$8`,
        left: 0,
        right: 0,
        width: "100%",
        transform: open ? "translateY(0)" : "translateY(-100%)",
        height: drawerLength,
      };
    } else if (position === "right") {
      return {
        top: "$8",
        right: 0,
        height: "calc(100% - $8)",
        transform: open ? "translateX(0)" : "translateX(100%)",
        width: drawerLength,
      };
    } else if (position === "bottom") {
      return {
        bottom: 0,
        left: 0,
        right: 0,
        width: "100%",
        transform: open ? "translateY(0)" : "translateY(100%)",
        height: drawerLength,
      };
    } else {
      throw new Error(`Invalid position: ${position}`);
    }
  }, [drawerLength, open, position]);

  // prevent the page from scrolling when the drawer is open
  useEffect(() => {
    function updatePageScroll() {
      if (open) {
        bodyRef.current.style.overflow = "hidden";
      } else {
        bodyRef.current.style.overflow = "";
      }
    }
    updatePageScroll();
  }, [open]);

  useHotkeys([["Escape", onClose as (e: KeyboardEvent) => void]]);

  return (
    <Portal.Root>
      <Box ref={focusTrapRef} aria-hidden={!open} css={{ bs: "0 0 15px gray" }}>
        <Box
          css={{
            bc: "$gray1",
            overflow: "auto",
            position: "fixed",
            bs: "0 0 15px gray",
            transition: "transform 0.3s ease",
            zIndex: "$2",
            ...drawerCss,
          }}
          data-autofocus
          role="dialog"
        >
          {children}
        </Box>
        <Overlay onClick={onClose as MouseEventHandler} show={open} />
      </Box>
    </Portal.Root>
  );
}
