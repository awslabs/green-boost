// @ts-nocheck
import { Stack, StackProps } from "aws-cdk-lib";
import { Table } from "gboost-infra";
import type { Construct } from "constructs";
import { AttributeType } from "aws-cdk-lib/aws-dynamodb";
import { StageName } from "@{{GB_APP_ID}}/core";
import { NagSuppressions } from "cdk-nag";
import type { StageConfig } from "../../config/stage-config.js";

interface DataProps extends StackProps {
  config: StageConfig;
}

export class Data extends Stack {
  table: Table;

  constructor(scope: Construct, id: string, props: DataProps) {
    super(scope, id, props);

    this.table = this.getTable(props.config);
  }

  getTable(config: StageConfig) {
    const table = new Table(this, "ItemsTable", {
      partitionKey: { name: "pk", type: AttributeType.STRING },
      sortKey: { name: "sk", type: AttributeType.STRING },
    });
    if (
      config.enumStageName === StageName.Local ||
      config.enumStageName === StageName.Dev
    ) {
      NagSuppressions.addResourceSuppressions(table, [
        {
          id: "AwsSolutions-DDB3",
          reason: "Point-in-time Recovery not needed for local development",
        },
      ]);
    }
    table.addGlobalSecondaryIndex({
      indexName: "gsi1",
      partitionKey: { name: "sk", type: AttributeType.STRING },
      sortKey: { name: "gsi1sk", type: AttributeType.STRING },
    });
    return table;
  }
}
