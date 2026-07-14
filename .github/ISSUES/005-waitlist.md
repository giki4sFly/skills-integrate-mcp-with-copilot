---
title: Add waitlist support and automatic promotion
labels: [backend, feature]
estimate: 1 day
---

Summary
- Support joining/leaving a waitlist and auto-promote the first waitlist entry when a spot frees.

Tasks
- Add `POST /activities/{id}/waitlist`, `POST /activities/{id}/leave-waitlist`.
- On unregister, if spots free and waitlist non-empty, move first waitlisted user to participants and notify them.

Acceptance Criteria
- Waitlist entries persisted; unregister triggers promotion.
