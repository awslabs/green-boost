// @ts-nocheck
import { Stack, StackProps } from "aws-cdk-lib";
import { Table } from "gboost-infra";
import type { Construct } from "constructs";
import { AttributeType } from "aws-cdk-lib/aws-dynamodb";

type DataProps = StackProps;

export class Data extends Stack {
  table: Table;

  constructor(scope: Construct, id: string, props: DataProps) {
    super(scope, id, props);

    this.table = this.getTable();
  }

  getTable() {
    const table = new Table(this, "WidgetsTable", {
      partitionKey: { name: "pk", type: AttributeType.STRING },
      sortKey: { name: "sk", type: AttributeType.STRING },
    });
    table.addGlobalSecondaryIndex({
      indexName: "gsi1",
      partitionKey: { name: "sk", type: AttributeType.STRING },
      sortKey: { name: "gsi1sk", type: AttributeType.STRING },
    });
    return table;
  }
}
