// @ts-nocheck
import "@aws-amplify/ui-react/styles.css";
import "@fontsource/inter/variable.css";
import { globalStyles, Layout, theme as stitchesTheme } from "gboost-ui";
import { NavigationList } from "./components/NavigationList.js";
import { Pages } from "./pages/pages.js";
import { AmplifyProvider } from "@aws-amplify/ui-react";
import { theme } from "./theme.js";
import { Footer } from "./components/Footer.js";
import { HeaderTitle } from "./components/HeaderTitle.js";
import { AccountMenu } from "./components/AccountMenu.js";
import { useUser } from "./hooks/useUser.js";
import { Login } from "./Login.js";

export function App() {
  globalStyles();
  const { user } = useUser();
  if (!user.userId) {
    return <Login />;
  }
  return (
    <AmplifyProvider theme={theme}>
      <Layout
        AccountMenu={
          <AccountMenu
            user={{
              createdDate: "",
              email: "stickb@amazon.com",
              firstName: "Ben",
              userId: "f6012277-06e5-40cc-912d-df642c6e9732",
              lastName: "Stickley",
              organization: "PKH",
              updatedDate: "",
            }}
          />
        }
        className={stitchesTheme}
        HeaderTitle={<HeaderTitle />}
        NavigationList={({ open }) => <NavigationList open={open} />}
        Footer={<Footer />}
      >
        <Pages />
      </Layout>
    </AmplifyProvider>
  );
}
