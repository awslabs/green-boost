import type { APIGatewayProxyHandler, APIGatewayProxyResult } from "aws-lambda";
import { BaseClient, TokenSet, Issuer, generators } from "openid-client";
import { getAction, getCallbackUrl } from "./common.js";
import { getCookiesFromHeader } from "../common.js";

interface CreateOAuthAdapterAdapterParams {
  clientId: string;
  clientSecret: string;
  issuer: Issuer;
  onAuthenticated: (
    params: OnAuthenticatedParams
  ) => Promise<APIGatewayProxyResult>;
  scope: string;
}

/**
 * OAuth2 adapter which uses the secure authorization code flow with PKCE to
 * obtain access, refresh and id tokens. To learn more about the OAuth2 flow,
 * see this excellent visual explanation [here](https://developer.okta.com/blog/2019/10/21/illustrated-guide-to-oauth-and-oidc#let-the-oauth-flow).
 */
export function createOAuthAdapter(
  params: CreateOAuthAdapterAdapterParams
): APIGatewayProxyHandler {
  const handler: APIGatewayProxyHandler = async (event) => {
    const { clientId, clientSecret, issuer, onAuthenticated, scope } = params;
    const action = getAction(event.path);
    const callbackUrl = getCallbackUrl(event.path);
    const client = new issuer.Client({
      client_id: clientId,
      client_secret: clientSecret,
      redirect_uris: [callbackUrl],
      response_types: ["code"],
    });
    const verifierCookieName = "auth-code-verifier";
    const stateCookieName = "auth-state";

    if (action === "authorize") {
      /**
       * random bytes encoded in url safe base64.
       */
      const codeVerifier = generators.codeVerifier();
      /**
       * random bytes encoded in url safe base64. in callback openid-client verifies that
       * the state sent to authorization server is same value returned
       */
      const state = generators.state();
      /**
       * SHA256 (S256) hash of codeVerifier.
       * Learn how codeVerifier and codeChallenge are used here:
       * https://github.com/panva/node-openid-client#authorization-code-flow
       * or
       * https://developer.okta.com/blog/2019/10/21/illustrated-guide-to-oauth-and-oidc#let-the-oauth-flow
       */
      const codeChallenge = generators.codeChallenge(codeVerifier);

      const authorizationUrl = client.authorizationUrl({
        scope: scope,
        code_challenge: codeChallenge,
        code_challenge_method: "S256",
        state,
      });

      const expires = new Date(Date.now() + 1000 * 30).toUTCString();
      return {
        statusCode: 302,
        body: "",
        multiValueHeaders: {
          "Set-Cookie": [
            `${verifierCookieName}=${codeVerifier}; HttpOnly; expires=${expires}`,
            `${stateCookieName}=${state}; HttpOnly; expires=${expires}`,
          ],
        },
        headers: {
          Location: authorizationUrl,
        },
      };
    } else {
      if (!event.pathParameters) {
        throw new Error("event.pathParameters missing");
      }
      const cookieString = event.headers["Cookie"];
      if (!cookieString) {
        throw new Error(`event.headers["Cookie"] is missing.`);
      }
      const cookies = getCookiesFromHeader(cookieString);
      const codeVerifier = cookies[verifierCookieName];
      const state = cookies[stateCookieName];
      const tokenSet = await client.oauthCallback(
        callbackUrl,
        event.pathParameters,
        { code_verifier: codeVerifier, state }
      );
      return onAuthenticated({ tokenSet, client });
    }
  };
  return handler;
}

interface OnAuthenticatedParams {
  tokenSet: TokenSet;
  client: BaseClient;
}
