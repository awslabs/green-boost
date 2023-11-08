// @ts-nocheck
import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import {
  DynamoDBDocumentClient,
  UpdateCommandInput,
} from "@aws-sdk/lib-dynamodb";

const ddbClient = new DynamoDBClient({});
export const ddbDocClient = DynamoDBDocumentClient.from(ddbClient);

/**
 * @example
 * ```ts
 * console.log(generateDynamoUpdateParams({ name: "Item 1", description: "Item 1's Description" }));
 * `{
 *    ExpressionAttributeNames: { "#name": "name", "#description": "description" },
 *    ExpressionAttributeValues: { ":name": "Item 1", "#description": "Item 1's Description" },
 *    UpdateExpression: "set #name = :name, #description = :description",
 *  }`
 * ```
 */
export function generateDynamoUpdateParams(
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  attributes: Record<string, any>,
): Pick<
  UpdateCommandInput,
  "ExpressionAttributeNames" | "ExpressionAttributeValues" | "UpdateExpression"
> {
  const names: Record<string, string> = {};
  const values: Record<string, string> = {};
  let expression = "set";
  for (const [k, v] of Object.entries(attributes)) {
    const name = `#${k}`;
    names[name] = k;
    const value = `:${k}`;
    values[value] = v;
    expression += ` ${name} = ${value},`;
  }
  return {
    ExpressionAttributeNames: names,
    ExpressionAttributeValues: values,
    UpdateExpression: expression.slice(0, -1),
  };
}

/**
 * Encode DynamoDB's LastEvaluatedKey with base64 to send to frontend as cursor
 * @example
 * ```ts
 * encodeLastEvaluatedKey({ pk: 1 }) === "eyJwayI6MX0=";
 * ```
 */
export function encodeLastEvaluatedKey(key: Record<string, unknown>) {
  return Buffer.from(JSON.stringify(key)).toString("base64");
}
/**
 * Transforms LastEvaluatedKey from base64 back to object to be used with
 * DynamoDB Query API's ExclusiveStartKey
 * @example
 * ```ts
 * decodeLastEvaluatedKey("eyJwayI6MX0=");
 * { pk: 1 }
 * ```
 */
export function decodeLastEvaluatedKey(key: string): Record<string, unknown> {
  return JSON.parse(Buffer.from(key, "base64").toString());
}
