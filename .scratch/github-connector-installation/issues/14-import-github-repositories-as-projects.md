# Import GitHub repositories as Projects

Status: ready-for-agent
Migrated from: `yapir-ai/yapir#14`
Parent: `../PRD.md`

## What to build

When an Admin completes or repeats a GitHub installation, import every repository accessible to that installation as a Project and report the import result.

## Acceptance criteria

- [ ] Project stores its GitConnector, provider origin ID, path, URL, and standard audit fields.
- [ ] A repository is unique within its GitConnector.
- [ ] The callback obtains a short-lived installation token.
- [ ] All repository pages are retrieved.
- [ ] New repositories create Projects.
- [ ] Existing Projects refresh their path and URL.
- [ ] Repositories missing from the latest import remain unchanged.
- [ ] The callback reports created and updated Project counts.
- [ ] Repeating the import creates no duplicate Projects.
- [ ] The generated migration is inspected and the API typecheck, build, and real multi-repository import are verified.

## Blocked by

- `13-install-and-list-github-connector.md`
