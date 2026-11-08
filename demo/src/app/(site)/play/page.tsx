import type { Metadata } from "next";
import PlaceholderPage from "@/components/PlaceholderPage";

export const metadata: Metadata = { title: "Play" };

export default function PlayPage() {
  return (
    <PlaceholderPage
      route="/play"
      title="Play"
      lead="Simulators, quizzes and the diagram builder."
      cards={["SMR simulator", "Quizzes and badges", "Diagram builder"]}
    />
  );
}
