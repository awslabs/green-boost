// @ts-nocheck
import "./App.css.js";
import { Layout } from "gboost-ui";
import { AmplifyProvider, Heading, Text } from "@aws-amplify/ui-react";
import { theme } from "./theme.js";
import { config } from "src/config/config.js";

export function App() {
  return (
    <AmplifyProvider theme={theme}>
      <Layout
        HeaderTitle={
          <Heading level={3} color="white">
            {config.appTitle}
          </Heading>
        }
        Footer={<Text textAlign="center">{config.appTitle}</Text>}
      >
        <Heading level={1} marginBlockStart="large" textAlign="center">
          Hello, World!
        </Heading>
      </Layout>
    </AmplifyProvider>
  );
}
