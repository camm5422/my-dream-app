# demo/

The real codebase. It starts as an empty scaffold and gains an increment each time a milestone is approved (mockup first, then implementation).

Nothing is installed or configured yet. Milestone 01 creates the Next.js + TypeScript project here, after its mockup is approved.

## Planned layout
```
demo/
  README.md      this file
  STATUS.md      what each milestone has added so far
  src/           application code (pages, components, interactives)
  content/
    lessons/     Markdown lessons (front matter + body)
    data/        JSON data (country grid data, quiz questions)
  public/        static assets (images, SVG diagrams, icons)
```

Rules:
- Code lands here only after the matching mockup in `../mockups/` is approved.
- Work happens on a `milestone/NN-slug` branch and reaches `main` only after owner confirmation.
- Update `STATUS.md` in the same branch whenever something is added.
