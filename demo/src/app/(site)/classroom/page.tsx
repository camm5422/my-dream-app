import type { Metadata } from "next";
import PlaceholderPage from "@/components/PlaceholderPage";

export const metadata: Metadata = { title: "Classroom" };

export default function ClassroomPage() {
  return (
    <PlaceholderPage
      route="/classroom"
      title="Classroom"
      lead="Join a class with a room code and a nickname. Teachers get a projector view."
      cards={["Join a class", "Teacher view"]}
    />
  );
}
