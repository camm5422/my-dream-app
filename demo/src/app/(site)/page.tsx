import BioPanel from "@/components/landing/BioPanel";
import ClosingCta from "@/components/landing/ClosingCta";
import Hero from "@/components/landing/Hero";
import Reassurance from "@/components/landing/Reassurance";
import ZoneCards from "@/components/landing/ZoneCards";
import Button from "@/components/ui/Button";
import Card, { Pill } from "@/components/ui/Card";
import NoticeBanner from "@/components/ui/NoticeBanner";

export default function HomePage() {
  return (
    <div className="landing">
      <Hero
        eyebrow={<Pill>Free to learn · Live sessions to book</Pill>}
        title="Big power from a little core."
        sub="Learn how electricity, grids and small modular reactors work, from a senior electrical engineer."
        actions={
          <>
            <Button href="/book" variant="cta">
              Book a session
            </Button>
            <Button href="/play" variant="secondary">
              Try a free activity
            </Button>
          </>
        }
        chips={["Ages 8 to 18+", "No sign-up", "Works on any phone"]}
        art={{
          src: "/brand/mascot-cori.svg",
          alt: "Cori the Littlecore mascot, a hard-hatted reactor dome",
        }}
      />

      <section className="landing-section">
        <h2>Pick your zone</h2>
        <p className="lead">
          Three zones, one for each age. Same real science, told in the way that suits you.
        </p>
        <ZoneCards />
      </section>

      <section className="landing-section">
        <h2>What you can do here</h2>
        <div className="grid four">
          <Card as="article">
            <span className="num">1</span>
            <h3>Learn for free</h3>
            <p>Short lessons on how electricity and grids work, and how an SMR makes power.</p>
          </Card>
          <Card as="article">
            <span className="num">2</span>
            <h3>Play and test</h3>
            <p>Games, quizzes and simulators with badges saved on your device.</p>
          </Card>
          <Card as="article">
            <span className="num">3</span>
            <h3>Book a live session</h3>
            <p>Talk with the engineer, one to one, as a family or as a school group.</p>
          </Card>
          <Card as="article">
            <span className="num">4</span>
            <h3>Hands-on kits</h3>
            <p>Build and test circuits yourself.</p>
            <span className="label">Coming later</span>
          </Card>
        </div>
      </section>

      <section className="landing-section">
        <h2>Meet your engineer</h2>
        <BioPanel variant="teaser" />
      </section>

      <Reassurance heading="For parents and teachers" />

      <ClosingCta
        title="Ready to switch on?"
        actions={
          <>
            <Button href="/book">Book a session</Button>
            <Button href="/play" variant="secondary">
              Try a free activity
            </Button>
          </>
        }
      >
        Sessions for individuals, families and schools. Free activities are always open.
      </ClosingCta>

      <NoticeBanner />
    </div>
  );
}
