// Conceptual OIDC Authorization Code with PKCE flow for public SPA.
// Notes: Use a vetted SDK in production.

const base64UrlEncode = (bytes: ArrayBuffer) =>
	btoa(String.fromCharCode(...new Uint8Array(bytes)))
		.replace(/\+/g, '-')
		.replace(/\//g, '_')
		.replace(/=+$/, '');

const sha256 = async (input: string) => {
	const data = new TextEncoder().encode(input);
	const hash = await crypto.subtle.digest('SHA-256', data);
	return base64UrlEncode(hash);
};

export const startAuth = async (cfg: {
	authorizeUrl: string;
	clientId: string;
	redirectUri: string;
	scope: string;
}) => {
	const verifier = base64UrlEncode(crypto.getRandomValues(new Uint8Array(32)).buffer);
	const challenge = await sha256(verifier);
	sessionStorage.setItem('pkce_verifier', verifier);
	const url = new URL(cfg.authorizeUrl);
	url.searchParams.set('response_type', 'code');
	url.searchParams.set('client_id', cfg.clientId);
	url.searchParams.set('redirect_uri', cfg.redirectUri);
	url.searchParams.set('scope', cfg.scope);
	url.searchParams.set('code_challenge', challenge);
	url.searchParams.set('code_challenge_method', 'S256');
	window.location.assign(url.toString());
};

export const handleCallback = async (cfg: {
	tokenUrl: string;
	clientId: string;
	redirectUri: string;
}) => {
	const params = new URLSearchParams(window.location.search);
	const code = params.get('code');
	if (!code) throw new Error('Missing code');
	const verifier = sessionStorage.getItem('pkce_verifier') || '';
	const body = new URLSearchParams({
		grant_type: 'authorization_code',
		code,
		client_id: cfg.clientId,
		redirect_uri: cfg.redirectUri,
		code_verifier: verifier,
	});
	const res = await fetch(cfg.tokenUrl, {
		method: 'POST',
		headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
		body: body.toString(),
	});
	if (!res.ok) throw new Error('Token exchange failed');
	return res.json();
};
