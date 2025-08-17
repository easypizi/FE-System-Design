type Message = { id: string; text: string; pending?: boolean };

export const sendMessageOptimistic = async (
	list: Message[],
	text: string,
	send: (payload: any) => Promise<{ id: string }>
) => {
	const tempId = `tmp_${Date.now()}`;
	const optimistic: Message = { id: tempId, text, pending: true };
	const next = [optimistic, ...list];
	try {
		const res = await send({ text });
		return next.map(m => (m.id === tempId ? { id: res.id, text } : m));
	} catch {
		return list; // rollback
	}
};
