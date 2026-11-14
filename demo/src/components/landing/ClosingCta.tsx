import type { ReactNode } from "react";

type Props = {
  title: string;
  children: ReactNode;
  /** Buttons, usually one or two */
  actions: ReactNode;
};

/** Coloured block at the bottom of a landing page with one clear next step. */
export default function ClosingCta({ title, children, actions }: Props) {
  return (
    <section className="closer">
      <h2>{title}</h2>
      <p>{children}</p>
      <div className="actions">{actions}</div>
    </section>
  );
}
