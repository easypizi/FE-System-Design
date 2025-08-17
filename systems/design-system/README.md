# Design System & UI Components

Tokens, theming, and composable component APIs (headless-first, accessible by default).

## RADIO+
- Requirements: brand themes, density, dark mode, platforms
- API/Data: tokens, semantic colors/typography/spacing
- Interface: headless primitives with ARIA, controlled vs uncontrolled
- Operations: versioning, theming strategy, build output
- Risks: API sprawl, inconsistent usage, a11y regressions
- Observability/Testing: visual regression, a11y audits
- Checklist: below

## Checklist
- Define token taxonomy and mapping to semantics
- Accessible primitives with keyboard support
- Theming via CSS variables; dark/light schemes
- Documentation with usage examples
- Visual and a11y tests in CI

## Examples
- `examples/Button.tsx`
- `examples/Dropdown.tsx`
