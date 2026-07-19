Type: grilling
Status: resolved
Blocked by: 01, 02, 03

## Question

What is the product contract of a Project automation rule combining an event, filters, an Agent, and contextual instructions, including matching behavior, multiple rules targeting one Agent, and multiple rules matching one event without introducing explicit workflow chaining?

## Answer

A ProjectAutomationRule belongs to one ProjectAgentConfiguration and has a required human-readable name, exactly one event type, that event's typed filters, a continuity policy, and an optional plain-text contextual instruction. Its Agent and capabilities come from the parent configuration. It has no enabled or draft state: it exists and applies immediately, or it is deleted. Changes affect only future event matches and never rewrite existing AgentWorks or their artifacts.

Event types and filters are specific rather than generic. Each event type defines the filters meaningful to it, all configured filters combine with `AND`, and an omitted filter imposes no restriction. Filters inspect the current artifact state; a transition that matters is represented by a more precise event type. For example, changing the title of an Issue already carrying a selected label matches an `Issue changed` rule filtered by that label, while reacting only to the label's addition uses an `Issue labeled` event.

Every matching rule independently creates a Trigger. Multiple matching rules all apply without priority, exclusivity, deduplication, or guaranteed order. Each match retains its own instruction rather than being merged with another match, while all rules under one ProjectAgentConfiguration use its shared capabilities. Runtime concurrency and failure behavior are separate execution-control decisions.

The continuity policy expresses one of two intentions: start an independent AgentWork for every match or resume work related to the event's Issue or ChangeRequest. Yapir resolves related continuity from the event artifact, the parent configuration's Agent, and the existing typed relationships. If related work does not yet exist, Yapir creates it. The MVP has no Project-wide persistent mission and does not reconcile artifact relationships established only after separate AgentWorks exist.

A ProjectAgentConfiguration explicitly connects its Agent to the Project and owns that connection's rules. It may exist without any rules. Deleting it deletes its rules and prevents future Triggers while preserving all existing AgentWorks, ChangeRequests, and CommentSets; reconnecting the same Agent later may resume preserved related work according to a new rule's continuity policy.

The Trigger supplies structured event context separately from the optional contextual instruction, which is plain text without variables or templating. Its execution snapshots the current capabilities of the parent ProjectAgentConfiguration. Proxied tools bind relevant targets from that context rather than asking the model to choose arbitrary artifact identifiers.

Rules do not target or invoke other rules, so there is no explicit workflow chaining. Events caused by an Agent are nevertheless evaluated like equivalent events caused by a User and may independently match other rules. Automatic loop guardrails remain outside the MVP.

Direct User requests to start or resume an AgentWork are outside the MVP. Users intervene through CommentSet submissions and provider actions whose resulting events may match rules. A future manual request can be introduced as another event type without changing this contract.
