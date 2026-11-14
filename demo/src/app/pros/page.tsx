import type { Metadata } from "next";
import Link from "next/link";
import ClosingCta from "@/components/landing/ClosingCta";
import Hero from "@/components/landing/Hero";
import Button from "@/components/ui/Button";
import Callout from "@/components/ui/Callout";
import Card, { Pill } from "@/components/ui/Card";
import NoticeBanner from "@/components/ui/NoticeBanner";

export const metadata: Metadata = {
  title: "Pros zone",
  description:
    "Ages 16+ and early career. Grid fundamentals, SMR systems and the standards behind them, from public sources.",
};

export default function ProsPage() {
  return (
    <div className="landing">
      <Hero
        eyebrow={<span className="label">Pros zone · 16+ and early career</span>}
        title="Frequency holds at 50 Hz while supply matches demand."
        sub="Grid fundamentals, SMR systems and the standards behind them, from public sources, with the references shown."
        actions={
          <>
            <Button href="/learn">Browse topics</Button>
            <Button href="/book" variant="secondary">
              Book a session
            </Button>
          </>
        }
        art={{ src: "/brand/zone-pros.svg", alt: "A control-room monitor showing a signal trace" }}
      />

      <div className="readout" role="group" aria-label="Example readout, illustrative values">
        <div>
          <span>GRID FREQ</span> <b>50.00 Hz</b>
        </div>
        <div>
          <span>DEMAND</span> <b>1,240 MW</b>
        </div>
        <div>
          <span>SUPPLY</span> <b>1,240 MW</b>
        </div>
        <div>
          <span>NOTE</span> Illustrative values
        </div>
      </div>

      <section className="landing-section">
        <h2>Topics</h2>
        <div className="grid three">
          <Card as="article">
            <Pill>Coming soon</Pill>
            <h3>Grids and frequency control</h3>
            <p>How grids stay in balance, with real units and standards.</p>
            <Button href="/learn" arrow>
              Lessons
            </Button>
          </Card>
          <Card as="article">
            <Pill>Coming soon</Pill>
            <h3>How an SMR works</h3>
            <p>Core, coolant, steam and turbine, at a generic design level.</p>
            <Button href="/learn" arrow>
              Lessons
            </Button>
          </Card>
          <Card as="article">
            <Pill>Later</Pill>
            <h3>I&amp;C, standards, regulators</h3>
            <p>Instrumentation and control, IAEA and IEC standards, and regulators by country.</p>
            <Button href="/learn" variant="secondary">
              Lessons
            </Button>
          </Card>
        </div>
      </section>

      <section className="landing-section">
        <h2>Sources and limits</h2>
        <Callout kind="warn">
          Content is simplified, uses public sources only, and is not for design. No vendor-specific
          or export-controlled detail. <Link href="/sources">Read the sources</Link>.
        </Callout>
      </section>

      <ClosingCta
        title="Talk it through with an engineer"
        actions={<Button href="/book">Book a session</Button>}
      >
        Mentoring and Q&amp;A sessions for students and early-career engineers.
      </ClosingCta>

      <NoticeBanner />
    </div>
  );
}
