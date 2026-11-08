"use client";

import Image from "next/image";
import { useState } from "react";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";
import Button from "@/components/ui/Button";
import Callout from "@/components/ui/Callout";
import Card, { Pill } from "@/components/ui/Card";
import NoticeBanner from "@/components/ui/NoticeBanner";
import type { Zone } from "@/lib/nav";
import { ContrastSwatches, TapTargets } from "./Checks";

export type TrackChoice = Zone | "all";

const META: Record<Zone, { pill: string; title: string; sub: string }> = {
  kids: {
    pill: "Kids zone · 8-11",
    title: "Playful and chunky",
    sub: "Warm colours, big round shapes, large text, Cori the mascot.",
  },
  students: {
    pill: "Students zone · 12-15",
    title: "Game-like and clear",
    sub: "Cooler colours, progress bars and scores, uppercase labels.",
  },
  pros: {
    pill: "Pros zone · 16+",
    title: "Calm control room",
    sub: "Dark panels, sharp corners, monospace labels, yellow highlights.",
  },
};

const CHOICES: { value: TrackChoice; label: string }[] = [
  { value: "kids", label: "Kids (8-11)" },
  { value: "students", label: "Students (12-15)" },
  { value: "pros", label: "Pros (16+)" },
  { value: "all", label: "All three" },
];

function Toggle({
  pressed,
  onClick,
  children,
}: {
  pressed: boolean;
  onClick: () => void;
  children: string;
}) {
  return (
    <button type="button" className="ctl" aria-pressed={pressed} onClick={onClick}>
      {children}
    </button>
  );
}

function Specimen({ zone, projector, taps }: { zone: Zone; projector: boolean; taps: boolean }) {
  const meta = META[zone];
  return (
    <div
      className={taps ? "specimen show-taps" : "specimen"}
      data-track={zone}
      data-view={projector ? "projector" : undefined}
    >
      <div className="sg">
        <div className="track-head">
          <Image
            src="/brand/mascot-cori.svg"
            alt="Cori the Littlecore mascot"
            width={64}
            height={64}
            unoptimized
          />
          <div>
            <Pill>{meta.pill}</Pill>
            <h2>{meta.title}</h2>
            <p className="sec-note">{meta.sub}</p>
          </div>
        </div>

        <section>
          <h2>Colours</h2>
          <p className="sec-note">
            Each tile shows a pair used together. The ratio is measured live. Text needs 4.5:1,
            large text and icons 3:1 (WCAG AA).
          </p>
          <ContrastSwatches />
        </section>

        <section>
          <h2>Type scale</h2>
          <div className="type-row">
            <span className="label">Hero · Baloo 2 · up to 45px</span>
            <span className="t-head" style={{ fontSize: "var(--text-hero)" }}>
              Big power from a little core
            </span>
          </div>
          <div className="type-row">
            <span className="label">Heading · Baloo 2 · up to 32px</span>
            <span className="t-head" style={{ fontSize: "var(--text-xl)" }}>
              How does a grid stay in balance?
            </span>
          </div>
          <div className="type-row">
            <span className="label">Subheading · Baloo 2 · 20px</span>
            <span className="t-head" style={{ fontSize: "var(--text-lg)" }}>
              Voltage is the push, current is the flow
            </span>
          </div>
          <div className="type-row">
            <span className="label">Body · Nunito · base</span>
            <span>
              Electricity travels from a power station to your home along wires. A transformer
              changes the voltage on the way so it is safe to use.
            </span>
          </div>
          <div className="type-row">
            <span className="label">Small · Nunito · 14px</span>
            <span style={{ fontSize: "var(--text-sm)" }}>
              Source: IAEA open publication. Educational, not for design.
            </span>
          </div>
          <div className="type-row">
            <span className="label">Numbers and units · IBM Plex Mono</span>
            <span style={{ fontFamily: "var(--font-mono)" }}>230 V · 50 Hz · 1.2 MWe · 300 °C</span>
          </div>
        </section>

        <section>
          <h2>Buttons</h2>
          <p className="sec-note">Minimum 48px tall. An icon never replaces the text label.</p>
          <div className="row">
            <Button href="#">Start learning</Button>
            <Button href="#" variant="secondary">
              See the lessons
            </Button>
            <Button href="#" variant="cta">
              Book a session
            </Button>
            <Button disabled>Disabled</Button>
            <Button href="#" className="is-focus">
              Keyboard focus
            </Button>
            <Button href="#" arrow>
              Go
            </Button>
          </div>
        </section>

        <section>
          <h2>Cards</h2>
          <div className="sg-grid three">
            <Card as="article">
              <Pill>Lesson · 8 min</Pill>
              <h3>What is voltage?</h3>
              <p>Water-pipe pictures show how electricity is pushed through wires.</p>
              <div
                className="meter"
                role="progressbar"
                aria-valuenow={60}
                aria-valuemin={0}
                aria-valuemax={100}
                aria-label="Lesson progress"
              >
                <i style={{ width: "60%" }} />
              </div>
              <span className="label">60% done · saved on this device</span>
              <Button href="#">Continue</Button>
            </Card>
            <Card as="article">
              <Pill>Play</Pill>
              <h3>Grid balance game</h3>
              <p>Keep supply and demand level for one whole day.</p>
              <span className="label">Best score</span>
              <span className="stat">4,820</span>
              <Button href="#" variant="secondary">
                Play again
              </Button>
            </Card>
            <Card as="article">
              <Pill>Badge</Pill>
              <h3>Frequency Keeper</h3>
              <p>Awarded for holding 50 Hz in the simulator.</p>
              <span className="label">Earned today</span>
              <Button href="#" variant="cta">
                Share card
              </Button>
            </Card>
          </div>
        </section>

        <section>
          <h2>Callouts and notice</h2>
          <div className="sg-grid">
            <Callout>Try changing the load and watch the frequency move.</Callout>
            <Callout kind="warn">Real grids use many more safeguards than this model.</Callout>
            <Callout kind="danger">
              Never touch mains sockets, wires or batteries without an adult.
            </Callout>
            <NoticeBanner />
          </div>
        </section>

        <section>
          <h2>Header and footer</h2>
          <p className="sec-note">
            These are the real site header and footer. The header changes layout with the screen
            width: below 1000px the menu sits behind the grid icon (tap it to open).
          </p>
          <SiteHeader />
          <div className="gap" />
          <SiteFooter />
        </section>

        <section>
          <h2>Touch targets</h2>
          <p className="sec-note">
            Rule: nothing tappable is smaller than 44px; buttons and menu items are 48px. Sizes
            below are measured on this page. Use &ldquo;Outline tap targets&rdquo; above to see
            them.
          </p>
          <TapTargets />
        </section>

        <section>
          <h2>Motion</h2>
          <p className="sec-note">
            Animation is short and only decorative. When the device asks for reduced motion, all
            animation and transitions are switched off (see <code>tokens.css</code>).
          </p>
        </section>
      </div>
    </div>
  );
}

