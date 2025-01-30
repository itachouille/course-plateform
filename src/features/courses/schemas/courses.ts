import { z } from "zod";

export const courseSchema = z.object({
  name: z.string().min(1, "Required").max(50, "Too long"),
  description: z.string().min(1, "Required").max(200, "Too long"),
});
