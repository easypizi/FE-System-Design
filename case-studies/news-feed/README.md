# Case Study: News Feed

End-to-end design of a social feed with pagination and realtime updates.

## RADIO+
- Requirements: infinite scroll, live updates, SEO-lite
- API/Data: cursor pagination, denormalized edges, like/comment mutations
- Interface: optimistic interactions, skeletons, error toasts
- Operations: CSR + prefetch; SWR; background revalidation
- Risks: duplication, race conditions, overfetching
- Observability/Testing: RUM on scroll, error rates, e2e smoke

## Examples
- [examples/feed-arch.md](./examples/feed-arch.md)
- [examples/client-store.ts](./examples/client-store.ts)
- [examples/pagination.ts](./examples/pagination.ts)
