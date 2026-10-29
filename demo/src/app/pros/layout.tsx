import type { ReactNode } from "react";
import SiteShell from "@/components/SiteShell";

export default function ProsLayout({ children }: { children: ReactNode }) {
  return <SiteShell zone="pros">{children}</SiteShell>;
}
