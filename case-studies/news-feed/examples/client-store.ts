import { createStore } from '../../../systems/state-management/examples/store-zustand';

type Edge = { id: string; ts: number; text: string };

type FeedState = { edges: Edge[] };

export const feedStore = createStore<FeedState>({ edges: [] });

export const appendEdge = (edge: Edge) => {
	const { edges } = feedStore.getState();
	feedStore.setState({ edges: [edge, ...edges].sort((a, b) => b.ts - a.ts) });
};
