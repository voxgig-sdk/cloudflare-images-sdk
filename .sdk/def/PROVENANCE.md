# Definition provenance

This SDK is generated from the official Cloudflare OpenAPI definition.

- Upstream repository: https://github.com/cloudflare/api-schemas
- Upstream file: `openapi.json`
- Upstream commit: [`d9edc9e601cc940449da424bf35a69d863e103af`](https://github.com/cloudflare/api-schemas/commit/d9edc9e601cc940449da424bf35a69d863e103af)
- Retrieved: 2026-09-28
- Upstream SHA-256: `7cd298669e3ca59c52fa76eac9a8b377535b993cffa4c6131296e2ed268a94c6`
- Product: Cloudflare Images
- Product slice: 24 paths, 37 operations, 79 transitively referenced schemas
- Product-spec SHA-256: `1dcf1e81e39ad92c3846db428dc3a7f5d2217ad347c7c8df5470cdf06cfa276e`

Cloudflare publishes one monolithic definition spanning many independent products.
This repository covers the named product surface, not the entire Cloudflare
platform. The product split is reproducible with
`voxgig-sdk/admin/scripts/cloudflare-split.py`; it retains every transitively
referenced OpenAPI component, rejects no operation within its declared path
families, and assigns no path to more than one product SDK.
