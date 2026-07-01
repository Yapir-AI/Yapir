# Yapir

An AI-powered code review platform where Agents and Users collaborate to review code changes against the Organization's and Project's Opinions.

## Language

### People and AI

**Agent**:
An AI profile that performs code reviews on behalf of the project.
_Avoid_: Reviewer, bot, assistant

**User**:
A person's identity (auth account); the human who collaborates on reviews.
_Avoid_: Member (as a standalone noun), account, profile

### Tenancy and access

**Organization**:
The implicit scope of a single-tenant Yapir instance; it owns the platform's shared resources (connectors, Agents, Projects, OpinionSources).
_Avoid_: Workspace, Group, Tenant, Team

**Admin**:
A User whose platform role grants access to all resources and settings.
_Avoid_: Owner, superuser

**ProjectAccess**:
A grant linking a User to a Project, carrying a project role: project admin (manages the Project — connects Agents, invites Users) or project member (participates in reviews). Platform Admins bypass ProjectAccess and access all Projects.
_Avoid_: Project membership (as a noun), permission, share

### Projects and git

**Project**:
Yapir's record of a git repository put under review; mirrors a repo on a git provider via an origin id and URL.
_Avoid_: Repository, Repo (reserved for the external git repo), Workspace

**GitConnector**:
A connection to a git provider account, carrying the provider type and credentials; shared across many Projects. Admin-managed.
_Avoid_: GitAccount, GitIntegration, GitCredential

**ChangeRequest**:
A request to merge one branch into another, sourced from a git provider (a GitLab merge request or a GitHub pull request); carries branches, author, and URL.
_Avoid_: PullRequest, MergeRequest (reserved for provider vocabulary), Change

### Reviews

**Review**:
One Agent's pass over a ChangeRequest at a given commit, executed in a Sandbox and producing review output. A ChangeRequest accumulates many Reviews over time (on open, on push, on manual re-review); each Review runs exactly one Agent.
_Avoid_: ReviewRun, Pass, Assessment

**Comment**:
A single review remark, authored by an Agent or a User; it may be anchored to a file and line at a commit sha, reply to another Comment to form a thread, and be resolved. An agent Comment records the Review that produced it and carries a severity; the sha lets anchored Comments be marked outdated once the branch advances.
_Avoid_: Note (see ReviewNote), annotation

**Sandbox**:
An ephemeral, isolated environment where an Agent clones the repo and runs a Review.
_Avoid_: Runner, worker, container (an implementation detail)

**ReviewNote**:
A narrative synthesis produced by a Review beyond inline Comments (e.g. a technical summary or a general assessment).
_Avoid_: Summary, report

**NoteTemplate**:
A reusable, configurable template (title, tag, prompt) that instructs an Agent to produce a ReviewNote; may be published externally depending on the delivery mode.
_Avoid_: NoteDefinition

### Opinions

**Opinion**:
The Organization's or Project's prescriptive stance on how code should be, which Agents review against. Granularity is deliberately undecided (may be expressed as prose or as discrete rules).
_Avoid_: Guideline, Standard, Instruction, Convention

**OpinionSource**:
A location Yapir reads Opinions from; pluggable and heterogeneous (in-repo docs such as AGENTS.md / CLAUDE.md / ADRs, the Yapir registry, a centralized enterprise registry). Opinions are scoped either org-wide (enterprise) or per-Project.
_Avoid_: Provider (reserved for git and AI providers)
