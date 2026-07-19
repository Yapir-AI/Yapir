Type: prototype
Status: resolved
Blocked by: 02, 04, 06

## Question

What is the simplest concrete configuration experience through which a project admin discovers or creates an Agent, connects it to a Project by defining one or more event-and-filter rules with contextual instructions, and understands what the Agent can do?

## Answer

The validated direction is prototype variant D: a guided first connection followed by a spacious, section-based management page that uses the same visual language without preserving the onboarding stepper.

The first connection is a four-step flow: choose an Agent, grant capabilities, add automations, and confirm. The flow remains transient and creates the ProjectAgentConfiguration and any ProjectAutomationRules atomically only at final confirmation; it introduces no durable draft state. Connecting an Agent with no rules is valid.

The Agent step provides a searchable, compact list of existing Organization Agents with enough profile context to distinguish them, including name, description, and model. Agent creation and modification remain in the separate Organization administration surface. An Admin may leave through a `Create Agent and return` action, after which the Project flow is restored and the new Agent is preselected. A project admin who cannot create Agents is told to contact an Admin rather than being offered an unavailable action.

The capability step starts with nothing granted and explains each available capability in plain language. It explicitly states that capabilities belong to this Agent's Project connection and are shared by all of its automation rules. Only capabilities supported by the Project's current provider connections are shown.

The optional automation step lists the connection's existing draft rules and adds each rule in business-reading order: name, event, event-specific typed filters, continuity, contextual instruction, then a readable preview. The surface states that every matching rule executes independently. The confirmation step summarizes the selected Agent, capability count, and rules before the atomic connection.

An existing ProjectAgentConfiguration uses a permanent left-hand section navigation rather than a repeated wizard: Agent, Capabilities, Automations, and Disconnect. Agent profile management links back to the Organization surface. Capability and rule changes save within their section and apply according to the already-decided future-Trigger semantics. The destructive section explains that disconnecting deletes the rules and prevents future Triggers while preserving existing AgentWorks and published artifacts.

Prototype asset: branch `prototype/automation-configuration` at commit `a6a6ddc` (`apps/web/src/routes/_authenticated/prototype/project-agent-automation.tsx`). After checking out that branch, the validated variant is available at `/prototype/project-agent-automation?variant=D`; its `First connection` and `Existing connection` controls expose both states.
