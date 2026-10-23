# 11 Diagram Builder

**Branch:** `milestone/11-diagram-builder` · **Mockup folder:** `mockups/11-diagram-builder/` · **Depends on:** 02, 08

**Goal:** Drag-and-drop activity to build a simple plant or grid diagram.

## Phase A: Mockup
- [ ] Create branch `milestone/11-diagram-builder` from `main`
- [ ] Build a working HTML prototype (touch and mouse) for the generic SMR-to-grid chain: reactor, steam generator, turbine, generator, transformer, grid
- [ ] Include wrong-connection feedback, hints and a "show me" option
- [ ] Mock difficulty tiers (Kids: few blocks; Pros: protection, instrumentation and control blocks)
- [ ] Link from `mockups/index.html`, commit and push

## Gate 1: Your review of the mockup
- [ ] You test on a phone and approve the interaction and block descriptions

## Phase B: Implementation (after Gate 1)
- [ ] Build the React drag-and-drop component in `demo/src/` with touch support
- [ ] Define block library and connection rules as data in `demo/content/data/`
- [ ] Add hints, end screen, keyboard alternative and readable labels
- [ ] Update `demo/STATUS.md`

## Gate 2: Your confirmation and merge
- [ ] You build the diagram on your phone and confirm
- [ ] Pull request merged into `main` (only after your go-ahead)
- [ ] Tick this milestone in the PLAN.md index

## Done when
A learner can build the correct diagram on a phone and understand each block's role.
