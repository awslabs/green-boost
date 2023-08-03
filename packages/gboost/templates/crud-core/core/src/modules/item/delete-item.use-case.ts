// @ts-nocheck
import { itemRepo } from "./item.repo";

export async function deleteItemUseCase(id: string): Promise<void> {
  await itemRepo.remove(id);
}
