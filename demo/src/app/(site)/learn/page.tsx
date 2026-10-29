import type { Metadata } from "next";
import PlaceholderPage from "@/components/PlaceholderPage";

export const metadata: Metadata = { title: "Lessons" };

export default function LearnPage() {
  return (
    <PlaceholderPage
      route="/learn"
      title="Lessons"
      lead="Free lessons, filtered by zone."
      cards={["How grids work", "How an SMR works", "More coming"]}
    />
  );
}
