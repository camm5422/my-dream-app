# Littlecore: SMR Electrical Engineering Education Website, High-Level Plan

## Vision
A fun, phone-first learning site where kids, teens and young adults learn how electricity, grids and small modular reactors (SMRs) work, taught by a senior electrical engineer in SMRs. The site sells education services: paid sessions, school and group bookings, and hands-on kits. Online learning content is free and acts as the shop window. The owner's bio and credentials build trust with parents and schools.

## Audiences and sections
| Section | Age | Tone | Depth |
|---|---|---|---|
| Kids zone | 8-11 | Playful, colourful, characters | Illustrative, cause and effect |
| Students zone | 12-15 | Game-like, challenge-driven | Simplified physics, real units |
| Pros zone | 16-18+ and early-career | Clean, control-room style | I&C systems, standards, regulation |

Industry clients are a possible later audience, not part of launch.

## Content scope
- **v1:** How electricity and grids work (voltage and frequency by country); how an SMR works.
- **Later:** Instrumentation and control (I&C) systems and plant interaction; IAEA and IEC standards; East and Southeast Asia regulators and country-specific grid and safety rules.
- **Rule:** Public sources only (IAEA open publications, generic designs). Every page carries an "educational, not for design" notice. No vendor-specific or export-controlled detail.

## Learning formats
- Simulators, tiered by track (illustrative, then simplified physics, then deeper).
- Quizzes and games with on-device badges.
- Drag-and-drop system diagrams.
- AR/3D models (later).
- In person: classroom group mode joined by QR code, projector/teacher view, printed QR cards and worksheets, hands-on kits.

## Site map (planned)
`/` home · `/kids` · `/students` · `/pros` · `/learn/*` lessons · `/play/*` interactives · `/classroom` · `/book` · `/about` · `/sources` · `/privacy`

## Business model
- Pay per session or booking, via a calendar booking embed with Stripe plus local payment methods; invoices for schools.
- Hands-on kits.
- No accounts, no paywalled online content.

## Technical decisions
- Next.js (React) with TypeScript, hosted on Vercel (Netlify as alternative). Not configured until a milestone's mockup is approved (see Workflow).
- Mobile-first for mid-range Android phones; also works on a projector for the teacher view.
- English only at launch.
- No user accounts. Progress and badges stored on the device (localStorage).
- Content stored as Markdown/JSON in the repo. Cameron sends content; Claude formats it into the site.
- Classroom mode uses short room codes and nicknames only, no personal data. Needs a small realtime service on a free tier.
- Cost target: zero or near-zero hosting.
- Brand: **Littlecore** ("Big power from a little core."), chosen in milestone 00. Tokens in `demo/src/styles/tokens.css`, fonts self-hosted, voice guide in `demo/content/brand.md`. Domain not yet registered.

## Repository layout
```
my-dream-app/
  PLAN.md            this file (edits auto-pushed, see below)
  milestones/        one checklist per milestone
  mockups/           static HTML mockups, one folder per milestone (open in a browser)
  demo/              the real codebase, grown milestone by milestone
  scripts/           helper scripts (auto-push of plan edits)
```

## Workflow (applies to every milestone)
1. **Branch.** Each milestone is done on its own branch: `milestone/NN-slug`, created from `main`.
2. **Phase A: Mockup.** Build static HTML mockup(s) in `mockups/NN-slug/` with fake data. No build tools, just open in a browser.
3. **Gate 1: You review the mockup.** Claude does not start the real code until you approve or request changes (loop until approved).
4. **Phase B: Implementation.** Only after Gate 1, build the real feature in `demo/` and record what was added in `demo/STATUS.md`.
5. **Gate 2: You verify the implementation.** You test the running result (and the branch preview URL once hosting exists).
6. **Merge.** Only after you confirm, the branch is merged into `main` through a pull request. Claude never merges without your explicit go-ahead.
7. **Tick off.** Update the checklist in the milestone file and the index below.

Rules:
- Nothing is merged to `main` that you have not confirmed, except plan documents (below).
- `main` is the repository's default branch (GitHub's default name; there is no `master`).

