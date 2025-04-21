/*
  Warnings:

  - A unique constraint covering the columns `[url,providerType]` on the table `GitProject` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "GitProject" ADD COLUMN     "ignoreDraft" BOOLEAN NOT NULL DEFAULT true;

-- CreateIndex
CREATE UNIQUE INDEX "GitProject_url_providerType_key" ON "GitProject"("url", "providerType");
