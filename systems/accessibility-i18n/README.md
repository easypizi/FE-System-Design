# Accessibility & Internationalization

Build inclusive interfaces with proper semantics and localization.

## RADIO+
- Requirements: a11y baseline (WCAG), locales, RTL support
- API/Data: content sources, translation keys, number/date formats
- Interface: keyboard nav, focus management, ARIA roles/states
- Operations: translation loading, message catalogs, language negotiation
- Risks: regressions in keyboard/focus, missing translations
- Observability/Testing: a11y audits, locale coverage
- Checklist: below

## Checklist
- Keyboard access and visible focus
- ARIA where appropriate; avoid div soup
- Color contrast and motion preferences
- Locale switch and pluralization rules
- RTL layout verification

## Examples
- `examples/accessible-modal.tsx`
- `examples/i18n-locale-switch.tsx`
