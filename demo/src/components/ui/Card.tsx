import type { ReactNode } from "react";
import { cx } from "@/lib/cx";

type Props = {
  /** Element to render. Use `article` for a self-contained item such as a lesson. */
  as?: "div" | "article" | "section";
  className?: string;
  children: ReactNode;
};

/** Surface for a lesson, game or badge. Put a Pill, heading, text and a Button inside. */
export default function Card({ as: Tag = "div", className, children }: Props) {
  return <Tag className={cx("card", className)}>{children}</Tag>;
}

/** Small highlighted tag, such as an age range or "Lesson · 8 min". */
export function Pill({ children }: { children: ReactNode }) {
  return <span className="pill">{children}</span>;
}
