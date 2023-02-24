import { deepmerge } from "deepmerge-ts";
import { BucketProps } from "./bucket.js";
import { FunctionProps } from "./function.js";
import { TableProps } from "./table.js";

/**
 * Default props for all constructs from gboost-infra
 */
export interface ConstructDefaultProps {
  bucket?: Partial<BucketProps>;
  function?: Partial<FunctionProps>;
  table?: Partial<TableProps>;
}

export let constructDefaultProps: ConstructDefaultProps = {};

/**
 * Set gboost-infra's default construct props by deep merging.
 */
export function setConstructDefaultProps(props: ConstructDefaultProps) {
  constructDefaultProps = deepmerge(props, constructDefaultProps);
}
