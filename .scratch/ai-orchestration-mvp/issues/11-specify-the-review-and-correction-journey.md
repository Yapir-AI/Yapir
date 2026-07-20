Type: grilling
Status: resolved
Blocked by: 05, 06, 07, 10

## Question

What exact product behavior activates a different Agent to evaluate a ChangeRequest in Yapir, makes its CommentSet actionable by the implementation Agent, supports repeated Agent or User CommentSets and pushes, and ends with a ChangeRequest ready for human merge?

## Answer

A GitHub `pull_request.opened` webhook emits the ordinary `ChangeRequest created` event, including after Yapir already recorded an Agent-submitted ChangeRequest. The submission action itself does not emit it. Every matching ProjectAutomationRule acts independently and starts or resumes its Agent's related AgentWork according to its continuity policy. Yapir has no special evaluation handoff or reviewer assignment; separation exists only when the Project's rules connect different Agents. If no evaluation rule matches, no evaluation occurs.

An evaluation rule is expected to end each execution by publishing exactly one non-empty CommentSet about the ChangeRequest commit the Agent evaluated. Even when it finds nothing to challenge, the CommentSet contains at least a short narrative description saying so. It may otherwise combine that description with root Comments, replies, and actions on the evaluating Agent's own threads, but it carries no structured verdict, severity, recipient, or readiness signal. An execution that publishes nothing has not produced this expected product result, but still completes technically if the Agent runtime returns normally; Yapir does not verify the rule's intent or recover the missing publication.

The resulting `CommentSet submitted` event remains recipient-free and has no configurable filters. Rules belonging to the authoring Agent are intrinsically ineligible, while rules belonging to every other Agent may independently resume related work; User-authored CommentSets remain eligible for every configured Agent. The resumed Agent receives its rule instruction and discovers current collaboration state through pre-scoped tools rather than receiving the complete triggering CommentSet in its prompt. Yapir adds no broader Agent-to-Agent protocol or loop guardrail.

The implementing Agent may reply, push corrections to its stable AgentWork branch, do both, or complete silently. Yapir does not enforce a correction output. It cannot resolve or reopen threads rooted by the evaluating Agent or a User because thread state remains author-owned. A User may likewise add CommentSets or push code at any point, subject to GitHub access.

Every push to the ChangeRequest source branch, whether made by an Agent or a User, is an ordinary event that can resume the evaluating Agent's related AgentWork through a matching rule. On reevaluation, that Agent inspects the new head, may reply, resolves or reopens its own threads as appropriate, adds any new findings, and publishes another CommentSet with at least a narrative description. Further CommentSets and pushes repeat the same event-driven cycle without moving the ChangeRequest through a Yapir-managed workflow.

On the specified happy path, the ChangeRequest head remains stable during each intervention. The author supplies the commit actually evaluated when publishing the CommentSet, and Yapir records that commit so a later push makes the publication old. Concurrent pushes, out-of-order evaluations, and product guarantees for validation, cancellation, coalescing, deduplication, or recovery are deliberately unspecified for the MVP and remain part of the map's runtime scheduling and concurrency fog.

Yapir creates no `ready for merge` state and imposes no quality gate. Evaluation publications, open or resolved conversations, oldness, and GitHub's mergeability are visible information for the User's judgment, not merge blockers. The User may merge on GitHub whenever GitHub permits it, including with absent or outstanding evaluation feedback. GitHub remains canonical for the resulting ChangeRequest status; this journey neither modifies the related Issue automatically nor defines post-merge automation.
