import React from 'react';
import { useTypeahead } from '../../../systems/data-fetching/examples/typeahead';

type Item = { id: string; label: string };

type AutocompleteProps = {
	fetchItems: (q: string, signal?: AbortSignal) => Promise<Item[]>;
};

export const Autocomplete: React.FC<AutocompleteProps> = ({ fetchItems }) => {
	const { query, results, loading, error, search } = useTypeahead<Item>(fetchItems, 250);
	const [active, setActive] = React.useState<number>(-1);
	const listId = 'ac-list';

	return (
		<div className="w-80">
			<input
				role="combobox"
				aria-autocomplete="list"
				aria-controls={listId}
				aria-expanded={results.length > 0}
				className="w-full rounded-md border px-3 py-2"
				placeholder="Search..."
				value={query}
				onChange={e => search(e.target.value)}
				onKeyDown={e => {
					if (e.key === 'ArrowDown') setActive(i => Math.min(i + 1, results.length - 1));
					if (e.key === 'ArrowUp') setActive(i => Math.max(i - 1, 0));
				}}
			/>
			{loading && <div className="mt-1 text-sm text-gray-500">Loading…</div>}
			{error && <div className="mt-1 text-sm text-red-600">Error loading suggestions</div>}
			{results.length > 0 && (
				<ul id={listId} role="listbox" className="mt-1 rounded-md border bg-white">
					{results.map((it, i) => (
						<li
							key={it.id}
							role="option"
							aria-selected={i === active}
							className={
								'cursor-pointer px-3 py-2 ' + (i === active ? 'bg-gray-100' : '')
							}
							onMouseEnter={() => setActive(i)}
						>
							{it.label}
						</li>
					))}
				</ul>
			)}
		</div>
	);
};
