// Conceptual Module Federation config (shell perspective)
// This is illustrative pseudo-config.

export const moduleFederationConfig = {
	name: 'shell',
	remotes: {
		catalog: 'catalog@https://cdn.example.com/catalog/remoteEntry.js',
		cart: 'cart@https://cdn.example.com/cart/remoteEntry.js',
	},
	shared: {
		react: { singleton: true },
		'react-dom': { singleton: true },
	},
};
