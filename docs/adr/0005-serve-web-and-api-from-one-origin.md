# Serve the web application and API from one origin

Yapir serves the Vite web application and Hono API from one public origin. The browser always calls relative `/api` URLs: Vite proxies them to the API Worker during development, while production deploys the SPA assets with the Cloudflare Worker and runs the Worker first for `/api/*`.

This avoids cross-origin cookie and CORS infrastructure for Better Auth and keeps browser configuration independent of deployment URLs. Separate frontend and API deployments remain possible later, but adopting them requires revisiting authentication cookies, trusted origins, CORS, and client configuration together.

## Considered options

- Separate public origins for the web application and API were rejected because they add cookie, CORS, and environment configuration without a current requirement.
- Separate Workers on route-specific patterns were rejected for now because one Worker with static assets provides the same public boundary with less deployment configuration.

## Consequences

- Production routing must reserve `/api/*` for Hono and use SPA fallback handling for non-asset web routes.
- The API and web application remain separate workspaces despite being deployed as one unit.
- Frontend API and authentication clients do not accept a configurable cross-origin base URL.
