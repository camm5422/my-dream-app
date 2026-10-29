# demo/

The Littlecore website: Next.js (App Router) with TypeScript. Grown one milestone at a time (mockup first, then implementation).

## Run it locally

You need Node.js 20 or newer. From this folder:

```
npm install      # first time only
npm run dev      # http://localhost:3000, reloads as you edit
```

Other commands:

| Command             | What it does                                                            |
| ------------------- | ----------------------------------------------------------------------- |
| `npm run build`     | Production build (also type-checks and lints the pages)                 |
| `npm run start`     | Serve the production build                                              |
| `npm run lint`      | ESLint                                                                  |
| `npm run typecheck` | TypeScript check, no output files                                       |
| `npm run format`    | Prettier: rewrite files to the house style                              |
| `npm run check`     | Lint, type-check and format check in one go (run before a pull request) |

## Publish

Hosting is Vercel (free tier). The Vercel project points at this repo with **Root Directory** set to `demo`.

- Every branch pushed to GitHub gets its own preview URL (shown on the pull request).
- `main` publishes to the live URL.
- No secrets are needed yet. When one is, put it in Vercel's Environment Variables, never in the repo (`.env*` files are git-ignored).

## Layout

```
demo/
  README.md      this file
  STATUS.md      what each milestone has added so far
  src/
    app/         routes. (site)/ holds the neutral pages; kids/, students/ and pros/ have their own zone look
    components/  SiteShell, SiteHeader, SiteFooter, PlaceholderPage
    lib/nav.ts   menu, footer links and zone cards (edit the site map here)
    styles/      fonts.css, tokens.css (brand), site.css (layout)
  content/
    lessons/     Markdown lessons (front matter + body)
    data/        JSON data (country grid data, quiz questions)
  public/        static assets (brand/, fonts/)
```

Rules:

- Code lands here only after the matching mockup in `../mockups/` is approved.
- Work happens on a `milestone/NN-slug` branch and reaches `main` only after owner confirmation.
- Update `STATUS.md` in the same branch whenever something is added.
- Use the semantic colour tokens (`--bg`, `--accent` ...), never raw hex, and keep tap targets at least 48px tall.
