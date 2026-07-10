# Install and list a GitHub Connector

Status: ready-for-human
Migrated from: `yapir-ai/yapir#13`
Parent: `../PRD.md`

## What to build

Allow an Admin to complete the secure GitHub App installation flow and expose the resulting installation through the provider-neutral GitConnector list API.

## Acceptance criteria

- [x] Operator configuration accepts the App ID, slug, private key, OAuth client ID, and OAuth client secret.
- [x] Only an Admin can initiate or complete an installation.
- [x] `POST /api/git-connectors/github/installations` returns a `303` redirect with anti-CSRF state.
- [x] The callback validates state and exchanges the OAuth code through Octokit.
- [x] The callback verifies that the GitHub User can access the installation.
- [x] The user token is discarded after verification and is never persisted.
- [x] The GitConnector persists only non-sensitive installation and account metadata in a discriminated JSONB configuration.
- [x] Repeating or concurrently completing the same installation reuses one GitConnector.
- [x] `GET /api/git-connectors` returns normalized provider-neutral DTOs.
- [ ] The generated migration is inspected and the API typecheck, build, and real GitHub installation flow are verified.

## Blocked by

None - can start immediately.

## Comments

Implementation and local verification are complete. The migration was inspected,
the API typecheck and Worker dry-run pass, and the monorepo build passes. A human
must configure a development GitHub App and verify the real installation flow
before checking the final acceptance criterion.
