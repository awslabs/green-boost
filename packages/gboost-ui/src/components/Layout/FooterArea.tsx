import { View, type ViewProps } from "@aws-amplify/ui-react";
import { clsx } from "clsx";
import { forwardRef, type ReactNode } from "react";
import * as styles from "./FooterArea.css";

interface FooterAreaProps extends ViewProps {
  children?: ReactNode;
}
/**
 * @deprecated
 */
export const FooterArea = forwardRef<HTMLDivElement, FooterAreaProps>(
  function FooterArea(props, ref) {
    return (
      <View
        {...props}
        className={clsx([styles.footerArea, props.className])}
        ref={ref}
      />
    );
  },
);
