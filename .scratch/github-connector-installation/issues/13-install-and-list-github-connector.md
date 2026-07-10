# Install and list a GitHub Connector

Status: ready-for-agent
Migrated from: `yapir-ai/yapir#13`
Parent: `../PRD.md`

## What to build

Allow an Admin to complete the secure GitHub App installation flow and expose the resulting installation through the provider-neutral GitConnector list API.

## Acceptance criteria

- [ ] Operator configuration accepts the App ID, slug, private key, OAuth client ID, and OAuth client secret.
- [ ] Only an Admin can initiate or complete an installation.
- [ ] `POST /api/git-connectors/github/installations` returns a `303` redirect with anti-CSRF state.
- [ ] The callback validates state and exchanges the OAuth code through Octokit.
- [ ] The callback verifies that the GitHub User can access the installation.
- [ ] The user token is discarded after verification and is never persisted.
- [ ] The GitConnector persists only non-sensitive installation and account metadata in a discriminated JSONB configuration.
- [ ] Repeating or concurrently completing the same installation reuses one GitConnector.
- [ ] `GET /api/git-connectors` returns normalized provider-neutral DTOs.
- [ ] The generated migration is inspected and the API typecheck, build, and real GitHub installation flow are verified.

## Blocked by

None - can start immediately.
