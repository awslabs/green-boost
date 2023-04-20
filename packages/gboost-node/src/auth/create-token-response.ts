import type { APIGatewayProxyResult } from "aws-lambda";
import { createSigner, SignerOptions } from "fast-jwt";
import { getKeyFromSSM } from "./common.js";

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
 *   export interface Claims {
 *     userId: string;
 *   }
 * }
 * ```
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type Claims = Record<string, any>;

interface CreateTokenParams {
  claims: Claims;
  /**
   * @link https://github.com/nearform/fast-jwt#createsigner
   */
  options?: Omit<SignerOptions, "key" | "algorithm">;
}

let privateKey = "";

/**
 * Creates JWT signed with private key.
 */
export async function createToken(params: CreateTokenParams): Promise<string> {
  const { options, claims } = params;
  if (!privateKey) {
    privateKey = await getKeyFromSSM("/gboost/auth/private-key");
  }
  const signer = createSigner({
    ...options,
    key: privateKey,
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
  type?: "queryParameter" | "cookie";
}

/**
 * Returns API Gateway redirect response with signed JWT either in query
 * parameter or cookie depending on `type` parameter.
 */
export async function createTokenResponse(
  params: CreateTokenResponseParams
): Promise<APIGatewayProxyResult> {
  const { claims, options, redirectLocation, type = "queryParameter" } = params;
  const token = await createToken({ claims, options });
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
