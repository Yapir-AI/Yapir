Type: grilling
Status: resolved
Blocked by: 10, 11

## Question

How does a User discover ChangeRequests that need their attention, distinguish unread collaboration from actionable review requests, and receive useful notifications without introducing a work-supervision dashboard or mirroring Yapir collaboration into GitHub?

## Answer

The MVP rejects the premise that Yapir must determine which ChangeRequests need a User's attention. It has no personal inbox, structured review request, unread state, per-User read marker, in-app notification center, or email notification. A CommentSet remains recipient-free, and Yapir does not infer an actionable obligation from authorship, participation, an unresolved conversation, or recent activity. Users decide what warrants attention from factual information; the product does not label work as `for me`, `needs attention`, or unread.

Discovery happens through a collective ChangeRequest index inside each Project, not through a cross-Project or Agent-work supervision dashboard. The default view contains open ChangeRequests, with merged and closed history available through provider-state views. Provider state is the only MVP filter: there is no text search or filtering by author, participant, or personal relevance.

The index includes every ChangeRequest Yapir learns about from GitHub events after the Project is connected, regardless of whether an Agent, a User, or an external GitHub interaction created it. There is no initial import or reconciliation. A pre-existing GitHub pull request that receives a later observed event becomes known with its current metadata; one that remains untouched after connection does not appear. The merged and closed views consequently contain only ChangeRequests that Yapir first learned about through a post-connection event and later observed or learned to have those states.

Rows are ordered by latest known activity across both systems. GitHub creation, pushes, and provider state changes count as activity, as does every Yapir CommentSet publication. Each row factually summarizes the title, source and target branches, author, GitHub state, latest activity, known participants, and the number of unresolved conversations. That count includes every unresolved thread, including one attached to an older commit; it is context rather than an action badge.

Selecting a row opens Yapir's collaborative ChangeRequest page. That page retains an explicit link to GitHub, where merge and other provider-canonical management remain. Users discover subsequent activity by returning to the Project index or ChangeRequest page; the MVP sends no separate notification and makes no claim that a User has seen or should act on it.
