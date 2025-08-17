# News Feed Architecture (Client)

- Rendering: CSR with prefetch for SEO-lite pages
- Data: Cursor pagination; feed edge `{ id, actor, verb, object, ts }`
- Caching: SWR; background revalidation on visibilitychange
- Realtime: WebSocket for new edges; append optimistically
- Error Handling: retry backoff on fetch; circuit breaker on realtime
