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

## Docs showcase (GitHub Pages)
- Settings → Pages → Source: `Deploy from a branch`
- Branch: `main`, Folder: `/docs`
- Ensure `docs/index.md` exists and `_config.yml` sets a theme
- Wait for Pages to build and publish the site URL

## Editorial rules
- All text and comments in English.
- Prefer concise examples over verbose theory.
- Reference authoritative sources when making recommendations.


