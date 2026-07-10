import { asFunction, asValue, createContainer } from "@/lib/container";
import type { CurrentUser } from "@/lib/current-user";
import { db } from "@/lib/db";
import { noteTemplateCreateOperation } from "@/lib/note-templates/note-template-create.operation";
import { noteTemplateDeleteOperation } from "@/lib/note-templates/note-template-delete.operation";
import { noteTemplateGetOperation } from "@/lib/note-templates/note-template-get.operation";
import { noteTemplateListOperation } from "@/lib/note-templates/note-template-list.operation";
import { noteTemplateUpdateOperation } from "@/lib/note-templates/note-template-update.operation";

export function createRequestContainer({
  currentUser,
}: {
  currentUser: CurrentUser;
}) {
  return createContainer({
    db: asValue(db),
    currentUser: asValue(currentUser),
    noteTemplateCreateOperation: asFunction(noteTemplateCreateOperation),
    noteTemplateDeleteOperation: asFunction(noteTemplateDeleteOperation),
    noteTemplateGetOperation: asFunction(noteTemplateGetOperation),
    noteTemplateListOperation: asFunction(noteTemplateListOperation),
    noteTemplateUpdateOperation: asFunction(noteTemplateUpdateOperation),
  });
}

export type ApiContainer = ReturnType<typeof createRequestContainer>["cradle"];
