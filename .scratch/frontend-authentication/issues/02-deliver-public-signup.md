# Deliver public signup and the authenticated landing page

Status: ready-for-agent
Parent: `../PRD.md`

## What to build

Allow a visitor to create a User with email and password, enter an authenticated session, and reach a protected landing page that identifies the active User.

## Acceptance criteria

- [ ] Better Auth accepts public email/password signup with an eight-character minimum password.
- [ ] `/signup` collects name, email, password, and password confirmation through the shared TanStack Form controls.
- [ ] ArkType validation follows the agreed blur, touched-change, and submission behavior.
- [ ] Validation and Better Auth errors remain visible without shifting the form controls.
- [ ] Successful signup creates a session and redirects to the validated internal destination or `/`.
- [ ] The authenticated route layout redirects an anonymous visitor to `/login` with their internal destination.
- [ ] `/` displays the current User's name and email using vanilla shadcn components.
- [ ] The signup page links to login while preserving the internal destination.
- [ ] The flow is usable on mobile and desktop, and type checking and the monorepo build pass.

## Blocked by

- Establish the frontend application foundation.
