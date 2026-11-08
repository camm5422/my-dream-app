import Link from "next/link";
import { aboutLink, bookLink, navGroups } from "@/lib/nav";

type Props = {
  /** Referenced by the menu button's aria-controls */
  id: string;
  pathname: string;
  /** Phone and tablet: whether the full-width list is showing */
  open: boolean;
  /** Desktop: label of the dropdown that is open, if any */
  openGroup: string | null;
  onToggleGroup: (label: string) => void;
};

/** Main menu. Headed lists on phone and tablet, dropdowns on desktop (layout is in site.css). */
export default function Nav({ id, pathname, open, openGroup, onToggleGroup }: Props) {
  const current = (href: string) => (pathname === href ? "page" : undefined);

  return (
    <nav id={id} className={open ? "open" : undefined} aria-label="Main">
      <ul>
        {navGroups.map((g) => {
          const groupOpen = openGroup === g.label;
          return (
            <li key={g.label} className={groupOpen ? "has-menu open" : "has-menu"}>
              <button
                className="group-btn"
                type="button"
                aria-expanded={groupOpen}
                onClick={() => onToggleGroup(g.label)}
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
          <Link className="about-link" href={aboutLink.href} aria-current={current(aboutLink.href)}>
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
  );
}
