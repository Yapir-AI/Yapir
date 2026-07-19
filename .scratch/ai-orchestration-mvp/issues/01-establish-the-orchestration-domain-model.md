Type: grilling
Status: resolved
Blocked by:

## Question

What is the smallest coherent domain model that links an external issue, the shared collaboration around a change, each Agent's persistent work, individual activations, the ChangeRequest, Reviews, Comments, and human participation without creating an internal twin of the issue or git artifacts?

## Answer

The MVP does not introduce a Yapir-owned Collaboration or an internal twin of an Issue. The external Issue remains canonical and may initiate an AgentWork; once a ChangeRequest exists, it is the shared convergence point for Reviews, Comments, and subsequent events.

AgentWork is the durable correlation identity. It belongs to one Agent and one Project, represents that Agent's continuity for one correlated scope of work, and owns one logically persistent Sandbox. The Sandbox's workspace and Agent context survive resumptions as a product guarantee even if the physical runtime must be recreated. An AgentWork may relate to multiple Issues and ChangeRequests in its scope, while different Agents participating around the same artifacts have separate AgentWorks.

A Trigger is an ephemeral occurrence that starts or resumes an AgentWork with event-specific context after an event matches a ProjectAutomationRule. Triggers and the resulting executions are not durable domain objects in this minimal model.

Durable Agent-produced artifacts provide the correlation paths for later events: ChangeRequests, Reviews, and Comments record the AgentWork that produced them. Correlation relationships remain explicit and typed (`AgentWork` to `Issue`, and `AgentWork` to `ChangeRequest`) rather than introducing a generic Artifact entity. Reviews and Comments reach the scope through their ChangeRequest.

Automation exposes continuity intent rather than a technical correlation key: start new work for each match, resume work related to an Issue or ChangeRequest, or resume a persistent mission. For related work, Yapir combines the event's artifact with the rule's target Agent to locate the AgentWork. If none exists, it creates one; if another Agent joins the same scope, it creates or resumes that Agent's separate AgentWork.

For one Agent, a related Issue or ChangeRequest identifies at most one active AgentWork. If an event connects multiple existing AgentWorks for the same Agent, Yapir does not merge their private histories automatically: the Trigger is blocked until the intended AgentWork is selected explicitly.

Users participate through authored Reviews and Comments, resolutions, and external provider actions whose resulting events may match ProjectAutomationRules. They do not receive a parallel UserWork or activation lifecycle.
