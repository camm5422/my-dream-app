import type { Metadata } from "next";
import PlaceholderPage from "@/components/PlaceholderPage";

export const metadata: Metadata = { title: "Privacy" };

export default function PrivacyPage() {
  return (
    <PlaceholderPage
      route="/privacy"
      title="Privacy"
      lead="No accounts. Progress stays on your device."
    >
      <div className="card">Full privacy notice coming soon.</div>
    </PlaceholderPage>
  );
}
