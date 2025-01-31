import { courseSectionStatuses } from "@/drizzle/schema";
import { z } from "zod";

export const sectionSchema = z.object({
  name: z.string().min(1, "Required").max(50, "Too long"),
  status: z.enum(courseSectionStatuses),
});
