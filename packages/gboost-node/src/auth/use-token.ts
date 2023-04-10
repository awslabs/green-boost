import type { APIGatewayProxyResult } from "aws-lambda";
import { createSigner, createVerifier, SignerOptions } from "fast-jwt";
import {
  getCookiesFromHeader,
  getPrivateKey,
  getPublicKey,
  getRequestData,
} from "./common.js";

/**
 * Claims added to JWT payload for your frontend or downstream API to read.
 * More specifically, these claims are private claims in that they're specific
 * to your app. Additional claims on JWT include public and registered claims.
 * Learn more about them [here](https://jwt.io/introduction)
 *
 * This type should be overriden by developer like below example
 * @example
 * ```ts
 * declare module "gboost-infra/auth" {
 *   export interface PrivateClaims {
 *     userId: string;
 *   }
 * }
 * ```
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type Claims = Record<string, any>;

interface CreateTokenParams {
  claims: Claims;
  options?: Omit<SignerOptions, "key" | "algorithm">;
}
/**
 * Creates JWT signed with private key.
 */
export function createToken(params: CreateTokenParams): string {
  const { options, claims } = params;
  const signer = createSigner({
    ...options,
    key: getPrivateKey(),
    algorithm: "EdDSA",
  });
  return signer(claims);
}

interface CreateTokenResponseParams {
  claims: Claims;
  /**
   * JWT Signing Options
   */
  options?: Omit<SignerOptions, "key" | "algorithm">;
  /**
   * "Location" header to be returned with 302 status code
   */
  redirectLocation: string;
  /**
   * If "queryParameter", then token is added to `redirectLocation` like
   * https://redirect-location?token=123. If "cookie", then cookie is set with:
   * auth-token=123; SameSite=None; Secure; Path=/; Expires= `options.expiresIn`
   * or a day from now. If more control is needed, use `createToken` and create
   * your own `APIGatewayProxyResult`.
   * @default "queryParameter"
   */
  type: "queryParameter" | "cookie";
}

/**
 * Returns API Gateway redirect response with signed JWT either in query
 * parameter or cookie depending on `type` parameter.
 */
export function createTokenResponse(
  params: CreateTokenResponseParams
): APIGatewayProxyResult {
  const { claims, options, redirectLocation, type = "queryParameter" } = params;
  const token = createToken({ claims, options });
  const headers: APIGatewayProxyResult["headers"] = {
    Location: redirectLocation,
  };
  if (type === "queryParameter") {
    headers["Location"] = headers["Location"] + `?token=${token}`;
  } else {
    const dayFromNowMs = 1000 * 60 * 60 * 24;
    const expires = new Date(
      Date.now() + (options?.expiresIn || dayFromNowMs)
    ).toUTCString();
    headers[
      "Set-Cookie"
    ] = `authorization=${token}; SameSite=None; Secure; Path=/; Expires=${expires}`;
  }
  return {
    statusCode: 302,
    body: "",
    headers,
  };
}

function getToken(): string {
  const requestData = getRequestData();
  const headerToken = requestData.event.headers["authorization"];
  if (headerToken) {
    return headerToken;
  }
  const stringCookies = requestData.event.headers["Cookie"];
  if (!stringCookies) {
    throw new Error("authorization and cookie header missing");
  }
  const cookies = getCookiesFromHeader(stringCookies);
  const cookieToken = cookies["authorization"];
  if (cookieToken) {
    return cookieToken;
  }
  throw new Error("authorization header missing and no authorization cookie");
}

export function useToken(): Claims {
  const verifier = createVerifier({
    key: getPublicKey(),
    algorithms: ["EdDSA"],
    cache: true,
  });
  const token = getToken();
  return verifier(token);
}
