import { usePaginatedFeed } from '../../../systems/data-fetching/examples/usePaginatedFeed';

type Edge = { id: string; ts: number; text: string };

type Page = { items: Edge[]; nextCursor?: string };

const fetchEdges = async (cursor?: string, signal?: AbortSignal): Promise<Page> => {
	const url = new URL('/api/feed', window.location.origin);
	if (cursor) url.searchParams.set('cursor', cursor);
	const res = await fetch(url.toString(), { signal });
	if (!res.ok) throw new Error('Failed');
	return res.json();
};

export const useFeed = () => usePaginatedFeed<Edge>(fetchEdges);
