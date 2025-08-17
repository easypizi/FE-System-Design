// Simple fetch wrapper with exponential backoff and jitter.
// Notes: Adjust for idempotency and status-based retry policies.
export const fetchWithRetry = async <T>(
	input: RequestInfo,
	init?: RequestInit,
	maxRetries = 3,
	baseDelayMs = 300
): Promise<T> => {
	let attempt = 0;
	// eslint-disable-next-line no-constant-condition
	while (true) {
		try {
			const res = await fetch(input, init);
			if (!res.ok) throw new Error(`HTTP ${res.status}`);
			return (await res.json()) as T;
		} catch (err) {
			if (attempt >= maxRetries) throw err;
			const jitter = Math.random() * 100;
			const delay = baseDelayMs * 2 ** attempt + jitter;
			await new Promise(r => setTimeout(r, delay));
			attempt += 1;
		}
	}
};
