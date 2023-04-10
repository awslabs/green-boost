import { GetParameterCommand, SSMClient } from "@aws-sdk/client-ssm";
import type { Context, APIGatewayProxyEvent } from "aws-lambda";

interface RequestData {
  event: APIGatewayProxyEvent;
  context: Context;
}

let requestData: RequestData | undefined = undefined;
export function setRequestData(value: RequestData | undefined) {
  requestData = value;
}
export function getRequestData(): RequestData {
  if (!requestData) {
    throw new Error("requestData is missing");
  }
  return requestData;
}

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

let privateKey: string | undefined = undefined;
export function setPrivateKey(value: string) {
  privateKey = value;
}
export function getPrivateKey(): string {
  if (!privateKey) {
    throw new Error("privateKey is missing");
  }
  return privateKey;
}

let publicKey: string | undefined = undefined;
export function setPublicKey(value: string) {
  publicKey = value;
}
export function getPublicKey(): string {
  if (!publicKey) {
    throw new Error("privateKey is missing");
  }
  return publicKey;
}

const ssmClient = new SSMClient({});
export async function getKeyFromSSM(name: string) {
  const result = await ssmClient.send(
    new GetParameterCommand({
      Name: name,
      WithDecryption: true,
    })
  );
  const privateKey = result.Parameter?.Value;
  if (!privateKey) {
    throw new Error("Missing key: " + name);
  }
  return privateKey;
}
