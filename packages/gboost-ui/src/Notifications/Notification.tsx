import { forwardRef } from "react";
import { Alert } from "@aws-amplify/ui-react";
import { styled } from "../stitches.config.js";

// type NotificationPosition =
//   | "top-center"
//   | "top-right"
//   | "bottom-right"
//   | "bottom-center"
//   | "bottom-left"
//   | "top-left";

const StyledAlert = styled(Alert, {
  position: "absolute",
  variants: {
    position: {
      "top-center": {
        top: "$4",
        right: "auto",
        left: "auto",
      },
      "top-right": {
        top: "$4",
        right: "$4",
        left: "auto",
      },
      "bottom-right": {
        bottom: "$4",
        right: "$4",
        left: "auto",
      },
      "bottom-center": {
        bottom: "$4",
        right: "auto",
        left: "auto",
      },
      "bottom-left": {
        bottom: "$4",
        left: "$4",
        right: "auto",
      },
      "top-left": {
        top: "$4",
        left: "$4",
        right: "auto",
      },
    },
  },
});
/**
 * @deprecated
 */
export interface NotificationProps {
  body: string;
  /**
   * @default true
   */
  className?: string; // needed to apply NotificationContainer styles
  heading?: string;
  // TODO - allow multiple notification positions
  // /**
  //  * @default "bottom-right"
  //  */
  // position?: NotificationPosition;
  /**
   * @default "info"
   */
  variation?: "info" | "error" | "warning" | "success";
  removeNotification: () => void;
}
/**
 * @deprecated
 */
export const Notification = forwardRef<HTMLDivElement, NotificationProps>(
  (props: NotificationProps, ref) => {
    const {
      body,
      className,
      heading,
      // position = "bottom-right",
      variation = "info",
      removeNotification,
    } = props;
    return (
      <StyledAlert
        ref={ref}
        className={className}
        // $4 = padding from bottom, $2 = padding between notifications
        isDismissible
        heading={heading}
        onDismiss={removeNotification}
        position={"bottom-right"}
        variation={variation}
      >
        {body}
      </StyledAlert>
    );
  }
);
Notification.displayName = "Notification";
