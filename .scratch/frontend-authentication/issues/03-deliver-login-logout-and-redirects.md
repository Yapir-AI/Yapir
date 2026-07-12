# Deliver login, logout, and destination restoration

Status: ready-for-agent
Parent: `../PRD.md`

## What to build

Complete the authentication journey so a returning User can log in, an active User can log out, and authentication preserves safe navigation context.

## Acceptance criteria

- [ ] `/login` authenticates a User with email and password through the shared form controls.
- [ ] Login validation and Better Auth errors follow the same stable behavior as signup.
- [ ] Successful login redirects to the validated internal destination or `/`.
- [ ] Login links to signup while preserving the internal destination.
- [ ] Login and signup reject external redirect destinations.
- [ ] An authenticated User visiting login or signup is redirected to the application.
- [ ] The authenticated landing page can end the session and return the User to login.
- [ ] Session query state is synchronized after login, signup, and logout without effect hooks.
- [ ] The complete signup, logout, login, route-protection, and destination-restoration journey is verified on mobile and desktop.
- [ ] Type checking and the monorepo build pass.

## Blocked by

- Deliver public signup and the authenticated landing page.
