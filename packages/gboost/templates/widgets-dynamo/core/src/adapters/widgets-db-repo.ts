// @ts-nocheck
import { paginateQuery, PutCommand } from "@aws-sdk/lib-dynamodb";
import { CreateWidget, Widget } from "../domain/models/widget.js";
import { config } from "../config.js";
import { ddbDocClient } from "./ddb.js";
import { randomUUID } from "crypto";

interface WidgetsDbRepo {
  create: (params: CreateWidget) => Promise<Widget>;
  list: (params: ListWidgetsDbParams) => Promise<Widget[]>;
}

async function create(params: CreateWidget): Promise<Widget> {
  const now = new Date().toISOString();
  const id = randomUUID();
  const item = {
    pk: `widget#${id}`,
    sk: "widget",
    gsi1sk: now,
    createdDate: now,
    updatedDate: now,
    id,
    ...params,
  };
  await ddbDocClient.send(
    new PutCommand({
      Item: item,
      TableName: config.widgetsTable,
      ConditionExpression: "attribute_not_exists(pk)",
    })
  );
  const createdWidget = new Widget(item as Widget);
  return createdWidget;
}

interface ListWidgetsDbParams {
  limit: number;
  cursor: string | undefined;
}
async function list(params: ListWidgetsDbParams): Promise<Widget[]> {
  const paginator = paginateQuery(
    { client: ddbDocClient, startingToken: params.cursor },
    {
      TableName: config.widgetsTable,
      IndexName: "gsi1",
      KeyConditionExpression: "sk = :sk",
      ExpressionAttributeValues: { ":sk": "widget" },
      Limit: params.limit,
      ExclusiveStartKey: { S: params.cursor },
    }
  );
  const items: Widget[] = [];
  for await (const page of paginator) {
    if (page.Items) {
      items.push(...(page.Items as Widget[]));
    }
  }
  return items;
}

export const widgetsDbRepo: WidgetsDbRepo = {
  create,
  list,
};
