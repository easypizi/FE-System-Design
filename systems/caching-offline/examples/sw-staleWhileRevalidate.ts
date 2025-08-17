// Service Worker: Stale-While-Revalidate strategy for GET requests.
// Notes: Illustrative only; add versioning and routing in real apps.
self.addEventListener('fetch', (event: any) => {
	const req = event.request as Request;
	if (req.method !== 'GET') return;

	event.respondWith(
		(async () => {
			const cache = await caches.open('app-cache-v1');
			const cached = await cache.match(req);
			const networkPromise = fetch(req)
				.then(res => {
					cache.put(req, res.clone());
					return res;
				})
				.catch(() => cached);
			return cached || networkPromise;
		})()
	);
});
