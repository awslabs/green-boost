import { Grid, type GridProps } from "@aws-amplify/ui-react";
import { forwardRef, type ReactNode, useMemo } from "react";

interface LayoutGridProps extends GridProps {
  headerArea: ReactNode;
  mainArea: ReactNode;
  leftAsideArea?: ReactNode;
  rightAsideArea?: ReactNode;
  footerArea: ReactNode;
}

/**
 * CSS Grid Layout that organizes your app's layout into header, left aside,
 * main, right aside, and footer areas. Header, main, and footer are required
 * where left aside and right aside are optional. You can use gboost-ui's
 * `HeaderArea`, `LeftAside`, `MainArea`, `RightAsideArea`, `FooterArea`
 * components or implement your own. If you implement your own, make sure
 * to correctly set grid-area CSS property with "header", "leftAside", "main",
 * "rightAside", and "footer", respectively.
 *
 * Please see gboost-ui's related `Header` and `NavigationAside` components.
 */
export const LayoutGrid = forwardRef<HTMLDivElement, LayoutGridProps>(
  function LayoutGrid(props, ref) {
    const {
      headerArea,
      mainArea,
      leftAsideArea,
      rightAsideArea,
      footerArea,
      ...rest
    } = props;
    const templateAreas = useMemo<GridProps["templateAreas"]>(() => {
      let row1 = "header";
      let row2 = "main";
      let row3 = "footer";
      if (leftAsideArea) {
        row1 = "header " + row1;
        row2 = "leftAside " + row2;
        row3 = "footer " + row3;
      }
      if (rightAsideArea) {
        row1 += " header";
        row2 += " rightAside";
        row3 += " footer";
      }
      return `"${row1}" "${row2}" "${row3}"`;
    }, [leftAsideArea, rightAsideArea]);
    const templateColumns = useMemo<GridProps["templateRows"]>(() => {
      let templateRows = "1fr";
      if (leftAsideArea) {
        templateRows = "auto " + templateRows;
      }
      if (rightAsideArea) {
        templateRows += " auto";
      }
      return templateRows;
    }, [leftAsideArea, rightAsideArea]);
    return (
      <Grid
        height="100vh"
        templateAreas={templateAreas}
        templateRows="auto 1fr auto"
        templateColumns={templateColumns}
        {...rest}
        ref={ref}
      >
        {headerArea}
        {leftAsideArea}
        {mainArea}
        {rightAsideArea}
        {footerArea}
      </Grid>
    );
  }
);
