Type: grilling
Status: resolved
Blocked by:

## Question

What is the smallest coherent domain model that links an external issue, the shared collaboration around a change, each Agent's persistent work, individual activations, the ChangeRequest, CommentSets, Comments, and human participation without creating an internal twin of the issue or git artifacts?

## Answer

The MVP does not introduce a Yapir-owned Collaboration or an internal twin of an Issue. The external Issue remains canonical and may initiate an AgentWork; once a ChangeRequest exists, it is the shared convergence point for CommentSets and subsequent events.

AgentWork is the durable correlation identity. It belongs to one Agent and one Project, represents that Agent's continuity for one correlated scope of work, and owns one Sandbox at a time. Its identity and shared history persist permanently, while the Sandbox workspace and private Agent context persist only for the Sandbox retention period. An AgentWork may relate to multiple explicitly connected Issues and ChangeRequests in its scope, while different Agents participating around the same artifacts have separate AgentWorks.

A Trigger is an ephemeral occurrence that starts or resumes an AgentWork with event-specific context after an event matches a ProjectAutomationRule. Triggers and the resulting executions are not durable domain objects in this minimal model.

Durable Agent-produced artifacts provide the correlation paths for later events: ChangeRequests and CommentSets record the AgentWork that produced them. Correlation relationships remain explicit and typed (`AgentWork` to `Issue`, and `AgentWork` to `ChangeRequest`) rather than introducing a generic Artifact entity. CommentSets reach the scope through their ChangeRequest.

Automation exposes continuity intent rather than a technical correlation key: start independent work for each match or resume work related to an Issue or ChangeRequest. For related work, Yapir combines the event's artifact with the Agent from the rule's ProjectAgentConfiguration to locate the AgentWork. If none exists, it creates one; if another Agent joins the same scope, it creates or resumes that Agent's separate AgentWork. Unrelated artifacts never share one Project-wide private context.

For one Agent, an Issue or ChangeRequest selects at most one AgentWork for automatic related continuity. Independent work may retain the same artifact as provenance without becoming that target. The MVP neither merges separately established private histories nor reconciles artifacts related only after separate AgentWorks exist.

Users participate through authored CommentSets and external provider actions whose resulting events may match ProjectAutomationRules. They do not receive a parallel UserWork or activation lifecycle.
