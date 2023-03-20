import {
  DeleteCommand,
  GetCommand,
  PutCommand,
  QueryCommand,
  QueryCommandInput,
  UpdateCommand,
} from "@aws-sdk/lib-dynamodb";
import { CreateWidget, Widget } from "#models/widget";
import { config } from "../config.js";
import {
  ddbDocClient,
  decodeLastEvaluatedKey,
  encodeLastEvaluatedKey,
  generateDynamoUpdateParams,
} from "./ddb.js";
import { randomUUID } from "crypto";
import { TRPCError } from "@trpc/server";
import type { UpdateWidgetSchema } from "#schemas/widget-schemas";

interface WidgetsDbRepo {
  create: (params: CreateWidget) => Promise<Widget>;
  get: (id: string) => Promise<Widget>;
  list: (params: ListWidgetsDbParams) => Promise<ListWidgetsDbResponse>;
  remove: (id: string) => Promise<void>;
  update: (params: UpdateWidgetSchema) => Promise<void>;
}

async function create(params: CreateWidget): Promise<Widget> {
  const now = new Date().toISOString();
  const id = randomUUID();
  const item = {
    ...getDefaultPrimaryKey(id),
    gsi1sk: now,
    createdDate: now,
    updatedDate: now,
    id,
    ...params,
  };
  await ddbDocClient.send(
    new PutCommand({
      Item: item,
      TableName: config.widgetsTableName,
      ConditionExpression: "attribute_not_exists(pk)",
    })
  );
  return transformItemToWidget(item);
}

async function get(id: string) {
  const res = await ddbDocClient.send(
    new GetCommand({
      TableName: config.widgetsTableName,
      Key: getDefaultPrimaryKey(id),
    })
  );
  if (!res.Item) {
    throw new TRPCError({
      code: "NOT_FOUND",
    });
  } else {
    return transformItemToWidget(res.Item);
  }
}

interface ListWidgetsDbParams {
  limit: number;
  cursor: string | undefined;
}
interface ListWidgetsDbResponse {
  items: Widget[];
  nextCursor: string | undefined;
}
async function list(
  params: ListWidgetsDbParams
): Promise<ListWidgetsDbResponse> {
  const input: QueryCommandInput = {
    TableName: config.widgetsTableName,
    IndexName: "gsi1",
    KeyConditionExpression: "sk = :sk",
    ExpressionAttributeValues: { ":sk": "widget" },
    Limit: params.limit,
  };
  if (params.cursor) {
    input.ExclusiveStartKey = decodeLastEvaluatedKey(params.cursor);
  }
  const res = await ddbDocClient.send(new QueryCommand(input));
  const items: Widget[] = [];
  for (const item of res.Items || []) {
    items.push(transformItemToWidget(item));
  }
  const nextCursor = res.LastEvaluatedKey
    ? encodeLastEvaluatedKey(res.LastEvaluatedKey)
    : undefined;
  return { items, nextCursor };
}

async function remove(id: string) {
  await ddbDocClient.send(
    new DeleteCommand({
      Key: getDefaultPrimaryKey(id),
      TableName: config.widgetsTableName,
    })
  );
}

async function update(params: UpdateWidgetSchema) {
  const { id, ...attributes } = params;
  await ddbDocClient.send(
    new UpdateCommand({
      TableName: config.widgetsTableName,
      Key: getDefaultPrimaryKey(id),
      ...generateDynamoUpdateParams(attributes),
    })
  );
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function transformItemToWidget(item: Record<string, any>): Widget {
  return new Widget(item as Widget);
}

/**
 * Get default index primary key
 */
function getDefaultPrimaryKey(id: string): Record<string, string> {
  return { pk: `widget#${id}`, sk: "widget" };
}

export const widgetsDbRepo: WidgetsDbRepo = {
  create,
  get,
  list,
  remove,
  update,
};
