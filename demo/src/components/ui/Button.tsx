import Link from "next/link";
import type { ButtonHTMLAttributes, ComponentProps, ReactNode } from "react";
import { cx } from "@/lib/cx";

type Variant = "primary" | "secondary" | "cta";

type Common = {
  variant?: Variant;
  /** Adds a right arrow after the label. The label is always kept. */
  arrow?: boolean;
  className?: string;
  children: ReactNode;
};

type AsLink = Common & { href: string } & Omit<ComponentProps<typeof Link>, keyof Common | "href">;
type AsButton = Common & { href?: undefined } & Omit<
    ButtonHTMLAttributes<HTMLButtonElement>,
    keyof Common
  >;

function Arrow() {
  return (
    <svg className="arrow" viewBox="0 0 24 24" width="22" height="22" aria-hidden="true">
      <path
        d="M4 12h15M13 5l7 7-7 7"
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/** Button or link styled as a button. At least 48px tall. Pass `href` to render a link. */
export default function Button(props: AsLink | AsButton) {
  const { variant = "primary", arrow, className, children, ...rest } = props;
  const classes = cx("btn", variant !== "primary" && variant, arrow && "btn-go", className);
  const content = (
    <>
      {children}
      {arrow && <Arrow />}
    </>
  );
  if (props.href !== undefined) {
    const { href, ...linkRest } = rest as Omit<AsLink, keyof Common>;
    return (
      <Link className={classes} href={href} {...linkRest}>
        {content}
      </Link>
    );
  }
  return (
    <button className={classes} type="button" {...(rest as Omit<AsButton, keyof Common | "href">)}>
      {content}
    </button>
  );
}
