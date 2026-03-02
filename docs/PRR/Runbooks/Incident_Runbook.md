Incident Response Runbook (Frontend/Next.js on Vercel)

Purpose
- Provide a fast, repeatable process for identifying, containing, and resolving incidents affecting production sites hosted on Vercel.

Scope
- Covers public pages, SSR/ISR endpoints, and API calls from the frontend that impact user experience or data correctness.

Roles
- On-Call Engineer: initial triage and containment
- SRE/Platform Engineer: escalation, root-cause analysis, remediation
- Product/Engineering Lead: communication and postmortem

Detection & Triage
- Alerts: check monitoring dashboards for spikes in latency, error rates, or 5xx responses.
- Verify affected scope: which routes/pages are impacted? Are previews affected? Is CORS or API access broken?
- Gather context: last deploy version, recent changes, data migrations, external dependencies.

Containment & Mitigation
- If a feature flag exists, disable affected feature using flags; otherwise rollback to previous known-good commit if feasible.
- Put in place a temporary fix or hotfix patch if needed to restore service while longer-term fix is prepared.
- Communicate to stakeholders with status, impact, and ETA.

Investigation & Root Cause
- Collect logs, metrics, traces related to incident.
- Identify if issue is code-level, data-level, or infrastructure-related.
- Document findings and gather evidence for postmortem.

Repair & Recovery
- Implement fix in a targeted branch/version; verify in staging/pre-prod if possible before production.
- Deploy fix with minimal blast radius; monitor post-deploy metrics.

Postmortem & Review
- Create postmortem within 24–72 hours; include timeline, impact, root cause, fix, action items, and owners.
- Update runbooks, monitoring, and CI to prevent recurrence.

Communication & Escalation
- Status updates on issue channel (Slack/Teams), engineering channel, and incident command if applicable.
- Include customer-facing impact if necessary and ETA for resolution.

Artifacts & Templates
- Incident timeline, root cause analysis, metrics, affected users, and remediation steps.
- Include links to relevant logs/dashboards in the postmortem.
