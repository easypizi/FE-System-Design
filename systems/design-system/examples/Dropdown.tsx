import React from 'react';
import { Dropdown as HeadlessDropdown } from '../../../components/dropdown/examples/Dropdown';

type Item = { id: string; label: string };

type DSProps = {
	items: Item[];
	onSelect: (id: string) => void;
	title?: string;
};

export const Dropdown: React.FC<DSProps> = props => (
	<div className="text-sm">
		<HeadlessDropdown {...props} />
	</div>
);
