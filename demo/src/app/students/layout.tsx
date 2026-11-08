import type { ReactNode } from "react";
import SiteShell from "@/components/SiteShell";

export default function StudentsLayout({ children }: { children: ReactNode }) {
  return <SiteShell zone="students">{children}</SiteShell>;
}
