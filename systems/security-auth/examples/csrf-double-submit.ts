// Double-submit cookie pattern: send CSRF token as cookie and header.

const getCookie = (name: string) => {
	const match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'));
	return match ? decodeURIComponent(match[2]) : null;
};

export const fetchWithCsrf = (input: RequestInfo, init: RequestInit = {}) => {
	const csrf = getCookie('csrfToken');
	const headers = new Headers(init.headers || {});
	if (csrf) headers.set('X-CSRF-Token', csrf);
	return fetch(input, { ...init, headers, credentials: 'include' });
};
