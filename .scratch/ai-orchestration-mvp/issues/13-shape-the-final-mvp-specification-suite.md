Type: grilling
Status: resolved
Blocked by: 08, 09, 11, 12, 14, 15

## Question

How should the resolved domain, configuration, collaboration, execution, and end-to-end journey decisions be partitioned into a coherent suite of product specifications, and which cross-spec acceptance narrative proves the GitHub-first MVP reaches human merge without gaps or overlap?

## Answer

The final MVP specification suite should contain one navigational index and five normative product specifications. Each requirement has exactly one owning specification; other specifications link to it instead of restating it.

### Specification Suite Index

The index is non-normative. It states the GitHub-first MVP scope, provides the reading order, maps concepts and Wayfinder decisions to their owning specification, consolidates the out-of-scope list, and defines the suite's decision-complete status.

### Product Foundations

This is the normative source for the shared product model and every cross-cutting invariant:

- the product promise, actors, access scopes, concepts, identities, relationships, and cardinalities;
- the ownership boundary between GitHub's canonical artifacts and Yapir's orchestration and collaboration artifacts;
- the distinction between permanent AgentWork identity, retention-bound Sandbox context, and ephemeral Trigger execution;
- current configuration, per-Trigger snapshots, immutable publications, and commit-relative oldness;
- the absence of an AgentWork business lifecycle, Yapir quality gate, Yapir merge-readiness state, or merge action;
- provider-neutral concepts and the concrete GitHub-first MVP profile;
- structural exclusions from the MVP.

### Agent Configuration and Automation

This specification owns how an Agent is made available in a Project and how events start or resume its work:

- Organization-level Agent administration;
- atomic ProjectAgentConfiguration creation through the four-step connection experience;
- the established post-connection management sections;
- the initial capability catalogue, authorization rules, shared capability grant, and per-Trigger capability snapshot;
- the ProjectAutomationRule contract: name, one typed event, typed filters, continuity policy, and contextual instruction;
- filter conjunction and current-state evaluation;
- independent execution of every matching rule;
- `start-new` and `related` continuity choices;
- immediate configuration changes, rule deletion, and Agent disconnection;
- validation, empty states, and explanations needed to make the model understandable;
- the exhaustive GitHub-first MVP event and filter catalogue.

### Orchestration and Agent Execution

This specification owns behavior from event delivery and rule matching until the Agent runtime returns:

- the event-to-rule-to-Trigger-to-AgentWork-to-Sandbox chain;
- immutable Trigger inputs and current context loaded at execution time;
- AgentWork selection under each continuity policy;
- Sandbox retention and replacement without changing AgentWork identity;
- stable tool catalogues, active-artifact scoping, and no-side-effect failures for missing or ambiguous targets;
- technical `running`, `completed`, and `failed` outcomes, distinct from business success;
- preservation of effects accepted before failure;
- no orchestration retry, replay, rollback, cancellation, or User recovery control;
- atomic admission of at most one running Trigger per AgentWork and immediate failure of contenders;
- unordered concurrency across distinct AgentWorks;
- no delivery deduplication or coalescing;
- admitted execution behavior across later events and head changes;
- the boundary between product behavior and non-product operational parameters.

### ChangeRequest Collaboration and Discovery

This specification owns the shared product experience around every ChangeRequest learned after Project connection:

- explicit Agent submission, its preconditions, and idempotent recovery from an interrupted GitHub acknowledgement;
- ingestion of a pull request opened directly on GitHub by a User;
- the same index, page, CommentSet collaboration, and automation behavior regardless of whether an Agent or User opened the underlying pull request, with provenance and the possible absence of a producing AgentWork as the only differences;
- ordinary `ChangeRequest created` rule evaluation regardless of creator;
- no initial import of pull requests that predate Project connection;
- the Project-level index, provider-state views, factual metadata, activity ordering, and unresolved-conversation count;
- the ChangeRequest page and its GitHub link;
- the complete CommentSet, Comment, reply, thread-action, anchor, authorship, immutability, atomicity, and oldness contracts;
- evaluation, correction, and reevaluation loops;
- no recipient, verdict, approval, notification, personal attention state, quality gate, or User-facing Agent supervision;
- human merge exclusively on GitHub.

### GitHub-First MVP Acceptance

This specification is an executable cross-spec proof, not another owner of product contracts. Every assertion links to its owning specification.

Its primary fixture contains one GitHub-connected Project, one implementing Agent, one evaluating Agent, their ProjectAgentConfigurations, their minimum capabilities, and exact independent rules, filters, continuity choices, and contextual instructions. A GitHub Issue acquires the fixture's configured external ready condition; Yapir has no intrinsic ready state.

The primary narrative proves that:

1. The matching Issue event starts related implementation work.
2. The implementing Agent uses its AgentWork branch, pushes its change, and explicitly submits an open, non-draft ChangeRequest to GitHub.
3. Yapir relates and exposes the ChangeRequest in the Project index and page.
4. A configured ChangeRequest rule starts related evaluation work.
5. The evaluator publishes one non-empty CommentSet for the evaluated commit.
6. A configured, author-filtered CommentSet rule resumes the implementer without the CommentSet addressing it directly.
7. The implementer replies, pushes a correction, or does both according to its instructions.
8. A configured push rule resumes the evaluator, which may publish follow-up feedback and change only the state of threads rooted by that Agent identity.
9. A User examines the factual collaboration history, follows the GitHub link, and successfully merges on GitHub.

Successful human merge on GitHub is the endpoint. Later observation of the merged provider state by Yapir is not required to prove this MVP journey.

The acceptance specification must distinguish platform guarantees from outcomes expected of correctly instructed Agents. Trigger admission, continuity, scoped tools, accepted effects, collaboration publication, discovery, and navigation are platform guarantees. Producing a useful implementation, submitting it, publishing an evaluation, or correcting code are expected Agent behaviors and are not implied by a technically completed Trigger.

The primary narrative assumes no duplicate delivery, AgentWork contention, technical interruption, or head change during an intervention; the owning specifications define those behaviors separately. Human merge remains possible when evaluation is absent, old, or unresolved because Yapir never gates it.

A pull request opened directly by a User on GitHub is a referenced acceptance requirement rather than a second end-to-end narrative: when Yapir learns it from a post-connection event, it must create the ChangeRequest reference, expose the same collaboration surface, and evaluate the same `ChangeRequest created` automations as an Agent-submitted pull request. No pre-connection import, CommentSet mirroring to GitHub, Issue closure, notification, or post-merge automation is expected.
