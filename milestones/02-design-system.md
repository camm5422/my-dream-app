# 02 Design System

**Branch:** `milestone/02-design-system` · **Mockup folder:** `mockups/02-design-system/` · **Depends on:** 00, 01

**Goal:** Reusable styles and components that adapt to the three tracks.

## Phase A: Mockup
- [ ] Create branch `milestone/02-design-system` from `main`
- [ ] Build an HTML style-guide page showing, for each track (Kids, Students, Pros): colours, type scale, buttons, cards, callouts, notice banner, header, footer
- [ ] Include touch-target sizes (min 44px) and a phone-width view
- [ ] Include a dark/projector high-contrast variant
- [ ] Link from `mockups/index.html`, commit and push

## Gate 1: Your review of the mockup
- [ ] You approve the look of each track (or request changes)

## Phase B: Implementation (after Gate 1)
- [ ] Implement design tokens per track in `demo/src/styles/`
- [ ] Implement theme switching by section
- [ ] Build React components: Button, Card, Header, Footer, Nav, Callout, NoticeBanner
- [ ] Check contrast (WCAG AA) and reduced-motion support
- [ ] Add an internal `/styleguide` page that mirrors the approved mockup
- [ ] Test on a mid-range Android phone and at projector resolution
- [ ] Update `demo/STATUS.md`

## Gate 2: Your confirmation and merge
- [ ] You compare `/styleguide` with the mockup on your phone and confirm
- [ ] Pull request merged into `main` (only after your go-ahead)
- [ ] Tick this milestone in the PLAN.md index

## Done when
The style guide renders correctly in all three track themes on phone and large screen.
