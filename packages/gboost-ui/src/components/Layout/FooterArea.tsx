import { View, ViewProps } from "@aws-amplify/ui-react";
import { clsx } from "clsx";
import { forwardRef, ReactNode } from "react";
import * as styles from "./FooterArea.css.js";

interface FooterAreaProps extends ViewProps {
  children?: ReactNode;
}

export const FooterArea = forwardRef<HTMLDivElement, FooterAreaProps>(
  function FooterArea(props, ref) {
    return (
      <View
        {...props}
        className={clsx([styles.footerArea, props.className])}
        ref={ref}
      />
    );
  }
);
