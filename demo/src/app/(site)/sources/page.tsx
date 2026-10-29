import type { Metadata } from "next";
import PlaceholderPage from "@/components/PlaceholderPage";

export const metadata: Metadata = { title: "Sources" };

export default function SourcesPage() {
  return (
    <PlaceholderPage
      route="/sources"
      title="Sources"
      lead="Every fact on the site comes from public sources, such as IAEA open publications."
    >
      <div className="card">List of cited sources coming soon.</div>
    </PlaceholderPage>
  );
}
