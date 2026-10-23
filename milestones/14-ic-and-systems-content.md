# 14 I&C and Systems Content

**Branch:** `milestone/14-ic-and-systems-content` · **Mockup folder:** `mockups/14-ic-and-systems-content/` · **Depends on:** 05, 08

**Goal:** Students and Pros content on instrumentation and control, and how systems interact with the plant.

## Phase A: Mockup
- [ ] Create branch `milestone/14-ic-and-systems-content` from `main`
- [ ] Outline topics: sensors, signals, control loops, protection systems, safety vs non-safety, defence in depth, diversity and redundancy, human-system interface
- [ ] Build HTML mockups of one lesson with an interactive 2-out-of-3 voting / trip-logic demo and a plant-interaction block diagram (generic, public-source)
- [ ] Link from `mockups/index.html`, commit and push

## Gate 1: Your review of the mockup
- [ ] You approve topic list, depth for Students vs Pros, and the interactive demo
- [ ] You confirm nothing shown is confidential or vendor-specific

## Phase B: Implementation (after Gate 1)
- [ ] Write the lessons (at least three) in `demo/content/lessons/`
- [ ] Add final SVG diagrams and the trip-logic interactive in `demo/src/`
- [ ] Extend the diagram builder with I&C blocks (if milestone 11 is merged)
- [ ] Add worked examples, sources, disclaimer and quizzes
- [ ] Update `demo/STATUS.md`

## Gate 2: Your confirmation and merge
- [ ] You review each lesson for accuracy and confirm
- [ ] Pull request merged into `main` (only after your go-ahead)
- [ ] Tick this milestone in the PLAN.md index

## Done when
At least three I&C lessons are live with diagrams, sources and quizzes.
