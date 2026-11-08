import type { ReactNode } from "react";
import { cx } from "@/lib/cx";

type Kind = "info" | "warn" | "danger";

const defaults: Record<Kind, { title: string; icon: ReactNode }> = {
  info: {
    title: "Tip",
    icon: (
      <>
        <circle cx="12" cy="12" r="10" />
        <path d="M12 11v6M12 7.5v.01" />
      </>
    ),
  },
  warn: {
    title: "Careful",
    icon: (
      <>
        <path d="M12 3 2 21h20L12 3z" />
        <path d="M12 10v5M12 18v.01" />
      </>
    ),
  },
  danger: {
    title: "Safety",
    icon: <path d="M13 2 4 14h7l-1 8 9-12h-7l1-8z" />,
  },
};

type Props = {
  kind?: Kind;
  /** Defaults to Tip, Careful or Safety. Always shown, so colour is never the only signal. */
  title?: string;
  children: ReactNode;
};

/** Boxed hint, caution or safety message with an icon and a word label. */
export default function Callout({ kind = "info", title, children }: Props) {
  const { title: defaultTitle, icon } = defaults[kind];
  return (
    <div className={cx("callout", kind !== "info" && kind)}>
      <svg
        className="callout-icon"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        {icon}
      </svg>
      <strong>{title ?? defaultTitle}</strong>
      <p>{children}</p>
    </div>
  );
}
