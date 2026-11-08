"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { aboutLink, bookLink, navGroups } from "@/lib/nav";

export default function SiteHeader() {
  const pathname = usePathname();
  // Menu state remembers the page it was opened on, so it closes by itself after navigating
  const [menuPath, setMenuPath] = useState<string | null>(null);
  const [group, setGroup] = useState<{ path: string; label: string } | null>(null);
  const menuOpen = menuPath === pathname;
  const openGroup = group?.path === pathname ? group.label : null;
  const headerRef = useRef<HTMLElement>(null);

  // Desktop dropdowns close on outside click or Escape
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (!headerRef.current?.contains(e.target as Node)) setGroup(null);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setGroup(null);
    };
    document.addEventListener("click", onClick);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("click", onClick);
      document.removeEventListener("keydown", onKey);
    };
  }, []);

  const current = (href: string) => (pathname === href ? "page" : undefined);

  return (
    <header className="site-header" ref={headerRef}>
      <div className="bar">
        <Link className="brand" href="/">
          <Image src="/brand/logo-mark.svg" alt="" width={46} height={46} unoptimized priority />
          Littlecore
        </Link>
        <button
          className="menu-btn"
          type="button"
          aria-expanded={menuOpen}
          aria-controls="main-nav"
          aria-label={menuOpen ? "Close menu" : "Menu"}
          onClick={() => setMenuPath(menuOpen ? null : pathname)}
        >
          <svg className="i-grid" viewBox="0 0 24 24" aria-hidden="true">
            {[5, 12, 19].flatMap((cy) =>
              [5, 12, 19].map((cx) => <circle key={`${cx}-${cy}`} cx={cx} cy={cy} r="2.2" />),
            )}
          </svg>
          <svg className="i-close" viewBox="0 0 24 24" aria-hidden="true">
            <path
              d="M5 5l14 14M19 5L5 19"
              stroke="currentColor"
              strokeWidth="3"
              strokeLinecap="round"
              fill="none"
            />
          </svg>
        </button>
      </div>
      <nav id="main-nav" className={menuOpen ? "open" : undefined} aria-label="Main">
        <ul>
          {navGroups.map((g) => {
            const open = openGroup === g.label;
            return (
              <li key={g.label} className={open ? "has-menu open" : "has-menu"}>
                <button
                  className="group-btn"
                  type="button"
                  aria-expanded={open}
                  onClick={() => setGroup(open ? null : { path: pathname, label: g.label })}
                >
                  {g.label}{" "}
                  <span className="caret" aria-hidden="true">
                    &#9660;
                  </span>
                </button>
                <ul>
                  {g.links.map((link) => (
                    <li key={link.href}>
                      <Link href={link.href} aria-current={current(link.href)}>
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>
            );
          })}
          <li>
            <Link
              className="about-link"
              href={aboutLink.href}
              aria-current={current(aboutLink.href)}
            >
              {aboutLink.label}
            </Link>
          </li>
          <li>
            <Link className="cta" href={bookLink.href} aria-current={current(bookLink.href)}>
              {bookLink.label}
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
