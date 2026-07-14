---
title: Add categories & tags support (API + UI)
labels: [backend, frontend]
estimate: 1-2 days
---

Summary
- Add endpoints and frontend UI to manage categories and tags for activities.

Tasks
- Add `GET/POST/PUT/DELETE` for `/categories` and `/tags`.
- Update activity model to link category/tag ids.
- Update `src/static/index.html` UI to show category filter and admin pages to manage categories.

Acceptance Criteria
- Categories/tags persisted and filterable in the activity list.
