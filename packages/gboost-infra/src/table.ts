import {
  Table as CdkTable,
  TableProps as CdkTableProps,
} from "aws-cdk-lib/aws-dynamodb";
import type { Construct } from "constructs";
import { mergeDeep } from "gboost-common";
import { constructDefaultProps } from "./construct-default-props.js";

export type TableProps = CdkTableProps;

/**
 * DynamoDB Table
 */
export class Table extends CdkTable {
  constructor(scope: Construct, id: string, props: TableProps) {
    const newProps = mergeDeep<TableProps>(constructDefaultProps?.table, props);
    super(scope, id, newProps);
  }
}
