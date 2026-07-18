Type: wayfinder:map

## Destination

A coherent suite of decision-complete product specifications for Yapir's GitHub-first MVP, covering the collaborative journey from a ready issue through human merge and expressing Yapir as the AI orchestration platform for coding teams.

## Notes

- Work at the business and product level; defer implementation planning until the specification suite is complete.
- Use the `grilling` and `domain-modeling` skills in every decision session, and keep `CONTEXT.md` current as vocabulary resolves.
- Yapir is the control plane and the place for Review and Comment collaboration. The external issue tracker remains canonical for issues, while the git provider remains canonical for repositories, branches, commits, ChangeRequests, and merge.
- Agents are specialized Organization-owned profiles reused across Projects. An Agent carries its stable identity, model, system instructions, and permissions; Project automation rules add event-specific instructions.
- The MVP exposes a builder based on event plus filters, Agent, and contextual instruction. Multiple matching rules all execute, and one Agent may be targeted by multiple rules.
- A User may intervene throughout, but only human merge is mandatory on the happy path.
- Specify GitHub concretely while keeping the product model provider-neutral.

## Decisions so far

<!-- Resolved ticket pointers are appended here. -->

- [Establish the orchestration domain model](issues/01-establish-the-orchestration-domain-model.md) — AgentWork is each Agent's durable correlation scope and Sandbox continuity across related Issues and ChangeRequests; ephemeral Triggers resume it under a user-facing continuity policy.

## Not yet specified

- The complete MVP trigger and filter catalogue beyond the issue, ChangeRequest, Review, Comment, and push events needed by the core journey.
- Agent lifecycle concerns such as profile evolution and the effect of configuration changes on work already in progress.
- Runtime economics, scheduling, and concurrency controls that prove product-critical once the execution lifecycle is defined.
- Notification and discovery behavior that emerges from prototyping the configuration and supervision surfaces.

## Out of scope

- Post-merge automations such as documentation updates, issue unblocking, release reactions, and other future triggers; these remain roadmap directions for a later effort.
- Automatic loop guardrails, activation-chain limits, budgets, and escalation policies; the MVP relies on responsible configuration and may permit fully autonomous factories.
- A public Agent marketplace across Organizations.
- Provider implementations other than GitHub.
