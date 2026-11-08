import type { ReactNode } from "react";
import type { Zone } from "@/lib/nav";
import SiteFooter from "./SiteFooter";
import SiteHeader from "./SiteHeader";

type Props = {
  /** Apply a zone's colours and shapes to the whole page */
  zone?: Zone;
  /** "projector" switches to the dark, high-contrast, large-text look (teacher and big-screen view) */
  view?: "projector";
  children: ReactNode;
};

/** Header, page body and footer, themed by section (data-track) and view (data-view). */
export default function SiteShell({ zone, view, children }: Props) {
  return (
    <div className="shell" data-track={zone} data-view={view}>
      <SiteHeader />
      <main>{children}</main>
      <SiteFooter />
    </div>
  );
}
