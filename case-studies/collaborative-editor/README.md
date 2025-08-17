# Case Study: Collaborative Editor

Local-first collaboration with CRDTs or OT, presence, and conflict resolution.

## RADIO+
- Requirements: low-latency edits, offline merge, multi-cursor
- API/Data: CRDT/OT model, snapshotting, compaction
- Interface: selection, cursors/avatars, undo/redo across peers
- Operations: sync protocol, batching, compression
- Risks: memory growth, merge anomalies, clock skew
- Observability/Testing: correctness tests, latency metrics

## Examples
- `examples/crdt-basics.ts`
- `examples/presence-channel.ts`
