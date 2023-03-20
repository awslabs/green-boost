import { CreateWidget, WidgetStep } from "../models/widget.js";
import { z } from "zod";
import { listSchema } from "./common.js";

export const createWidgetSchema = z.object({
  active: z.boolean(),
  expirationDate: z
    .string()
    .datetime()
    .refine((v) => new Date(v) > new Date()),
  name: z.string().max(50).min(1),
  description: z.string().max(100).optional(),
  price: z.number().min(1),
  rating: z.number().min(1).max(5).multipleOf(1),
  step: z.nativeEnum(WidgetStep),
}) satisfies z.ZodType<CreateWidget>;
export type CreateWidgetSchema = z.infer<typeof createWidgetSchema>;

export const getWidgetSchema = z.object({
  id: z.string().uuid(),
});
export type GetWidgetSchema = z.infer<typeof getWidgetSchema>;

export const listWidgetsSchema = listSchema;
export type ListWidgetsSchema = z.infer<typeof listSchema>;

export const removeWidgetSchema = z.object({
  id: z.string().uuid(),
});
export type RemoveWidgetSchema = z.infer<typeof removeWidgetSchema>;

export const updateWidgetSchema = createWidgetSchema.partial().extend({
  id: z.string().uuid(),
});
export type UpdateWidgetSchema = z.infer<typeof updateWidgetSchema>;
