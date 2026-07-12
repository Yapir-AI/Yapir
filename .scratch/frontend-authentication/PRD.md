# Frontend authentication foundation

Status: ready-for-agent

## Problem Statement

Yapir does not yet have a usable web application. A User cannot sign up, sign in, reach an authenticated page, or sign out. The first frontend feature must establish durable conventions for routing, remote data, forms, validation, shared backend types, UI composition, and deployment without creating speculative architecture.

## Solution

Provide public login and signup pages backed by Better Auth, plus a minimal authenticated landing page that displays the current User and supports logout. Protect private routes through TanStack Router, preserve safe internal destinations across authentication, and establish the shared frontend foundations used by these flows.

Document durable frontend conventions in the web application's agent instructions. Serve the Vite application and Hono API from one public origin in production, with Cloudflare serving static assets and executing the Worker for `/api/*` requests.

## User Stories

1. As a visitor, I want to create a User with my name, email, and password, so that I can access Yapir.
2. As a returning User, I want to sign in with my email and password, so that I can resume using Yapir.
3. As a User, I want clear field validation, so that I can correct invalid input before resubmitting.
4. As a User, I want authentication errors to remain visible without moving the form, so that the page remains stable while I correct a problem.
5. As a visitor, I want to move between login and signup, so that I can choose the appropriate authentication flow.
6. As a visitor following a private link, I want to return to that destination after login or signup, so that authentication does not lose my navigation context.
7. As a User with an active session, I want public authentication routes to return me to the application, so that I do not authenticate twice.
8. As a visitor without a session, I want private routes to send me to login, so that protected content is not exposed.
9. As an authenticated User, I want to see my name and email on the landing page, so that I can confirm which User is active.
10. As an authenticated User, I want to sign out, so that my session ends on the current device.
11. As a User on a phone or desktop, I want the authentication pages to remain usable, so that viewport size does not prevent access.
12. As a frontend contributor, I want typed routes, validated search parameters, and typed API calls, so that navigation and integration errors are caught during development.
13. As a frontend contributor, I want reusable form controls built through TanStack Form composition, so that forms share behavior without a configuration-driven form engine.
14. As a frontend contributor, I want standard shadcn components used without local visual overrides, so that the interface remains consistent.
15. As a frontend contributor, I want framework-owned lifecycle and server state, so that effects and duplicated state do not make page behavior implicit.
16. As an operator, I want the web application and API deployed under one origin, so that authentication cookies work without cross-origin infrastructure.

## Implementation Decisions

- The interface and validation copy are in English.
- Public authentication supports email and password login and signup.
- Signup collects name, email, password, and password confirmation.
- Passwords require at least eight characters. No additional composition rule is introduced.
- Email verification and password reset are not included. A successful signup creates a session immediately.
- `/login` and `/signup` are separate typed routes under one pathless authentication route layout.
- Private pages live under a pathless authenticated route layout. Its route guard resolves the session and redirects anonymous visitors to login.
- The initial private landing page displays the current User's name and email and provides logout.
- Authentication routes redirect an already authenticated User to the application.
- A validated `redirect` search parameter preserves internal destinations across login, signup, and links between them. External destinations are rejected.
- Better Auth Client owns authentication protocol calls. Hono RPC owns Yapir-defined API calls. Other SDK-owned APIs similarly use their official client.
- Frontend code imports backend contracts directly from the API workspace through type-only imports. A separate contracts package is not introduced.
- TanStack Query owns all remote reads and mutations, including SDK calls. TanStack Form orchestrates form state and calls query mutations from submission handlers.
- Session query options are shared by route guards and components. Route-required data is resolved in `beforeLoad`; primary page data is prefetched by the route loader and consumed with `useSuspenseQuery`; secondary data is queried near its consumer.
- TanStack Form is composed with its official custom form hook APIs. Pre-bound text fields and submit controls centralize shadcn composition, accessibility, validation display, and stable error space.
- ArkType validates form values and route search parameters. Field errors appear after blur, update after the field has been touched, and the complete form validates on submission.
- Better Auth error messages are displayed directly for this initial feature.
- shadcn registry components are installed and used unchanged. Modifying a shadcn component requires prior maintainer approval. If shadcn does not provide a required component, implementation pauses for a maintainer decision.
- Tailwind composes and positions components; feature code does not locally redesign their visual appearance.
- Route files own page-specific forms and mutations until concrete reuse or readability justifies extraction. Shared integrations live in library modules, shadcn primitives in UI components, and pre-bound form components in the shared form area.
- Application code does not use effect hooks or manual memoization. A third-party imperative integration or measured performance issue requires maintainer approval before introducing one.
- The browser calls relative `/api` URLs. Vite proxies `/api` to the API Worker in development.
- Production uses one Cloudflare Worker deployment containing the Hono runtime and Vite static assets. `/api/*` runs the Worker and non-API navigation falls back to the SPA entry point.
- The established frontend conventions are recorded in the web application's agent instructions. The same-origin deployment decision is recorded in an ADR.
- No loading skeleton or global notification system is introduced.

## Testing Decisions

The primary verification seam is the complete browser-visible authentication journey rather than individual hooks, components, or SDK internals.

The repository currently does not add automated tests. Verification will therefore cover:

- Public signup creates a session and reaches the authenticated landing page.
- Logout ends the session, and login restores access.
- Anonymous access to a private route redirects to login.
- A safe internal destination survives login, signup, and navigation between those routes.
- An external redirect destination is rejected.
- ArkType and Better Auth errors are visible without moving the form controls.
- An authenticated User visiting login or signup returns to the application.
- The application remains usable at mobile and desktop viewport sizes.
- Type checking and the monorepo build pass.

## Out of Scope

- Email verification.
- Password reset or forgotten-password flows.
- OAuth, passkeys, multi-factor authentication, or other login channels.
- Restricting public signup.
- A production application shell or navigation system.
- Product pages beyond the temporary authenticated landing page.
- Global notifications.
- Cross-origin API deployment and its CORS or cookie configuration.
- A separate frontend contracts package.
- Automated tests.

## Further Notes

Public signup is an initial product choice and may be revisited when Yapir's target authentication channels are decided. The landing page is deliberately a functional authentication witness rather than a proposed product dashboard.
