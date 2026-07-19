Type: grilling
Status: resolved
Blocked by: 01, 03

## Question

How do Agents and Users collaborate in Yapir around a ChangeRequest; how does one submitted Review group a description and any number of Comments into one event; how do replies and author-owned resolution behave; and does this grouped description fully replace ReviewNote?

## Answer

Agents and Users collaborate through the same Yapir-owned primitives. `CommentSet` is the only durable publication unit: `Review`, `ReviewNote`, and `NoteTemplate` are removed as distinct product objects. A review is a way an Agent or User uses a CommentSet, not a durable type, verdict, or separate event. Agent authorship differs only by recording the AgentWork that produced the CommentSet.

Each CommentSet is an immutable, ordered, non-empty, all-or-nothing submission by one author on one ChangeRequest at the commit on which the author intervenes. It may combine a narrative description, any number of root Comments and replies across multiple threads, and resolution or reopening actions on existing threads. A submission containing only a description or only thread-state actions is valid. Its content has no structured recipient, verdict, or severity, and Yapir stores no draft. Submitted descriptions and Comments cannot be edited or deleted; corrections are new CommentSets.

Every intervention, including one Comment, one reply, or one thread-state action, is submitted through a CommentSet. One successful submission emits exactly one `CommentSet submitted` event containing the complete group; it never fans out into per-Comment or per-resolution events. This uniform grouped event replaces separate Review and Comment events.

A root Comment either concerns the ChangeRequest generally or anchors to one file and line at the CommentSet's commit. Replies always reference the root, inherit its context and anchor, and form one flat chronological thread. A CommentSet description is not itself replyable. Resolution belongs to the whole thread: only the root Comment's author may resolve or reopen it, including the same Agent acting through a later AgentWork. One CommentSet may change several author-owned threads atomically.

Every CommentSet records the ChangeRequest commit on which its author intervened. It becomes old when the ChangeRequest head advances beyond that commit, while its threads remain usable. Oldness and resolution are independent: an old thread may remain open, and a resolved thread may later become old. Concurrent head changes during an intervention are not specified for the MVP.

CommentSets and their collaboration history remain canonical only in Yapir. Yapir creates and links the ChangeRequest on GitHub but does not publish CommentSets, summaries, review verdicts, checks, or CommentSet links back to GitHub.
