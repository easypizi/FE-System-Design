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

## Trade-offs

| Topic          | Option             | Pros                                | Cons                             | Prefer when |
|----------------|--------------------|-------------------------------------|----------------------------------|-------------|
| Components     | Headless           | Max flexibility, a11y control       | More effort per consumer         | Varied product surfaces |
| Components     | Themed/skinned     | Fast adoption, consistent visuals   | Less flexible APIs               | Uniform product |
| Theming        | CSS variables      | Fast, runtime theme switch          | Limited dynamic logic            | Web-first design tokens |
| Theming        | CSS-in-JS          | Conditional styling in JS           | Runtime cost, tooling complexity | Highly dynamic styles |
| Distribution   | Monorepo packages  | Reuse, versioning                   | Repo complexity                  | Multi-app org |
| Distribution   | App-local library  | Simplicity                          | Duplication risk                 | Single app team |

## Sources
- More links: `docs/SOURCES.md`
