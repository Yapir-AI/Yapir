---
name: entity-api-tracer-bullet
description: Build Yapir entity API endpoints as a vertical tracer bullet from Hono route to Operation to optional service to Drizzle DB. Use when adding CRUD or resource-oriented REST endpoints under /api.
---

# Entity API Tracer Bullet

Build a thin vertical slice for one API resource/action: route -> Operation -> optional service -> DB.

## Process

### 1. Gather context

Read `CONTEXT.md`, relevant ADRs, `AGENTS.md`, and the existing resource slice under `apps/api/src/lib/<resource>/` if it exists.

If the endpoint needs schema changes, run `modifying-database` first. If it touches Better Auth, load the Better Auth skill and change auth schema through Better Auth config/generation.

Completion: resource name, action names, persistence impact, auth rule, and response shape are known.

### 2. Create the resource slice

Place resource code under `apps/api/src/lib/<resource>/`.

File conventions:

- One Operation per file: `<resource>-<action>.operation.ts`.
- Shared route file: `<resource>.routes.ts`.
- Response DTO/mapper file: `<resource>.dto.ts`.
- Request DTO files are one per request shape: `<resource>-create.dto.ts`, `<resource>-update.dto.ts`, etc.
- Use `-` to separate logical words and `.` to separate the file role.

Completion: files are named by resource/action and no barrel or folder split exists unless the resource already needs it.

### 3. Define DTOs

Request DTOs:

- Public request DTOs come from ArkType schemas.
- Infer the TypeScript type from the schema.
- Do not create request DTOs for path-only `Get`/`Delete`; pass the `id` directly.

Response DTOs:

- If the API constructs the output internally, do not create an ArkType response schema.
- Put `to<Resource>ResponseDto` in `<resource>.dto.ts`.
- Export the response type as `ReturnType<typeof to<Resource>ResponseDto>`.

Completion: every operation takes DTO input and returns DTO output; routes do not return raw Drizzle rows.

### 4. Implement Operations

An Operation is the application logic atom. It owns authorization, orchestration, transaction boundaries, audit fields, and direct DB calls when no reusable abstraction is needed.

Write the Operation as a readable business scenario: the code should read in the order the use case executes. Prefer clear sequential steps like load entity, check existence, check permissions, handle noop, write changes, return DTO. Do not optimize the shape around SQL mechanics if that makes the use case harder to read.

Style rules:

- Inline the dependency object type in the factory parameter.
- Inject only dependencies the operation uses.
- Define `async function execute(...)` inside the factory, then `return { execute }` at the bottom.
- Name request DTO parameters `requestDto`.
- Export the operation factory; export the operation type only when another file needs it.
- Use `currentUser` only in operations that need auth/audit data.
- Use DB entity names for rows (`noteTemplate`), not generic `row`, when it improves readability.
- Treat `Update` noop as no write: return the current row mapped to DTO without touching audit fields.
- Treat `Delete` not-found as idempotent success.
- Use the shared API error factory located in apps/api/src/lib/errors/error.factory.ts

Services are optional. Introduce a service only when multiple operations need the same reusable behavior. Do not create a service per entity by default.

Completion: each operation is one use case, has precise deps, and uses only shared API error helpers for intentional HTTP errors.

### 5. Implement routes

Routes are HTTP glue only:

- Expose REST resource routes under `/api` with plural resource names.
- Mount resource route groups from `apps/api/src/index.ts` with `app.route("/api/<resources>", routes)`.
- Use Hono + `@hono/standard-validator` for request validation.
- Resolve the relevant Operation from the container and call `execute`.
- Set HTTP status codes in the route.

Completion: the root Hono app only composes route groups; resource routes contain no business logic.

### 6. Remove repetition with small helpers

Be proactive about DX helpers. If a pattern is about to be copied across operations, stop and look for an existing helper or propose a tiny shared one.

Good candidates:

- update dirty/change checking
- audit field construction
- permission checks once the error contract exists
- pagination parsing once the LIST contract exists
- repeated DTO normalization

Do not create speculative helpers. The helper earns its place when it removes real repeated plumbing now, or implements a project-wide convention that has already been decided.

Completion: repeated cross-cutting plumbing is centralized once, or intentionally left inline because it appears only once.

### 7. Respect current deliberate deferrals

Known platform gaps:

- `currentUser` request-scoped wiring is not done yet; do not invent defensive `501` paths or throwaway auth abstractions.
- LIST endpoints are intended to be paginated, but the pagination contract is not defined yet. If adding LIST before that session, leave a local TODO.

Completion: any gap used by the endpoint is marked at the nearest useful location.

### 8. Verify

Run API typecheck:

```sh
bunx tsc --noEmit -p tsconfig.json
```

Run the broader build when useful:

```sh
bun run build
```

Completion: verification is green, or failures are reported with exact command output and next action.
