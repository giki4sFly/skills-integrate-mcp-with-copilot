---
title: Replace in-memory activities with persistent DB (Postgres/SQLite)
labels: [backend, infra]
estimate: 2-3 days
---

Summary
- Move activities data from the current in-memory store to a persistent database using SQLAlchemy (SQLite for dev, Postgres for prod).

Tasks
- Add SQLAlchemy models for Activity, User, CheckIn, Category, Tag, Favorite.
- Add DB session management and config via env vars (`DATABASE_URL`).
- Seed existing activity data into DB on first run.

Acceptance Criteria
- `GET /activities` returns records from DB and signup/unregister mutate DB rows.

Files: add `src/models.py`, update `src/app.py`, update `requirements.txt`.
