import type { APIGatewayProxyResult } from "aws-lambda";
import type { Claims } from "../create-token-response.js";

interface HandleSAMLParams {
  onAuthenticated: (
    claims: Claims
  ) => Promise<APIGatewayProxyResult> | APIGatewayProxyResult;
  onError: (
    err: Error
  ) => Promise<APIGatewayProxyResult> | APIGatewayProxyResult;
}

export async function handleSAML(
  params: HandleSAMLParams
): Promise<APIGatewayProxyResult> {
  params;
  return {
    body: "",
    statusCode: 501,
  };
}
