# Data Fetching (REST/GraphQL, pagination, typeahead, realtime)

Focus on contracts, pagination, cancellation, and consistency.

## RADIO+
- Requirements: freshness, latency targets, offline tolerance
- API/Data: pagination model (cursor vs offset), errors, idempotency
- Interface: loading/empty/error states, optimistic UX
- Operations: caching (HTTP + client), retries, backoff, dedupe
- Risks: overfetching, cache staleness, race conditions
- Observability/Testing: request metrics, error rates, contract tests
- Checklist: below

## Checklist
- Define pagination and error model
- Implement cancellation via `AbortController`
- Add retry with backoff and jitter
- Prefer cache-aware fetch layer (SWR/Suspense-ready)
- Validate inputs/outputs (Zod/TS)

## Examples
- `examples/usePaginatedFeed.ts`
- `examples/typeahead.ts`
