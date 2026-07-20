Type: grilling
Status: resolved

## Question

Which exact GitHub and Yapir event types and event-specific typed filters constitute the complete MVP ProjectAutomationRule catalogue, and how should each event be defined so configuration, matching, and the GitHub-first acceptance fixture use one unambiguous contract?

## Answer

The complete MVP catalogue has four product events:

- `GitHub Issue labeled` is a GitHub-specific event with one required `label` filter. The filter is a non-empty, freely entered label name matched exactly against GitHub's label name; configuration does not require the label to exist yet. It matches either an `issues.labeled` webhook whose affected label has that name or an `issues.opened` webhook whose initial labels contain that name. This lets the UI present one business event, "GitHub issue is labeled," with help text explaining that an Issue created with the label already applied also matches. It requires no state diff and no remote fetch for matching.
- `ChangeRequest created` is a provider-neutral event with no configurable filters. For GitHub it is emitted only from a `pull_request.opened` webhook, including after an Agent submitted and Yapir recorded the pull request. The submission action itself does not emit the event. Repeated webhook deliveries remain repeated occurrences under the existing no-deduplication contract.
- `ChangeRequest head changed` is a provider-neutral event with no configurable filters. For GitHub it is emitted from a `pull_request.synchronize` webhook for a ChangeRequest already known to Yapir. Repository pushes before a ChangeRequest exists do not produce an MVP automation event.
- `CommentSet submitted` is a Yapir event with no configurable filters. It is emitted once after an atomic CommentSet submission. It has an intrinsic `not me` rule: it is ineligible for every ProjectAutomationRule belonging to the authoring Agent's ProjectAgentConfiguration, including when that Agent authored it through another AgentWork. CommentSets by any User or any other Agent remain eligible. This is fixed event behavior rather than a configurable author filter.

These are the only event-specific filters in the MVP: the required label name on `GitHub Issue labeled`. There are no actor, author, branch, draft, text, content, current-state, or transition filters. Native GitHub Issue comments, ChangeRequest comments, reviews, review-thread comments, Issue actions other than the two label-entry sources, pre-ChangeRequest pushes, close/reopen events, merge, and post-merge activity are outside this catalogue.

Every matching rule still creates its own Trigger independently. Matching uses the webhook or CommentSet occurrence and the rule configuration, but no event payload or artifact snapshot is injected into the Agent prompt. The Trigger's internal references pre-scope its tools and Sandbox to the active Issue or ChangeRequest. The Agent receives the rule's contextual instruction and discovers current state through those tools; a CommentSet-triggered Agent reads the current collaboration history rather than receiving the triggering CommentSet as prompt data. For the acceptance fixture, an Issue Trigger starts or resumes the Implementer's AgentWork branch, while ChangeRequest Triggers place the repository at the active head to inspect. Detailed checkout mechanics remain execution concerns beyond the catalogue.

The GitHub-first acceptance fixture uses two Agents named `Implementer` and `Security Expert`, the concrete fixture label `ready-for-agent`, and four independently configured rules, all with related continuity:

- `Implement labeled issue` belongs to Implementer, uses `GitHub Issue labeled` with `label = ready-for-agent`, and instructs the Agent to implement the active Issue and submit a non-draft ChangeRequest.
- `Evaluate new ChangeRequest` belongs to Security Expert, uses `ChangeRequest created`, and instructs the Agent to evaluate the active head and publish a non-empty CommentSet, including a narrative when it finds nothing to challenge.
- `Address new feedback` belongs to Implementer, uses `CommentSet submitted`, and instructs the Agent to inspect current feedback, respond, and correct the implementation as appropriate. Intrinsic `not me` behavior prevents Implementer from reacting to its own CommentSets without requiring an author filter.
- `Re-evaluate updated ChangeRequest` belongs to Security Expert, uses `ChangeRequest head changed`, and instructs the Agent to inspect the new head, publish a non-empty follow-up CommentSet, and update only threads rooted by that Agent identity.

The instructions' intentions are normative, but their literal prose is fixture data rather than a required string contract. The minimum capability grants are: Implementer receives GitHub Issue read access, repository Git access, active GitHub ChangeRequest management, and Yapir CommentSet collaboration; Security Expert receives repository Git access and Yapir CommentSet collaboration.

GitHub webhook contract reference: https://docs.github.com/en/webhooks/webhook-events-and-payloads
