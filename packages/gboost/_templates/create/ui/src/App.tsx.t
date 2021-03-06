import "@aws-amplify/ui-react/styles.css";
import "@fontsource/inter/variable.css";
import { AmplifyProvider } from "@aws-amplify/ui-react";
import { camelToSnake } from "gboost-common";
import {
  Authenticator,
  BreakpointsProvider,
  Layout,
  NotificationsProvider,
  config,
  globalStyles,
  getAmplifyTheme,
  Loading,
} from "gboost-ui";
import { userAttributes } from "common/userAttributes";
import { pages } from "./pages/pages.jsx";
import { theme } from "./theme.js";

const signUpAttributes = Object.keys(userAttributes).map(
  camelToSnake
) as "email"[]; // amplify doesn't export SignUpAttribute type
const title = import.meta.env.VITE_APP_TITLE as string;

export function App() {
  globalStyles();
  return (
    <AmplifyProvider theme={getAmplifyTheme(theme)}>
      <BreakpointsProvider media={config.media}>
        <NotificationsProvider>
          <Authenticator
            signUpAttributes={signUpAttributes}
            title={title}
          >
            {({ signOut, user }) =>
              user ? (
                <Layout
                  className={theme}
                  footer={title}
                  logoSrc="/favicon-32x32.png"
                  pages={pages}
                  signOut={signOut}
                  title={title}
                  user={user}
                />
              ) : (
                <Loading logoSrc="/apple-touch-icon.png" />
              )
            }
          </Authenticator>
        </NotificationsProvider>
      </BreakpointsProvider>
    </AmplifyProvider>
  );
}
