// @ts-nocheck
"use server";

import { updateItemUseCase } from "@/core-server";
import { revalidatePath } from "next/cache";

export async function updateItemAction(
  props: Parameters<typeof updateItemUseCase>[0],
) {
  await updateItemUseCase(props);
  revalidatePath("/items");
}
