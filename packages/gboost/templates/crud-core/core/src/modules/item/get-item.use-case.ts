// @ts-nocheck
import type { ItemEntity } from "./item.entity";
import { itemRepo } from "./item.repo";

export async function getItemUseCase(
  id: string,
): Promise<ItemEntity | undefined> {
  return itemRepo.get(id);
}
