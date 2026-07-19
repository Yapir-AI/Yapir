Type: wayfinder:map

## Destination

A coherent suite of decision-complete product specifications for Yapir's GitHub-first MVP, covering the collaborative journey from a ready issue through human merge and expressing Yapir as the AI orchestration platform for coding teams.

## Notes

- Work at the business and product level; defer implementation planning until the specification suite is complete.
- Use the `grilling` and `domain-modeling` skills in every decision session, and keep `CONTEXT.md` current as vocabulary resolves.
- Yapir is the control plane and the place for Review and Comment collaboration. The external issue tracker remains canonical for issues, while the git provider remains canonical for repositories, branches, commits, ChangeRequests, and merge.
- Agents are specialized Organization-owned profiles reused across Projects. An Agent carries its stable identity, model, and system instructions; Project automation rules add event-specific instructions and execution context supplies authorization.
- The MVP exposes a builder based on event plus filters, Agent, and contextual instruction. Multiple matching rules all execute, and one Agent may be targeted by multiple rules.
- A User may intervene throughout, but only human merge is mandatory on the happy path.
- Specify GitHub concretely while keeping the product model provider-neutral.

## Decisions so far

<!-- Resolved ticket pointers are appended here. -->

- [Establish the orchestration domain model](issues/01-establish-the-orchestration-domain-model.md) — AgentWork is each Agent's durable correlation scope across explicitly related Issues and ChangeRequests; ephemeral Triggers resume it under a user-facing continuity policy.
- [Define the Agent profile contract](issues/02-define-the-agent-profile-contract.md) — An Agent is a reusable Organization-owned identity, persona, and single-model configuration; Project context, task instructions, authorization, tools, and harness behavior stay outside its MVP profile.
- [Draw the external-system boundary](issues/03-draw-the-external-system-boundary.md) — GitHub owns external artifacts and merge while Yapir owns orchestration and review collaboration, crossing the boundary through references, scoped tools and Git access, provider events, and linked ChangeRequest comments.
- [Define Project automation rules](issues/04-define-project-automation-rules.md) — Each named, stateless ProjectAutomationRule independently matches one typed event, connects its target Agent, supplies continuity and context, and grants artifact-scoped access without explicit rule chaining.
- [Define AgentWork and continuity](issues/05-define-agent-work-and-continuity.md) — AgentWork is a permanent artifact-correlated identity without a business lifecycle; related work deduplicates by Issue or ChangeRequest, while private Sandbox continuity lasts only for its retention period.

## Not yet specified

- The complete MVP trigger and filter catalogue beyond the issue, ChangeRequest, Review, Comment, and push events needed by the core journey.
- Runtime economics, scheduling, and concurrency controls that prove product-critical once the execution lifecycle is defined.
- Notification and discovery behavior that emerges from prototyping the configuration and supervision surfaces.

## Out of scope

- Post-merge automations such as documentation updates, issue unblocking, release reactions, and other future triggers; these remain roadmap directions for a later effort.
- Automatic loop guardrails, activation-chain limits, budgets, and escalation policies; the MVP relies on responsible configuration and may permit fully autonomous factories.
- A public Agent marketplace across Organizations.
- Provider implementations other than GitHub.
- A configurable execution harness and Agent-level tool catalogue.
- Organization-wide knowledge attached to Agent profiles.
- Direct User requests that start or resume an AgentWork; MVP intervention occurs through event-producing collaboration and provider actions.
- Project-wide persistent Agent missions that share one private context across unrelated Issues or ChangeRequests.
- Reconciliation, private-history merging, or manual scope selection when external artifacts are related only after separate AgentWorks already exist.
