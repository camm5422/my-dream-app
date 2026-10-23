# 07 Grids Lesson: How Electricity and Grids Work

**Branch:** `milestone/07-grids-lesson` · **Mockup folder:** `mockups/07-grids-lesson/` · **Depends on:** 05

**Goal:** First complete lesson with an interactive: voltage and frequency by country.

## Phase A: Mockup
- [ ] Create branch `milestone/07-grids-lesson` from `main`
- [ ] Build a working HTML mockup of the country explorer (pick a country, see voltage, frequency, plug, "why it matters") using a few sample countries in an inline JS array
- [ ] Mock the lesson text for each track (Kids, Students, Pros) with placeholder wording
- [ ] Mock the "plug in the wrong one" explainer
- [ ] Link from `mockups/index.html`, commit and push

## Gate 1: Your review of the mockup
- [ ] You approve the explorer interaction and lesson structure
- [ ] You supply or approve lesson wording per track

## Phase B: Implementation (after Gate 1)
- [ ] Build the country dataset in `demo/content/data/grids.json`: nominal voltage, frequency, plug type, source per entry
- [ ] Cover target region (Japan, South Korea, China, Taiwan, Singapore, Malaysia, Indonesia, Vietnam, Philippines, Thailand) plus UK, US and others for comparison; include special cases (Japan 50/60 Hz split)
- [ ] Build the explorer as a React component in `demo/src/`
- [ ] Add lesson files per track in `demo/content/lessons/`
- [ ] Verify all values against public sources and record last-checked dates
- [ ] Add 5-10 quiz questions per track (consumed by milestone 10)
- [ ] Test on a mid-range Android phone
- [ ] Update `demo/STATUS.md`

## Gate 2: Your confirmation and merge
- [ ] You check the data and play the explorer on your phone
- [ ] Pull request merged into `main` (only after your go-ahead)
- [ ] Tick this milestone in the PLAN.md index

## Done when
The lesson and explorer are live, accurate, sourced and playable on a phone.
