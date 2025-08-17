# Security & Authentication

Threat model your UI; prevent XSS/CSRF; choose OAuth/OIDC/PKCE flows.

## RADIO+
- Requirements: auth strength, session model, scopes/roles
- API/Data: tokens, rotation, storage, CSRF protection
- Interface: secure inputs, safe rendering, logout, session expiry UX
- Operations: CSP, dependency hygiene, secure headers, SRI
- Risks: XSS, CSRF, token leakage, clickjacking
- Observability/Testing: security headers, SAST/DAST, dependency scanning
- Checklist: below

## Checklist
- Use PKCE for public clients; avoid storing tokens in localStorage
- CSRF defense (same-site cookies + double submit or token)
- Strict CSP; escape/encode untrusted content
- Rotate/short-lived tokens; refresh securely
- Security testing in CI

## Examples
- `examples/auth-oidc-pkce.ts`
- `examples/csrf-double-submit.ts`
