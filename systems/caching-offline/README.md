# Caching & Offline

HTTP caching, client caches, and Service Worker strategies for resilience and speed.

## RADIO+
- Requirements: freshness vs consistency, offline expectations, storage budgets
- API/Data: cacheability (Cache-Control, ETag), invalidation, versioning
- Interface: offline/online UI, stale indicators, conflict resolution
- Operations: SWR, prefetching, service worker, background sync
- Risks: stale data, cache poisoning, storage eviction
- Observability/Testing: cache hit ratios, offline success rates
- Checklist: below

## Checklist
- Define TTL/SWR for key resources
- Set Cache-Control and ETag semantics
- Service worker registration and update strategy
- Background sync for mutations
- Storage quotas and eviction handling

## Examples
- `examples/sw-staleWhileRevalidate.ts`
