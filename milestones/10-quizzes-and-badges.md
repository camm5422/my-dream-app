# 10 Quizzes and Badges

**Branch:** `milestone/10-quizzes-and-badges` · **Mockup folder:** `mockups/10-quizzes-and-badges/` · **Depends on:** 05, 07 or 08

**Goal:** A reusable quiz engine with on-device badges, no accounts.

## Phase A: Mockup
- [ ] Create branch `milestone/10-quizzes-and-badges` from `main`
- [ ] Build a working HTML quiz mockup (multiple choice, true/false, matching) with sample questions, explanations and a result screen
- [ ] Design badge artwork for each track and a "my badges" screen
- [ ] Mock the notice that progress is stored on the device only
- [ ] Link from `mockups/index.html`, commit and push

## Gate 1: Your review of the mockup
- [ ] You approve quiz flow, badge designs and wording

## Phase B: Implementation (after Gate 1)
- [ ] Define the quiz JSON format (question, options, answer, explanation, track, topic) in `demo/content/data/`
- [ ] Build the quiz component and result screen in `demo/src/`
- [ ] Store scores and badges in localStorage only; add a "reset progress" option
- [ ] Add on-device completion image (no data sent)
- [ ] Load questions from the lessons built in milestones 07 and 08
- [ ] Update `demo/STATUS.md`

## Gate 2: Your confirmation and merge
- [ ] You complete a quiz on your phone, earn a badge and confirm it persists
- [ ] Pull request merged into `main` (only after your go-ahead)
- [ ] Tick this milestone in the PLAN.md index

## Done when
A learner can finish a quiz, earn a badge, and see it on return visits on the same device.
