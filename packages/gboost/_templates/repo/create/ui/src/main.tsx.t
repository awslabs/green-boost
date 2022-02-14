---
to: ui/src/main.tsx
---

import Auth from "@aws-amplify/auth";
import Api from "@aws-amplify/api-graphql";
import { render } from "react-dom";
import { StrictMode } from "react";
import { BrowserRouter } from "react-router-dom";
import { App } from "./App.jsx";

Auth.configure({
  region: import.meta.env.VITE_AWS_REGION,
  userPoolId: import.meta.env.VITE_USER_POOL_ID,
  userPoolWebClientId: import.meta.env.VITE_USER_POOL_CLIENT_ID,
});

Api.configure({
  aws_appsync_graphqlEndpoint: import.meta.env.VITE_GQL_URL,
  aws_appsync_region: import.meta.env.VITE_AWS_REGION,
  aws_appsync_authenticationType: "AMAZON_COGNITO_USER_POOLS",
});

render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
  document.getElementById("app")
);
