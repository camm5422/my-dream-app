# 16 Simulator Tiers

**Branch:** `milestone/16-simulator-tiers` · **Mockup folder:** `mockups/16-simulator-tiers/` · **Depends on:** 09, 14

**Goal:** Add simplified-physics (Students) and deeper (Pros) versions of the simulator.

## Phase A: Mockup
- [ ] Create branch `milestone/16-simulator-tiers` from `main`
- [ ] Write a one-page model spec for each tier: variables, units, equations, assumptions, limits
- [ ] Build HTML prototypes (plain JS) of the Students and Pros models with charts readable on a phone
- [ ] Mock scenarios: load follow, loss of grid, trip; mock a "what this leaves out" panel
- [ ] Link from `mockups/index.html`, commit and push

## Gate 1: Your review of the mockup
- [ ] You review the model specs and behaviour for technical sanity, and approve or amend

## Phase B: Implementation (after Gate 1)
- [ ] Implement the models as tested modules in `demo/src/` (unit tests against textbook or public values)
- [ ] Build UI, charts and scenario selector
- [ ] Document assumptions on the page; label "illustrative, not for design"
- [ ] Performance check on a mid-range Android phone
- [ ] Update `demo/STATUS.md`

## Gate 2: Your confirmation and merge
- [ ] You run each scenario and confirm
- [ ] Pull request merged into `main` (only after your go-ahead)
- [ ] Tick this milestone in the PLAN.md index

## Done when
All three tiers are playable, documented and reviewed by you for technical sanity.
