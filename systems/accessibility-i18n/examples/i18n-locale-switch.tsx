import React from 'react';

const locales = [
	{ code: 'en', label: 'English' },
	{ code: 'de', label: 'Deutsch' },
	{ code: 'ru', label: 'Русский' },
];

type Props = { value: string; onChange: (code: string) => void };

export const LocaleSwitch: React.FC<Props> = ({ value, onChange }) => (
	<label className="inline-flex items-center gap-2">
		<span>Language</span>
		<select
			aria-label="Language selector"
			className="rounded border px-2 py-1"
			value={value}
			onChange={e => onChange(e.target.value)}
		>
			{locales.map(l => (
				<option key={l.code} value={l.code}>
					{l.label}
				</option>
			))}
		</select>
	</label>
);
