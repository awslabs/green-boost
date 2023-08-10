// @ts-nocheck
import type { SearchParams } from "@{{GB_APP_ID}}/core/shared";

/**
 * Generic Next.js props for page.tsx function.
 */
export type PageProps<
  T extends Record<string, string> = Record<string, string>,
> = {
  params: T;
  searchParams?: SearchParams;
};
