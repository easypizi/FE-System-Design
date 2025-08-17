// Conceptual server-state example using a query-like API.
// Illustrative only; use a real library in production.

export type QueryOptions<T> = {
	key: string;
	staleTimeMs?: number;
	fetcher: (signal?: AbortSignal) => Promise<T>;
};

export const createQuery = <T,>({ key, staleTimeMs = 5000, fetcher }: QueryOptions<T>) => {
	let cache: { data?: T; ts?: number } = {};
	return async (signal?: AbortSignal): Promise<T> => {
		const now = Date.now();
		if (cache.data && cache.ts && now - cache.ts < staleTimeMs) return cache.data;
		const data = await fetcher(signal);
		cache = { data, ts: Date.now() };
		return data;
	};
};
