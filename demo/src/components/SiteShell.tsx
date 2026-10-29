import type { ReactNode } from "react";
import type { Zone } from "@/lib/nav";
import SiteFooter from "./SiteFooter";
import SiteHeader from "./SiteHeader";

/** Header, page body and footer. Pass `zone` to apply a zone's colours and shapes to the whole page. */
export default function SiteShell({ zone, children }: { zone?: Zone; children: ReactNode }) {
  return (
    <div className="shell" data-track={zone}>
      <SiteHeader />
      <main>{children}</main>
      <SiteFooter />
    </div>
  );
}
