Type: grilling
Status: resolved
Blocked by: 01, 04

## Question

How is one Agent's persistent work created, correlated with external artifacts and later triggers, resumed across multiple activations, completed, interrupted, or superseded while preserving shared collaboration history and Agent-private continuity?

## Answer

An AgentWork is a permanent correlation identity, not a task with a business lifecycle. It is never completed, interrupted, closed, or superseded. Issue and ChangeRequest lifecycle belongs to the external provider, while execution failures, interruption, cancellation, and concurrency belong to execution control. Durable AgentWorks and their published collaboration history remain available regardless of those outcomes.

The MVP offers two continuity policies. Start-new creates an independent AgentWork for every matching ProjectAutomationRule, retaining the triggering artifact as provenance without making that work the artifact's automatic continuity target. Related continuity creates or resumes the one AgentWork selected for the Agent linked by the rule's ProjectAgentConfiguration and by the triggering Issue or ChangeRequest. There is no Project-wide persistent mission: unrelated features must not share one Agent-private context.

An Agent-created ChangeRequest records its producing AgentWork atomically, before events caused by its creation can activate other rules. If that AgentWork was already related to an Issue, both artifacts subsequently identify the same work. A ChangeRequest need not relate to any Issue and can define its own correlation scope. Textual provider references do not create or merge scopes.

Externally created or belatedly linked artifacts do not merge existing AgentWorks or their private histories in the MVP. Reconciliation and explicit selection between work scopes are outside the MVP; each artifact continues to resolve through the correlation Yapir already knows.

Each Trigger that resumes an AgentWork uses the Agent's current profile and the Project's current context while adding its event context and contextual instruction to the existing private continuity. Rule or Agent configuration changes never rewrite earlier history.

The Sandbox retains the repository workspace and opencode session only for its operational retention period. Retention expiry may replace it with a fresh Sandbox and opencode session without changing the AgentWork identity, artifact correlations, or durable shared history. Private session continuity is therefore retention-bound rather than a lifetime guarantee of AgentWork.
