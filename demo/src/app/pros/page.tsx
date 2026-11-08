import type { Metadata } from "next";
import PlaceholderPage from "@/components/PlaceholderPage";

export const metadata: Metadata = { title: "Pros zone" };

export default function ProsPage() {
  return (
    <PlaceholderPage
      route="/pros"
      title="Pros zone"
      lead="Ages 16+ and early career. I&C systems, standards and regulation."
      cards={["Systems content", "Standards and regulators"]}
    />
  );
}
