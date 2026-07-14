---
title: Add certificates issuance & verification
labels: [backend, feature]
estimate: 2-4 days
---

Summary
- Add certificate model and endpoints to issue/verify certificates; optionally generate server-side PDF.

Tasks
- Add `/certificates` endpoints (issue/list/verify).
- Provide `GET /certificates/{id}/pdf` to download certificate PDF (server-generated).
- Wire certificate issuance on check-in/completion flows.

Acceptance Criteria
- Certificates can be issued and verified via API; PDFs downloadable.
