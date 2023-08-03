// @ts-nocheck
import { dbWrite } from "../../adapters/secondary";
import type { ItemInputSchema } from "../../index.shared";
import { item } from "../../modules/item/item.db";

const items: ItemInputSchema[] = [];

for (const _i of Array(50).keys()) {
  items.push({
    name: `Item ${_i}`,
    description: `Item ${_i}'s Description`,
  });
}

await dbWrite.insert(item).values(items).execute();
