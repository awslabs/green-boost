// @ts-nocheck
import type { Config } from "drizzle-kit";

export default {
  out: `./src/db/drizzle`,
  schema: `./src/modules/**/*.db.ts`,
} satisfies Config;
