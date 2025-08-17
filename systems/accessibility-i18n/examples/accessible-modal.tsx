import React from 'react';

type Props = {
	open: boolean;
	onClose: () => void;
};

export const AccessibleModal: React.FC<Props> = ({ open, onClose, children }) => {
	if (!open) return null;
	return (
		<div role="dialog" aria-modal="true" aria-labelledby="dialog-title" className="fixed inset-0">
			<div className="absolute inset-0 bg-black/50" onClick={onClose} />
			<div className="relative m-8 rounded bg-white p-4">
				<h2 id="dialog-title" className="text-lg font-semibold">
					Title
				</h2>
				<div>{children}</div>
				<button className="mt-4 rounded bg-gray-900 px-3 py-2 text-white" onClick={onClose}>
					Close
				</button>
			</div>
		</div>
	);
};
