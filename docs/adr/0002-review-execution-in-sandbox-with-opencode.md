# Execute Reviews in Sandboxes with opencode as an internal runtime

Yapir Reviews run in a Sandbox that clones the Project repo, checks out the ChangeRequest head, and runs one opencode session for the Review. opencode is an internal execution detail, not a product concept: the domain remains Agent to Review to Comment/ReviewNote, and opencode can be replaced later without renaming the product model.

## Considered options

- **One Review per prompt**. Rejected: prompts are execution steps; the business unit is one Agent pass over one ChangeRequest commit.
- **Let opencode write final outputs directly**. Rejected: outputs must pass through Yapir's API, validation, and Review-scoped permissions.
- **Persist transcripts**. Rejected for now: transcripts can leak repo contents or secrets and are not product outputs.

## Consequences

- A Review may run multiple prompts in one opencode session, but produces only Yapir outputs: Comments and ReviewNotes.
- opencode submits draft Comments and ReviewNotes through an append-only local MCP tool; the API validates and publishes them when the Review completes.
- The API Worker orchestrates the POC directly: clone repo, write opencode config, run prompts, finalize outputs.
- The Sandbox image pins opencode and the MCP tool; per-Review config and secrets are injected at runtime.
- For the POC, the reviewed repo is trusted Organization-controlled code: repo opencode config may be loaded, real provider credentials may be injected, forks and external branches are out of scope, and failed Reviews are not retried automatically.
