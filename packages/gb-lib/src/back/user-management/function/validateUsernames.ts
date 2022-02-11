import Joi from "joi";

export interface UsernameArgs {
  usernames: string[];
}

let schema: undefined | Joi.ObjectSchema;
export function validate(args: UsernameArgs) {
  if (!schema) {
    schema = Joi.object({
      usernames: Joi.array().items(Joi.string().max(128)).required(),
    });
  }
  Joi.assert(args, schema);
}
