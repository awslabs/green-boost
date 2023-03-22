// @ts-nocheck
import "./App.css.js";
import { Layout } from "gboost-ui";
import { AmplifyProvider, Heading, Text } from "@aws-amplify/ui-react";
import { theme } from "./theme.js";

export function App() {
  return (
    <AmplifyProvider theme={theme}>
      <Layout
        HeaderTitle={
          <Heading level={3} color="white">
            Minimal App
          </Heading>
        }
        Footer={<Text textAlign="center">Minimal App</Text>}
      >
        <Heading level={1} marginBlockStart="large" textAlign="center">
          Hello, World!
        </Heading>
      </Layout>
    </AmplifyProvider>
  );
}
