# 09 SMR Simulator v1 (Illustrative)

**Branch:** `milestone/09-smr-simulator-v1` · **Mockup folder:** `mockups/09-smr-simulator-v1/` · **Depends on:** 02, 08

**Goal:** A fun, simple simulator for the Kids and early Students tracks.

## Phase A: Mockup
- [ ] Create branch `milestone/09-smr-simulator-v1` from `main`
- [ ] Write the game idea and learning goals (e.g. keep the lights on while staying safe)
- [ ] Build a playable single-file HTML prototype (plain JS) with controls for power level, cooling, grid demand and a safety trip, with simple cause-and-effect logic
- [ ] Add feedback: lights, meters, friendly messages; include a safe-shutdown moment that teaches passive safety
- [ ] Label "illustrative only"
- [ ] Link from `mockups/index.html`, commit and push

## Gate 1: Your review of the mockup
- [ ] You play it, check the engineering concepts are sound and fun, and request changes
- [ ] Optional: playtest with a few children in the age range and note feedback

## Phase B: Implementation (after Gate 1)
- [ ] Port the approved logic to a React component in `demo/src/` with a clean, testable simulation module
- [ ] Add unit tests for the simulation rules
- [ ] Make controls touch-friendly; keep bundle small; test on a mid-range Android phone
- [ ] Add the "illustrative only" label and disclaimer
- [ ] Update `demo/STATUS.md`

## Gate 2: Your confirmation and merge
- [ ] You play the real build on your phone and confirm
- [ ] Pull request merged into `main` (only after your go-ahead)
- [ ] Tick this milestone in the PLAN.md index

## Done when
A child can play a round on a phone without help and explain one thing they learned.
