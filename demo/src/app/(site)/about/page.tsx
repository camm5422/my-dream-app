import type { Metadata } from "next";
import PlaceholderPage from "@/components/PlaceholderPage";

export const metadata: Metadata = { title: "About" };

export default function AboutPage() {
  return (
    <PlaceholderPage
      route="/about"
      title="About"
      lead="The engineer behind Littlecore: bio and credentials."
    >
      <div className="card">Photo, bio and credentials coming soon.</div>
    </PlaceholderPage>
  );
}
