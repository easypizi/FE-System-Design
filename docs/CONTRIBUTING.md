# Contributing Guide

Thanks for improving the Front-End System Design Playbook! This guide explains how to add content consistently.

## Principles
- English-only for prose and code comments.
- Prefer small, practical examples over long essays.
- Cite reputable sources when claiming best practices.

## Adding a topic or example
1. Create a folder under `systems/<topic>/`.
2. Write `README.md` structured with RADIO+.
3. Add at least one example in `examples/` with TypeScript or pseudocode.
4. Include a short checklist and, if useful, a Mermaid diagram.
5. Link your topic from the root `README.md` and `docs/README.md`.

## Case studies
- Place in `case-studies/<name>/` with `README.md` and `examples/`.
- Show end-to-end decisions, not only code.

## Style rules
- Functions as `const`; handlers prefixed with `handle`.
- Early return, minimal branching, explicit types for public APIs.
- JSX styled with Tailwind classes only.

## Review checklist
- Clear problem statement and assumptions
- Trade-offs explicitly listed
- Example compiles conceptually and is readable
- Links to related topics added


