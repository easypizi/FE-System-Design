// Minimal CWV instrumentation using PerformanceObserver.
// Send metrics to your endpoint in `report`.

type Metric = { name: string; value: number };

const report = (metric: Metric) => {
	// Replace with your transport (sendBeacon/fetch)
	console.log('[RUM]', metric.name, metric.value);
};

export const observeWebVitals = () => {
	try {
		const po = new PerformanceObserver(list => {
			for (const entry of list.getEntries()) {
				// @ts-ignore
				if (entry.name === 'first-contentful-paint') report({ name: 'FCP', value: entry.startTime });
			}
		});
		po.observe({ type: 'paint', buffered: true });
	} catch {}

	try {
		const po = new PerformanceObserver(list => {
			for (const entry of list.getEntries() as any) {
				if (entry.entryType === 'largest-contentful-paint') report({ name: 'LCP', value: entry.renderTime || entry.loadTime });
			}
		});
		po.observe({ type: 'largest-contentful-paint', buffered: true } as any);
	} catch {}

	try {
		const po = new PerformanceObserver(list => {
			for (const entry of list.getEntries() as any) {
				// @ts-ignore
				report({ name: 'INP', value: entry.interactionId ? entry.duration : entry.processingEnd - entry.startTime });
			}
		});
		po.observe({ type: 'event', buffered: true } as any);
	} catch {}
};
