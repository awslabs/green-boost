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
  event: APIGatewayProxyEvent;
  /**
   * @link https://github.com/nearform/fast-jwt#createverifier
   */
  options?: Omit<VerifierOptions, "key" | "algorithms">;
}

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
