# Yapir

Yapir is an AI-powered code review and code quality platform where Agents and Users collaborate to review code changes against the Organization's and Project's Opinions. The core feature is LLM-driven, opinionated code review — CodeRabbit-style PR review and a SonarQube-style quality gate, but by LLM, on those Opinions.

This is the production build of the POC at `~/Projects/yapir` (Next.js). Concepts carry over; implementations do not.

- **Domain glossary**: [`CONTEXT.md`](./CONTEXT.md) — read it first, use its vocabulary.
- **Decisions**: [`docs/adr/`](./docs/adr/) — architectural records.

## Stack

Monorepo: **Turborepo + bun**, workspaces in `apps/*`. TypeScript, strict.

- **`apps/api` (`@yapir/api`)** — Hono on Cloudflare Workers (wrangler); better-auth (minimal, drizzle adapter); Drizzle ORM (pg); awilix (typed DI container); arktype + `@hono/standard-validator` for validation. Postgres via Hyperdrive; local Postgres via `docker-compose.yml`.
- **`apps/web` (`@yapir/web`)** — React 19; TanStack Router + Query; shadcn/ui; Tailwind v4; Vite. RPC to the API via hono-client.

Deployment: embracing Cloudflare for now (Workers + Hyperdrive), but keep deployment-runtime concerns encapsulated so the backend can opt out later (docker bun/node, Vercel, etc.). It is fine for API code to use backend framework libraries such as Hono; avoid coupling core application logic to Cloudflare-specific bindings or deployment-only APIs.

## Commands

- `bun run dev` — turbo dev (api + web)
- `bun run build` / `check-types` / `lint` — turbo pipelines
- `bun run format` — prettier
- API: `bun run db-gen` (drizzle migration), `auth-gen` (better-auth schema), `cf-typegen` (wrangler types)
- Web: `bun run generate-routes` (TanStack route tree)

## Conventions

- **DI container** (`apps/api/src/lib/container`): register operations and reusable services through the typed awilix container; keep routes thin. Operations are the application logic atoms; services are optional reusable helpers.
- **API entity slices** (`apps/api/src/lib/<resource>/`): expose resource-oriented plural REST routes under `/api`; use one Operation per action file named `<resource>-<action>.operation.ts`; use `<logical-name>.<role>.ts` for shared files (`note-template.dto.ts`, `note-template.routes.ts`). For polymorphic resources, keep generic files at the resource root and place all variant-specific Operations, routes, DTOs, and types under `<resource>/<variant>/`, named `<variant>-<resource>-<action>.<role>.ts`; the generic route composes variant routes.
- **Operations and services**: define `async function execute(...)` or service methods inside the factory and return them at the end; inline dependency object types in the function parameter; export operation/service types only when another file needs them; inject only dependencies the implementation uses, with validated `env` treated as one atomic dependency. Create a service only when the same behavior has multiple callers now; grouping SDK calls or preparing for a later ticket is not reuse.
- **Operation readability**: write Operations as readable business scenarios in execution order (load, check, decide, write, return); prefer `requestDto` for request DTO parameters; update noops should not touch audit fields, and deletes are idempotent unless product behavior says otherwise.
- **DTOs**: request DTOs come from ArkType schemas, one DTO file per request/response shape; response DTOs can be inferred from mapper return types when outputs are constructed internally; use shared DTO helpers for cross-cutting behavior like update change detection instead of repeating dirty-checking in every Operation.
- **Runtime configuration** (`apps/api/src/lib/env.ts`): map and validate textual deployment configuration from `process.env` once with ArkType, then inject the normalized `env`. Operations trust this module and do not revalidate deployment invariants. Keep Cloudflare bindings separate in Wrangler's generated `Env`.
- **DX helpers**: when a pattern is about to be copied across multiple files, proactively propose a tiny shared helper instead of spreading boilerplate; the helper must remove real repeated plumbing or implement an already-decided project convention.
- **DB schema** in `apps/api/src/lib/db/` (`schema.ts` domain, `auth-schema.ts` better-auth). Migrations via drizzle-kit.
- **Path aliases**: `@/*`.
- TypeScript strict, no `any` as a catch-all. Keep types implicit/inline where possible; create named types only for reusable contracts.
- Never hardcode anything.
- We do not write tests for now.

## Ethos

Effectiveness (DX + KISS) and quality are masters.

- Reach for the **standard library and framework features before a dependency.** Native platform features before abstractions.
- **One line before fifty.** The simplest solution that actually works wins.
- **YAGNI.** No speculative abstractions, speculative flexibility, or "we might need this later." Build the thing in front of you.
- Deep modules, tight interfaces — a small interface over a deep body.
- Minimal, lazy-by-default: if it doesn't need to exist, it shouldn't.

(We channel the _mood_ of the ponytail skills — minimalism and laziness-as-virtue — without adopting their literal workflow.)

## Agent skills

Answer the user prompts in the same language, but all documents, issues, PRDs and all should remain in plain english.

### Issue tracker

Local markdown under `.scratch/<feature>/`. There is no PR triage surface. See `docs/agents/issue-tracker.md`.

### Triage labels

Default vocabulary: `needs-triage`, `needs-info`, `ready-for-agent`, `ready-for-human`, `wontfix`. See `docs/agents/triage-labels.md`.

### Domain docs

Single-context - one `CONTEXT.md` + `docs/adr/` at the repo root. See `docs/agents/domain.md`.
