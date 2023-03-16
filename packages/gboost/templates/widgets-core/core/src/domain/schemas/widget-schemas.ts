// @ts-nocheck
import { CreateWidget, WidgetStep } from "../models/widget.js";
import { z } from "zod";
import { listSchema } from "./common.js";

export const listWidgetsSchema = listSchema;
export type ListWidgetsSchema = z.infer<typeof listSchema>;

export const createWidgetSchema = z.object({
  active: z.boolean(),
  expirationDate: z.string().datetime(),
  name: z.string().max(50).min(1),
  description: z.string().max(100).min(1),
  price: z.number().min(1),
  rating: z.number().min(1).max(5).multipleOf(1),
  step: z.nativeEnum(WidgetStep),
}) satisfies z.ZodType<CreateWidget>;

export type CreateWidgetSchema = z.infer<typeof createWidgetSchema>;
