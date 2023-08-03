// @ts-nocheck
import { getItemUseCase } from "@/core-server";
import type { PageProps } from "@/types/page-props";
import { UpdateItem } from "./UpdateItem";
import { redirect } from "next/navigation";

export default async function Page({ params }: PageProps<{ id: string }>) {
  const { id } = params;
  const item = await getItemUseCase(id);
  if (item) {
    return <UpdateItem item={item.props} />;
  } else {
    return redirect("/item");
  }
}
