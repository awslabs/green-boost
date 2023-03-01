import { z } from "zod";

export const listSchema = z.object({
  cursor: z.string(),
  pageSize: z.number(),
});
export type ListSchema = z.infer<typeof listSchema>;
