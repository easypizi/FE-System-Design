# Performance (Core Web Vitals)

Optimize for LCP, INP, CLS; manage code size, images, fonts.

## RADIO+
- Requirements: performance budgets, device/network targets
- API/Data: payload size, compression, streaming
- Interface: skeletons, defer non-critical UI, priority hints
- Operations: code splitting, prefetch/preload, image optimization, CDN
- Risks: regressions, over-optimization complexity
- Observability/Testing: RUM CWV, synthetic checks, budgets in CI
- Checklist: below

## Checklist
- Establish page-level and route-level budgets
- Split bundles by route and component
- Optimize images (formats/sizes) and fonts (subset/display)
- Use priority hints and resource hints
- Track CWV in RUM; gate CI on budgets

## Examples
- `examples/route-level-splitting.tsx`
- `examples/responsive-images.tsx`
