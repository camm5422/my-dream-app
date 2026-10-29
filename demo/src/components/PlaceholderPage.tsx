import type { ReactNode } from "react";

type Props = {
  route: string;
  title: string;
  lead: string;
  /** Titles of empty cards shown until the real content arrives */
  cards?: string[];
  children?: ReactNode;
};

/** Empty page used for every route until its milestone fills it in. */
export default function PlaceholderPage({ route, title, lead, cards = [], children }: Props) {
  return (
    <>
      <span className="route">{route}</span>
      <h1>{title}</h1>
      <p>{lead}</p>
      {cards.length > 0 && (
        <div className={cards.length === 3 ? "grid three" : "grid two"}>
          {cards.map((card) => (
            <div className="card" key={card}>
              <h3>{card}</h3>
              <p>Coming soon.</p>
            </div>
          ))}
        </div>
      )}
      {children}
    </>
  );
}
