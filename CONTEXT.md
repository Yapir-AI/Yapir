# Yapir

An AI orchestration platform where Agents and Users collaborate on software delivery work.

## Language

### People and AI

**Agent**:
An Organization-owned AI profile with a stable identity, specialized system instructions, and model configuration, reusable unchanged across Projects. Project context, contextual tasks, and effective authorization remain outside the profile.
_Avoid_: Reviewer, bot, assistant

**AiProvider**:
A connection to an AI model provider account, carrying provider configuration and credentials that Agents use to perform work. Admin-managed and shared across Projects.
_Avoid_: ModelProvider, LlmProvider, AI account

**User**:
A person's identity (auth account); the human who collaborates with Agents on software delivery work.
_Avoid_: Member (as a standalone noun), account, profile

### Tenancy and access

**Organization**:
The implicit scope of a single-tenant Yapir instance; it owns the platform's shared resources (connectors, Agents, Projects, OpinionSources).
_Avoid_: Workspace, Group, Tenant, Team

**Admin**:
A User whose platform role grants access to all resources and settings.
_Avoid_: Owner, superuser

**ProjectAccess**:
A grant linking a User to a Project, carrying a project role: project admin (manages the Project — connects Agents, invites Users) or project member (participates in collaborative work). Platform Admins bypass ProjectAccess and access all Projects.
_Avoid_: Project membership (as a noun), permission, share

**ProjectAgentConfiguration**:
The unique Project-owned configuration linking one Agent to one Project; it grants that Agent a stable set of capabilities from Yapir, Git, and the Project's connected providers, and owns the ProjectAutomationRules that can start or resume its work. Capability changes apply to future Triggers, including those resuming existing AgentWorks.
_Avoid_: Agent connection, ProjectAgentAccess, Agent permissions

### Projects and git

**Project**:
Yapir's record of a git repository made available for collaborative work through one GitConnector; mirrors the external repository through its origin id, path, and URL.
_Avoid_: Repository, Repo (reserved for the external git repo), Workspace

**GitConnector**:
A connection to a git provider account that grants Yapir access to repositories and carries provider-specific connection metadata. It is shared across many Projects and Admin-managed.
_Avoid_: GitAccount, GitIntegration, GitCredential

**ChangeRequest**:
A request to merge one branch into another, sourced from a git provider (a GitLab merge request or a GitHub pull request); carries branches, author, and URL. When an Agent creates it through Yapir, it records the AgentWork that produced it, and other Agents' AgentWorks may later become related to it.
_Avoid_: PullRequest, MergeRequest (reserved for provider vocabulary), Change

**Issue**:
An externally canonical unit of requested work that may initiate an AgentWork. Yapir references the provider's Issue rather than maintaining its own copy.
_Avoid_: Ticket, WorkItem, Yapir Issue

### Orchestration

**ProjectAutomationRule**:
A rule owned by a ProjectAgentConfiguration that describes when and with what contextual intent its Agent starts or resumes work. Each matching rule acts independently; capabilities belong to the parent ProjectAgentConfiguration rather than to individual rules.
_Avoid_: Workflow, Agent connection, AutomationRule

**AgentWork**:
One Agent's permanent correlation identity for one explicitly related scope of work in a Project. It owns one Sandbox at a time and may relate to multiple Issues and ChangeRequests in that scope, although a ChangeRequest need not relate to an Issue. It is the correlation identity recorded by the ChangeRequests and CommentSets the Agent produces. For one Agent, an Issue or ChangeRequest selects at most one AgentWork for automatic related continuity; independent work may retain the same artifact only as provenance. AgentWork has no completion lifecycle, and different Agents working on the same artifacts have separate AgentWorks.
_Avoid_: Collaboration, WorkItem, AgentSession, AgentWorkspace

**Trigger**:
An ephemeral occurrence that starts or resumes an AgentWork with event-specific context after an event matches a ProjectAutomationRule. It is running until the Agent runtime returns normally, making it completed, or a technical interruption prevents that return, making it failed; either outcome leaves the permanent AgentWork unchanged. Repeated executions are runtime behavior, not durable domain objects.
_Avoid_: Activation, Run, Execution, AutomationRule

### Collaboration

**CommentSet**:
An immutable, atomic publication on a ChangeRequest, authored by one Agent or User at the commit on which they intervene. It contains an ordered, non-empty combination of a narrative description, new Comments or replies across multiple threads, and resolution or reopening actions on existing threads. The whole CommentSet is accepted or rejected together. Every intervention, including a single Comment, reply, or thread-state change, is submitted as one CommentSet and produces one grouped collaboration event. It has no structured recipient. Its description is not itself replyable, and its submitted content cannot be edited or deleted. Its new content inherits its author. An Agent-authored CommentSet records the AgentWork that produced it. A CommentSet becomes old when the ChangeRequest head advances beyond its commit, independently of any thread's resolution state. A review is a way of using a CommentSet, not a separate durable object or event. CommentSets remain canonical in Yapir and are not published to the git provider.
_Avoid_: Review, ReviewRun, CommentBatch

**Comment**:
A single remark contained in a CommentSet. A root Comment starts a thread and may be general to the ChangeRequest or anchored to a file and line at the CommentSet's commit; replies reference that root, inherit its context and anchor, and form a flat chronological thread. Resolution belongs to the whole thread and only the root Comment's author may resolve or reopen it.
_Avoid_: Note, annotation

**Sandbox**:
An isolated working environment owned by an AgentWork whose workspace and private Agent context persist across Triggers during its operational retention period. After expiry, a fresh Sandbox and private session may continue the same permanent AgentWork.
_Avoid_: Runner, worker, container (an implementation detail)

### Opinions

**Opinion**:
The Organization's or Project's prescriptive stance on how code should be, which Agents review against. Granularity is deliberately undecided (may be expressed as prose or as discrete rules).
_Avoid_: Guideline, Standard, Instruction, Convention

**OpinionSource**:
A location Yapir reads Opinions from; pluggable and heterogeneous (in-repo docs such as AGENTS.md / CLAUDE.md / ADRs, the Yapir registry, a centralized enterprise registry). Opinions are scoped either org-wide (enterprise) or per-Project.
_Avoid_: Provider (reserved for git and AI providers)
