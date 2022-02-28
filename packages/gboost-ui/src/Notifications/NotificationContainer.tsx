import { ReactElement, useEffect, useRef } from "react";
import { Transition, TransitionStatus } from "react-transition-group";
import { QueueNotification } from "../context/NotificationsContext.jsx";
import { styled } from "../stitches.config.js";
import { Notification } from "./Notification.jsx";
import type * as Stitches from "@stitches/react";

const duration = 300;

const hidden: Stitches.CSS = {
  opacity: 0,
  transform: "translateX(100%)",
};

const visible: Stitches.CSS = {
  opacity: 1,
  transform: "translateX(0)",
};

const StyledNotification = styled(Notification, {
  transitionDuration: `${duration}ms`,
  transitionTimingFunction: "ease",
  transitionProperty: "opacity, transform",
  zIndex: "$2",
  variants: {
    animate: {
      entering: hidden,
      entered: visible,
      exiting: hidden,
      exited: hidden,
      unmounted: hidden,
    } as Record<TransitionStatus, Stitches.CSS>,
  },
});

interface NotificationContainerProps {
  index: number;
  notification: QueueNotification;
  // onEnter and onExited are implicitly passed by <TransitionGroup>
  onEnter?: () => void;
  onExited?: () => void;
  removeNotification: (id: string) => void;
}

export function NotificationContainer(
  props: NotificationContainerProps
): ReactElement {
  // rest includes props passed by <TransitionGroup>
  const {
    index,
    notification,
    onEnter,
    onExited,
    removeNotification,
    ...rest
  } = props;
  const nodeRef = useRef(null);
  const timeout = useRef<number>(0);
  useEffect(() => {
    if (notification.timeout !== Infinity) {
      timeout.current = window.setTimeout(
        () => removeNotification(notification.id),
        notification.timeout || 5000
      );
      return () => window.clearTimeout(timeout.current);
    }
  }, [notification, removeNotification]);
  return (
    <Transition
      nodeRef={nodeRef}
      timeout={duration}
      mountOnEnter
      unmountOnExit
      {...rest}
      onEnter={() => {
        document.body.style.overflowX = "hidden";
        if (onEnter) onEnter();
      }}
      onExited={() => {
        document.body.style.overflowX = "";
        if (onExited) onExited();
      }}
    >
      {(state) => (
        <StyledNotification
          ref={nodeRef}
          body={notification.body}
          css={{ bottom: `calc($5 + calc(64px * ${index}))` }}
          heading={notification.heading}
          variation={notification.variation}
          animate={state}
          removeNotification={() => removeNotification(notification.id)}
        />
      )}
    </Transition>
  );
}
