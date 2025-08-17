// Minimal store example (inspired by Zustand API)
// For illustration purposes only.

type Listener<T> = (state: T) => void;

export const createStore = <T,>(initial: T) => {
	let state = initial;
	const listeners = new Set<Listener<T>>();
	const getState = () => state;
	const setState = (partial: Partial<T>) => {
		state = { ...state, ...partial };
		listeners.forEach(l => l(state));
	};
	const subscribe = (fn: Listener<T>) => {
		listeners.add(fn);
		return () => listeners.delete(fn);
	};
	return { getState, setState, subscribe };
};

// Example usage
const counterStore = createStore({ count: 0 });
counterStore.subscribe(s => console.log('count', s.count));
counterStore.setState({ count: 1 });
