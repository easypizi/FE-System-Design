# Autocomplete / Typeahead

Async search with debouncing, cancellation, and accessibility.

## Checklist
- Input with `aria-autocomplete` and `aria-controls`
- Results list with `role="listbox"` and options with `role="option"`
- Debounce requests; cancel in-flight via `AbortController`
- Keyboard navigation and active-descendant management

## Example
- [examples/Autocomplete.tsx](./examples/Autocomplete.tsx)
