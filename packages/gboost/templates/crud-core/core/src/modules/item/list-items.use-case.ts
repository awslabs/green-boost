// @ts-nocheck
import type { ItemEntity } from "./item.entity";
import type { SearchParams } from "../../types";
import { itemRepo } from "./item.repo";
import { listItemsSchema, type ListItemsInputSchema } from "./item.schema";

type ListBatchesUseCaseProps = ListItemsInputSchema | SearchParams | undefined;
export function listItemsUseCase(
  props: ListBatchesUseCaseProps,
): Promise<ItemEntity[]> {
  const result = listItemsSchema.parse(props);
  return itemRepo.list(result);
}
