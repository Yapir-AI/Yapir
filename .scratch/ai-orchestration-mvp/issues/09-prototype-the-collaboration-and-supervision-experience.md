Type: prototype
Status: resolved
Blocked by: 05, 07

## Question

What is the simplest concrete Yapir experience that lets a User find active collaborative work, understand Agent activity and blockers, inspect the shared CommentSet history, compose grouped feedback, and relaunch or interrupt an Agent without turning Yapir into an issue tracker or git provider?

## Answer

The validated direction is prototype variant D: a familiar ChangeRequest page modeled on the interaction language of a GitHub pull request. The ChangeRequest, not AgentWork or operational supervision, is the visible center. It presents its description, commits, changed files, participants, review state, linked external Issue, and chronological collaboration around the code. GitHub remains the destination for merge, branch settings, and Issue management.

`CommentSet` remains Yapir's durable publication primitive but never appears in User-facing vocabulary. Users see comments, replies, conversations, and reviews. They may accumulate inline comments on code snippets and submit them together through the familiar `Finish your review` interaction; Yapir atomically records that submission as one CommentSet internally. A ChangeRequest description and later narrative feedback use the same underlying primitive without exposing it.

The MVP does not add a work-supervision dashboard, an Agent-centric cockpit, or direct relaunch and interruption controls. Agent activity appears only where it naturally changes the shared ChangeRequest history, such as opening the ChangeRequest, pushing commits, commenting, replying, or requesting clarification. The separate question of how Users discover ChangeRequests needing attention is left to [Define ChangeRequest discovery and notifications](14-define-changerequest-discovery-and-notifications.md).

Prototype asset: branch `prototype/collaboration-supervision` at commit `0555742` (`apps/web/src/routes/_authenticated/prototype/collaboration-supervision.tsx`). After checking out that branch, the validated variant is available at `/prototype/collaboration-supervision?variant=D`; variants A through C preserve the rejected work inbox, Agent cockpit, and supervision-oriented ChangeRequest directions.
