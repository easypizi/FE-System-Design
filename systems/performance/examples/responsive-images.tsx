import React from 'react';

export const ProductImage: React.FC<{ src: string; alt: string }> = ({ src, alt }) => (
	<img
		src={src.replace('{w}', '800')}
		srcSet={[
			src.replace('{w}', '400') + ' 400w',
			src.replace('{w}', '800') + ' 800w',
			src.replace('{w}', '1200') + ' 1200w',
		].join(', ')}
		sizes="(max-width: 640px) 90vw, (max-width: 1024px) 50vw, 33vw"
		alt={alt}
		className="h-auto w-full rounded-md object-cover"
	/>
);
