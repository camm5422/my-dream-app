import type { Metadata } from "next";
import PlaceholderPage from "@/components/PlaceholderPage";

export const metadata: Metadata = { title: "Kids zone" };

export default function KidsPage() {
  return (
    <PlaceholderPage
      route="/kids"
      title="Kids zone"
      lead="Ages 8-11. Stories, characters and cause and effect."
      cards={["Lessons for kids", "Games for kids"]}
    />
  );
}
