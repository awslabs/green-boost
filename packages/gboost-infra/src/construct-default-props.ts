import type { BucketProps } from "./bucket/bucket.js";
import type { FunctionProps } from "./function.js";
import type { TableProps } from "./table.js";
import { mergeDeep } from "gboost-common";

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
  constructDefaultProps = mergeDeep(props, constructDefaultProps);
}
