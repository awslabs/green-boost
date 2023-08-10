import {
  baseSchema,
  type BaseSchema,
  type BaseInputSchema,
} from "./base.schema";

export abstract class BaseEntity {
  readonly props: BaseSchema;

  constructor(props: BaseInputSchema) {
    this.props = baseSchema.parse(props);
  }
}
