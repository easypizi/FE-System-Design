import React from 'react';

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
	variant?: 'primary' | 'secondary' | 'ghost';
};

export const Button: React.FC<ButtonProps> = ({ variant = 'primary', className = '', ...rest }) => {
	const base = 'inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-medium';
	const variants: Record<string, string> = {
		primary: 'bg-gray-900 text-white hover:bg-gray-800',
		secondary: 'bg-white text-gray-900 ring-1 ring-gray-300 hover:bg-gray-50',
		ghost: 'bg-transparent text-gray-900 hover:bg-gray-100',
	};
	return <button {...rest} className={`${base} ${variants[variant]} ${className}`} />;
};
