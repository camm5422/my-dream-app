import type { ReactNode } from "react";
import SiteShell from "@/components/SiteShell";

export default function KidsLayout({ children }: { children: ReactNode }) {
  return <SiteShell zone="kids">{children}</SiteShell>;
}
