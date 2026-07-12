# Establish the frontend application foundation

Status: ready-for-agent
Parent: `../PRD.md`

## What to build

Establish a buildable frontend foundation that uses the selected TanStack and ArkType integrations, can call Yapir's API with shared types, and runs against relative `/api` URLs in development and production.

## Acceptance criteria

- [ ] TanStack Query is provided to the router and application through one shared client.
- [ ] Hono RPC calls use the API workspace's exported application type without importing API runtime code into the browser bundle.
- [ ] Better Auth Client is configured for relative same-origin API calls.
- [ ] TanStack Form exposes pre-bound shadcn text-field and submit controls through its official composition APIs.
- [ ] Shared field controls provide accessible labels and stable validation-message space without modifying shadcn components.
- [ ] Vite proxies `/api` to the development API Worker.
- [ ] Cloudflare deployment serves the Vite SPA and executes the Hono Worker for `/api/*` under one origin.
- [ ] Frontend conventions and the same-origin deployment decision are documented.
- [ ] Type checking and the monorepo build pass.

## Blocked by

None - can start immediately.
