// Extremely simplified CRDT-like sequence using grow-only positions.

type Atom<T> = { id: string; pos: number; value: T };

type Doc<T> = Atom<T>[];

export const insert = <T>(doc: Doc<T>, value: T, afterPos: number): Doc<T> => {
	const pos = afterPos + Math.random();
	return [...doc, { id: crypto.randomUUID(), pos, value }].sort((a, b) => a.pos - b.pos);
};
