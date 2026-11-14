import type { Metadata } from "next";
import BioPanel from "@/components/landing/BioPanel";
import ClosingCta from "@/components/landing/ClosingCta";
import Reassurance from "@/components/landing/Reassurance";
import Button from "@/components/ui/Button";
import Callout from "@/components/ui/Callout";
import Card, { Pill } from "@/components/ui/Card";
import NoticeBanner from "@/components/ui/NoticeBanner";
import { bio } from "@/lib/bio";

export const metadata: Metadata = {
  title: "About",
  description:
    "Meet the senior electrical engineer behind Littlecore and see how the content is kept safe and honest.",
};

export default function AboutPage() {
  return (
    <div className="landing">
      <section className="landing-section">
        <Pill>About</Pill>
        <h1 style={{ fontSize: "var(--text-hero)", margin: 0 }}>Why Littlecore exists</h1>
        <p className="lead">
          {bio.story ||
            "Littlecore makes electricity, grids and small modular reactors clear and fun to learn, for children, teenagers and early-career engineers."}
        </p>
      </section>

      <section className="landing-section">
        <BioPanel variant="full" />
      </section>

      <section className="landing-section">
        <h2>What a session looks like</h2>
        <div className="grid three">
          <Card as="article">
            <span className="num">1</span>
            <h3>Hello and goals</h3>
            <p>We agree what the learner wants to understand.</p>
          </Card>
          <Card as="article">
            <span className="num">2</span>
            <h3>Explain and explore</h3>
            <p>Short explanations, live demos and questions, matched to the learner&apos;s age.</p>
          </Card>
          <Card as="article">
            <span className="num">3</span>
            <h3>Take-away</h3>
            <p>A short summary and a free activity to try next.</p>
          </Card>
        </div>
      </section>

      <section className="landing-section">
        <h2>How Littlecore stays safe and honest</h2>
        <div className="grid two">
          <Callout title="Public sources only">
            Everything here comes from open publications, such as IAEA public documents, and generic
            designs. No vendor-specific or export-controlled detail.
          </Callout>
          {bio.independence && <Callout title="Personal project">{bio.independence}</Callout>}
        </div>
      </section>

      <Reassurance heading="For parents and teachers" />

      <ClosingCta
        title="Want to learn together?"
        actions={<Button href="/book">Book a session</Button>}
      >
        Choose a time that suits you and say what you would like to cover.
      </ClosingCta>

      <NoticeBanner />
    </div>
  );
}
