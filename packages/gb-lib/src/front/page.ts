import { ReactElement } from "react";

export interface Page {
  children?: Omit<Page, "children">[];
  component: ReactElement;
  icon: ReactElement;
  name: string;
  path: string;
}