### Plan edits are auto-pushed
When Claude edits `PLAN.md` or any file in `milestones/`, a hook runs `scripts/sync-plan.ps1`, which commits those files and pushes. If a milestone branch is checked out, the plan edit goes to that branch and reaches `main` when the branch is merged. Edits made by hand (outside Claude) are not auto-pushed. Git here is set up to authenticate with the GitHub CLI login (`gh`), repo-local only.

## Milestone index
Each milestone: mockup first, your approval, then real code, then your confirmation, then merge.

| # | Milestone | Mockup | Approved | Implemented | Merged |
|---|---|---|---|---|---|
| 00 | [Brand and domain](milestones/00-brand-and-domain.md) | [x] | [x] | [x] | [ ] |
| 01 | [Repo and scaffold](milestones/01-repo-and-scaffold.md) | [ ] | [ ] | [ ] | [ ] |
| 02 | [Design system](milestones/02-design-system.md) | [ ] | [ ] | [ ] | [ ] |
| 03 | [Landing and bio](milestones/03-landing-and-bio.md) | [ ] | [ ] | [ ] | [ ] |
| 04 | [Legal and safety pages](milestones/04-legal-and-safety-pages.md) | [ ] | [ ] | [ ] | [ ] |
| 05 | [Content pipeline](milestones/05-content-pipeline.md) | [ ] | [ ] | [ ] | [ ] |
| 06 | [Booking and payments](milestones/06-booking-and-payments.md) | [ ] | [ ] | [ ] | [ ] |
| 07 | [Grids lesson](milestones/07-grids-lesson.md) | [ ] | [ ] | [ ] | [ ] |
| 08 | [SMR basics lesson](milestones/08-smr-basics-lesson.md) | [ ] | [ ] | [ ] | [ ] |
| 09 | [SMR simulator v1](milestones/09-smr-simulator-v1.md) | [ ] | [ ] | [ ] | [ ] |
| 10 | [Quizzes and badges](milestones/10-quizzes-and-badges.md) | [ ] | [ ] | [ ] | [ ] |
| 11 | [Diagram builder](milestones/11-diagram-builder.md) | [ ] | [ ] | [ ] | [ ] |
| 12 | [Classroom mode](milestones/12-classroom-mode.md) | [ ] | [ ] | [ ] | [ ] |
| 13 | [Printables and QR cards](milestones/13-printables-and-qr-cards.md) | [ ] | [ ] | [ ] | [ ] |
| 14 | [I&C and systems content](milestones/14-ic-and-systems-content.md) | [ ] | [ ] | [ ] | [ ] |
| 15 | [Standards and regulators](milestones/15-standards-and-regulators.md) | [ ] | [ ] | [ ] | [ ] |
| 16 | [Simulator tiers](milestones/16-simulator-tiers.md) | [ ] | [ ] | [ ] | [ ] |
| 17 | [AR/3D and kits](milestones/17-ar-3d-and-kits.md) | [ ] | [ ] | [ ] | [ ] |
| 18 | [Analytics, SEO and launch](milestones/18-analytics-seo-launch.md) | [ ] | [ ] | [ ] | [ ] |

Suggested first public launch: milestones 00-10. Classroom mode and later content follow.

## Open questions
- Domain for Littlecore: register `.org`, `.co` or `.io` (`.com` is taken), after a registrar check. Also check social handles and search the trademark register before printing anything.
- Base country: affects business registration, payment methods and child-data law (e.g. PDPA in Singapore/Malaysia, APPI in Japan, PIPA in Korea).
- Whether children's nicknames in classroom mode need parental consent in target countries.
- Local payment methods per target country.
- Hands-on kit design.
- Which public data sources to cite for grid voltage and frequency by country.
- Whether a visual CMS is ever wanted (currently: Cameron sends content, Claude formats it).

## Risks
- Child privacy and consent rules vary by country; keep data collection to nothing wherever possible.
- Publishing anything that could breach employer confidentiality or export controls; mitigated by public-sources-only rule and review.
- Simulator accuracy: label clearly as illustrative at each tier.
- Scope creep: hold to the milestone order and the two review gates.
