import { widgetsDbRepo } from "#adapters/widgets-db-repo";
import type {
  CreateWidgetSchema,
  GetWidgetSchema,
  ListWidgetsSchema,
  RemoveWidgetSchema,
  UpdateWidgetSchema,
} from "#schemas/widget-schemas";

function create(params: CreateWidgetSchema) {
  return widgetsDbRepo.create(params);
}

function get({ id }: GetWidgetSchema) {
  return widgetsDbRepo.get(id);
}

function list(params: ListWidgetsSchema) {
  return widgetsDbRepo.list({
    cursor: params.cursor,
    limit: params.pageSize,
  });
}

function remove({ id }: RemoveWidgetSchema) {
  return widgetsDbRepo.remove(id);
}

function update(params: UpdateWidgetSchema) {
  return widgetsDbRepo.update(params);
}

export const widgetService = {
  create,
  get,
  list,
  remove,
  update,
};
