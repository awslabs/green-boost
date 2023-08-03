// @ts-nocheck
import { z } from "zod";

const datetime = z
  .string()
  .datetime()
  .default(() => new Date().toISOString());

export const baseSchema = z.object({
  createdAt: datetime,
  updatedAt: datetime,
});
export type BaseSchema = z.infer<typeof baseSchema>;
export type BaseInputSchema = z.input<typeof baseSchema>;
