# Implement standard LIST pagination for NoteTemplates

Status: ready-for-agent

## Parent

`.scratch/list-pagination/PRD.md`

## What to build

Implement the standard LIST pagination module described by the parent PRD and ADR 0004, then adopt it end to end in the NoteTemplate LIST endpoint.

The shared module must derive a validated request contract from one typed per-resource LIST definition and execute a pure `tx.select` query recipe inside a read-only `REPEATABLE READ` transaction. It must derive the exact count and requested page from that same recipe, apply the endpoint's allowed sort mapping and deterministic primary-key tie-breaker, map rows to response DTOs, and construct the standard page response.

The NoteTemplate LIST must expose all NoteTemplate response attributes as sort keys, default to `createdAt` descending, validate query parameters at the route, and return the standard response instead of an unbounded array.

## Acceptance criteria

- [ ] A reusable LIST definition helper derives an ArkType query schema and inferred request DTO from a typed sort registry, endpoint defaults, and a primary-key tie-breaker.
- [ ] A DI-managed pagination service exposes the agreed `paginate` interface with named definition, request DTO, pure query recipe, and DTO mapper inputs.
- [ ] The pagination service runs count and page queries in one read-only PostgreSQL `REPEATABLE READ` transaction.
- [ ] Count and page selection are derived from the same pure, unpaginated `tx.select` recipe.
- [ ] The service applies one requested sort and the primary key as a same-direction deterministic tie-breaker without duplicating the primary key.
- [ ] The response shape is `{ items, page, size, totalItems, totalPages }`.
- [ ] `page` defaults to `0`; `size` defaults to `20`; each endpoint provides independent sort and direction defaults.
- [ ] Negative or non-integer pages, sizes outside `1..100`, unknown sort keys, and directions outside `asc|desc` return `400` without silent correction.
- [ ] An out-of-range page returns `200` with empty items and accurate totals.
- [ ] An empty collection returns zero items, zero total items, and zero total pages.
- [ ] `GET /api/note-templates` accepts the standard query contract and no longer returns an unbounded array.
- [ ] NoteTemplates allow sorting by every response DTO field and default to `createdAt` descending using native PostgreSQL ordering.
- [ ] NoteTemplate rows are still mapped through the existing response DTO mapper.
- [ ] The local pagination TODO is removed.
- [ ] The shared pagination service and NoteTemplate LIST Operation are registered through the typed DI container with only the dependencies they use.
- [ ] The entity endpoint guidance reflects the implemented contract and developer interface without retaining the old pagination deferral.
- [ ] `bunx tsc --noEmit -p tsconfig.json` passes for the API application.

## Blocked by

None - can start immediately.

## Comments

Migrated from GitHub issue #16.
