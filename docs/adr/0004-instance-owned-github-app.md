# Instance-owned GitHub App with installation-scoped connectors

Each self-hosted Yapir instance uses a GitHub App created and configured by its operator. The App identity, private key, and OAuth client credentials live in runtime configuration and secrets; each GitConnector represents one installation and persists only non-sensitive, provider-specific connection metadata.

The installation flow temporarily authorizes the installing GitHub User to verify that they can access the submitted installation. Yapir discards the user token after verification and subsequently acts through short-lived installation tokens.

## Considered options

- A central Yapir-owned GitHub App was rejected because it would require shared Yapir infrastructure to route callbacks and webhooks, weakening the self-hosted boundary.
- Creating one GitHub App per connector through an App Manifest was rejected because it duplicates credentials and requires secrets to be persisted for every connector.
- Persisting the instance GitHub App credentials in the database was rejected because they are deployment invariants and belong in runtime secrets.

## Consequences

- One instance uses one GitHub App but may have multiple GitConnectors, one per installation.
- GitHub App credentials and transient user tokens are never stored in the database.
- GitConnector configuration is a discriminated JSONB value; the GitHub variant contains the installation id and a public snapshot of its account.
- GitHub Enterprise Server is outside the initial scope.
