// @ts-nocheck
import type { SearchParams } from "@{{GB_APP_ID}}/core/shared";

export function decodeSearchParams(
  searchParams: SearchParams = {},
): SearchParams {
  const decodedSearchParams: SearchParams = {};
  for (const [key, value] of Object.entries(searchParams)) {
    if (Array.isArray(value)) {
      decodedSearchParams[key] = value.map(decodeURIComponent);
    } else if (value) {
      decodedSearchParams[key] = decodeURIComponent(value);
    }
  }
  return decodedSearchParams;
}
