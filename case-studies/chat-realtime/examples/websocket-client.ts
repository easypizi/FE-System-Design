// Minimal WebSocket client with reconnect backoff.

export const createWsClient = (url: string) => {
	let ws: WebSocket | null = null;
	let attempt = 0;
	const listeners = new Set<(msg: any) => void>();

	const connect = () => {
		ws = new WebSocket(url);
		ws.onopen = () => {
			attempt = 0;
		};
		ws.onmessage = evt => {
			try {
				listeners.forEach(fn => fn(JSON.parse(evt.data)));
			} catch {}
		};
		ws.onclose = () => {
			attempt += 1;
			const delay = Math.min(1000 * 2 ** attempt, 15000);
			setTimeout(connect, delay);
		};
		ws.onerror = () => ws?.close();
	};

	const send = (data: any) => ws?.readyState === WebSocket.OPEN && ws.send(JSON.stringify(data));
	const subscribe = (fn: (msg: any) => void) => {
		listeners.add(fn);
		return () => listeners.delete(fn);
	};

	connect();
	return { send, subscribe };
};
