/*
  Warnings:

  - You are about to drop the column `reviewerId` on the `Review` table. All the data in the column will be lost.
  - Added the required column `reviewerId` to the `Comment` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Review" DROP CONSTRAINT "Review_reviewerId_fkey";

-- AlterTable
ALTER TABLE "Comment" ADD COLUMN     "reviewerId" UUID NOT NULL;

-- AlterTable
ALTER TABLE "Review" DROP COLUMN "reviewerId";

-- CreateTable
CREATE TABLE "_ReviewToReviewer" (
    "A" UUID NOT NULL,
    "B" UUID NOT NULL,

    CONSTRAINT "_ReviewToReviewer_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateIndex
CREATE INDEX "_ReviewToReviewer_B_index" ON "_ReviewToReviewer"("B");

-- AddForeignKey
ALTER TABLE "Comment" ADD CONSTRAINT "Comment_reviewerId_fkey" FOREIGN KEY ("reviewerId") REFERENCES "Reviewer"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ReviewToReviewer" ADD CONSTRAINT "_ReviewToReviewer_A_fkey" FOREIGN KEY ("A") REFERENCES "Review"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ReviewToReviewer" ADD CONSTRAINT "_ReviewToReviewer_B_fkey" FOREIGN KEY ("B") REFERENCES "Reviewer"("id") ON DELETE CASCADE ON UPDATE CASCADE;
