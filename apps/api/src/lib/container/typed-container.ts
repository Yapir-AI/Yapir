import { asFunction, asValue, createContainer } from "@/lib/container/index";
import type { CurrentUser } from "@/lib/current-user";
import { db } from "@/lib/db";
import { noteTemplateCreateOperation } from "@/lib/note-templates/note-template-create.operation";
import { noteTemplateDeleteOperation } from "@/lib/note-templates/note-template-delete.operation";
import { noteTemplateGetOperation } from "@/lib/note-templates/note-template-get.operation";
import { noteTemplateListOperation } from "@/lib/note-templates/note-template-list.operation";
import { noteTemplateUpdateOperation } from "@/lib/note-templates/note-template-update.operation";

const devCurrentUser = {
  id: "dev-user",
  name: "Dev User",
  email: "dev@yapir.local",
  emailVerified: true,
  image: null,
  createdAt: new Date(),
  updatedAt: new Date(),
  role: "admin",
  banned: false,
  banReason: null,
  banExpires: null,
} satisfies CurrentUser;

export const container = createContainer({
  db: asValue(db),
  // TODO: replace this with Better Auth + request-scoped container wiring.
  currentUser: asValue(devCurrentUser),
  noteTemplateCreateOperation: asFunction(noteTemplateCreateOperation),
  noteTemplateDeleteOperation: asFunction(noteTemplateDeleteOperation),
  noteTemplateGetOperation: asFunction(noteTemplateGetOperation),
  noteTemplateListOperation: asFunction(noteTemplateListOperation),
  noteTemplateUpdateOperation: asFunction(noteTemplateUpdateOperation),
});
