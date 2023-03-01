import {
  Table as CdkTable,
  TableProps as CdkTableProps,
} from "aws-cdk-lib/aws-dynamodb";
import type { Construct } from "constructs";

export type TableProps = CdkTableProps;

/**
 * DynamoDB Table
 */
export class Table extends CdkTable {
  constructor(scope: Construct, id: string, props: TableProps) {
    super(scope, id, props);
  }
}
