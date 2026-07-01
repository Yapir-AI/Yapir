# Yapir

Yapir is an AI-powered code review and code quality platform where Agents and Users collaborate to review code changes against the Organization's and Project's Opinions. The core feature is LLM-driven, opinionated code review — CodeRabbit-style PR review and a SonarQube-style quality gate, but by LLM, on those Opinions.

This is the production build of the POC at `~/Projects/yapir` (Next.js). Concepts carry over; implementations do not.

- **Domain glossary**: [`CONTEXT.md`](./CONTEXT.md) — read it first, use its vocabulary.
- **Decisions**: [`docs/adr/`](./docs/adr/) — architectural records.

## Stack

Monorepo: **Turborepo + bun**, workspaces in `apps/*`. TypeScript, strict.

- **`apps/api` (`@yapir/api`)** — Hono on Cloudflare Workers (wrangler); better-auth (minimal, drizzle adapter); Drizzle ORM (pg); awilix (typed DI container); arktype + `@hono/standard-validator` for validation. Postgres via Hyperdrive; local Postgres via `docker-compose.yml`.
- **`apps/web` (`@yapir/web`)** — React 19; TanStack Router + Query; shadcn/ui; Tailwind v4; Vite. RPC to the API via hono-client.

Deployment: embracing Cloudflare for now (Workers + Hyperdrive), but the backend stays **deployment-agnostic** as a target (docker bun/node, Vercel, etc.) — don't couple domain logic to a runtime.

## Commands

- `bun run dev` — turbo dev (api + web)
- `bun run build` / `check-types` / `lint` — turbo pipelines
- `bun run format` — prettier
- API: `bun run db-gen` (drizzle migration), `auth-gen` (better-auth schema), `cf-typegen` (wrangler types)
- Web: `bun run generate-routes` (TanStack route tree)

## Conventions

- **DI container** (`apps/api/src/lib/container`): register services through the typed awilix container; keep business logic in services, routes thin.
- **DB schema** in `apps/api/src/lib/db/` (`schema.ts` domain, `auth-schema.ts` better-auth). Migrations via drizzle-kit.
- **Path aliases**: `@/*`.
- TypeScript strict, no `any` as a catch-all. Keep types implicit where possible; create named types only for reusable contracts.
- Never hardcode anything.

## Ethos

Effectiveness (DX + KISS) and quality are masters.

- Reach for the **standard library and framework features before a dependency.** Native platform features before abstractions.
- **One line before fifty.** The simplest solution that actually works wins.
- **YAGNI.** No speculative abstractions, speculative flexibility, or "we might need this later." Build the thing in front of you.
- Deep modules, tight interfaces — a small interface over a deep body.
- Minimal, lazy-by-default: if it doesn't need to exist, it shouldn't.

(We channel the *mood* of the ponytail skills — minimalism and laziness-as-virtue — without adopting their literal workflow.)

## Agent skills

### Issue tracker

GitHub Issues (repo: `yapir-ai/yapir`), via the `gh` CLI. External PRs are not a triage surface. See `docs/agents/issue-tracker.md`.

### Triage labels

Default vocabulary: `needs-triage`, `needs-info`, `ready-for-agent`, `ready-for-human`, `wontfix`. See `docs/agents/triage-labels.md`.

### Domain docs

Single-context — one `CONTEXT.md` + `docs/adr/` at the repo root. See `docs/agents/domain.md`.
