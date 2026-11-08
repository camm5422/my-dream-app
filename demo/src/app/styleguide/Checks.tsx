"use client";

import { useEffect, useRef, useState } from "react";

/** Live checks, measured from the rendered page so the numbers always match the real tokens. */

// [background token, text token, label, minimum ratio]. Text needs 4.5:1; icons and large text 3:1.
const PAIRS: [string, string, string, number][] = [
  ["--bg", "--text", "Text on page", 4.5],
  ["--bg", "--muted", "Muted text on page", 4.5],
  ["--card", "--text", "Text on card", 4.5],
  ["--card", "--muted", "Muted on card", 4.5],
  ["--accent", "--accent-text", "Button label", 4.5],
  ["--accent2", "--accent2-text", "Highlight label", 4.5],
  ["--bg", "--accent", "Link on page", 4.5],
  ["--card", "--info", "Tip icon", 3],
  ["--card", "--warn", "Careful icon", 3],
  ["--card", "--danger", "Safety icon", 3],
];

type Rgb = [number, number, number];
const parse = (s: string): Rgb => {
  const [r = 0, g = 0, b = 0] = (s.match(/[\d.]+/g) ?? []).map(Number);
  return [r, g, b];
};
const lum = (c: Rgb) => {
  const [r, g, b] = c.map((v) => {
    const x = v / 255;
    return x <= 0.03928 ? x / 12.92 : Math.pow((x + 0.055) / 1.055, 2.4);
  });
  return 0.2126 * r! + 0.7152 * g! + 0.0722 * b!;
};
const ratio = (a: Rgb, b: Rgb) => {
  const x = lum(a);
  const y = lum(b);
  return (Math.max(x, y) + 0.05) / (Math.min(x, y) + 0.05);
};
const hex = (c: Rgb) => "#" + c.map((v) => Math.round(v).toString(16).padStart(2, "0")).join("");

type Row = { fg: string; bg: string; ratio: number };

export function ContrastSwatches() {
  const host = useRef<HTMLDivElement>(null);
  const [rows, setRows] = useState<Row[]>([]);

  useEffect(() => {
    const tiles = host.current?.querySelectorAll<HTMLElement>(".sw") ?? [];
    setRows(
      Array.from(tiles).map((el) => {
        const cs = getComputedStyle(el);
        const bg = parse(cs.backgroundColor);
        const fg = parse(cs.color);
        return { bg: hex(bg), fg: hex(fg), ratio: ratio(bg, fg) };
      }),
    );
  }, []);

  return (
    <div className="swatches" ref={host}>
      {PAIRS.map(([bg, fg, name, min], i) => {
        const row = rows[i];
        return (
          <div className="sw" key={name} style={{ background: `var(${bg})`, color: `var(${fg})` }}>
            <span className="aa">Aa</span>
            <small>
              {name}
              {row && ` · ${row.fg} on ${row.bg}`}
              <br />
              {row &&
                (row.ratio >= min
                  ? `${row.ratio.toFixed(1)}:1 ✓ AA`
                  : `${row.ratio.toFixed(1)}:1 ✗ below ${min}`)}
            </small>
          </div>
        );
      })}
    </div>
  );
}

const TARGETS: [string, string][] = [
  ["Button", ".btn"],
  ["Menu icon", ".menu-btn"],
  ["Menu link", "nav a"],
  ["Footer link", ".site-footer li a"],
];

type Size = { name: string; w: number; h: number };

export function TapTargets() {
  const host = useRef<HTMLDivElement>(null);
  const [sizes, setSizes] = useState<Size[]>([]);

  useEffect(() => {
    const root = host.current?.closest(".specimen");
    const measure = () => {
      const found: Size[] = [];
      for (const [name, selector] of TARGETS) {
        // Skip elements hidden at this width (the grid icon on desktop, the menu links on phones)
        const el = Array.from(root?.querySelectorAll<HTMLElement>(selector) ?? []).find(
          (e) => e.offsetHeight > 0,
        );
        if (el) found.push({ name, w: el.offsetWidth, h: el.offsetHeight });
      }
      setSizes(found);
    };
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  return (
    <div className="targets" ref={host}>
      {sizes.map((s) => (
        <div className="tt" key={s.name}>
          <span className="box" style={{ width: Math.max(s.h, 44), height: s.h }}>
            {s.h}
          </span>
          <span>
            <strong>{s.name}</strong>{" "}
            <span className="meas">
              {s.w} × {s.h}px {s.h >= 44 ? "✓ at least 44" : "✗ too small"}
            </span>
          </span>
        </div>
      ))}
    </div>
  );
}
