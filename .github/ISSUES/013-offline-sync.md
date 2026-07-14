---
title: Add optimistic/offline sync + local fallback
labels: [frontend, enhancement]
estimate: 2-3 days
---

Summary
- Improve frontend resilience: keep localStorage fallback and implement background sync when backend returns.

Tasks
- Refactor client to queue failed writes and retry on connectivity.
- Keep optimistic UI updates and merged server conflict resolution.

Acceptance Criteria
- App functions while backend offline and syncs when online.
