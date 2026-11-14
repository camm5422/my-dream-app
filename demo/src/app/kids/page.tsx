import type { Metadata } from "next";
import ClosingCta from "@/components/landing/ClosingCta";
import Hero from "@/components/landing/Hero";
import Reassurance from "@/components/landing/Reassurance";
import Button from "@/components/ui/Button";
import Callout from "@/components/ui/Callout";
import Card, { Pill } from "@/components/ui/Card";
import NoticeBanner from "@/components/ui/NoticeBanner";

export const metadata: Metadata = {
  title: "Kids zone",
  description:
    "Ages 8-11. Meet Cori and explore electricity, power stations and small reactors through play.",
};

export default function KidsPage() {
  return (
    <div className="landing">
      <Hero
        eyebrow={<Pill>Kids zone · 8-11</Pill>}
        title="Hi, I am Cori! Let's find out where the zap comes from."
        sub="Press, pull and play your way through electricity, power stations and tiny reactors."
        actions={
          <>
            <Button href="/play">Try a free activity</Button>
            <Button href="/book" variant="secondary">
              Ask a grown-up to book
            </Button>
          </>
        }
        art={{ src: "/brand/mascot-cori.svg", alt: "Cori, the hard-hatted reactor dome" }}
      />

      <section className="landing-section">
        <h2>Start here</h2>
        <div className="grid three">
          <Card as="article">
            <Pill>Coming soon</Pill>
            <h3>What is electricity?</h3>
            <p>Follow a tiny spark from a power station to your lamp.</p>
            <Button href="/learn" arrow>
              Lessons
            </Button>
          </Card>
          <Card as="article">
            <Pill>Coming soon</Pill>
            <h3>Light up the town</h3>
            <p>Switch on houses without making Cori&apos;s lights flicker.</p>
            <Button href="/play" arrow>
              Games
            </Button>
          </Card>
          <Card as="article">
            <Pill>Coming soon</Pill>
            <h3>What is a little core?</h3>
            <p>See how a small reactor boils water to make power.</p>
            <Button href="/learn" arrow>
              Lessons
            </Button>
          </Card>
        </div>
      </section>

      <section className="landing-section">
        <h2>Safety first</h2>
        <Callout kind="danger">
          Never touch wall sockets, wires or batteries without a grown-up. Our games are all on the
          screen!
        </Callout>
      </section>

      <Reassurance heading="For parents and carers" />

      <ClosingCta
        title="Want a live session with the engineer?"
        actions={<Button href="/book">Book a session</Button>}
      >
        A friendly, hands-on chat about electricity and power. Grown-ups book, children join.
      </ClosingCta>

      <NoticeBanner />
    </div>
  );
}
