// @ts-nocheck
import {
  DeleteCommand,
  GetCommand,
  PutCommand,
  QueryCommand,
  QueryCommandInput,
  UpdateCommand,
} from "@aws-sdk/lib-dynamodb";
import { CreateItem, Item } from "../domain/models/item.js";
import { config } from "../config/config.js";
import {
  ddbDocClient,
  decodeLastEvaluatedKey,
  encodeLastEvaluatedKey,
  generateDynamoUpdateParams,
} from "./ddb.js";
import { randomUUID } from "crypto";
import { TRPCError } from "@trpc/server";
import type { UpdateItemSchema } from "../domain/schemas/item-schemas.js";

interface ItemsDbRepo {
  create: (params: CreateItem) => Promise<Item>;
  get: (id: string) => Promise<Item>;
  list: (params: ListItemsDbParams) => Promise<ListItemsDbResponse>;
  remove: (id: string) => Promise<void>;
  update: (params: UpdateItemSchema) => Promise<void>;
}

async function create(params: CreateItem): Promise<Item> {
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
      TableName: config.itemTableName,
      ConditionExpression: "attribute_not_exists(pk)",
    })
  );
  return transformItem(item);
}

async function get(id: string) {
  const res = await ddbDocClient.send(
    new GetCommand({
      TableName: config.itemTableName,
      Key: getDefaultPrimaryKey(id),
    })
  );
  if (!res.Item) {
    throw new TRPCError({
      code: "NOT_FOUND",
    });
  } else {
    return transformItem(res.Item);
  }
}

interface ListItemsDbParams {
  limit: number;
  cursor: string | undefined;
}
interface ListItemsDbResponse {
  items: Item[];
  nextCursor: string | undefined;
}
async function list(params: ListItemsDbParams): Promise<ListItemsDbResponse> {
  const input: QueryCommandInput = {
    TableName: config.itemTableName,
    IndexName: "gsi1",
    KeyConditionExpression: "sk = :sk",
    ExpressionAttributeValues: { ":sk": "item" },
    Limit: params.limit,
  };
  if (params.cursor) {
    input.ExclusiveStartKey = decodeLastEvaluatedKey(params.cursor);
  }
  const res = await ddbDocClient.send(new QueryCommand(input));
  const items: Item[] = [];
  for (const item of res.Items || []) {
    items.push(transformItem(item));
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
      TableName: config.itemTableName,
    })
  );
}

async function update(params: UpdateItemSchema) {
  const { id, ...attributes } = params;
  await ddbDocClient.send(
    new UpdateCommand({
      TableName: config.itemTableName,
      Key: getDefaultPrimaryKey(id),
      ...generateDynamoUpdateParams(attributes),
    })
  );
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function transformItem(item: Record<string, any>): Item {
  return new Item(item as Item);
}

/**
 * Get default index primary key
 */
function getDefaultPrimaryKey(id: string): Record<string, string> {
  return { pk: `item#${id}`, sk: "item" };
}

export const itemsDbRepo: ItemsDbRepo = {
  create,
  get,
  list,
  remove,
  update,
};
