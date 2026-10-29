import type { Metadata } from "next";
import PlaceholderPage from "@/components/PlaceholderPage";

export const metadata: Metadata = { title: "Students zone" };

export default function StudentsPage() {
  return (
    <PlaceholderPage
      route="/students"
      title="Students zone"
      lead="Ages 12-15. Challenges, badges and simplified physics."
      cards={["Lessons for students", "Challenges"]}
    />
  );
}
