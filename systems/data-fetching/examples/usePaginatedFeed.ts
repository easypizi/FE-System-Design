import { useCallback, useRef, useState } from 'react';

// Generic page shape
export type Page<T> = { items: T[]; nextCursor?: string };

// Page fetcher contract
export type FetchPage<T> = (
	cursor?: string,
	signal?: AbortSignal
) => Promise<Page<T>>;

// Hook to incrementally load items with cursor pagination.
// Notes: Illustrative only; not production-ready.
export const usePaginatedFeed = <T,>(fetchPage: FetchPage<T>) => {
	const [items, setItems] = useState<T[]>([]);
	const [cursor, setCursor] = useState<string | undefined>(undefined);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState<Error | null>(null);
	const abortRef = useRef<AbortController | null>(null);

	const loadMore = useCallback(async () => {
		if (loading) return;
		setLoading(true);
		setError(null);

		abortRef.current?.abort();
		const ctrl = new AbortController();
		abortRef.current = ctrl;

		try {
			const page = await fetchPage(cursor, ctrl.signal);
			setItems(prev => prev.concat(page.items));
			setCursor(page.nextCursor);
		} catch (e) {
			if ((e as any)?.name === 'AbortError') return;
			setError(e as Error);
		} finally {
			setLoading(false);
		}
	}, [cursor, fetchPage, loading]);

	const reset = useCallback(() => {
		abortRef.current?.abort();
		setItems([]);
		setCursor(undefined);
		setError(null);
		setLoading(false);
	}, []);

	return { items, loading, error, hasMore: Boolean(cursor), loadMore, reset };
};
