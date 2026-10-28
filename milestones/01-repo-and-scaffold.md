# 01 Repo and Scaffold

**Branch:** `milestone/01-repo-and-scaffold` · **Mockup folder:** `mockups/01-repo-and-scaffold/` · **Depends on:** 00 (domain optional)

**Goal:** A deployed Next.js site shell with a working publish flow, starting from a navigation/site-map mockup.

## Phase A: Mockup
- [x] Create branch `milestone/01-repo-and-scaffold` from `main`
- [x] Build a clickable HTML site-map mockup: header, navigation, footer and empty placeholder pages for `/`, `/kids`, `/students`, `/pros`, `/learn`, `/play`, `/classroom`, `/book`, `/about`, `/sources`, `/privacy`
- [x] Show the mobile menu behaviour (phone width) and projector width
- [x] Link from `mockups/index.html`, commit and push

## Gate 1: Your review of the mockup
- [x] You approve the site map and navigation (or request changes)

## Phase B: Implementation (after Gate 1)
- [ ] Scaffold Next.js with TypeScript and the App Router inside `demo/`
- [ ] Add linting, formatting and a type-check script
- [ ] Create the placeholder routes from the approved site map
- [ ] Write `demo/README.md` section on how to run and publish
- [ ] Connect the repo to Vercel (free tier), root directory `demo/`; confirm every pushed branch gets a preview URL
- [ ] Connect the custom domain (when available)
- [ ] Confirm no secrets are committed
- [ ] Update `demo/STATUS.md`

## Gate 2: Your confirmation and merge
- [ ] You open the preview URL on a phone and confirm it works
- [ ] Pull request merged into `main` (only after your go-ahead)
- [ ] Tick this milestone in the PLAN.md index

## Done when
Pushing a branch gives a preview URL, `main` publishes to the live URL, and navigation matches the approved mockup.
