Type: grilling
Status: resolved
Blocked by:

## Question

For the GitHub-first MVP, which issue and git-provider artifacts and events remain externally canonical, what state and conversation are canonical in Yapir, and what minimal links or status signals cross each boundary in either direction?

## Answer

GitHub remains canonical for Issues and their native conversation, repositories, branches, commits, ChangeRequests, and merge state. Yapir keeps references to these artifacts rather than durable local twins, consumes the useful GitHub events that concern them, and reads current external state from GitHub when needed. Provider event identifiers and delivery metadata may be retained only for technical concerns such as deduplication, correlation, and audit.

Yapir is canonical for Agent configuration, automation configuration, AgentWork continuity, Reviews, ReviewNotes, Comments, replies, and resolutions. A Review is tied to the exact commit it examined; once the ChangeRequest head differs, that Review is considered old. A later Agent Review can cover the newer commit and can continue or resolve earlier Yapir discussions.

Agents interact with external artifacts through tools supplied by the capabilities on their ProjectAgentConfiguration. Capabilities may come from Yapir, generic Git access, or a specific provider such as GitHub rather than pretending every provider has one universal action model. Yapir pre-scopes proxied tools to the relevant artifacts, validates each request, and performs provider API writes through the GitConnector, so an Agent never receives the connector's durable API credential.

Code work is the exception that requires ordinary Git access. A Sandbox may receive a short-lived GitHub App installation token scoped to its Project repository so it can clone, fetch, and push. Yapir directs the Agent to its AgentWork branch, but GitHub tokens cannot enforce a dynamic per-AgentWork branch restriction. Branch protection is configured and enforced by Users in GitHub; Yapir neither manages it nor claims that its branch convention is a security boundary.

Yapir listens to useful GitHub changes, including Issue creation and updates, labels, assignments, native Issue comments, ChangeRequest lifecycle and head changes, pushes, and native GitHub review activity when an automation may react to them. These occurrences create or resume work through Triggers; they do not become a second canonical event history in Yapir.

After each completed Yapir Review, Yapir adds an ordinary comment to the GitHub ChangeRequest containing the reviewed commit, an optional short factual summary, and a link to the canonical Review in Yapir. It publishes no GitHub Review, verdict, or Check. Each Review gets its own comment because it covers a specific commit.

The MVP does not merge from Yapir. A User follows the external link and merges in GitHub. A future human-only merge control in Yapir remains possible but is outside this MVP boundary.

GitHub App installation tokens support repository-scoped HTTPS Git access and expire after one hour; their scope is repository- and permission-based rather than branch-based. GitHub rulesets and protected branches remain the provider mechanism for restricting sensitive refs:

- https://docs.github.com/en/apps/creating-github-apps/authenticating-with-a-github-app/authenticating-as-a-github-app-installation
- https://docs.github.com/en/apps/creating-github-apps/registering-a-github-app/choosing-permissions-for-a-github-app#choosing-permissions-for-git-access
- https://docs.github.com/en/repositories/configuring-branches-and-merges-in-your-repository/managing-rulesets/about-rulesets
