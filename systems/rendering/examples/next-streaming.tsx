// Conceptual example of streaming SSR (e.g., Next.js App Router)
// This file is illustrative and not runnable as-is.
import React, { Suspense } from 'react';

const SlowPart = React.lazy(async () => {
	// Simulate slow chunk
	await new Promise(r => setTimeout(r, 500));
	return { default: () => <div>Deferred content</div> };
});

export const Page: React.FC = () => {
	return (
		<div className="p-6">
			<h1 className="text-2xl font-semibold">Streaming Example</h1>
			<Suspense fallback={<div className="mt-4 animate-pulse">Loading section…</div>}>
				<SlowPart />
			</Suspense>
		</div>
	);
};
