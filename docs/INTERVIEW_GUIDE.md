# Front-End System Design Interview Guide (5–7 min)

Use RADIO+ to structure clear, time-bounded answers.

## 0) Opening (20–30s)
- Clarify problem scope, users, and success metrics
- Confirm constraints (SEO, performance targets, devices, offline)

## 1) Requirements (60s)
- Functional: core flows and states
- Non-functional: CWV goals, a11y baseline, security, availability
- Assumptions explicitly stated

## 2) API/Data (60s)
- Contracts and pagination model
- Error model and idempotency
- Caching directives (ETag/Cache-Control)

## 3) Interface (60s)
- UX states: loading/empty/error/success
- Accessibility: keyboard/focus/ARIA
- Component API and reuse via design system

## 4) Operations (60s)
- Rendering model choice (CSR/SSR/SSG/ISR/Streaming)
- Caching strategy (SWR, prefetch, background revalidate)
- Performance levers (splitting, images, fonts)

## 5) Risks & Trade-offs (40s)
- Name 2–3 key decisions and why chosen
- What was rejected and why

## 6) Observability & Testing (40s)
- RUM metrics and alerts
- Test pyramid and budgets in CI

## 7) Close (20s)
- Recap: why this meets the requirements
- Invite deeper questions (e.g., security, offline, scaling)

## Quick prompts
- Rendering: “SEO critical or personalized?”
- Pagination: cursor vs offset
- Caching: network-first vs SWR
- Auth: cookie+httponly (+CSRF) vs token in storage

## Practice
- Run through case studies in `case-studies/` and narrate RADIO+
- Use trade-off tables to justify decisions succinctly
