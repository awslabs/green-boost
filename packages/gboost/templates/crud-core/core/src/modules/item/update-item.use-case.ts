// @ts-nocheck
import { itemRepo } from "./item.repo";
import type { UpdateItemInputSchema } from "./item.schema";

export async function updateItemUseCase(
  props: UpdateItemInputSchema,
): Promise<void> {
  await itemRepo.update(props);
}
