import Image from "next/image";
import type { ReactNode } from "react";

type Props = {
  /** Small tag above the title: a Pill, or a plain label in the Pros zone */
  eyebrow: ReactNode;
  title: string;
  sub: string;
  /** Buttons */
  actions: ReactNode;
  art: { src: string; alt: string };
  /** Short reassurance chips under the buttons */
  chips?: string[];
};

/** Top of a landing page: title, one sentence, buttons and a picture. */
export default function Hero({ eyebrow, title, sub, actions, art, chips }: Props) {
  return (
    <section className="landing-hero">
      <div>
        {eyebrow}
        <h1>{title}</h1>
        <p className="sub">{sub}</p>
        <div className="actions">{actions}</div>
        {chips && (
          <ul className="chips">
            {chips.map((chip) => (
              <li className="chip" key={chip}>
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="m4 12 5 5L20 6" />
                </svg>
                {chip}
              </li>
            ))}
          </ul>
        )}
      </div>
      <div className="art">
        <Image src={art.src} alt={art.alt} width={280} height={280} unoptimized priority />
      </div>
    </section>
  );
}
