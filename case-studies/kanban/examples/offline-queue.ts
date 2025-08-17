// Offline queue storing mutations and replaying on reconnect.

type Mutation = { id: string; url: string; body: any; method?: string };

const QUEUE_KEY = 'offline-queue-v1';

const loadQueue = (): Mutation[] => {
	try {
		const raw = localStorage.getItem(QUEUE_KEY);
		return raw ? JSON.parse(raw) : [];
	} catch {
		return [];
	}
};

const saveQueue = (q: Mutation[]) => {
	localStorage.setItem(QUEUE_KEY, JSON.stringify(q));
};

export const enqueue = (m: Omit<Mutation, 'id'>) => {
	const q = loadQueue();
	q.push({ id: crypto.randomUUID(), method: 'POST', ...m });
	saveQueue(q);
};

export const replay = async () => {
	const q = loadQueue();
	const next: Mutation[] = [];
	for (const m of q) {
		try {
			const res = await fetch(m.url, {
				method: m.method || 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify(m.body),
			});
			if (!res.ok) throw new Error('HTTP ' + res.status);
		} catch {
			next.push(m);
		}
	}
	saveQueue(next);
};
