---
title: Remove secrets from repo and add `.env.example`
labels: [security, maintenance]
estimate: 0.5 day
---

Summary
- Remove hard-coded secrets and credentials from repo and add `.env.example` documenting required env vars.

Tasks
- Remove any credentials or secrets from code/config.
- Add `.env.example` with required variables (JWT secret, DATABASE_URL, etc.).
- Update README with env setup instructions.

Acceptance Criteria
- No secrets in the repo; `.env.example` present.
