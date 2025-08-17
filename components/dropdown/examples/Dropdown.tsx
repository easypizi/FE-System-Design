import React, { useCallback, useEffect, useRef, useState } from 'react';

type Item = { id: string; label: string };

type DropdownProps = {
	items: Item[];
	onSelect: (id: string) => void;
	title?: string;
};

export const Dropdown: React.FC<DropdownProps> = ({ items, onSelect, title = 'Menu' }) => {
	const [open, setOpen] = useState(false);
	const [activeIndex, setActiveIndex] = useState<number>(-1);
	const buttonRef = useRef<HTMLButtonElement | null>(null);
	const menuRef = useRef<HTMLUListElement | null>(null);

	const handleToggle = useCallback(() => setOpen(v => !v), []);
	const handleClose = useCallback(() => {
		setOpen(false);
		setActiveIndex(-1);
		buttonRef.current?.focus();
	}, []);

	useEffect(() => {
		if (!open) return;
		const onDocClick = (e: MouseEvent) => {
			if (
				menuRef.current &&
				!menuRef.current.contains(e.target as Node) &&
				!buttonRef.current?.contains(e.target as Node)
			) {
				handleClose();
			}
		};
		document.addEventListener('mousedown', onDocClick);
		return () => document.removeEventListener('mousedown', onDocClick);
	}, [open, handleClose]);

	const handleKeyDown = (e: React.KeyboardEvent) => {
		if (!open && (e.key === 'ArrowDown' || e.key === 'Enter' || e.key === ' ')) {
			setOpen(true);
			setActiveIndex(0);
			return;
		}
		if (!open) return;
		switch (e.key) {
			case 'Escape':
				e.preventDefault();
				handleClose();
				break;
			case 'ArrowDown':
				e.preventDefault();
				setActiveIndex(i => Math.min(i + 1, items.length - 1));
				break;
			case 'ArrowUp':
				e.preventDefault();
				setActiveIndex(i => Math.max(i - 1, 0));
				break;
			case 'Enter':
			case ' ': {
				e.preventDefault();
				const item = items[activeIndex];
				if (item) onSelect(item.id);
				handleClose();
				break;
			}
		}
	};

	return (
		<div className="relative inline-block" onKeyDown={handleKeyDown}>
			<button
				ref={buttonRef}
				aria-haspopup="menu"
				aria-expanded={open}
				onClick={handleToggle}
				className="rounded-md border px-3 py-2 hover:bg-gray-50"
			>
				{title}
			</button>
			{open && (
				<ul
					ref={menuRef}
					role="menu"
					className="absolute z-20 mt-1 w-48 rounded-md border bg-white p-1 shadow-lg"
				>
					{items.map((it, i) => (
						<li
							key={it.id}
							role="menuitem"
							aria-selected={i === activeIndex}
							className={
								'cursor-pointer rounded px-2 py-1 ' + (i === activeIndex ? 'bg-gray-100' : '')
							}
							onMouseEnter={() => setActiveIndex(i)}
							onClick={() => {
								onSelect(it.id);
								handleClose();
							}}
						>
							{it.label}
						</li>
					))}
				</ul>
			)}
		</div>
	);
};
