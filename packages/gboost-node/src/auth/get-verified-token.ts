import type { APIGatewayProxyEvent } from "aws-lambda";
import { createVerifier, VerifierOptions } from "fast-jwt";
import { getCookiesFromHeader, getPublicKey } from "./common.js";
import type { Claims } from "./create-token-response.js";

function getTokenFromEvent(event: APIGatewayProxyEvent): string {
  const headerToken = event.headers["authorization"];
  if (headerToken) {
    return headerToken;
  }
  const stringCookies = event.headers["Cookie"];
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

interface GetTokenParams {
  /**
   * API Gateway Proxy Event to extract token from
   */
  event: APIGatewayProxyEvent;
  /**
   * JWT Verifier Options
   * @link https://github.com/nearform/fast-jwt#createverifier
   */
  options?: Omit<VerifierOptions, "key" | "algorithms">;
}

/**
 * Get cryptographically verified claims on token that were set in Lambda
 * handler created by `createAuthHandler`. If you'd like the entire token
 * returned, set the `options` property to `{ complete: true }`.
 */
export function getVerifiedToken(params: GetTokenParams): Claims {
  const verifier = createVerifier({
    cache: true,
    ...params.options,
    key: getPublicKey(),
    algorithms: ["EdDSA"],
  });
  const token = getTokenFromEvent(params.event);
  return verifier(token);
}
