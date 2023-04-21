import type { APIGatewayProxyResult } from "aws-lambda";
import type { Claims } from "../create-token-response.js";

interface HandleLinkParams {
  onAuthenticated: (
    claims: Claims
  ) => Promise<APIGatewayProxyResult> | APIGatewayProxyResult;
  onError: (
    error: Error
  ) => Promise<APIGatewayProxyResult> | APIGatewayProxyResult;
  onLink: (
    link: string,
    claims: Claims
  ) => Promise<APIGatewayProxyResult> | APIGatewayProxyResult;
}

export async function handleLink(
  params: HandleLinkParams
): Promise<APIGatewayProxyResult> {
  params;
  return {
    body: "",
    statusCode: 501,
  };
}
