# Testing & CI/CD

Adopt a pragmatic test pyramid and enforce budgets in CI.

## RADIO+
- Requirements: coverage goals, acceptance criteria, environments
- API/Data: contract tests for API schemas and errors
- Interface: component tests for states and a11y
- Operations: e2e smoke, parallelization, flaky test control
- Risks: brittle tests, slow pipelines, false positives
- Observability/Testing: test analytics, build health dashboards
- Checklist: below

## Checklist
- Unit + component tests for core logic and UI states
- Contract tests for API changes
- E2E smoke on critical journeys
- Performance budgets enforced in CI
- Flake detection and quarantine

## Examples
- `examples/contract-test.md`
- `examples/e2e-smoke.md`
