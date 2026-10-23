# 00 Brand and Domain

**Branch:** `milestone/00-brand-and-domain` · **Mockup folder:** `mockups/00-brand-and-domain/` · **Depends on:** none

**Goal:** Settle the name, domain and visual identity so later work has a stable base. Today there is no domain and no brand kit.

## Phase A: Mockup
- [ ] Create branch `milestone/00-brand-and-domain` from `main`
- [ ] Brainstorm 8-10 candidate names (easy to say for kids and non-native English speakers)
- [ ] Build 3 brand-board mockups (HTML), each with name, logo sketch (SVG), palette, fonts, and a mini home-page hero in each track look (Kids, Students, Pros)
- [ ] Add a side-by-side comparison page with a phone-width view
- [ ] Add a mascot sketch for the Kids zone
- [ ] Link the mockups from `mockups/index.html`
- [ ] Commit and push the branch

## Gate 1: Your review of the mockup
- [ ] You pick one direction (or ask for changes; repeat Phase A as needed)
- [ ] You approve in writing: "mockup 00 approved"

## Phase B: Implementation (after Gate 1)
- [ ] Check name availability: domain, social handles, trademark search in your base country
- [ ] You register the domain (Claude can advise on registrars)
- [ ] Decide base country / business entity (affects payments and privacy law)
- [ ] Export final logo files (SVG, PNG) into `demo/public/brand/`
- [ ] Write design tokens (colours, fonts, per-track) as `demo/src/styles/tokens.css`
- [ ] Write a short brand voice guide per track in `demo/content/brand.md`
- [ ] Update `mockups/assets/base.css` to the chosen palette so later mockups look on-brand
- [ ] Update PLAN.md open questions and `demo/STATUS.md`

## Gate 2: Your confirmation and merge
- [ ] You confirm the brand assets and decisions are correct
- [ ] Pull request merged into `main` (only after your go-ahead)
- [ ] Tick this milestone in the PLAN.md index

## Done when
Name, domain, logo, palette, fonts and voice are chosen, written down, and merged.
