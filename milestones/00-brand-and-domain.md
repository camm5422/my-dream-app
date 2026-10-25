# 00 Brand and Domain

**Branch:** `milestone/00-brand-and-domain` · **Mockup folder:** `mockups/00-brand-and-domain/` · **Depends on:** none

**Goal:** Settle the name, domain and visual identity so later work has a stable base. Today there is no domain and no brand kit.

## Phase A: Mockup
- [x] Create branch `milestone/00-brand-and-domain` from `main`
- [x] Brainstorm 8-10 candidate names (easy to say for kids and non-native English speakers)
- [x] Build 3 brand-board mockups (HTML), each with name, logo sketch (SVG), palette, fonts, and a mini home-page hero in each track look (Kids, Students, Pros)
- [x] Add a side-by-side comparison page with a phone-width view
- [x] Add a mascot sketch for the Kids zone
- [x] Link the mockups from `mockups/index.html`
- [x] Commit and push the branch

## Gate 1: Your review of the mockup
- [x] You pick one direction (or ask for changes; repeat Phase A as needed): direction A, Littlecore (picked 25 Oct 2026; Claude to decide remaining details)
- [x] You approve in writing: "mockup 00 approved" (25 Oct 2026: owner picked A and said "proceed to phase B")

## Phase B: Implementation (after Gate 1)
- [ ] Check name availability: domain, social handles, trademark search in your base country. Partly done by Claude: rough DNS check and a web search found no clash. Still to do by you: confirm at a registrar, check social handles, trademark register search
- [ ] You register the domain (Claude can advise on registrars). Open: `littlecore.com` is taken; `.org`, `.co` and `.io` showed no DNS records
- [ ] Decide base country / business entity (affects payments and privacy law). Open, owner decision
- [x] Export final logo files (SVG, PNG) into `demo/public/brand/`
- [x] Write design tokens (colours, fonts, per-track) as `demo/src/styles/tokens.css` (plus self-hosted fonts in `fonts.css` and `demo/public/fonts/`)
- [x] Write a short brand voice guide per track in `demo/content/brand.md`
- [x] Update `mockups/assets/base.css` to the chosen palette so later mockups look on-brand
- [x] Update PLAN.md open questions and `demo/STATUS.md`

## Gate 2: Your confirmation and merge
- [x] You confirm the brand assets and decisions are correct (25 Oct 2026: owner said "merge"; domain, trademark and base country carried over as open items in PLAN.md)
- [x] Pull request merged into `main` (only after your go-ahead)
- [x] Tick this milestone in the PLAN.md index

## Done when
Name, domain, logo, palette, fonts and voice are chosen, written down, and merged.
