# Architecture (Monolith, Microfrontends, BFF)

Choose composition boundaries carefully; prefer simplicity until scale demands otherwise.

## RADIO+
- Requirements: team topology, deployment independence, shared runtime
- API/Data: BFF contracts, versioning, cross-app navigation
- Interface: integration points, design system reuse
- Operations: CI/CD, routing, shared deps, module federation
- Risks: duplication, runtime conflicts, perf regressions
- Observability/Testing: cross-app E2E, contracts, canaries
- Checklist: below

## Checklist
- Clear ownership boundaries
- Shared design tokens/components strategy
- Deployment pipeline per slice
- Versioning and compatibility plan
- Cross-app error handling and logging

## Examples
- `examples/module-federation.ts`
