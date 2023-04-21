import { GetParameterCommand, SSMClient } from "@aws-sdk/client-ssm";
import type { APIGatewayProxyEvent } from "aws-lambda";

/**
 * Transforms "cookie1=value1; cookie2=value2" into `{ cookie1: "value1", cookie2: "value2" }`
 */
export function getCookiesFromHeader(header: string): Record<string, string> {
  const keyValues = header.split(";");
  const cookies: Record<string, string> = {};
  for (const keyValue of keyValues) {
    const [key, value] = keyValue.split("=");
    if (key && value) {
      cookies[key.trim()] = decodeURI(value);
    }
  }
  return cookies;
}

const ssmClient = new SSMClient({});
interface GetKeyFromSSMParams {
  event: APIGatewayProxyEvent;
  type: "private" | "public";
}
export async function getKeyFromSSM(params: GetKeyFromSSMParams) {
  const name = getKeyName(params);
  const result = await ssmClient.send(
    new GetParameterCommand({
      Name: name,
      WithDecryption: true,
    })
  );
  const key = result.Parameter?.Value;
  if (!key) {
    throw new Error("Missing key: " + name);
  }
  return key;
}

interface GetKeyNameParams {
  event: APIGatewayProxyEvent;
  type: "private" | "public";
}
function getKeyName(params: GetKeyNameParams): string {
  const { event, type } = params;
  return `/gboost/auth/${event.requestContext.apiId}/${type}-key`;
}
