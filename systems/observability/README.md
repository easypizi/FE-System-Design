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

## Trade-offs

| Topic       | Option            | Pros                                   | Cons                                 | Prefer when |
|-------------|-------------------|----------------------------------------|--------------------------------------|-------------|
| RUM         | Sampling          | Lower cost, minimal overhead           | May miss edge cases                   | High traffic apps |
| RUM         | Full capture      | Complete visibility                     | Costly, potential perf impact         | Low/medium traffic |
| Telemetry   | Logs              | Flexible, detailed context              | Hard to aggregate at scale            | Debugging workflows |
| Telemetry   | Metrics           | Cheap aggregation, alert-friendly       | Lower cardinality detail              | SLOs, dashboards |
| Telemetry   | Traces            | End-to-end flow insight                 | Instrumentation complexity            | Perf investigations |
| Monitoring  | Synthetic         | Catch issues before users               | Not representative of real users      | Release gates |
| Monitoring  | RUM               | Real-world signals                      | Noisy, user privacy considerations    | Ongoing health |

## Sources
- More links: [docs/SOURCES.md](../../docs/SOURCES.md)
