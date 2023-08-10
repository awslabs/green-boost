import { BaseEntity } from "../base";
import {
  itemSchema,
  type ItemSchema,
  type ItemInputSchema,
} from "./item.schema";

/**
 * Items
 */
export class ItemEntity extends BaseEntity {
  override readonly props: ItemSchema;

  constructor(props: ItemInputSchema) {
    super(props);
    this.props = itemSchema.parse(props);
  }
}
