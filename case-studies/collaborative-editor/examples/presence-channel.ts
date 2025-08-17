type Presence = { userId: string; cursor: { x: number; y: number } };

type Listener = (p: Presence) => void;

export const createPresenceChannel = () => {
	const listeners = new Set<Listener>();
	const publish = (p: Presence) => listeners.forEach(l => l(p));
	const subscribe = (l: Listener) => {
		listeners.add(l);
		return () => listeners.delete(l);
	};
	return { publish, subscribe };
};
