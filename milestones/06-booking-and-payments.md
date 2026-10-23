# 06 Booking and Payments

**Branch:** `milestone/06-booking-and-payments` · **Mockup folder:** `mockups/06-booking-and-payments/` · **Depends on:** 00, 03, 04

**Goal:** Visitors can book and pay for sessions; schools can enquire and be invoiced.

## Phase A: Mockup
- [ ] Create branch `milestone/06-booking-and-payments` from `main`
- [ ] Build an HTML mockup of `/book`: session types (individual, small group, school visit, online workshop), fake prices, calendar embed placeholder, payment step placeholder, confirmation screen
- [ ] Build an HTML mockup of the school/group enquiry form and invoice request
- [ ] Mock country/currency selection and local payment method icons
- [ ] Link from `mockups/index.html`, commit and push

## Gate 1: Your review of the mockup
- [ ] You approve the booking flow, session types and price display
- [ ] You decide prices, durations, minimum numbers and cancellation rules

## Phase B: Implementation (after Gate 1)
- [ ] Choose booking tool (Cal.com or Calendly) and create the account
- [ ] Create a Stripe account for your base country and connect it
- [ ] Research local payment methods for the target countries and enable the main ones
- [ ] Embed booking on `/book` in `demo/`
- [ ] Add the school/group enquiry form that emails you (keys and secrets in environment variables, never committed)
- [ ] Create an invoice template for schools
- [ ] Set up confirmation emails and timezone handling; add refund text from milestone 04
- [ ] Test in Stripe test mode, then with a small real payment
- [ ] Update `demo/STATUS.md`

## Gate 2: Your confirmation and merge
- [ ] You make a test booking and payment yourself and confirm
- [ ] Pull request merged into `main` (only after your go-ahead)
- [ ] Tick this milestone in the PLAN.md index

## Done when
A test customer can book, pay and receive confirmation, and a school enquiry reaches you.
