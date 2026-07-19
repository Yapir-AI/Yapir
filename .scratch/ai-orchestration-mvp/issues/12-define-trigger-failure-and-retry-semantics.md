Type: grilling
Status: resolved
Blocked by: 05, 06

## Question

Which Trigger outcomes, failure behavior, retry semantics, and ChangeRequest-visible explanations are required for the MVP to remain understandable and recoverable without a User-facing work-supervision surface or automatic loop guardrails?

## Answer

Each Trigger is one execution that starts or resumes an AgentWork. The Trigger, never the permanent AgentWork, carries the runtime state `running`, `completed`, or `failed`. It becomes `completed` when the Agent runtime returns normally and `failed` when a crash, throw, or other technical interruption prevents a normal return.

Completion is deliberately technical rather than a judgment that the contextual instruction achieved its intended business result. A Trigger may complete without creating a ChangeRequest, publishing a CommentSet, changing code, or producing any other expected effect. Yapir does not require rules to declare a verifiable result, and the Agent does not self-report a separate success verdict.

A structured tool error does not by itself fail the Trigger. It remains part of the Agent's execution context: the Agent may retry the tool, choose another action, or stop. If the Agent runtime subsequently returns normally, the Trigger is `completed`. These Agent-directed tool calls and retries remain within the same Trigger and are not orchestration retries.

The MVP performs no automatic retry of a failed Trigger and offers no User relaunch, configuration-driven replay, or other recovery action. A later event that matches a rule creates a normal new Trigger; related continuity may resume the same AgentWork without changing or repairing the earlier Trigger. A failed Trigger does not block future matches.

Effects accepted before a failure remain canonical. Yapir does not roll back commits, pushes, ChangeRequests, CommentSets, or other distributed side effects when the Trigger that produced them later fails.

Trigger states and failures have no User-facing presentation in the MVP. Yapir does not add a system CommentSet, publish a GitHub explanation, or expose execution status on the ChangeRequest. Operational logs carry enough correlation and error context to diagnose technical failures; their storage, retention, and tooling remain implementation concerns rather than a product history or Admin supervision surface.
