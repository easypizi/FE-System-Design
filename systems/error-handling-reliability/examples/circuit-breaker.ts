// Basic circuit breaker with half-open state.

type State = 'closed' | 'open' | 'half-open';

export const createCircuitBreaker = (
	failureThreshold = 3,
	halfOpenAfterMs = 5000
) => {
	let state: State = 'closed';
	let failures = 0;
	let openedAt = 0;

	const call = async <T>(fn: () => Promise<T>): Promise<T> => {
		if (state === 'open') {
			if (Date.now() - openedAt < halfOpenAfterMs) {
				throw new Error('Circuit open');
			} else {
				state = 'half-open';
			}
		}
		try {
			const res = await fn();
			failures = 0;
			state = 'closed';
			return res;
		} catch (e) {
			failures += 1;
			if (failures >= failureThreshold) {
				state = 'open';
				openedAt = Date.now();
			}
			throw e;
		}
	};

	return { call };
};
