# State Management (Local, Global, Server State)

Choose the lightest tool that fits: local component state, lightweight global stores, and dedicated server state libraries.

## RADIO+
- Requirements: scope of state, constraints (persistence, offline), team familiarity
- API/Data: normalization, selectors, stale time, consistency
- Interface: optimistic updates, error boundaries, loading states
- Operations: cache invalidation, eviction, hydration
- Risks: over-centralization, unnecessary re-renders, tight coupling
- Observability/Testing: state transitions, store size, mutation logs
- Checklist: below

## Checklist
- Distinguish UI state vs server cache
- Memoize selectors; minimize re-renders
- Use server-state libs for fetching/caching/invalidations
- Co-locate state with usage; avoid mega-stores
- Provide testing utilities for stores

## Examples
- [examples/store-zustand.ts](./examples/store-zustand.ts)
- [examples/server-state-query.ts](./examples/server-state-query.ts)

## Trade-offs

| Topic        | Option               | Pros                               | Cons                              | Prefer when |
|--------------|----------------------|------------------------------------|-----------------------------------|-------------|
| UI state     | Local component      | Simple, co-located                 | Prop drilling if shared           | Localized concerns |
| Global state | Lightweight store    | Minimal boilerplate                | Risk of overuse                   | Cross-cutting UI state |
| Server state | Query library        | Caching, invalidation, retries     | Abstraction learning curve        | Data fetching heavy apps |
| Cache shape  | Normalized           | Efficient updates, dedupe          | Complexity                        | Large, relational data |

## Sources
- More links: [docs/SOURCES.md](../../docs/SOURCES.md)
