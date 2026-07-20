Type: grilling
Status: resolved
Blocked by: 01, 02, 03

## Question

What is the product contract of a Project automation rule combining an event, filters, an Agent, and contextual instructions, including matching behavior, multiple rules targeting one Agent, and multiple rules matching one event without introducing explicit workflow chaining?

## Answer

A ProjectAutomationRule belongs to one ProjectAgentConfiguration and has a required human-readable name, exactly one event type, that event's typed filters, a continuity policy, and an optional plain-text contextual instruction. Its Agent and capabilities come from the parent configuration. It has no enabled or draft state: it exists and applies immediately, or it is deleted. Changes affect only future event matches and never rewrite existing AgentWorks or their artifacts.

Event types and filters are specific rather than generic. Each event type defines the filters meaningful to it. The MVP catalogue deliberately has only one configurable filter: the required label name on `GitHub Issue labeled`. That product event absorbs both a matching label-addition webhook and creation of an Issue with the label already applied, without reconstructing or diffing external state.

Every matching rule independently creates a Trigger. Multiple matching rules all apply without priority, exclusivity, deduplication, or guaranteed order. Each match retains its own instruction rather than being merged with another match, while all rules under one ProjectAgentConfiguration use its shared capabilities. Runtime concurrency and failure behavior are separate execution-control decisions.

The continuity policy expresses one of two intentions: start an independent AgentWork for every match or resume work related to the event's Issue or ChangeRequest. Yapir resolves related continuity from the event artifact, the parent configuration's Agent, and the existing typed relationships. If related work does not yet exist, Yapir creates it. The MVP has no Project-wide persistent mission and does not reconcile artifact relationships established only after separate AgentWorks exist.

A ProjectAgentConfiguration explicitly connects its Agent to the Project and owns that connection's rules. It may exist without any rules. Deleting it deletes its rules and prevents future Triggers while preserving all existing AgentWorks, ChangeRequests, and CommentSets; reconnecting the same Agent later may resume preserved related work according to a new rule's continuity policy.

The Trigger retains the event's artifact references internally to pre-scope the Sandbox and tools, but it does not inject a structured event payload or artifact snapshot into the Agent prompt. The Agent receives the optional contextual instruction, which remains plain text without variables or templating, and discovers current state through its tools. Execution snapshots the current capabilities of the parent ProjectAgentConfiguration.

Rules do not target or invoke other rules, so there is no explicit workflow chaining. Events caused by an Agent are otherwise evaluated like equivalent external events and may independently match other rules. `CommentSet submitted` is the sole exception: rules belonging to its authoring Agent are intrinsically ineligible, preventing immediate self-reaction without configurable author filters. Broader automatic loop guardrails remain outside the MVP.

Direct User requests to start or resume an AgentWork are outside the MVP. Users intervene through CommentSet submissions and provider actions whose resulting events may match rules. A future manual request can be introduced as another event type without changing this contract.
