# DESCRIPTION
This project, YAPIR, is an AI-powered code reviewer that automatically analyzes pull/merge requests
across GitLab or GitHub repositories.
It connects to various AI providers (OpenAI, Anthropic, etc.) through a “reviewer” system,
uses the code diffs to generate feedback, and posts comments on lines needing improvement.
Users can manage their AI providers, define instructions, and configure custom prompts for each reviewer.
The app uses Next.js, and Prisma for database interactions.

# GENERAL OVERVIEW & ORGANIZATION

- The project follows a Next.js structure under `src/app`.
- Authentication logic is managed via `better-auth` (configuration in `lib/auth`).
- Database interaction uses Prisma (`prismaClient` in `lib/db`).
- We store domain logic in separate services within `src/lib/...` directories (for example, `lib/provider`, `lib/review`, `lib/instructions`, etc.).

# BACKEND PATTERN & BEST PRACTICES

- **Dependency Injection**: The project utilizes a typed dependency injection container via `lib/di/typedcontainer.ts`. Services in `lib/` are registered and resolved through this container to keep code decoupled and testable.
- **Service Layer**: Each domain operation or business logic is encapsulated in its own service class under `src/lib/<domain>`. Example: `ReviewService`, `ProviderService`, etc.
- **Server Actions**: For Next.js server actions (under `app/api` or the `actionClient` usage), always call `assertAuthenticated()` if you dont use the actionClient when needed to ensure security.
- **Error Handling**: Throw typed errors or use Next.js `forbidden()`, `notFound()`, etc. if there are domain or access issues. Avoid leaking secrets in error messages.
- **Code Organization**: Keep domain logic in `lib/<domain>/service.ts` and route handlers in `app/api/<endpoint>/route.ts`. Don’t mix business logic into route files.

# FRONTEND STRUCTURE & STYLE

- Source code for UI flows is in `src/app/(auth)/(home)`, `src/app/(auth)/git`, `src/app/(auth)/providers`, etc.
- All shared or generic UI components (Button, Input, etc.) live under `src/components/ui`.
- We use Tailwind CSS with `@tailwindcss/typography`. Obey utility-class usage; do not add random CSS files if a Tailwind utility can handle it.
- Avoid writing Tailwind styling in pages, styling from components should be kept and sufficent in most cases.

# LIB / SERVICE LAYER ORGANIZATION

- `src/lib/` houses domain services, each in a dedicated subfolder:
    - `auth/` → better-auth integration and Next.js session handling
    - `db/` → Prisma client instance & database driver definitions
    - `provider/` → AI provider logic: adding, removing, listing providers (OpenAI, Anthropic, etc.)
    - `reviewer/` → Data models & logic for “reviewers” (the AI bots or profiles that do code reviews)
    - `instructions/` → Storage and retrieval of project-wide instructions (`Instructions` table in DB)
    - `git/` → Handles GitLab, GitHub connectors, pull request hooking, code diffs, etc.
    - `prompt/` → Logic to build or transform text prompts for AI usage
    - `review/` → Code review orchestrations, saving review records, and final statuses
    - `project/` → Managing references to “Projects” (repositories)
- Keep logic domain-specific. If you create a new domain (like “billing”), create `src/lib/billing/`. s.

# CODE STYLE & LINTING

- Use Prettier for formatting. No exceptions unless there’s a known conflict.
- Maintain a consistent approach to TypeScript’s strict mode. Avoid `any` as a catch-all.

# FRONTEND ROUTING & BEST PRACTICES

- Leverage the Next.js App Router (`app/` directory).
- Components that handle logic plus markup belong in the relevant route or subfolder.
- Shared logic or code can move to `lib/` or `components/ui/` for reusability if repeated across multiple routes.

# SERVER ACTIONS & SECURITY

- Server actions use `next-safe-action` in `lib/safeAction/client.ts`.
- Always assert authentication with `assertAuthenticated()` in server api routes.
- Avoid leaking secrets in logs or error messages.

# Stack
- This project uses bun
- shadcn components
- tailwindcss

# General guidelines
- Avoid using direct UI styling in templating, components styling should suffice. Stick to layout/structure
- DRY components when possible
- Inline the props type for short ones
- typescript always
- Avoid `any` and `as`
