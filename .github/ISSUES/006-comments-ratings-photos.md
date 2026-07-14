---
title: Implement server-side comments/ratings/photos persistence
labels: [backend, frontend]
estimate: 2-3 days
---

Summary
- Persist comments, ratings, and photos on the server (currently only stored client-side/localStorage).

Tasks
- Add models/endpoints for comments and ratings (`/activities/{id}/comments`, `/activities/{id}/ratings`).
- Store photos (or photo metadata) and provide upload URL or accept base64 for now.
- Update frontend to fetch server-stored comments/ratings.

Acceptance Criteria
- Comments and ratings visible across devices/users.
