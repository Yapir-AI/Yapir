import { asFunction, asValue, createContainer } from "./typed-container";
import type { CurrentUser } from "@/lib/current-user";
import { db } from "@/lib/db";
import { env } from "@/lib/env";
import { noteTemplateCreateOperation } from "@/lib/note-templates/note-template-create.operation";
import { noteTemplateDeleteOperation } from "@/lib/note-templates/note-template-delete.operation";
import { noteTemplateGetOperation } from "@/lib/note-templates/note-template-get.operation";
import { noteTemplateListOperation } from "@/lib/note-templates/note-template-list.operation";
import { noteTemplateUpdateOperation } from "@/lib/note-templates/note-template-update.operation";
import { gitConnectorListOperation } from "@/lib/git-connectors/git-connector-list.operation";
import { githubConnectorInstallationCallbackOperation } from "@/lib/git-connectors/github/github-connector-installation-callback.operation";
import { githubConnectorInstallationStartOperation } from "@/lib/git-connectors/github/github-connector-installation-start.operation";

export function createRequestContainer({
  currentUser,
}: {
  currentUser: CurrentUser;
  databaseConnectionString?: string;
}) {
  return createContainer({
    db: asValue(db),
    currentUser: asValue(currentUser),
    env: asValue(env),
    githubConnectorInstallationCallbackOperation: asFunction(
      githubConnectorInstallationCallbackOperation,
    ),
    githubConnectorInstallationStartOperation: asFunction(
      githubConnectorInstallationStartOperation,
    ),
    gitConnectorListOperation: asFunction(gitConnectorListOperation),
    noteTemplateCreateOperation: asFunction(noteTemplateCreateOperation),
    noteTemplateDeleteOperation: asFunction(noteTemplateDeleteOperation),
    noteTemplateGetOperation: asFunction(noteTemplateGetOperation),
    noteTemplateListOperation: asFunction(noteTemplateListOperation),
    noteTemplateUpdateOperation: asFunction(noteTemplateUpdateOperation),
  });
}

export type ApiContainer = ReturnType<typeof createRequestContainer>["cradle"];
