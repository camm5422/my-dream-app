# 04 Legal and Safety Pages

**Branch:** `milestone/04-legal-and-safety-pages` · **Mockup folder:** `mockups/04-legal-and-safety-pages/` · **Depends on:** 01

**Goal:** Privacy, disclaimer, terms and sources pages in place before any public launch. Claude drafts; this is not legal advice and should be reviewed by a professional.

## Phase A: Mockup
- [x] Create branch `milestone/04-legal-and-safety-pages` from `main`
- [x] Build HTML drafts of: privacy policy (incl. plain-language children's section), terms (bookings, refunds, cancellations), "educational, not for design" disclaimer, and Sources page
- [x] Mock the disclaimer banner as it would appear on lesson and simulator pages
- [x] List the facts Claude needs from you (base country, business name, contact email)
- [x] Link from `mockups/index.html`, commit and push

## Gate 1: Your review of the mockup
- [ ] You approve the wording and the disclaimer placement
- [ ] You confirm base country and privacy laws that apply (e.g. PDPA, APPI, PIPA, GDPR)
- [ ] You confirm no employer-confidential or export-controlled information will be published

## Phase B: Implementation (after Gate 1)
- [ ] Build the pages in `demo/` from the approved text
- [ ] Build a reusable Disclaimer component and add it to lesson and simulator templates
- [ ] Build the Sources page fed from `demo/content/data/sources.json`
- [ ] Link all from the footer
- [ ] Get a professional review if possible (privacy, child safeguarding)
- [ ] Update `demo/STATUS.md`

## Gate 2: Your confirmation and merge
- [ ] You sign off the final wording
- [ ] Pull request merged into `main` (only after your go-ahead)
- [ ] Tick this milestone in the PLAN.md index

## Done when
All pages exist, are linked from the footer, and you have signed off the wording.
