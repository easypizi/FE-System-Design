# Maintenance Instructions

This repository is a structured learning resource. Keep content high-signal, short, and example-driven.

## Adding a new topic
1. Create a new folder under `systems/<topic>/` with a `README.md`.
2. Add a concise explanation using RADIO+: requirements, data, interface, operations, risks, observability/testing, and a checklist.
3. Provide one minimal example in `examples/` with English-only comments.
4. If helpful, add a Mermaid diagram to clarify flows.
5. Link the new topic from the root `README.md` and related guides.

## Diagrams
- Use Mermaid inside Markdown fences. Keep diagrams simple and readable.
- Prefer sequence or flowchart diagrams for data/flow explanation.

## Docs showcase
- The `docs/` directory serves as the landing area for GitHub Pages.
- In GitHub settings, enable Pages with source = `main` and folder = `/docs`.
- Keep `docs/README.md` as the site index; link to topic guides within the repo.

## Editorial rules
- All text and comments in English.
- Prefer concise examples over verbose theory.
- Reference authoritative sources when making recommendations.


