import { ReactElement } from "react";

/**
 * Configure pages shown within drawer on right side of app screen
 */
export interface Page {
  children?: Omit<Page, "children">[];
  component: ReactElement;
  icon: ReactElement;
  name: string;
  path: string;
}
