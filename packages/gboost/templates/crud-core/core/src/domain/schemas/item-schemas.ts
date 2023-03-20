// @ts-nocheck
import { CreateItem, ItemStep } from "../models/item.js";
import { z } from "zod";
import { listSchema } from "./common.js";

export const createItemSchema = z.object({
  active: z.boolean(),
  expirationDate: z
    .string()
    .datetime()
    .refine((v) => new Date(v) > new Date()),
  name: z.string().max(50).min(1),
  description: z.string().max(100).optional(),
  price: z.number().min(1),
  rating: z.number().min(1).max(5).multipleOf(1),
  step: z.nativeEnum(ItemStep),
}) satisfies z.ZodType<CreateItem>;
export type CreateItemSchema = z.infer<typeof createItemSchema>;

export const getItemSchema = z.object({
  id: z.string().uuid(),
});
export type GetItemSchema = z.infer<typeof getItemSchema>;

export const listItemsSchema = listSchema;
export type ListItemsSchema = z.infer<typeof listSchema>;

export const removeItemSchema = z.object({
  id: z.string().uuid(),
});
export type RemoveItemSchema = z.infer<typeof removeItemSchema>;

export const updateItemSchema = createItemSchema.partial().extend({
  id: z.string().uuid(),
});
export type UpdateItemSchema = z.infer<typeof updateItemSchema>;

