import { GetParameterCommand, SSMClient } from "@aws-sdk/client-ssm";

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
