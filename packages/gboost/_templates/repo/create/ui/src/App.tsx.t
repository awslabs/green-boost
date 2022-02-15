---
to: ui/src/App.tsx
---

import "@aws-amplify/ui-react/styles.css";
import "@fontsource/inter/variable.css";
import { AmplifyProvider } from "@aws-amplify/ui-react";
import { camelToSnake } from "gboost-common";
import {
  AppProviders,
  Authenticator,
  Layout,
  config,
  globalStyles,
  getAmplifyTheme,
} from "gboost-ui";
import { userAttributes } from "common/userAttributes";
import { pages } from "./pages/pages.jsx";
import { theme } from "./theme.js";

const signUpAttributes = Object.keys(userAttributes).map(
  camelToSnake
) as "email"[]; // amplify doesn't export SignUpAttribute type

export function App() {
  globalStyles();
  return (
    <AmplifyProvider theme={getAmplifyTheme(theme)}>
      <AppProviders media={config.media}>
        <Authenticator signUpAttributes={signUpAttributes}>
          {({ user, signOut }) => (
            <Layout
              className={theme}
              logoSrc="/favicon-32x32.png"
              pages={pages}
              signOut={signOut}
              user={user}
            />
          )}
        </Authenticator>
      </AppProviders>
    </AmplifyProvider>
  );
}
