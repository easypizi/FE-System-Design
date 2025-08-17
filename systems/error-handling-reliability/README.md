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
- [examples/fetch-with-retry.ts](./examples/fetch-with-retry.ts)
- [examples/circuit-breaker.ts](./examples/circuit-breaker.ts)

## Trade-offs

| Strategy         | Pros                                   | Cons                                 | Prefer when |
|------------------|----------------------------------------|--------------------------------------|-------------|
| Retry + backoff  | Simple, improves transient failures     | Can amplify load if not bounded       | Idempotent GET/PUT |
| Hedging          | Reduces tail latency                    | Higher backend load                   | Latency-sensitive reads |
| Circuit breaker  | Protects systems from cascading failures| Potentially blocks recovery briefly   | Unstable dependencies |
| Timeouts         | Bounds waiting time                     | Too strict can cause false failures   | All network calls |
| Fallback UI      | Keeps UX functional                     | Possible inconsistency                | Non-critical widgets |
| Idempotency keys | Prevents duplicates on retries          | Requires backend support              | Mutations under retry |

## Sources
- More links: [docs/SOURCES.md](../../docs/SOURCES.md)
