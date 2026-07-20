Type: grilling
Status: resolved
Blocked by: 11, 12

## Question

Which scheduling, concurrency, ordering, deduplication, coalescing, stale-context, and cancellation semantics are required when multiple events and ProjectAutomationRules create simultaneous Triggers, particularly when they resume the same AgentWork or act on a ChangeRequest whose head changes during execution; and which runtime economics controls, if any, are product-critical for the GitHub-first MVP?

## Answer

Every event delivery is evaluated independently, and every matching ProjectAutomationRule creates its own Trigger. Yapir performs no deduplication or coalescing, including when GitHub delivers the same identifiable event more than once. Equivalent deliveries and multiple matching rules therefore remain distinct attempts.

An AgentWork admits at most one running Trigger. When a Trigger would start or resume an AgentWork that already has a running Trigger, the new Trigger fails immediately without launching the Agent, waiting, retrying, or producing effects. If simultaneous Triggers contend for a free AgentWork, admission is atomic: exactly one arbitrary contender starts and the others fail, with no priority or arrival-order guarantee. The AgentWork remains occupied until its admitted Trigger completes or fails; only a later event can make a fresh attempt after that point.

This exclusion applies only within one AgentWork. Triggers for distinct AgentWorks may execute concurrently and complete in any order, even when they act on the same ChangeRequest. Yapir provides no global ordering across rules, Agents, ChangeRequests, or Projects. Runtime resource limits may delay execution operationally, but they create no product-visible ordering or fairness guarantee.

An admitted Trigger retains the internal artifact references, contextual instruction, and capability snapshot with which it began. It uses those references to keep the Sandbox and tools scoped, without injecting an event payload or artifact snapshot into the Agent prompt. Later events or configuration changes do not alter or cancel it. The Agent may observe newer artifact state only by reading it through its tools. A later event is evaluated normally and, if it resolves to the occupied AgentWork, its distinct Trigger fails under the same admission rule.

A ChangeRequest head change does not cancel, restart, supersede, or otherwise protect an admitted Trigger. The Trigger may finish and attempt its intended effects. Yapir adds no stale-head write restriction beyond the ordinary preconditions and errors of its tools and GitHub: a CommentSet may remain anchored to the commit actually evaluated and become old, while a conflicting code mutation may fail normally. Accepted effects remain canonical as defined by the failure contract.

The MVP exposes no User or Admin cancellation once a Trigger starts. Deleting or changing a ProjectAutomationRule, ProjectAgentConfiguration, or capability affects future Triggers but does not interrupt one already admitted. Only a technical interruption makes that Trigger fail.

No runtime economics control is product-critical for the MVP. Yapir exposes no configurable concurrency ceiling, budget, quota, token limit, duration limit, queue, fairness policy, or cost control. Any infrastructure throttling and capacity management remain operational concerns and do not change the scheduling contract above.
