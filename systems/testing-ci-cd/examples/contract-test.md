# Contract Test Outline

- Schema: `/api/products` returns `{ id: string; name: string; price: number }[]`
- Negative cases: 4xx error shape `{ error: string; code: string }`
- Versioning: `Accept: application/vnd.example.v1+json`
- Backward compatibility: new optional properties allowed; required unchanged
