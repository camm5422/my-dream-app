import Image from "next/image";
import Link from "next/link";
import { footerLinks } from "@/lib/nav";

export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="foot">
        <div>
          <Link className="brand" href="/">
            <Image src="/brand/logo-mark.svg" alt="" width={46} height={46} unoptimized />
            Littlecore
          </Link>
          <div>Big power from a little core.</div>
          <p className="disclaimer">Educational, not for design. Based on public sources only.</p>
        </div>
        {footerLinks.map((column, i) => (
          <ul key={i}>
            {column.map((link) => (
              <li key={link.href}>
                <Link href={link.href}>{link.label}</Link>
              </li>
            ))}
          </ul>
        ))}
      </div>
    </footer>
  );
}
