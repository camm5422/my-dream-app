import type { Metadata } from "next";
import type { ReactNode } from "react";

// Internal page for checking the design system. Not linked from the site and kept out of search.
export const metadata: Metadata = {
  title: "Style guide",
  robots: { index: false, follow: false },
};

export default function StyleGuideLayout({ children }: { children: ReactNode }) {
  return children;
}
