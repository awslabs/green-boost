import { ReactElement, useEffect, useState } from "react";
import { Auth } from "aws-amplify";
import type { useAuthenticator } from "@aws-amplify/ui-react";
import { styled, useBps } from "../index.js";
import type { Page } from "../index.js";
import { Header } from "./Header/Header.js";
import { Navigation } from "./Navigation/Navigation.js";
import { NavList } from "./Navigation/NavList.js";
import type { NavLink } from "./Navigation/NavLink.js";
import { RightAside as RightAsideContainer } from "./RightAside.js";
import { Content } from "./Content.js";
import { Footer } from "./Footer.js";

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

export type CognitoUser = ReturnType<typeof useAuthenticator>["user"];

interface BaseLayoutProps {
  /**
   * Custom header title shown to right of hamburger menu. When used, `title`
   * and `logoSrc` prop aren't used in header.
   */
  HeaderTitle?: ReactElement;
  className?: string;
  /**
   * Default path visited by React Router when visiting index /
   */
  defaultPath?: string;
  /**
   * Source URL of logo shown to the right of the header title and when loading
   * lazily loaded routes
   */
  logoSrc: string;
  /**
   * Aside that pops out from right.
   */
  RightAside?: ReactElement;
  /**
   * Logs off user
   * @default Auth.signOut
   */
  signOut?: () => unknown;
  /**
   * string for header title
   */
  title?: string;
}

interface CognitoUserLayoutProps {
  /**
   * Explicitly defined user for Account Menu instead of using `user` returned
   * from `useAuthenticator`
   */
  user: CognitoUser;
  /**
   * Custom account menu shown on right side of header. Should consider desktop
   * and mobile view. See default account menu for guidance.
   */
  AccountMenu?: ReactElement;
  /**
   * Custom account sidebar that shows in drawer when mobile screen and user
   * clicks on account menu button.
   */
  AccountSidebar?: ReactElement;
}

interface CustomUserLayoutProps {
  user: any;
  /**
   * Custom account menu shown on right side of header. Should consider desktop
   * and mobile view. See default account menu for guidance.
   */
  AccountMenu?: ReactElement;
  /**
   * Custom account sidebar that shows in drawer when mobile screen and user
   * clicks on account menu button.
   */
  AccountSidebar?: ReactElement;
}

interface PagesLayoutProps {
  /**
   * Pages to be displayed in bottom-left navigation drawer
   */
  bottomPages?: (NavLink | Page)[];
  /**
   * Pages to be displayed in left navigation drawer and routes created for
   * content
   */
  pages: Page[];
}
interface ChildrenLayoutProps {
  children: ReactElement;
  /**
   * Custom navigation list
   */
  NavigationList: typeof NavList;
  pages?: never;
  bottomPages?: never;
}

interface FooterComponentLayoutProps {
  /**
   * Custom footer component. When used, `footer` prop is ignored.
   */
  Footer: ReactElement;
  footer?: never;
}
interface FooterTextLayoutProps {
  /**
   * string for footer
   */
  footer: string;
  Footer?: never;
}

export type LayoutProps = BaseLayoutProps &
  (CognitoUserLayoutProps | CustomUserLayoutProps) &
  (PagesLayoutProps | ChildrenLayoutProps) &
  (FooterComponentLayoutProps | FooterTextLayoutProps);

/**
 * App Layout including header, aside, main and footer
 */
export function Layout(props: LayoutProps): ReactElement {
  const {
    AccountMenu,
    AccountSidebar,
    HeaderTitle,
    className,
    defaultPath,
    logoSrc,
    RightAside,
    signOut = Auth.signOut,
    title,
    user,
  } = props;
  const bps = useBps();
  // initial state makes sidebar open for laptop but closed for tablet and mobile
  const [open, setOpen] = useState(bps.bp3);
  useEffect(() => {
    // if changing from laptop to tablet, close sidebar
    // if changing from tablet to laptop, open sidebar
    setOpen(bps.bp3);
  }, [bps.bp3]);
  let navigation: ReactElement | undefined;
  let content: ReactElement | undefined;
  if (props.pages) {
    navigation = (
      <Navigation
        bottomPages={props.bottomPages}
        open={open}
        pages={props.pages}
        setOpen={setOpen}
      />
    );
    content = (
      <Content
        defaultPath={defaultPath}
        logoSrc={logoSrc}
        pages={props.pages}
      />
    );
  } else {
    navigation = (
      <Navigation
        NavigationList={props.NavigationList}
        open={open}
        setOpen={setOpen}
      />
    );
    content = (
      <Content defaultPath={defaultPath} logoSrc={logoSrc}>
        {props.children}
      </Content>
    );
  }
  let footer: ReactElement;
  if (props.footer) {
    footer = <Footer footer={props.footer} />;
  } else {
    footer = <Footer Footer={props.Footer} />;
  }
  return (
    <LayoutContainer className={className} rightAside={Boolean(RightAside)}>
      <Header
        logoSrc={logoSrc}
        open={open}
        setOpen={setOpen}
        signOut={signOut}
        title={title}
        user={user}
        AccountMenu={AccountMenu}
        AccountSidebar={AccountSidebar}
        HeaderTitle={HeaderTitle}
      />
      {navigation}
      {content}
      {RightAside && <RightAsideContainer>{RightAside}</RightAsideContainer>}
      {footer}
    </LayoutContainer>
  );
}
