# Case Study: Kanban Board (Offline-First)

Designing a Trello-like board with offline sync and conflict handling.

## RADIO+
- Requirements: drag-and-drop, labels, offline edits, attachments
- API/Data: lists/cards, ordering keys, delta sync; attachments upload
- Interface: keyboard DnD, a11y states, undo/redo
- Operations: sync engine, retries, conflict resolution (last-writer-wins or merge)
- Risks: two-ID problem, sync failures, stale attachments
- Observability/Testing: sync success rate, offline scenarios, e2e

## Examples
- [examples/offline-queue.ts](./examples/offline-queue.ts)
- [examples/optimistic-move.ts](./examples/optimistic-move.ts)
