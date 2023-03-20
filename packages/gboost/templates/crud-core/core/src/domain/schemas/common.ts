// @ts-nocheck
import { z } from "zod";

export const listSchema = z.object({
  cursor: z.string().optional(),
  pageSize: z.number().max(100).default(10),
});
export type ListSchema = z.infer<typeof listSchema>;
