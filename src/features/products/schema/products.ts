import { productStatuses } from "@/drizzle/schema";
import { z } from "zod";

export const productSchema = z.object({
  name: z.string().min(1, "Required").max(50, "Too long"),
  priceInDollars: z.number().int().nonnegative(),
  description: z.string().min(1, "Required").max(200, "Too long"),
  imageUrl: z.union([
    z.string().url("Invalid url"),
    z.string().startsWith("/", "Invalid url"),
  ]),
  status: z.enum(productStatuses),
  courseIds: z.array(z.string()).min(1, "At least one course is required"),
});
