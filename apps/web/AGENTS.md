# Yapir Web

This workspace contains Yapir's React web application. Follow the repository-level instructions and the conventions below.

## Framework Ownership

- Embrace the selected frameworks instead of hiding them behind application-specific facades.
- Use TanStack Router for all navigation, route guards, route data, and typed, validated search parameters.
- Use TanStack Query for every remote read and mutation, including calls made through SDK clients.
- Use TanStack Form and its official composition APIs for every form.
- Use ArkType for form values, search parameters, and other application-owned runtime validation.
- Use Better Auth Client for Better Auth endpoints and SDK-owned state. Use Hono RPC for Yapir-owned API endpoints. Use an SDK's official client when an external SDK owns the protocol.

## Routes And Data

- Use pathless route layouts for durable route branches such as public authentication and authenticated application pages. Put layout markup directly in the TanStack Router layout file; do not create a separate layout component without another concrete use.
- Resolve data required to enter a route in `beforeLoad`.
- For a page's primary data, preload shared `queryOptions` in the route loader with `ensureQueryData`, then consume them with `useSuspenseQuery` in the page.
- Query secondary data as close as possible to the component that consumes it.
- Keep TanStack Query as the source of truth; do not pass loader-fetched server data through page props.
- Validate redirect destinations and accept only internal application paths.

## Forms

- Build shared field and form controls with `createFormHookContexts` and `createFormHook` rather than custom form context or a configuration-driven form engine.
- Pre-bind concrete controls such as `TextField` and submit actions. Let each route own its form definition and submission orchestration until reuse or size justifies extraction.
- Compose controls from vanilla shadcn components and preserve accessible labels, field names, browser autocomplete behavior, and stable space for validation messages.
- Show field validation after blur, update it on change after the field has been touched, and validate the complete form on submission.
- Let TanStack Form own form state and TanStack Query own remote mutation state.

## Components And Styling

- Use vanilla components from the shadcn registry whenever one covers the requirement. Registry components may be installed as needed.
- Do not modify a shadcn component without prior maintainer approval.
- If shadcn does not provide a required component, stop and ask the maintainer what to use before creating a custom component or adding another UI dependency.
- Tailwind composes, lays out, and positions components. Do not use feature-local styling to redesign their visual appearance.
- Keep shadcn components in `components/ui`, shared form composition in `components/form`, and shared framework or API integrations in `lib`.
- Keep page-specific components, forms, and mutations with their route until there is concrete reuse or a real readability problem. Do not add speculative `features`, `pages`, `services`, or barrel layers.

## React

- Do not use effect hooks to synchronize application state. Prefer event handlers and the lifecycle provided by Router, Query, and Form.
- Do not add manual memoization. Render normally unless a measured performance problem demonstrates a need.
- If a third-party imperative API appears to require an effect hook, or measured performance appears to require manual memoization, explain why the framework mechanisms are insufficient and obtain maintainer approval before proceeding.
- Local state hooks are acceptable for genuine local UI state that does not belong to Router, Query, or Form.

## Backend Boundaries

- Import backend contracts directly from `@yapir/api` with type-only imports. Do not import backend runtime modules into browser code.
- Do not create a separate contracts package until a concrete consumer or runtime boundary requires one.
- Browser clients call relative `/api` URLs. Do not add a configurable cross-origin API base URL without revisiting the same-origin deployment ADR.

## Scope Discipline

- Prefer the smallest framework-native implementation that satisfies the current feature.
- Do not add global providers, abstractions, loading UI, notifications, or compatibility paths before a concrete use requires them.
- Keep all product copy and validation messages in English.
