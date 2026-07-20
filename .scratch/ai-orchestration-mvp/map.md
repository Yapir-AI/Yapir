Type: wayfinder:map

## Destination

A coherent suite of decision-complete product specifications for Yapir's GitHub-first MVP, covering the collaborative journey from a ready issue through human merge and expressing Yapir as the AI orchestration platform for coding teams.

## Notes

- Work at the business and product level; defer implementation planning until the specification suite is complete.
- Use the `grilling` and `domain-modeling` skills in every decision session, and keep `CONTEXT.md` current as vocabulary resolves.
- Yapir is the control plane and the place for CommentSet collaboration. The external issue tracker remains canonical for issues, while the git provider remains canonical for repositories, branches, commits, ChangeRequests, and merge.
- Agents are specialized Organization-owned profiles reused across Projects. A ProjectAgentConfiguration explicitly links an Agent to one Project, grants its capabilities, and owns its automation rules.
- The MVP exposes a builder based on event plus filters, continuity, and contextual instruction under a ProjectAgentConfiguration. Multiple matching rules all execute independently.
- A User may intervene throughout, but only human merge is mandatory on the happy path.
- Specify GitHub concretely while keeping the product model provider-neutral.

## Decisions so far

<!-- Resolved ticket pointers are appended here. -->

- [Establish the orchestration domain model](issues/01-establish-the-orchestration-domain-model.md) — AgentWork is each Agent's durable correlation scope across explicitly related Issues and ChangeRequests; ephemeral Triggers resume it under a user-facing continuity policy.
- [Define the Agent profile contract](issues/02-define-the-agent-profile-contract.md) — An Agent is a reusable Organization-owned identity, persona, and single-model configuration; Project-specific capabilities and tools belong to its ProjectAgentConfiguration rather than its profile.
- [Draw the external-system boundary](issues/03-draw-the-external-system-boundary.md) — GitHub owns external artifacts and merge while Yapir owns orchestration and CommentSet collaboration, crossing the boundary through provider-supplied scoped tools, Git access, and events without mirroring Yapir discussion to GitHub.
- [Define Project automation rules](issues/04-define-project-automation-rules.md) — Each named, stateless ProjectAutomationRule belongs to a ProjectAgentConfiguration and independently supplies one typed event, continuity, and contextual intent without rights or explicit rule chaining.
- [Define AgentWork and continuity](issues/05-define-agent-work-and-continuity.md) — AgentWork is a permanent artifact-correlated identity without a business lifecycle; related work deduplicates by Issue or ChangeRequest, while private Sandbox continuity lasts only for its retention period.
- [Define Agent capabilities and scoped actions](issues/06-define-agent-permissions-and-actions.md) — One ProjectAgentConfiguration grants provider-supplied capabilities and a stable per-work tool catalogue, while Yapir pre-scopes proxied actions and GitHub alone constrains repository-wide Git access.
- [Define collaboration through CommentSets](issues/07-define-collaboration-comments-and-reviews.md) — One immutable CommentSet atomically groups an Agent's or User's description, Comments, replies, and author-owned thread actions at a commit into one Yapir-only collaboration event.
- [Prototype the automation configuration experience](issues/08-prototype-the-automation-configuration-experience.md) — A transient four-step first connection and a matching section-based management page make Agent selection, shared capabilities, optional independent rules, and disconnection explicit.
- [Prototype the collaboration and supervision experience](issues/09-prototype-the-collaboration-and-supervision-experience.md) — A familiar ChangeRequest page exposes descriptions, code conversations, and grouped reviews while hiding CommentSet and excluding User-facing Agent supervision from the MVP.
- [Specify the Issue-to-ChangeRequest journey](issues/10-specify-the-issue-to-changerequest-journey.md) — Matching rules independently produce AgentWork branches and explicit non-draft ChangeRequest submissions, after which ordinary creation, CommentSet, and push events drive any configured continuation.
- [Specify the review and correction journey](issues/11-specify-the-review-and-correction-journey.md) — Ordinary ChangeRequest, CommentSet, and push events drive configured evaluation and correction loops whose visible publications inform, but never gate, human merge on GitHub.
- [Define Trigger failure and retry semantics](issues/12-define-trigger-failure-and-retry-semantics.md) — Triggers end as technically completed or failed without orchestration retries, recovery controls, rollback, or User-visible execution status; later matching events remain independent.
- [Define ChangeRequest discovery and notifications](issues/14-define-changerequest-discovery-and-notifications.md) — Users browse a factual Project-level index of post-connection ChangeRequests; the MVP has no personal attention state, initial import, or notification channel.
- [Define Trigger scheduling and concurrency semantics](issues/15-define-trigger-scheduling-and-concurrency-semantics.md) — Each delivery-rule match creates a distinct Trigger, but an AgentWork admits only one at a time and immediately fails contenders; distinct works remain unordered and concurrent without cancellation, stale-head intervention, deduplication, coalescing, or product economics controls.
- [Shape the final MVP specification suite](issues/13-shape-the-final-mvp-specification-suite.md) — One index and five single-owner normative specifications separate foundations, configuration, execution, collaboration, and a cross-spec acceptance proof ending at successful human merge on GitHub.
- [Define the MVP event and filter catalogue](issues/16-define-the-mvp-event-and-filter-catalogue.md) — Four minimally filtered events cover labeled Issue entry, ChangeRequest creation and head changes, and self-suppressing CommentSet collaboration for the acceptance journey.

## Not yet specified

<!-- In-scope fog will be recorded here as the frontier advances. -->

## Out of scope

- [Automation catalogue expansion](issues/16-define-the-mvp-event-and-filter-catalogue.md) beyond the four MVP events and required Issue label filter, including native GitHub comments and reviews, additional Issue or ChangeRequest lifecycle events, pre-ChangeRequest push automation, and configurable actor, author, branch, draft, text, or content filters.
- Post-merge automations such as documentation updates, issue unblocking, release reactions, and other future triggers; these remain roadmap directions for a later effort.
- Automatic loop guardrails, activation-chain limits, budgets, and escalation policies; the MVP relies on responsible configuration and may permit fully autonomous factories.
- A public Agent marketplace across Organizations.
- Provider implementations other than GitHub.
- A configurable execution harness and Agent-level tool catalogue.
- Organization-wide knowledge attached to Agent profiles.
- Direct User requests that start or resume an AgentWork; MVP intervention occurs through event-producing collaboration and provider actions.
- Project-wide persistent Agent missions that share one private context across unrelated Issues or ChangeRequests.
- Reconciliation, private-history merging, or manual scope selection when external artifacts are related only after separate AgentWorks already exist.
- Per-execution dynamic activation or deactivation of capabilities; MVP capabilities are configured on the ProjectAgentConfiguration and snapshotted when a Trigger executes.
- Scheduled or release-driven housekeeping that starts fresh work while using a configured root Issue and related Issue graph as shared external memory.
- User-added capability sources such as MCP servers.
- User-facing work-supervision dashboards and direct Agent relaunch or interruption controls; MVP collaboration stays centered on ChangeRequests.
