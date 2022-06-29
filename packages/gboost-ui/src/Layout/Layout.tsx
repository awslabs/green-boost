import { ReactElement, useEffect, useState } from "react";
import { Auth } from "aws-amplify";
import type { useAuthenticator } from "@aws-amplify/ui-react";
import { styled, useBps } from "../index.js";
import type { Page } from "../index.js";
import { Header } from "./Header/Header.js";
import { Content } from "./Content.js";
import { Footer } from "./Footer.js";
import { Navigation } from "./Navigation/Navigation.js";
import { NavList } from "./Navigation/NavList.js";
import type { NavLink } from "./Navigation/NavLink.js";

const LayoutContainer = styled("div", {
  display: "grid",
  height: "100vh",
  gridTemplateAreas: `"header" "content" "footer"`,
  gridTemplateRows: "auto 1fr auto",
  "@bp3": {
    gridTemplateAreas: `"header header" "sidebar content" "sidebar footer"`,
    gridTemplateColumns: "auto 1fr",
    gridTemplateRows: "auto 1fr auto",
  },
});

export type CognitoUser = ReturnType<typeof useAuthenticator>["user"];

interface BaseLayoutProps {
  className?: string;
  /**
   * string for footer
   */
  footer?: string;
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
   * Logs off user
   * @default Auth.signOut
   */
  signOut?: () => unknown;
  /**
   * string for header title
   */
  title?: string;
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
  /**
   * Custom footer component. When used, `footer` prop is ignored.
   */
  Footer?: ReactElement;
  /**
   * Custom header title shown to right of hamburger menu. When used, `title`
   * and `logoSrc` prop aren't used in header.
   */
  HeaderTitle?: ReactElement;
}

interface PagesLayoutProps extends BaseLayoutProps {
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

interface ChildrenLayoutProps extends BaseLayoutProps {
  children: ReactElement;
  /**
   * Custom navigation list
   */
  NavigationList: typeof NavList;
}

export type LayoutProps = PagesLayoutProps | ChildrenLayoutProps;

/**
 * App Layout including header, aside, main and footer
 */
export function Layout(props: LayoutProps): ReactElement {
  const {
    className,
    footer,
    defaultPath,
    logoSrc,
    signOut = Auth.signOut,
    title,
    user,
    AccountMenu,
    AccountSidebar,
    Footer: UserFooter,
    HeaderTitle,
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
  if ("pages" in props) {
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
      ></Content>
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
  return (
    <LayoutContainer className={className}>
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
      <Footer footer={footer} Footer={UserFooter} />
    </LayoutContainer>
  );
}
