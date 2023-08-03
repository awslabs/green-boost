// @ts-nocheck
import { listItemsUseCase, logger } from "@/core-server";
import type { PageProps } from "@/types/page-props";
import { redirect } from "next/navigation";
import { ItemsTable } from "./ItemsTable";
import { decodeSearchParams } from "@/utils/decode-search-params";

export const dynamic = "force-dynamic";

export default async function Page(props: PageProps) {
  try {
    const decodedSearchParams = decodeSearchParams(props.searchParams);
    const items = await listItemsUseCase(decodedSearchParams);
    return <ItemsTable items={items.map((i) => i.props)} />;
  } catch (err) {
    logger.error("Error at /items", { err });
  }
  redirect("/items");
}
