type Card = { id: string; order: number };

type MovePayload = { cardId: string; toOrder: number };

export const optimisticMove = async (
	cards: Card[],
	payload: MovePayload,
	send: (p: MovePayload) => Promise<void>
) => {
	const original = [...cards];
	const next = cards.map(c => (c.id === payload.cardId ? { ...c, order: payload.toOrder } : c));
	try {
		await send(payload);
		return next.sort((a, b) => a.order - b.order);
	} catch {
		return original; // rollback on failure
	}
};
