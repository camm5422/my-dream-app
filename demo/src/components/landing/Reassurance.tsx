function Tick() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M12 3 4 6v6c0 5 3.5 8 8 9 4.5-1 8-4 8-9V6l-8-3z" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  );
}

/** Reassurance for the adults who decide: no accounts, no personal data, public sources, free to learn. */
export default function Reassurance({ heading }: { heading: string }) {
  return (
    <section className="landing-section">
      <h2>{heading}</h2>
      <div className="reassure">
        <ul>
          <li>
            <Tick />
            <span>
              <strong>No accounts.</strong> Nobody signs up. Progress is saved only on the
              child&apos;s own device.
            </span>
          </li>
          <li>
            <Tick />
            <span>
              <strong>No personal data collected</strong> by the learning pages. No tracking of
              children.
            </span>
          </li>
          <li>
            <Tick />
            <span>
              <strong>Public sources only.</strong> Content is based on open publications and
              generic designs.
            </span>
          </li>
          <li>
            <Tick />
            <span>
              <strong>Free to learn.</strong> Lessons and games cost nothing. You pay only for live
              sessions and kits.
            </span>
          </li>
        </ul>
      </div>
    </section>
  );
}
