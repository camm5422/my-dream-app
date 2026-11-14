import type { Metadata } from "next";
import ClosingCta from "@/components/landing/ClosingCta";
import Hero from "@/components/landing/Hero";
import Reassurance from "@/components/landing/Reassurance";
import Button from "@/components/ui/Button";
import Card, { Pill } from "@/components/ui/Card";
import NoticeBanner from "@/components/ui/NoticeBanner";

export const metadata: Metadata = {
  title: "Students zone",
  description:
    "Ages 12-15. Game-like challenges, simulators and real units for grids and small modular reactors.",
};

export default function StudentsPage() {
  return (
    <div className="landing">
      <Hero
        eyebrow={<Pill>Students zone · 12-15</Pill>}
        title="Your mission: keep the city lit."
        sub="Challenges, simulators and real units. Earn badges as you learn how grids and SMRs work."
        actions={
          <>
            <Button href="/play">Start a challenge</Button>
            <Button href="/book" variant="secondary">
              Book a session
            </Button>
          </>
        }
        art={{ src: "/brand/zone-students.svg", alt: "A game controller with a glowing core" }}
      />

      <section className="landing-section">
        <h2>Pick a challenge</h2>
        <div className="grid three">
          <Card as="article">
            <Pill>Coming soon</Pill>
            <h3>Hold 50 Hz</h3>
            <p>Match supply to demand for a whole day.</p>
            <Button href="/play">Challenges</Button>
          </Card>
          <Card as="article">
            <Pill>Coming soon</Pill>
            <h3>Volts, amps and watts</h3>
            <p>Real units, with sums you can check.</p>
            <Button href="/learn">Lessons</Button>
          </Card>
          <Card as="article">
            <Pill>Coming soon</Pill>
            <h3>Frequency Keeper</h3>
            <p>A badge for holding 50 Hz in the simulator.</p>
            <Button href="/play" variant="secondary">
              See badges
            </Button>
          </Card>
        </div>
      </section>

      <section className="landing-section">
        <h2>Voltage and frequency around the world</h2>
        <p className="lead">
          Why does a phone charger from one country need an adapter in another? Real figures by
          country are on their way.
        </p>
        <div className="actions">
          <Button href="/learn" variant="secondary">
            Lessons
          </Button>
        </div>
      </section>

      <Reassurance heading="For parents and teachers" />

      <ClosingCta
        title="Learn with the engineer"
        actions={<Button href="/book">Book a session</Button>}
      >
        Live sessions for students and school groups.
      </ClosingCta>

      <NoticeBanner />
    </div>
  );
}
