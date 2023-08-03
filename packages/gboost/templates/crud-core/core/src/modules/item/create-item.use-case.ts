// @ts-nocheck
import { itemRepo } from "./item.repo";
import type { ItemInputSchema } from "./item.schema";

export async function createItemUseCase(props: ItemInputSchema): Promise<void> {
  await itemRepo.create(props);
}
