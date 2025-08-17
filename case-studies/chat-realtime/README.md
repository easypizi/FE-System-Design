# Case Study: Chat / Realtime

Designing a web chat with presence, typing indicators, and delivery guarantees.

## RADIO+
- Requirements: near-real-time messaging, offline send, read receipts
- API/Data: WebSocket/SSE, message ordering, idempotency keys
- Interface: optimistic send, retries, presence/typing states
- Operations: backoff, reconnect, rate limits
- Risks: duplication, partial failures, memory growth
- Observability/Testing: delivery rate, latency, chaos/disconnect tests

## Examples
- `examples/websocket-client.ts`
- `examples/optimistic-ui.ts`
