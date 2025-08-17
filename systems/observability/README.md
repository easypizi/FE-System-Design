# Observability

Measure what matters: logs, metrics, traces, and RUM for the front end.

## RADIO+
- Requirements: SLOs, alert thresholds, sampling budget
- API/Data: event schemas, PII handling, batching
- Interface: user consent, debug UIs, feature flags
- Operations: RUM for CWV, tracing propagation, log levels
- Risks: PII leaks, noisy alerts, performance overhead
- Observability/Testing: dashboards, SLOs, synthetic monitors
- Checklist: below

## Checklist
- Define SLOs and alert policies
- Instrument CWV and user flows
- Propagate trace IDs; correlate with backend
- Feature flag rollout and kill switches
- Privacy review for telemetry data

## Examples
- `examples/instrument-web-vitals.ts`
- `examples/feature-flags.ts`
