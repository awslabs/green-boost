import { RemovalPolicy, Stack, StackProps } from "aws-cdk-lib";
// import { AttributeType, Table } from "aws-cdk-lib/aws-dynamodb";
import { Table } from "gboost-infra";
import type { Construct } from "constructs";
import { AttributeType } from "aws-cdk-lib/aws-dynamodb";
import { config } from "./config.js";

type DataProps = StackProps;

export class Data extends Stack {
  table: Table;

  constructor(scope: Construct, id: string, props: DataProps) {
    super(scope, id, props);

    this.table = this.getTable();
  }

  getTable() {
    return new Table(this, "StudentTable", {
      partitionKey: { name: "PK", type: AttributeType.STRING },
      sortKey: { name: "SK", type: AttributeType.STRING },
      removalPolicy: config.isPipelineStage
        ? RemovalPolicy.RETAIN
        : RemovalPolicy.DESTROY,
    });
  }
}
