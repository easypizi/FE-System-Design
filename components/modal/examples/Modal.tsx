import React from 'react';

type ModalProps = {
	open: boolean;
	title: string;
	onClose: () => void;
	children: React.ReactNode;
};

export const Modal: React.FC<ModalProps> = ({ open, title, onClose, children }) => {
	if (!open) return null;

	const handleKeyDown = (e: React.KeyboardEvent) => {
		if (e.key === 'Escape') onClose();
	};

	return (
		<div
			role="dialog"
			aria-modal="true"
			aria-label={title}
			tabIndex={-1}
			onKeyDown={handleKeyDown}
			className="fixed inset-0 z-50 flex items-center justify-center"
		>
			<div className="absolute inset-0 bg-black/50" onClick={onClose} />
			<div className="relative mx-4 w-full max-w-lg rounded-lg bg-white p-6 shadow-xl">
				<h2 className="mb-4 text-xl font-semibold text-gray-900">{title}</h2>
				<div>{children}</div>
				<button
					type="button"
					onClick={onClose}
					className="mt-6 rounded-md bg-gray-900 px-4 py-2 text-white hover:bg-gray-800"
				>
					Close
				</button>
			</div>
		</div>
	);
};
