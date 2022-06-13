import {
  Table as CdkTable,
  TableProps as CdkTableProps,
} from "aws-cdk-lib/aws-dynamodb";
import type { Construct } from "constructs";
import { CommonProps, Stage } from "./common-props.js";

interface TableProps extends CommonProps, CdkTableProps {}

/**
 * DynamoDB table with default point-in-time recovery enabled
 */
export class Table extends CdkTable {
  constructor(scope: Construct, id: string, props: TableProps) {
    const { stage = Stage.Dev, ...newProps } = props;
    if (newProps.pointInTimeRecovery === undefined) {
      if (stage === Stage.Prod) {
        newProps.pointInTimeRecovery = true;
      }
    }
    super(scope, id, newProps);
  }
}
