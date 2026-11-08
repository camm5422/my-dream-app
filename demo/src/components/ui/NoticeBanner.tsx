import type { ReactNode } from "react";

/** The "educational, not for design" strip. Put one on every lesson and simulator. */
export default function NoticeBanner({
  children = "Educational, not for design. Simplified and illustrative, using public sources only.",
}: {
  children?: ReactNode;
}) {
  return (
    <div className="notice" role="note">
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        aria-hidden="true"
      >
        <circle cx="12" cy="12" r="10" />
        <path d="M12 11v6M12 7.5v.01" />
      </svg>
      <span>{children}</span>
    </div>
  );
}
