---
name: modifying-database
description: Modify Yapir API database schema and Drizzle migrations. Use when adding or changing tables, columns, relations, audit fields, Better Auth schema, or generated migrations.
---

# Modifying Database

Use this for `apps/api` database changes: Drizzle schema, Better Auth schema, relations, and migrations.

## Process

### 1. Locate the schema owner

Read `CONTEXT.md`, relevant ADRs, `AGENTS.md`, and the existing files under `apps/api/src/lib/db/`.

Use the right owner:

- Domain tables live in `apps/api/src/lib/db/schema.ts`.
- Better Auth tables live in `apps/api/src/lib/db/auth-schema.ts` and are generated.
- Better Auth changes must be made through `apps/api/src/lib/auth.ts` and `bun run auth-gen`, not by hand-editing `auth-schema.ts`.

Completion: you know which schema file owns the change, whether Better Auth generation is involved, and which migration command will run.

### 2. Change the Drizzle model

Conventions:

- Table constants use the `Table` suffix: `noteTemplateTable`.
- SQL table names are singular snake case unless the existing schema says otherwise.
- API-managed entity ids use Postgres-side `uuidv7()` defaults.
- User-managed API objects carry `createdAt`, `updatedAt`, `createdBy`, `updatedBy` when actions come from a `User`.
- `createdBy` and `updatedBy` are FK columns to `user.id`; SQL column names are `created_by` and `updated_by`.
- Export DB row types only when another file needs them, e.g. `NoteTemplateSelect` for a response mapper.
- Keep polymorphic JSONB variant types with their variant module and import them into the Drizzle schema. Add a generic union only when a second variant exists.
- Add relations only when code needs relation-aware Drizzle queries such as `db.query.<table>`.

Keep DB constraints minimal and real:

- Use `not null` and FK constraints for actual invariants.
- Do not add speculative uniqueness, soft delete, archive flags, sort order, or status fields.
- Keep request-level validation in DTO schemas unless the invariant must be protected from every writer.

Completion: the schema expresses only the current invariant and exposes only the names other code actually uses.

### 3. Generate and inspect the migration

Run the repo command from `apps/api`:

```sh
bun run db-gen <short-name>
```

If Better Auth schema changed, run `bun run auth-gen` before `db-gen`.

Inspect the generated SQL before continuing. It should contain the intended table/column changes and no unrelated churn. If Better Auth plugin fields appear, verify they came from the auth config, not manual edits.

Completion: the migration exists, has been read, and matches the schema change.

### 4. Verify

Run API typecheck:

```sh
bunx tsc --noEmit -p tsconfig.json
```

Run the broader build when the change could affect package integration:

```sh
bun run build
```

Completion: verification is green, or the remaining failure is reported with the exact command and reason.
