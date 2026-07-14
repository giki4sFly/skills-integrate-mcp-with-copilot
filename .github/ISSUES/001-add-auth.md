---
title: Add user authentication (register/login + JWT)
labels: [enhancement, backend, security]
estimate: 2-4 days
---

Summary
- Implement user accounts, secure password hashing, and JWT-based authentication so protected endpoints and role-based UI can be supported.

Tasks
- Add `User` model and persistence.
- Add `POST /users/register`, `POST /users/login`, `GET /users/me` endpoints.
- Hash passwords (bcrypt) and issue signed JWTs (exp + secret from env).
- Apply token validation middleware for protected routes.

Acceptance Criteria
- Register returns token+user, login returns token+user, `GET /users/me` validates token.
- No plaintext passwords stored in repo or DB.

Files to change: `src/app.py` (or new auth module), add `requirements.txt` entries.
