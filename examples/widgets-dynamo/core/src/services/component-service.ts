import { componentsDbRepo } from "#adapters/components-db-repo";
import type {
  CreateComponentSchema,
  GetComponentSchema,
  ListComponentsSchema,
  RemoveComponentSchema,
  UpdateComponentSchema,
} from "#schemas/component-schemas";

function create(params: CreateComponentSchema) {
  return componentsDbRepo.create(params);
}

function get({ id }: GetComponentSchema) {
  return componentsDbRepo.get(id);
}

function list(params: ListComponentsSchema) {
  return componentsDbRepo.list({
    cursor: params.cursor,
    limit: params.pageSize,
  });
}

function remove({ id }: RemoveComponentSchema) {
  return componentsDbRepo.remove(id);
}

function update(params: UpdateComponentSchema) {
  return componentsDbRepo.update(params);
}

export const componentService = {
  create,
  get,
  list,
  remove,
  update,
};
