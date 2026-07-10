# Define and apply the standard LIST pagination contract

Status: ready-for-human
Migrated from: `yapir-ai/yapir#10`

## What to build

Define the standard pagination contract for API LIST endpoints, then apply it to the existing `NoteTemplateListOperation` and route. LIST endpoints are intended to be paginated by default, but the request and response shape have not been decided yet.

## Acceptance criteria

- [ ] The pagination request contract is decided for LIST endpoints.
- [ ] The pagination response contract is decided for LIST endpoints.
- [ ] The convention is documented in the API endpoint skill and/or project guidelines.
- [ ] Plumbing helpers are setup.
- [ ] `GET /api/note-templates` uses the standard pagination contract.
- [ ] The local LIST pagination TODO is removed.
- [ ] `bunx tsc --noEmit -p tsconfig.json` passes in `apps/api`.

## Blocked by

None.
