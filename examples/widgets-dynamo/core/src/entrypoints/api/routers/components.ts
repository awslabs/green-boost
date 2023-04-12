import {
  createComponentSchema,
  getComponentSchema,
  listComponentsSchema,
  removeComponentSchema,
  updateComponentSchema,
} from "#schemas/component-schemas";
import { t } from "../trpc.js";
import { componentService } from "#services/component-service";

export const componentRouter = t.router({
  create: t.procedure
    .input(createComponentSchema)
    .mutation((req) => componentService.create(req.input)),
  get: t.procedure
    .input(getComponentSchema)
    .query((req) => componentService.get(req.input)),
  list: t.procedure
    .input(listComponentsSchema)
    .query((req) => componentService.list(req.input)),
  remove: t.procedure
    .input(removeComponentSchema)
    .mutation((req) => componentService.remove(req.input)),
  update: t.procedure
    .input(updateComponentSchema)
    .mutation((req) => componentService.update(req.input)),
});
