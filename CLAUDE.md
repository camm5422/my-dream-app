# CLAUDE.md: project context for any Claude session

Read this first. It holds the decisions made so far so a new session can continue without re-asking. `PLAN.md` is the source of truth for workflow and milestone status; this file is the context behind it.

## Project in one paragraph
A phone-first learning website about electricity, grids and small modular reactors (SMRs) for ages 8-18 and early-career engineers. The owner (GitHub user `camm5422`) is a senior electrical engineer in SMRs, based in East/Southeast Asia, and will sell education services through it: paid sessions, school and group bookings, and hands-on kits. Online learning content is free and acts as the shop window. A prominent bio builds trust with parents and schools.

## Repository
- Remote: https://github.com/camm5422/my-dream-app (private). Default branch is `main` (there is no `master`).
- Local clone: `C:\Users\cmcke\OneDrive\CameronEngineering\my-dream-app` (Windows; PowerShell and Git Bash are available).
- Layout:
  - `PLAN.md`: vision, workflow, milestone index (edit this to track progress)
  - `milestones/NN-slug.md`: one checklist per milestone (00-18)
  - `mockups/`: static HTML mockups, one folder per milestone, plus `assets/base.css` (neutral placeholder styles)
  - `demo/`: the real codebase, currently an empty scaffold; `demo/STATUS.md` records what each milestone has added
  - `scripts/sync-plan.ps1`: auto-push helper used by the hook

## Owner decisions (do not re-ask)
- **Goal:** sell education. Pay per session or booking (Stripe plus local payment methods; invoices for schools). Booking through a calendar embed (Cal.com or Calendly). Online content stays free; no paywall.
- **Audiences:** separate sections with adaptive tone: Kids zone (8-11, playful), Students zone (12-15, game-like), Pros zone (16-18+, clean control-room style). Industry clients are a possible later audience.
- **Accounts:** none. Progress and badges live in localStorage on the device only.
- **Language:** English only at launch. First regions: East and Southeast Asia (Japan, South Korea, China, Taiwan, Singapore, Malaysia, Indonesia, Vietnam, Philippines, Thailand), with UK/US for comparison.
- **v1 content:** how electricity and grids work (voltage and frequency by country); how an SMR works. Later: I&C systems, IAEA/IEC standards, country regulators.
- **Content rule:** public sources only (IAEA open publications, generic designs). Nothing vendor-specific, employer-confidential or export-controlled. Every lesson and simulator carries an "educational, not for design" disclaimer.
- **Interactives:** simulators tiered by track (illustrative, simplified physics, deeper), quizzes/games with badges, drag-and-drop diagrams, AR/3D later. In person: classroom group mode joined by QR code (nicknames only), projector/teacher view, printed QR cards, hands-on kits.
- **Tech:** Next.js (React) + TypeScript, hosted on Vercel (Netlify alternative), free tier. Designed for mid-range Android phones first, plus a projector view. Not yet scaffolded.
- **Owner does not code.** They send content (notes in any form) and Claude formats it into the site. Keep things simple to maintain.
- **Brand (decided in milestone 00):** **Littlecore**, tagline "Big power from a little core." Mascot Cori (hard-hatted reactor dome). Colours, fonts and per-zone themes are in `demo/src/styles/tokens.css` and `fonts.css` (fonts self-hosted in `demo/public/fonts/`, because Google Fonts can be blocked in China). Logo files in `demo/public/brand/`. Voice guide in `demo/content/brand.md`. Use the semantic tokens (`--bg`, `--accent`...), never raw hex, and keep buttons at least 48px tall. UI colours were contrast-checked to WCAG AA: do not put `#12A4A0` teal or `#FF6B5B` coral behind white text (use `--lc-teal-deep` and `--lc-coral-deep`).
- **Not decided yet:** domain (`littlecore.com` is taken; `.org`/`.co`/`.io` showed no DNS records on 25 Oct 2026 but are not registered or confirmed; trademark and social handles unchecked), base country (affects payments and child-privacy law such as PDPA, APPI, PIPA), parental-consent needs for classroom nicknames, local payment methods, kit design.

## Workflow rules (mandatory)
1. Each milestone is built on its own branch `milestone/NN-slug`, created from `main`.
2. **Phase A, mockup first:** build static HTML in `mockups/NN-slug/` with fake data and link it from `mockups/index.html`.
3. **Gate 1:** the owner reviews the mockup. Do not write real code until they approve (loop on changes).
4. **Phase B, implementation:** build the real feature in `demo/`, and update `demo/STATUS.md`.
5. **Gate 2:** the owner verifies the implementation.
6. **Merge** to `main` through a pull request only after the owner explicitly says so. Never merge on your own.
7. Tick the checklist in the milestone file and the index table in `PLAN.md`.

Status: milestone 00 (brand and domain) has its mockup approved and is implemented on branch `milestone/00-brand-and-domain`; it merges to `main` only after the owner's go-ahead. Next step: milestone 01 (repo and scaffold). Create `milestone/01-repo-and-scaffold` from `main` once 00 is merged (or ask the owner if 00 is still open), then build its mockup first.

## Auto-push of plan docs
A Claude Code `PostToolUse` hook (in `C:\Users\cmcke\OneDrive\CameronEngineering\.claude\settings.json`, outside the repo) runs `scripts/sync-plan.ps1` after Edit/Write. The script commits and pushes the current branch when `PLAN.md`, `CLAUDE.md` or `milestones/*.md` changed. Notes:
- It only triggers for Claude's edits, not manual ones.
- On a milestone branch the plan edit goes to that branch and reaches `main` at merge.
- If a session starts with the repo as its working directory, the hook may not load; push plan edits manually in that case.

## Git and environment notes
- Git is at `C:\Program Files\Git\cmd` and the GitHub CLI at `C:\Program Files\GitHub CLI\gh.exe`; neither is on the default PATH, so add them in the shell session.
- This repo's git config is local only: user `camm5422` with the owner's email, and credentials come from `gh auth git-credential` (the empty `credential.helper` entry first is deliberate: it stops Git Credential Manager from hanging on a prompt).
- `gh` is logged in as `camm5422` with `repo` scope.
- Commit messages end with: `Co-Authored-By: Claude Sonnet 5.5 <noreply@anthropic.com>`. PR descriptions end with: `🤖 Generated with [Claude Code](https://claude.com/claude-code)`.
- Commit or push beyond plan docs only when the owner asks; confirm before anything outward-facing.

## Style notes
- Plain, concise writing. Use they/them for anyone whose pronouns are not stated.
- Mockups: plain HTML/CSS/JS with no build step, readable at phone width.
