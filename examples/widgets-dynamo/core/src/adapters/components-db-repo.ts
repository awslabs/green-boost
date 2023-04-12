import {
  DeleteCommand,
  GetCommand,
  PutCommand,
  QueryCommand,
  QueryCommandInput,
  UpdateCommand,
} from "@aws-sdk/lib-dynamodb";
import { CreateComponent, Component } from "#models/component";
import {
  ddbDocClient,
  decodeLastEvaluatedKey,
  encodeLastEvaluatedKey,
  generateDynamoUpdateParams,
} from "./ddb.js";
import { randomUUID } from "crypto";
import { TRPCError } from "@trpc/server";
import type { UpdateComponentSchema } from "#schemas/component-schemas";
import { config } from "../config.js";

interface ComponentsDbRepo {
  create: (params: CreateComponent) => Promise<Component>;
  get: (id: string) => Promise<Component>;
  list: (params: ListComponentsDbParams) => Promise<ListComponentsDbResponse>;
  remove: (id: string) => Promise<void>;
  update: (params: UpdateComponentSchema) => Promise<void>;
}

async function create(params: CreateComponent): Promise<Component> {
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
  return transformItemToComponent(item);
}

interface ListComponentsDbParams {
  limit: number;
  cursor: string | undefined;
}
interface ListComponentsDbResponse {
  items: Component[];
  nextCursor: string | undefined;
}

async function list(
  params: ListComponentsDbParams
): Promise<ListComponentsDbResponse> {
  const input: QueryCommandInput = {
    TableName: config.widgetsTableName,
    IndexName: "gsi1",
    KeyConditionExpression: "sk = :sk",
    ExpressionAttributeValues: { ":sk": "component" },
    Limit: params.limit,
  };
  if (params.cursor) {
    input.ExclusiveStartKey = decodeLastEvaluatedKey(params.cursor);
  }
  const res = await ddbDocClient.send(new QueryCommand(input));
  const items: Component[] = [];
  for (const item of res.Items || []) {
    items.push(transformItemToComponent(item));
  }
  const nextCursor = res.LastEvaluatedKey
    ? encodeLastEvaluatedKey(res.LastEvaluatedKey)
    : undefined;
  return { items, nextCursor };
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
    return transformItemToComponent(res.Item);
  }
}

async function remove(id: string) {
  await ddbDocClient.send(
    new DeleteCommand({
      Key: getDefaultPrimaryKey(id),
      TableName: config.widgetsTableName,
    })
  );
}

async function update(params: UpdateComponentSchema) {
  const { id, ...attributes } = params;
  await ddbDocClient.send(
    new UpdateCommand({
      TableName: config.widgetsTableName,
      Key: getDefaultPrimaryKey(id),
      ...generateDynamoUpdateParams(attributes),
    })
  );
}

function transformItemToComponent(item: Record<string, any>): Component {
  return new Component(item as Component);
}

function getDefaultPrimaryKey(id: string): Record<string, string> {
  return { pk: `component#${id}`, sk: "component" };
}

export const componentsDbRepo: ComponentsDbRepo = {
  create,
  get,
  list,
  remove,
  update,
};
