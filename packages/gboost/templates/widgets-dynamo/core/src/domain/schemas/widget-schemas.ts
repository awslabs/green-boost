import type { z } from "zod";
import { listSchema } from "./common.js";

export const listWidgetsSchema = listSchema;
export type ListWidgetsSchema = z.infer<typeof listSchema>;
