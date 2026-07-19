Type: grilling
Status: resolved
Blocked by: 03, 04, 05, 06, 07

## Question

What exact product behavior takes a matching ready issue through Agent implementation, branch pushes, ChangeRequest creation, shared Yapir collaboration, and readiness for evaluation, including human CommentSets or code changes during that journey?

## Answer

Yapir has no intrinsic `ready` Issue state and no separate notion of readiness for evaluation. An external Issue enters this journey when an event and the Issue's current state match a ProjectAutomationRule's configured event-specific filters. Every matching rule acts independently, so one Issue may deliberately produce competing implementations from different Agents, models, instructions, or model parameters. The MVP does not offer a configurable execution harness.

Each matching rule creates or resumes its own AgentWork according to its continuity policy. Yapir supplies the Issue context, the rule's contextual instruction, and the ProjectAgentConfiguration's capability snapshot, but imposes no durable planning, coding, submission, or handoff phases. The Agent decides how to perform the implementation within those boundaries. An execution that does not produce the expected result adds no special business state and does not complete or otherwise change the permanent AgentWork.

The implementing Agent uses one stable AgentWork branch throughout the journey and may check out, commit, and push as often as needed. A User with sufficient GitHub access may also push to that branch. The branch is a correlation convention and working location, not a security boundary; GitHub permissions and branch protection remain authoritative. Before a ChangeRequest exists, User intervention occurs through GitHub Issue activity or Git actions. Such activity reaches an Agent only when its resulting event matches another ProjectAutomationRule, which may then resume related work.

When the implementation is complete, the Agent explicitly invokes a submission action whose final tool name and signature remain an implementation decision. The action requires a pushed AgentWork branch that differs from the Project's current default target branch and has no conflicting ChangeRequest. It creates an open, non-draft GitHub pull request using the supplied description as the provider-canonical ChangeRequest description, then records its reference in Yapir and relates it to the producing AgentWork and the Issue already related to that work. It does not create a CommentSet or automatically modify the source Issue.

The product may initially tolerate a crash between GitHub creation and Yapir acknowledgement. A retry can recover by finding the pull request whose source and target branches exactly match the intended submission and relating it rather than creating a duplicate. Stronger cross-system atomicity and rare cases where an Agent simply omits the expected submission are not product concerns for this MVP.

Successful submission has no additional Yapir readiness state, reviewer assignment, or special Agent-to-Agent handoff. The newly known ChangeRequest is immediately available in Yapir, and its creation is an ordinary event that every matching ProjectAutomationRule may handle independently. This event may therefore activate evaluation or other work, including work by the producing Agent, only when configured to do so.

After submission, Users and Agents collaborate through ordinary CommentSets and code pushes. A CommentSet has no structured recipient; its single `CommentSet submitted` event may match rules that start or resume whichever Agents are configured to react. A later push advances the ChangeRequest head and makes CommentSets on earlier commits old without changing thread resolution. The resulting ChangeRequest head-change or push event may likewise resume each Agent's related AgentWork when a matching rule requests related continuity. The ChangeRequest remains open without moving through a Yapir-managed workflow state.
