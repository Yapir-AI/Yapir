# Offset pagination for LIST endpoints

Yapir LIST endpoints use zero-based offset pagination because consumers need page navigation and exact totals. Requests accept optional `page` and `size` parameters (defaults `0` and `20`, maximum size `100`) plus one endpoint-defined `sort` and `direction`; responses contain `{ items, page, size, totalItems, totalPages }`. Invalid values return `400`, an out-of-range page returns `200` with no items, and an empty collection has zero total pages.

Each LIST defines a typed registry from public sort names to Drizzle columns, its default sort, and its primary-key tie-breaker. A shared pagination module derives the ArkType request schema from that definition and executes a pure, unpaginated `tx.select` recipe twice inside a read-only `REPEATABLE READ` transaction: once to count its rows and once to apply ordering, limit, and offset. This keeps `items` and `totalItems` on one snapshot while leaving filters, joins, selected rows, and DTO mapping in the Operation.

## Considered options

- Cursor pagination was rejected because direct page navigation and exact totals are required. Offset pagination does not promise stable traversal across separate requests when concurrent writes occur.
- A generic Drizzle query transformer and an Operation base class were rejected because they couple callers to fragile query-builder generics or introduce inheritance against the factory-based Operation convention.
- Separate count and item recipes were rejected because they can silently diverge; the single recipe must be pure, produce one row per response item, and contain no ordering or pagination.
