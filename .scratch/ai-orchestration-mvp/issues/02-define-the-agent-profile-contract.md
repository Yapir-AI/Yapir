Type: grilling
Status: resolved
Blocked by:

## Question

What stable identity, model configuration, system instructions, permissions, ownership, and reuse behavior belong to an Organization-owned specialized Agent profile, and what must remain outside the Agent because it varies by Project or trigger?

## Answer

An Agent is an Organization-owned specialized profile. Its MVP contract contains a stable identity, name, description, visual identity, system instructions, one AiProvider, one model, and that model's inference parameters. The system instructions are the Agent's stable persona: its expertise, role, behavior, and working method.

An Admin creates and modifies Agent profiles. An Admin or project admin connects an existing Agent to a Project by creating a ProjectAutomationRule that targets it; there is no separate connection. The same Agent profile is reused across Projects without Project-specific variants.

Project-specific context remains outside the profile. At execution time, the Agent receives relevant repository resources such as AGENTS.md, skills, and Opinions, while the matching ProjectAutomationRule supplies the contextual task. Yapir preserves the distinction between stable system instructions and contextual task instructions, but does not detect, reject, or semantically reconcile contradictions between them; coherent configuration remains the configurator's responsibility.

The MVP Agent profile contains neither permissions nor tools. Effective authorization belongs to the ProjectAutomationRule and Trigger execution context. This permits narrow grants such as reading the Issue that caused a Trigger without granting standing access to all Issues. Tool availability belongs to a future harness contract rather than the Agent profile.

Multiple model configurations, model routing and fallback, a configurable execution harness, and Organization-wide knowledge attached to an Agent remain outside the MVP contract.
