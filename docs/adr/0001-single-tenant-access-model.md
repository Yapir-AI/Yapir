# Single-tenant enterprise deployment with two-tier roles

Yapir prod targets an enterprise, self-hosted posture (open-source-bound, one deployment per customer), not a multi-tenant SaaS. So the instance itself is the Organization — there is no Organization entity/table in v1; shared resources (`GitConnector`, `AiProvider`, `Agent`, `Project`) are global to the instance.

Access is two-tier. **Platform roles** on a `User`: `admin` (persona: SRE / AI Lead / Architects — creates and manages connectors, AI providers, agents) and `member`. **Project roles** via a `ProjectAccess` grant (User ↔ Project): `project admin` (persona: Lead / EM — connects Agents to the Project, invites Users) and `project member` (participates in reviews). Platform Admins bypass `ProjectAccess` and reach every Project.

## Considered options

- **Multi-tenant SaaS** (many Organizations per instance). Rejected: the product is single-tenant enterprise / open-source; multi-tenancy would add an Organization entity, resource scoping, and billing boundaries we don't need yet. If a hosted multi-tenant offering is pursued later, the Organization entity becomes the natural seam.
- **Binary `ProjectAccess`** (access / no access). Rejected: a per-project admin role is needed so a Lead/EM can connect Agents and invite Users to their Project without platform-admin privileges.

## Consequences

- No Organization entity in v1; resources are unscoped (instance-global). A future multi-tenant migration must introduce `Organization` and scope every shared resource — non-trivial.
- No nested groups and no project-level role inheritance (GitLab-style); the two project roles are flat. Adding finer project roles (viewer/reviewer/éditeur) is additive, not breaking.
- `Member` is a role value, never a standalone noun for a person — the person is always a `User`. "project admin" / "project member" are role values under `ProjectAccess`, distinct from platform `Admin`.
