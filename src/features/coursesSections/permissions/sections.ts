import { UserRole } from "@/drizzle/schema";

export function canCreateCoursesSections({
  role,
}: {
  role: UserRole | undefined;
}) {
  return role === "admin";
}

export function canUpdateCoursesSections({
  role,
}: {
  role: UserRole | undefined;
}) {
  return role === "admin";
}

export function canDeleteCoursesSections({
  role,
}: {
  role: UserRole | undefined;
}) {
  return role === "admin";
}
