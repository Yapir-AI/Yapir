-- AlterTable
ALTER TABLE "Reviewer" ADD COLUMN     "systemPrompt" TEXT,
ADD COLUMN     "systemPromptEnabled" BOOLEAN NOT NULL DEFAULT false;
