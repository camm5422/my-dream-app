import Link from "next/link";
import { zones } from "@/lib/nav";

export default function HomePage() {
  return (
    <>
      <div className="hero">
        <span className="route">/</span>
        <h1>Big power from a little core.</h1>
        <p>
          Learn how electricity, grids and small modular reactors work, from a senior electrical
          engineer.
        </p>
        <div className="actions">
          <Link className="btn" href="/book">
            Book a session
          </Link>
          <Link className="btn secondary" href="/learn">
            Start learning
          </Link>
        </div>
      </div>
      <h2>Pick your zone</h2>
      <div className="grid three">
        {zones.map((z) => (
          <div className="card" key={z.zone}>
            <span className="zone-pill">{z.age}</span>
            <h3>{z.title}</h3>
            <p>{z.blurb}</p>
            <Link className="btn btn-go" href={z.href}>
              Explore
              <svg className="arrow" viewBox="0 0 24 24" aria-hidden="true">
                <path
                  d="M4 12h15M13 5l7 7-7 7"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
          </div>
        ))}
      </div>
    </>
  );
}
