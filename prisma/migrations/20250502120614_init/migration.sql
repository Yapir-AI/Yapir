-- CreateEnum
CREATE TYPE "GitProviderType" AS ENUM ('GITLAB');

-- CreateEnum
CREATE TYPE "AiProviderType" AS ENUM ('ANTHROPIC', 'OPENAI', 'OPENAI_LIKE', 'OLLAMA', 'MISTRAL');

-- CreateEnum
CREATE TYPE "ReviewStatus" AS ENUM ('REVIEWED', 'PENDING', 'ERROR');

-- CreateEnum
CREATE TYPE "CommentLocation" AS ENUM ('OLD', 'NEW');

-- CreateTable
CREATE TABLE "user" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "emailVerified" BOOLEAN NOT NULL,
    "image" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "user_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "session" (
    "id" TEXT NOT NULL,
    "expiresAt" TIMESTAMP(3) NOT NULL,
    "token" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "ipAddress" TEXT,
    "userAgent" TEXT,
    "userId" TEXT NOT NULL,

    CONSTRAINT "session_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "account" (
    "id" TEXT NOT NULL,
    "accountId" TEXT NOT NULL,
    "providerId" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "accessToken" TEXT,
    "refreshToken" TEXT,
    "idToken" TEXT,
    "accessTokenExpiresAt" TIMESTAMP(3),
    "refreshTokenExpiresAt" TIMESTAMP(3),
    "scope" TEXT,
    "password" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "account_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "verification" (
    "id" TEXT NOT NULL,
    "identifier" TEXT NOT NULL,
    "value" TEXT NOT NULL,
    "expiresAt" TIMESTAMP(3) NOT NULL,
    "createdAt" TIMESTAMP(3),
    "updatedAt" TIMESTAMP(3),

    CONSTRAINT "verification_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "GitProject" (
    "id" UUID NOT NULL,
    "originId" TEXT NOT NULL,
    "url" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "fullName" TEXT NOT NULL,
    "providerType" "GitProviderType" NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "ignoreDraft" BOOLEAN NOT NULL DEFAULT true,
    "ignoreList" TEXT,
    "ignorePattern" TEXT,
    "connectorId" UUID NOT NULL,

    CONSTRAINT "GitProject_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "GitConnector" (
    "id" UUID NOT NULL,
    "type" "GitProviderType" NOT NULL,
    "config" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "GitConnector_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "AiProvider" (
    "id" UUID NOT NULL,
    "type" "AiProviderType" NOT NULL,
    "baseUrl" TEXT,
    "apiKey" TEXT,
    "model" TEXT NOT NULL,

    CONSTRAINT "AiProvider_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "MergeRequest" (
    "id" UUID NOT NULL,
    "originId" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "url" TEXT NOT NULL,
    "sourceBranch" TEXT NOT NULL,
    "targetBranch" TEXT NOT NULL,
    "authorName" TEXT NOT NULL,
    "authorAvatarUrl" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "projectId" UUID NOT NULL,

    CONSTRAINT "MergeRequest_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Review" (
    "id" UUID NOT NULL,
    "at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "diffs" JSONB NOT NULL,
    "addedLines" INTEGER NOT NULL,
    "removedLines" INTEGER NOT NULL,
    "status" "ReviewStatus" NOT NULL DEFAULT 'PENDING',
    "errorMessage" TEXT,
    "reviewerId" UUID NOT NULL,
    "mergeRequestId" UUID NOT NULL,

    CONSTRAINT "Review_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Comment" (
    "id" UUID NOT NULL,
    "location" "CommentLocation" NOT NULL,
    "fileId" UUID NOT NULL,
    "line" INTEGER NOT NULL,
    "text" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "thumbsUp" INTEGER NOT NULL DEFAULT 0,
    "thumbsDown" INTEGER NOT NULL DEFAULT 0,
    "reviewId" UUID NOT NULL,

    CONSTRAINT "Comment_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Reviewer" (
    "id" UUID NOT NULL,
    "name" TEXT NOT NULL,
    "aiProviderId" UUID NOT NULL,
    "systemPrompt" TEXT,
    "systemPromptEnabled" BOOLEAN NOT NULL DEFAULT false,
    "useProjectInstructions" BOOLEAN NOT NULL DEFAULT true,

    CONSTRAINT "Reviewer_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_GitProjectToReviewer" (
    "A" UUID NOT NULL,
    "B" UUID NOT NULL,

    CONSTRAINT "_GitProjectToReviewer_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateIndex
CREATE UNIQUE INDEX "user_email_key" ON "user"("email");

-- CreateIndex
CREATE UNIQUE INDEX "session_token_key" ON "session"("token");

-- CreateIndex
CREATE UNIQUE INDEX "GitProject_originId_connectorId_key" ON "GitProject"("originId", "connectorId");

-- CreateIndex
CREATE UNIQUE INDEX "MergeRequest_originId_projectId_key" ON "MergeRequest"("originId", "projectId");

-- CreateIndex
CREATE INDEX "_GitProjectToReviewer_B_index" ON "_GitProjectToReviewer"("B");

-- AddForeignKey
ALTER TABLE "session" ADD CONSTRAINT "session_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "account" ADD CONSTRAINT "account_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "GitProject" ADD CONSTRAINT "GitProject_connectorId_fkey" FOREIGN KEY ("connectorId") REFERENCES "GitConnector"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MergeRequest" ADD CONSTRAINT "MergeRequest_projectId_fkey" FOREIGN KEY ("projectId") REFERENCES "GitProject"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Review" ADD CONSTRAINT "Review_reviewerId_fkey" FOREIGN KEY ("reviewerId") REFERENCES "Reviewer"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Review" ADD CONSTRAINT "Review_mergeRequestId_fkey" FOREIGN KEY ("mergeRequestId") REFERENCES "MergeRequest"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Comment" ADD CONSTRAINT "Comment_reviewId_fkey" FOREIGN KEY ("reviewId") REFERENCES "Review"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Reviewer" ADD CONSTRAINT "Reviewer_aiProviderId_fkey" FOREIGN KEY ("aiProviderId") REFERENCES "AiProvider"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_GitProjectToReviewer" ADD CONSTRAINT "_GitProjectToReviewer_A_fkey" FOREIGN KEY ("A") REFERENCES "GitProject"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_GitProjectToReviewer" ADD CONSTRAINT "_GitProjectToReviewer_B_fkey" FOREIGN KEY ("B") REFERENCES "Reviewer"("id") ON DELETE CASCADE ON UPDATE CASCADE;
