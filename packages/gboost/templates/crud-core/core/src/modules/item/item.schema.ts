// @ts-nocheck
import { z } from "zod";
import { baseSchema } from "../base";

export const itemSchema = baseSchema.extend({
  description: z.string().max(500),
  id: z.string().uuid().optional(),
  name: z.string().min(1).max(100),
});
export type ItemSchema = z.infer<typeof itemSchema>;
export type ItemInputSchema = z.input<typeof itemSchema>;

export const listItemsSchema = z.object({
  page: z.coerce.number().min(0).max(1000).default(0),
  pageSize: z.coerce.number().min(0).max(100).default(10),
  filterField: z.enum(["name", "description"]).optional(),
  filterOperator: z
    .enum(["contains", "equals", "startsWith", "endsWith"])
    .optional(),
  filterValue: z.string().min(0).max(100).optional(),
  sortField: z.enum(["createdAt", "updatedAt"]).default("createdAt"),
  sortDirection: z.enum(["asc", "desc"]).default("desc"),
});
export type ListItemsInputSchema = z.input<typeof listItemsSchema>;
export type ListItemsSchema = z.infer<typeof listItemsSchema>;

export const updateItemSchema = itemSchema
  .partial()
  .extend({ id: z.string().uuid() });
export type UpdateItemInputSchema = z.input<typeof updateItemSchema>;
export type UpdateItemSchema = z.infer<typeof updateItemSchema>;
