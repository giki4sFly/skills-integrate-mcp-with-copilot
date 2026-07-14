---
title: Add CSV / PDF export for activities & reports
labels: [backend, frontend]
estimate: 1-2 days
---

Summary
- Provide CSV export of activities and participant lists and server PDF generation endpoint.

Tasks
- Add `GET /activities/export.csv` and `GET /activities/{id}/report.pdf`.
- Hook into admin UI for download.

Acceptance Criteria
- Admins can download participant CSV and activity PDFs.
