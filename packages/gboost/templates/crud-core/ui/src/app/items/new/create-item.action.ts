// @ts-nocheck
"use server";

import { createItemUseCase } from "@/core-server";
import { revalidatePath } from "next/cache";

export async function createItemAction(
  props: Parameters<typeof createItemUseCase>[0],
) {
  await createItemUseCase(props);
  revalidatePath("/items");
}
