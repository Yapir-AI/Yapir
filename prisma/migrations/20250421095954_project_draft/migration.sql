/*
  Warnings:

  - A unique constraint covering the columns `[url,providerType]` on the table `GitProject` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "GitProject" ADD COLUMN     "ignoreDraft" BOOLEAN NOT NULL DEFAULT true;

-- CreateIndex
CREATE UNIQUE INDEX "GitProject_url_providerType_key" ON "GitProject"("url", "providerType");

ALTER TABLE "Comment"
    DROP COLUMN "path",
    ADD COLUMN "fileId" UUID NOT NULL default gen_random_uuid();
ALTER TABLE "Comment"
    ALTER COLUMN  "fileId" DROP DEFAULT;
