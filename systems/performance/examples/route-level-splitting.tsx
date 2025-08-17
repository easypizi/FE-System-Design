import React, { Suspense } from 'react';

const HeavyRoute = React.lazy(() => import('./HeavyRoute')); // split this route

export const RouteShell: React.FC = () => (
	<Suspense fallback={<div className="p-6">Loading route…</div>}>
		<HeavyRoute />
	</Suspense>
);
