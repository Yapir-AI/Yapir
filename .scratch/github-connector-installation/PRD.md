# GitHub Connector installation

Status: ready-for-agent
Migrated from: `yapir-ai/yapir#12`

## Problem Statement

Yapir cannot currently connect to a git provider or import repositories as Projects. Operators need a secure GitHub integration that preserves Yapir's self-hosted boundary without storing GitHub App credentials or user tokens in the database.

## Solution

Each Yapir instance uses an operator-configured GitHub App. An Admin initiates an installation through Yapir, temporarily authorizes the App with their GitHub identity, and selects repositories.

Yapir verifies that the GitHub User can access the submitted installation, persists one GitConnector for that installation, then imports every accessible repository as a Project.

GitConnector reads use a provider-neutral API. Provider-specific installation workflows use dedicated endpoints.

## User Stories

1. As an operator, I want to configure one GitHub App for the Yapir instance, so that credentials remain outside the database.
2. As an Admin, I want to initiate a GitHub installation from Yapir, so that I can connect a GitHub account.
3. As an Admin, I want GitHub to let me choose the account and repositories, so that Yapir only accesses approved repositories.
4. As an Admin, I want Yapir to verify my access to the installation, so that a spoofed installation identifier cannot be connected.
5. As an Admin, I want my GitHub token discarded after verification, so that Yapir does not retain personal GitHub credentials.
6. As an Admin, I want repeated callbacks for the same installation to reuse its GitConnector, so that duplicate connections are not created.
7. As an Admin, I want accessible repositories imported automatically, so that they immediately become Projects.
8. As an Admin, I want reconnecting an installation to refresh repository paths and URLs, so that provider metadata remains current.
9. As an Admin, I want to list all GitConnectors through one generic API, so that clients do not need provider-specific listing logic.
10. As a non-Admin User, I want connector management denied, so that only platform administrators can manage shared integrations.

## Implementation Decisions

- GitHub.com is the only supported git provider endpoint in this slice.
- The instance uses one GitHub App created and configured by its operator.
- App identity and OAuth configuration come from runtime configuration.
- The private key and OAuth client secret are Worker secrets.
- The App requests user authorization during installation.
- User OAuth tokens are used only to verify installation access and are never persisted.
- Installation access tokens are short-lived and managed through Octokit.
- One GitHub installation maps to exactly one GitConnector.
- GitConnector configuration is stored in one discriminated JSONB column.
- The GitHub configuration contains `type`, `installationId`, `accountId`, `accountLogin`, and `accountType`.
- The installation uniqueness invariant is enforced by PostgreSQL despite the identifier living inside JSONB.
- GitConnector responses do not expose their persisted configuration.
- The generic response contains `id`, `type`, `displayName`, `createdAt`, and `updatedAt`.
- Project stores `gitConnectorId`, provider `originId`, `path`, `url`, and standard audit fields.
- Project uniqueness is enforced by `(gitConnectorId, originId)`.
- Project provider type is inferred from its GitConnector and is not duplicated.
- Existing Projects have their `path` and `url` refreshed during reinstallation.
- Repositories missing from a later import remain unchanged.
- The generic list is initially unpaginated pending the shared pagination contract.

### API Contract

```text
GET  /api/git-connectors
POST /api/git-connectors/github/installations
GET  /api/git-connectors/github/installations/callback
```

`POST /api/git-connectors/github/installations` returns `303 See Other`, sets the temporary state cookie, and redirects to GitHub.

The callback returns:

```json
{
  "connector": {
    "id": "uuid",
    "type": "GITHUB",
    "displayName": "acme-corp",
    "createdAt": "2026-07-10T12:00:00Z",
    "updatedAt": "2026-07-10T12:00:00Z"
  },
  "projects": {
    "created": 12,
    "updated": 0
  }
}
```

## Testing Decisions

The primary verification seam is the public Hono API rather than individual operations or Octokit internals.

The repository currently does not add automated tests. Verification will therefore cover:

- API type checking and the monorepo build.
- Generated migration inspection.
- Admin and non-Admin authorization behavior.
- The `POST -> 303 -> GitHub -> callback` flow against a development GitHub App.
- Repeating the callback without creating duplicate GitConnectors or Projects.
- Confirming that no OAuth user token or GitHub App secret reaches PostgreSQL.
- Importing more than one GitHub API page of repositories.

## Out of Scope

- Web UI.
- `GET /api/git-connectors/:id`.
- Connector deletion or deactivation.
- Synchronizing repository removals.
- GitLab or other git providers.
- GitHub Enterprise Server.
- Webhooks.
- ChangeRequest and Review creation.
- Persisting or refreshing GitHub user tokens.
- Generic encryption infrastructure.

## Further Notes

The GitHub App should be configured with `Contents: read` and `Pull requests: read/write` for the future review flow. Webhook delivery remains disabled until Yapir implements its actual consumers.
