import type { Metadata } from "next";
import PlaceholderPage from "@/components/PlaceholderPage";

export const metadata: Metadata = { title: "Book a session" };

export default function BookPage() {
  return (
    <PlaceholderPage
      route="/book"
      title="Book a session"
      lead="Sessions for individuals, schools and groups."
    >
      <div className="card">Booking calendar coming soon.</div>
    </PlaceholderPage>
  );
}
