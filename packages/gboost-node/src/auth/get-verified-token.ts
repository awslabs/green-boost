import type { APIGatewayProxyEvent } from "aws-lambda";
import { createVerifier, VerifierOptions } from "fast-jwt";
import { getCookiesFromHeader, getKeyFromSSM } from "./common.js";
import type { Claims } from "./create-token-response.js";

let publicKey = "";

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
 *
 * Note, Lambdas that use this function must be created with Green Boost's
 * `Function` constuct.
 */
export async function getVerifiedToken(
  params: GetTokenParams
): Promise<Claims> {
  const { event, options } = params;
  if (!publicKey) {
    publicKey = await getKeyFromSSM({ event, type: "public" });
  }
  const verifier = createVerifier({
    cache: true,
    ...options,
    key: publicKey,
    algorithms: ["EdDSA"],
  });
  const token = getTokenFromEvent(params.event);
  return verifier(token);
}

function getTokenFromEvent(event: APIGatewayProxyEvent): string {
  const headerToken =
    event.headers["authorization"] || event.headers["Authorization"];
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
