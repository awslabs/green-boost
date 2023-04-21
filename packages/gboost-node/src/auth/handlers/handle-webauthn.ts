import type { APIGatewayProxyResult } from "aws-lambda";
import type { Claims } from "../create-token-response.js";

interface HandleWebAuthnParams {
  onAuthenticated: (
    claims: Claims
  ) => Promise<APIGatewayProxyResult> | APIGatewayProxyResult;
  onError: (
    err: Error
  ) => Promise<APIGatewayProxyResult> | APIGatewayProxyResult;
}

export async function handleWebAuthn(
  params: HandleWebAuthnParams
): Promise<APIGatewayProxyResult> {
  params;
  return {
    body: "",
    statusCode: 501,
  };
}
