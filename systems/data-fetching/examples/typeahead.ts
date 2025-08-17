import { useCallback, useEffect, useMemo, useRef, useState } from 'react';

export type FetchSuggestions<T> = (
	query: string,
	signal?: AbortSignal
) => Promise<T[]>;

export const useTypeahead = <T,>(
	fetchSuggestions: FetchSuggestions<T>,
	debounceMs = 200
) => {
	const [query, setQuery] = useState('');
	const [results, setResults] = useState<T[]>([]);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState<Error | null>(null);
	const abortRef = useRef<AbortController | null>(null);
	const timer = useRef<number | null>(null);

	const cancel = useCallback(() => {
		if (timer.current) window.clearTimeout(timer.current);
		abortRef.current?.abort();
	}, []);

	const search = useCallback(
		(q: string) => {
			setQuery(q);
			setError(null);
			if (timer.current) window.clearTimeout(timer.current);
			if (!q) {
				setResults([]);
				setLoading(false);
				return;
			}
			setLoading(true);
			timer.current = window.setTimeout(async () => {
				abortRef.current?.abort();
				const ctrl = new AbortController();
				abortRef.current = ctrl;
				try {
					const list = await fetchSuggestions(q, ctrl.signal);
					setResults(list);
				} catch (e) {
					if ((e as any)?.name !== 'AbortError') setError(e as Error);
				} finally {
					setLoading(false);
				}
			}, debounceMs) as unknown as number;
		},
		[debounceMs, fetchSuggestions]
	);

	useEffect(() => cancel, [cancel]);

	return useMemo(
		() => ({ query, results, loading, error, search, cancel }),
		[query, results, loading, error, search, cancel]
	);
};