export default function StyleGuide({
  initialTrack,
  initialProjector,
  initialTaps,
}: {
  initialTrack: TrackChoice;
  initialProjector: boolean;
  initialTaps: boolean;
}) {
  const [track, setTrack] = useState<TrackChoice>(initialTrack);
  const [projector, setProjector] = useState(initialProjector);
  const [taps, setTaps] = useState(initialTaps);
  const zones: Zone[] = track === "all" ? ["kids", "students", "pros"] : [track];

  return (
    <div className="sg-page">
      <p className="sg-badge">Internal · design system</p>
      <h1>Design system style guide</h1>
      <p>
        Mirrors the approved mockup. Switch track, try the projector variant, and outline every tap
        target. Contrast and tap-target sizes are measured from the live page. To check the phone
        layout, open this page on a phone.
      </p>

      <div className="controls" role="region" aria-label="Preview controls">
        <div className="ctl-row" role="group" aria-label="Track">
          <b>Track</b>
          {CHOICES.map((c) => (
            <Toggle key={c.value} pressed={track === c.value} onClick={() => setTrack(c.value)}>
              {c.label}
            </Toggle>
          ))}
        </div>
        <div className="ctl-row">
          <b>View</b>
          <Toggle pressed={projector} onClick={() => setProjector(!projector)}>
            Projector variant
          </Toggle>
          <Toggle pressed={taps} onClick={() => setTaps(!taps)}>
            Outline tap targets
          </Toggle>
        </div>
      </div>

      <div className="out">
        {zones.map((z) => (
          <Specimen key={`${z}-${projector}`} zone={z} projector={projector} taps={taps} />
        ))}
      </div>
    </div>
  );
}
