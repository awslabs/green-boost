import {
  Table as CdkTable,
  TableProps as CdkTableProps,
} from "aws-cdk-lib/aws-dynamodb";
import type { Construct } from "constructs";
import { Stage } from "./stages.js";

interface TableProps extends CdkTableProps {
  stage: string;
}

export class Table extends CdkTable {
  constructor(scope: Construct, id: string, props: TableProps) {
    const { stage, ...newProps } = props;
    if (newProps.pointInTimeRecovery === undefined) {
      if (stage === Stage.Prod) {
        newProps.pointInTimeRecovery = true;
      }
    }
    super(scope, id, newProps);
  }
}
