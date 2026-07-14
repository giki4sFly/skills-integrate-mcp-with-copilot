---
title: Implement Activity CRUD API (create/update/delete)
labels: [backend, api]
estimate: 1 day
---

Summary
- Provide full REST CRUD for activities so admins can create and edit activities.

Tasks
- Add `POST /activities` (create), `PUT /activities/{id}` (update), `DELETE /activities/{id}`.
- Validate inputs and enforce admin role for create/update/delete.

Acceptance Criteria
- Admin can create, update, delete activities; regular users cannot.

Files: update `src/app.py` or add `routes/activities.py`.
