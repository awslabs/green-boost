import { NavLink } from "react-router-dom";
import * as styles from "./NavAsideLink.css.js";
import { clsx } from "clsx";
import { ReactElement } from "react";

export function NavAsideLink(
  props: Parameters<typeof NavLink>[0]
): ReactElement {
  return (
    <NavLink
      className={({ isActive }) =>
        clsx({
          "amplify-flex": true,
          [styles.link]: true,
          [styles.activeLink]: isActive,
        })
      }
      to={props.to}
    >
      {props.children}
    </NavLink>
  );
}
