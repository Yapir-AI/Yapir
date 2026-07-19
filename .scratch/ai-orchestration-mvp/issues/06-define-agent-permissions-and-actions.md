Type: grilling
Status: resolved
Blocked by: 02, 03, 04

## Question

Which product-level permissions and actions can a ProjectAutomationRule and Trigger grant an Agent in the MVP; how narrowly are they scoped when reading and modifying Issues, code, ChangeRequests, Reviews, and Comments; and how are unavailable or denied actions presented to configurators and supervisors?

## Answer

Capabilities belong to a ProjectAgentConfiguration, not to the reusable Agent profile or to individual ProjectAutomationRules. There is exactly one ProjectAgentConfiguration for an Agent-Project pair. It explicitly connects the Agent to the Project, owns that connection's rules, and carries the maximum capabilities available to the Agent's work in that Project. A rule contributes its event, filters, continuity policy, and contextual intent but no separate capability grant.

An Admin or project admin selects the connection's capabilities. Changes apply to future Triggers, including those resuming an existing AgentWork, while an execution already in progress keeps its capability snapshot. Dynamic activation or deactivation within an execution is outside the MVP. Deleting the ProjectAgentConfiguration deletes its rules and prevents future Triggers but preserves AgentWorks and published artifacts; reconnecting the same Agent may later resume related work under the new configuration.

Capabilities form an extensible, heterogeneous catalogue rather than one universal action enum. The MVP combines Yapir-native capabilities, generic Git access, and namespaced GitHub capabilities such as `github:read-issues`; another provider may expose a different catalogue because its artifact semantics need not match GitHub's. Future integrations, including user-added MCP servers, may contribute their own capabilities and configuration, but are outside this MVP.

The initial GitHub-first catalogue is:

- Read all GitHub Issues and their native conversations in the Project.
- Update the active GitHub Issue, including its fields and native conversation. The active Issue is the Issue carried by the Trigger or unambiguously related to its ChangeRequest; no arbitrary Issue identifier is accepted.
- Use Git for the whole Project repository. The Agent may clone, fetch, create commits, and push through a short-lived repository-scoped credential. Yapir directs it to an AgentWork branch, but only GitHub rules and branch protection constrain refs; the capability is deliberately not presented as `push code` or as branch-scoped security.
- Manage the active GitHub ChangeRequest: create it for the AgentWork, then read and update its title and description. It does not permit close, reopen, or merge, and provider-native ChangeRequest conversation is not Yapir's collaboration surface.
- Collaborate on Yapir Reviews for the active ChangeRequest: read every participant's Reviews and Comments, submit one grouped Review, reply to any Comment, and resolve only Comments authored by that Agent. The exact Review grouping and description contract belongs to the collaboration decision.

An AgentWork receives a stable, broad tool catalogue covering the actions its ProjectAgentConfiguration could support throughout that work. Tools remain present even before a later artifact such as a ChangeRequest exists, favoring provider prompt-cache reuse over repeatedly changing tool definitions. Proxied tools are pre-scoped by Yapir: for example, `updateIssue` has its target bound from execution context rather than accepting an arbitrary `issueId`. If no unambiguous target exists, the action performs no write and returns a structured unavailable result.

Configuration shows only capabilities supported by the Project's current provider connections; unsupported options are not displayed. If a previously configured capability later becomes unavailable because provider access or artifact state changed, Yapir refuses the action without side effects and exposes the reason in execution supervision. The detailed failure and recovery presentation belongs to the execution-control decision.

OpenAI and Anthropic explicitly invalidate prompt caches when tool definitions change, while Gemini's explicitly cached tools are immutable. Stable definitions therefore preserve caching; provider-specific tool-choice controls may reduce irrelevant calls, but Yapir's scoped execution boundary remains authoritative.

- https://platform.openai.com/docs/guides/prompt-caching
- https://platform.openai.com/docs/guides/function-calling#tool-choice
- https://docs.anthropic.com/en/docs/build-with-claude/prompt-caching#what-invalidates-the-cache
- https://cloud.google.com/vertex-ai/generative-ai/docs/reference/rest/v1/projects.locations.cachedContents
