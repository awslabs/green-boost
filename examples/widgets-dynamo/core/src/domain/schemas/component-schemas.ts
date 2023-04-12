import { CreateComponent } from "../models/component.js";
import { z } from "zod";
import { listSchema } from "./common.js";

export const createComponentSchema = z.object({
  description: z.string().max(100).optional(),
  expirationDate: z
    .string()
    .datetime()
    .refine((v) => new Date(v) > new Date()),
  name: z.string().max(50).min(1),
  price: z.number().min(1),
  rating: z.number().min(1).max(5).multipleOf(1),
  inStock: z.number().min(1),
}) satisfies z.ZodType<CreateComponent>;
export type CreateComponentSchema = z.infer<typeof createComponentSchema>;

export const getComponentSchema = z.object({
  id: z.string().uuid(),
});
export type GetComponentSchema = z.infer<typeof getComponentSchema>;

export const listComponentsSchema = listSchema;
export type ListComponentsSchema = z.infer<typeof listSchema>;

export const removeComponentSchema = z.object({
  id: z.string().uuid(),
});
export type RemoveComponentSchema = z.infer<typeof removeComponentSchema>;

export const updateComponentSchema = createComponentSchema.partial().extend({
  id: z.string().uuid(),
});
export type UpdateComponentSchema = z.infer<typeof updateComponentSchema>;
