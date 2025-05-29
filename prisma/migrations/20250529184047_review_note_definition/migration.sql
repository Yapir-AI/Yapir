/*
  Warnings:

  - You are about to drop the column `type` on the `ReviewNote` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[reviewId,reviewerId,noteDefinitionId]` on the table `ReviewNote` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `noteDefinitionId` to the `ReviewNote` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "ReviewNote_reviewId_reviewerId_type_key";

-- AlterTable
ALTER TABLE "ReviewNote" DROP COLUMN "type",
ADD COLUMN     "noteDefinitionId" UUID NOT NULL;

-- CreateTable
CREATE TABLE "NoteDefinition" (
    "id" UUID NOT NULL,
    "title" TEXT NOT NULL,
    "tag" TEXT NOT NULL,
    "systemPrompt" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "NoteDefinition_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_NoteDefinitionToReviewer" (
    "A" UUID NOT NULL,
    "B" UUID NOT NULL,

    CONSTRAINT "_NoteDefinitionToReviewer_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateIndex
CREATE UNIQUE INDEX "NoteDefinition_tag_key" ON "NoteDefinition"("tag");

-- CreateIndex
CREATE INDEX "_NoteDefinitionToReviewer_B_index" ON "_NoteDefinitionToReviewer"("B");

-- CreateIndex
CREATE UNIQUE INDEX "ReviewNote_reviewId_reviewerId_noteDefinitionId_key" ON "ReviewNote"("reviewId", "reviewerId", "noteDefinitionId");

-- AddForeignKey
ALTER TABLE "ReviewNote" ADD CONSTRAINT "ReviewNote_noteDefinitionId_fkey" FOREIGN KEY ("noteDefinitionId") REFERENCES "NoteDefinition"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_NoteDefinitionToReviewer" ADD CONSTRAINT "_NoteDefinitionToReviewer_A_fkey" FOREIGN KEY ("A") REFERENCES "NoteDefinition"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_NoteDefinitionToReviewer" ADD CONSTRAINT "_NoteDefinitionToReviewer_B_fkey" FOREIGN KEY ("B") REFERENCES "Reviewer"("id") ON DELETE CASCADE ON UPDATE CASCADE;
