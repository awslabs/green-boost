import { ReactElement, useEffect, useState } from "react";
import { useTheme } from "@aws-amplify/ui-react";
import { styled } from "../index.js";
import { Header } from "./Header/Header.js";
import { RightAside as RightAsideContainer } from "./RightAside.js";
import { useMediaQuery } from "@mantine/hooks";

const LayoutContainer = styled("div", {
  display: "grid",
  height: "100vh",
  gridTemplateAreas: `"header" "content" "footer"`,
  gridTemplateRows: "auto 1fr auto",
  "@bp2": {
    gridTemplateAreas: `"header header" "nav content" "footer footer"`,
    gridTemplateColumns: "auto 1fr",
  },
  variants: {
    rightAside: {
      true: {
        "@bp3": {
          gridTemplateAreas: `"header header header" "nav content rightDrawer" "footer footer footer"`,
          gridTemplateColumns: "auto 1fr auto",
        },
      },
    },
  },
});
const StyledMain = styled("main", {
  gridArea: "content",
  bc: "$gray1",
  height: "100%",
});
const StyledNav = styled("nav", {
  display: "none",
  backgroundColor: "$gray1",
  borderRight: "1px solid $gray6",
  gridArea: "nav",
  transition: "$sidebar",
  "@bp3": {
    display: "block",
  },
  variants: {
    open: {
      true: {
        width: 250,
      },
      false: {
        width: 70,
      },
    },
  },
});
const StyledFooter = styled("footer", {
  gridArea: "footer",
});

interface LayoutProps {
  /**
   * Account menu shown on right side of header. Should consider desktop
   * and mobile view. When mobile, provide `AccountSidebar` for component
   * that will be put in `Drawer` and shown below breakpoint threshold
   */
  AccountMenu?: ReactElement;
  /**
   * User account information that will be put in right side drawer when mobile
   */
  AccountSidebar?: ReactElement;
  /**
   * Header title shown to right of hamburger menu
   */
  HeaderTitle?: ReactElement;
  /**
   * Class applied to parent grid element
   */
  className?: string;
  /**
   * Aside that pops out from right. Useful for tutorial/help info
   */
  RightAside?: ReactElement;
  /**
   * Component shown at bottom of Layout
   */
  Footer?: ReactElement;
  children: ReactElement;
  /**
   * Custom navigation list
   */
  NavigationList?: ({ open }: { open: boolean }) => ReactElement;
}

/**
 * App Layout including header, aside, main and footer
 */
export function Layout(props: LayoutProps): ReactElement {
  const {
    className,
    AccountMenu,
    AccountSidebar,
    HeaderTitle,
    NavigationList,
    RightAside,
    Footer,
  } = props;
  const theme = useTheme();
  const mqLg = useMediaQuery(
    `(min-width: ${theme.breakpoints?.values?.large}px)`
  );
  // initial state makes sidebar open for laptop but closed for tablet and mobile
  const [open, setOpen] = useState(mqLg);
  useEffect(() => {
    // if changing from laptop to tablet, close sidebar
    // if changing from tablet to laptop, open sidebar
    setOpen(mqLg);
  }, [mqLg]);
  return (
    <LayoutContainer className={className} rightAside={Boolean(RightAside)}>
      <Header
        open={open}
        setOpen={setOpen}
        AccountMenu={AccountMenu}
        AccountSidebar={AccountSidebar}
        HeaderTitle={HeaderTitle}
      />
      <StyledNav open={open}>
        {NavigationList && <NavigationList open={open} />}
      </StyledNav>
      <StyledMain>{props.children}</StyledMain>
      {RightAside && <RightAsideContainer>{RightAside}</RightAsideContainer>}
      <StyledFooter>{Footer}</StyledFooter>
    </LayoutContainer>
  );
}
