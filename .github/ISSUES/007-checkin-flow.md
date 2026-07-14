---
title: Add admin check-in flow (bulk, CSV export, QR)
labels: [backend, frontend, feature]
estimate: 2-4 days
---

Summary
- Add check-in endpoints and UI for admins to mark attendance, bulk-check-in, and QR-based check-ins.

Tasks
- Add `CheckIn` model, endpoints for bulk create, list, and export CSV.
- Add QR token generation and `POST /check-ins/qr` to accept tokens.
- Add admin UI page for selecting activity, searching participants, bulk check-in/out, and download CSV.

Acceptance Criteria
- Admin can perform bulk check-ins and download CSV; QR check-in works.
