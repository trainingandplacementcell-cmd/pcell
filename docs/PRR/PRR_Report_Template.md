Production Readiness Review (PRR) — Next.js + Vercel

Executive Summary
- Overall readiness: Pass/Fail with rationale
- Top 3 risk areas and owners
- Approved go/no-go decision for production release

1. Codebase Health
- Tests: coverage, CI results
- Build reproducibility: lockfiles, engines
- Secrets: storage, access controls
- Documentation: runbooks, architecture diagrams

2. Security
- Dependency hygiene, SCA results
- Input validation, output encoding
- TLS, headers, CSP, cookies
- Secrets management and privacy controls

3. Performance
- Front-end: bundle size, code-splitting
- Image optimization and CDN caching
- SSR/ISR performance and TTFB
- Performance budgets and Lighthouse baselines

4. Reliability
- Deployment strategy (canary/rollback)
- Database migrations and rollback
- Backups and DR readiness

5. Observability
- Logs, metrics, traces, dashboards
- SLOs/SLIs defined; alerting rules
- Runbooks and on-call targets

6. Deployability
- CI/CD coverage; staging parity
- Feature flags; canary releases
- Rollback procedures and versioning

7. Compliance & Privacy
- Data retention, consent, privacy policy alignment
- Auditability and logging privacy considerations

8. Accessibility & SEO
- WCAG basics; semantic HTML; keyboard nav
- Metadata, robots.txt, sitemap, canonical URLs

9. UX
- Accessibility-informed UX; responsive design
- Perceived performance cues

Appendices
- Risks, mitigations, and owners
- Evidence sources and reference dashboards
- Change log for PRR
