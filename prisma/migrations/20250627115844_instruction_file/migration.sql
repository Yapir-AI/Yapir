-- AlterTable
ALTER TABLE "GitProject" ADD COLUMN     "instructionFile" TEXT;
ALTER TABLE "GitProject" ADD COLUMN     "customInstructionFile" BOOLEAN NOT NULL DEFAULT false;
