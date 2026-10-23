# 12 Classroom Mode

**Branch:** `milestone/12-classroom-mode` · **Mockup folder:** `mockups/12-classroom-mode/` · **Depends on:** 09, 10, 04

**Goal:** You or a teacher can run a live group session where students join by QR code.

## Phase A: Mockup
- [ ] Create branch `milestone/12-classroom-mode` from `main`
- [ ] Build a host (projector) view mockup: room code, QR code placeholder, player list, activity control, live results (simulated players in JS)
- [ ] Build a student view mockup: join with nickname, activity screen, waiting screen
- [ ] Describe the first group activity (e.g. each phone controls one part of an SMR and the class keeps the grid stable)
- [ ] Link from `mockups/index.html`, commit and push

## Gate 1: Your review of the mockup
- [ ] You approve the host and student flows and the group activity
- [ ] You decide privacy position: nickname only, rooms expire, no personal data
- [ ] You confirm parental-consent requirements for the target countries (advice may be needed)

## Phase B: Implementation (after Gate 1)
- [ ] Choose the realtime service (free tier); check limits and data location
- [ ] Build host view and student view in `demo/src/` with real QR join
- [ ] Implement the group activity and live results
- [ ] Handle disconnects, late joiners and 30+ players; add nickname filter and remove-player control
- [ ] Test on poor Wi-Fi and mixed devices
- [ ] Write a one-page host guide
- [ ] Update `demo/STATUS.md`

## Gate 2: Your confirmation and merge
- [ ] You run a trial session with several phones and confirm
- [ ] Pull request merged into `main` (only after your go-ahead)
- [ ] Tick this milestone in the PLAN.md index

## Done when
You can run a 20-30 student session from one projector with phones joining by QR code.
