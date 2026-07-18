# Standard pagination for LIST endpoints

Status: ready-for-agent

## Problem Statement

Yapir LIST endpoints do not have a standard pagination contract. The existing NoteTemplate LIST returns every item, consumers cannot request predictable pages or totals, and future LIST endpoints would otherwise invent incompatible request, response, sorting, and database consistency behavior.

## Solution

Introduce one standard, zero-based offset pagination contract for LIST endpoints and apply it end to end to NoteTemplates. Consumers request a page, page size, one allowed sort attribute, and one direction. They receive the items and exact page metadata in a stable response shape. Each LIST declares its own typed sort registry and defaults, while shared pagination plumbing validates requests and consistently handles sorting, counting, database snapshots, offsets, and response construction.

## User Stories

1. As an API consumer, I want to request a specific zero-based page, so that I can navigate a collection predictably.
2. As an API consumer, I want pagination parameters to be optional, so that the default LIST request remains simple.
3. As an API consumer, I want the default page to be `0`, so that the contract follows familiar Spring-style page indexing.
4. As an API consumer, I want the default page size to be `20`, so that an omitted size remains bounded.
5. As a platform operator, I want page size capped at `100`, so that consumers cannot accidentally request unbounded LIST responses.
6. As an API consumer, I want invalid pagination parameters rejected explicitly, so that mistakes are not silently corrected.
7. As an API consumer, I want to sort by one documented resource attribute and direction, so that LIST results match my immediate presentation need.
8. As an API consumer, I want each LIST endpoint to publish its allowed sort attributes, so that arbitrary database columns cannot be requested.
9. As an API consumer, I want endpoint-defined sort defaults, so that omitted sorting remains useful for that resource.
10. As an API consumer, I want equal sort values resolved deterministically, so that rows do not move unpredictably within an unchanged collection.
11. As an API consumer, I want exact item and page totals, so that I can render page navigation.
12. As an API consumer, I want an out-of-range page to return an empty successful result, so that collection navigation does not turn into resource-not-found handling.
13. As an API consumer, I want an empty collection to report zero total pages, so that metadata reflects that no page exists.
14. As an API consumer, I want page items and totals to describe the same database snapshot, so that one response is internally consistent during concurrent writes.
15. As a developer adding a LIST endpoint, I want one typed definition to drive validation and query sorting, so that request keys and database mappings cannot drift.
16. As a developer adding a LIST endpoint, I want shared pagination mechanics behind a small interface, so that I only define the resource query and DTO mapping.
17. As a developer adding filters or joins, I want them expressed once in a reusable query recipe, so that count and page selection cannot diverge.
18. As a developer maintaining Yapir, I want pagination behavior documented as a project convention, so that future LIST endpoints remain compatible.

## Implementation Decisions

- LIST requests use optional `page`, `size`, `sort`, and `direction` query parameters.
- `page` is a non-negative integer and defaults to `0`.
- `size` is an integer from `1` through `100` and defaults to `20`.
- `direction` accepts only `asc` or `desc`. Sort and direction defaults are independently defined by each endpoint.
- Invalid page, size, sort, or direction values return `400`; values are never silently clamped or replaced.
- LIST responses use `{ items, page, size, totalItems, totalPages }` without redundant Spring Page metadata.
- An out-of-range page returns `200` with empty `items` and the real totals. An empty collection has `totalPages: 0`.
- Every LIST has one static definition containing a typed mapping from public sort names to Drizzle columns, its default sort and direction, and its primary-key tie-breaker.
- The requested direction is applied to both the selected sort column and the primary-key tie-breaker. The tie-breaker is not duplicated when the primary key is the selected sort.
- NoteTemplates expose every response attribute as an allowed sort key and default to `createdAt` descending. Text sorting uses native PostgreSQL ordering.
- A pure definition module derives the ArkType request schema and inferred request DTO from the same sort definition used during execution.
- A DI-managed pagination service injects the database and exposes `paginate` with named `definition`, `requestDto`, `query`, and `map` inputs.
- The query input is a pure recipe that creates a fresh, unpaginated PostgreSQL `tx.select` query. It produces one row per response item and contains filters, joins, authorization constraints, and selected shape, but no side effects, ordering, limit, or offset.
- The pagination service invokes the recipe once to count the unpaginated result and once to read the requested page. Both statements run in one read-only `REPEATABLE READ` transaction.
- The service applies the supplied DTO mapper and returns the final paginated response.
- Only PostgreSQL `tx.select` builders are supported initially. Raw SQL, relational query builders, unions, multiple sort keys, cursor pagination, custom collations, and generic Operation inheritance are not generalized without a concrete need.
- Offset pagination guarantees consistency within one response, not stable traversal across separate page requests during concurrent writes.
- The existing NoteTemplate LIST endpoint adopts the standard contract and removes its pagination TODO.
- The entity endpoint skill documents the contract and target developer experience; the architectural trade-off is recorded in the pagination ADR.

## Testing Decisions

- The primary verification seam is the HTTP behavior of the NoteTemplate LIST route: query validation, normalized defaults, sorting, page contents, totals, empty collections, and out-of-range pages are externally observable there.
- The repository currently does not add automated tests. This feature follows that convention rather than introducing a test framework or isolated implementation tests.
- API TypeScript checking must pass and provides compile-time verification that request sort keys, Drizzle columns, query rows, mapper inputs, and response items compose correctly.
- Manual verification should cover default parameters, explicit valid parameters, every invalid parameter class, deterministic equal-value sorting, and exact metadata for populated and empty collections.

## Out of Scope

- Cursor or keyset pagination.
- Stable collection snapshots shared across separate HTTP requests.
- Multiple simultaneous sort attributes.
- Filtering or search parameters for NoteTemplates.
- A generic base class for LIST Operations.
- Support for every Drizzle query-builder family.
- Custom case-insensitive or locale-specific text ordering.
- Pagination UI work.
- Automated test infrastructure.

## Further Notes

This PRD implements the decision recorded in ADR 0004. Migrated from GitHub issue #15.
