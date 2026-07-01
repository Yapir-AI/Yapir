# Operations as application logic atoms

Yapir API routes stay thin: they handle HTTP concerns, validation, status codes, and calling an Operation. An Operation is the atom of application logic: it owns authorization, orchestration, transaction boundaries, audit fields, and direct database access when no reusable abstraction is needed. Services are optional reusable helpers introduced only when multiple Operations need the same behavior; there is no mandatory service-per-entity layer.
