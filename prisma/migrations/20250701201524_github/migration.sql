-- AlterEnum
ALTER TYPE "GitProviderType" ADD VALUE 'GITHUB';

-- AlterTable
ALTER TABLE "GitProject" ADD COLUMN     "customInstructionFile" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "instructionFile" TEXT;
