# 05 Content Pipeline

**Branch:** `milestone/05-content-pipeline` · **Mockup folder:** `mockups/05-content-pipeline/` · **Depends on:** 01, 02

**Goal:** A simple, repeatable way to turn your notes into lessons on the site.

## Phase A: Mockup
- [ ] Create branch `milestone/05-content-pipeline` from `main`
- [ ] Build an HTML mockup of a lesson page per track (title, age band, sources block, embedded activity placeholder, disclaimer, next/previous)
- [ ] Build an HTML mockup of the lesson index per track
- [ ] Write a sample lesson file showing the planned Markdown front matter (title, track, age band, topic, sources, last reviewed)
- [ ] Link from `mockups/index.html`, commit and push

## Gate 1: Your review of the mockup
- [ ] You approve the lesson page layout and the content format
- [ ] You approve how you will send content (notes in any format) and how Claude formats it

## Phase B: Implementation (after Gate 1)
- [ ] Implement the lesson template and index pages in `demo/`
- [ ] Load Markdown lessons from `demo/content/lessons/` and JSON data from `demo/content/data/`
- [ ] Support embedding interactives inside lessons
- [ ] Render the sources block from front matter
- [ ] Write a short guide in `demo/README.md`: how content is supplied and published
- [ ] Add a review checklist (accuracy, sources, age-appropriate language, disclaimer)
- [ ] Publish one sample lesson end to end
- [ ] Update `demo/STATUS.md`

## Gate 2: Your confirmation and merge
- [ ] You review the sample lesson on the preview URL and confirm
- [ ] Pull request merged into `main` (only after your go-ahead)
- [ ] Tick this milestone in the PLAN.md index

## Done when
You can send raw notes and a finished lesson appears on a branch preview after review.
