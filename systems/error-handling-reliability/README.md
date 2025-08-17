# Error Handling & Reliability

Design for failure: retries, timeouts, circuit breakers, fallbacks.

## RADIO+
- Requirements: SLOs for success rate, acceptable latency
- API/Data: error taxonomy; idempotent endpoints
- Interface: graceful degradation, user messaging
- Operations: retry/backoff, hedging, circuit breaking
- Risks: thundering herd, duplicate actions, stale UI
- Observability/Testing: error tracking, chaos testing
- Checklist: below

## Checklist
- Timeouts and cancellation defined
- Retries with jitter and max cap
- Circuit breaker with half-open probe
- Idempotency keys for mutations
- User-visible fallback and recovery

## Examples
- `examples/fetch-with-retry.ts`
- `examples/circuit-breaker.ts`
