CREATE TABLE "git_connector" (
	"id" uuid PRIMARY KEY DEFAULT uuidv7(),
	"configuration" jsonb NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL,
	"created_by" text NOT NULL,
	"updated_by" text NOT NULL
);
--> statement-breakpoint
CREATE UNIQUE INDEX "git_connector_github_installation_id_unique" ON "git_connector" ((("configuration" ->> 'installationId'))) WHERE "configuration" ->> 'type' = 'GITHUB';--> statement-breakpoint
ALTER TABLE "git_connector" ADD CONSTRAINT "git_connector_created_by_user_id_fkey" FOREIGN KEY ("created_by") REFERENCES "user"("id");--> statement-breakpoint
ALTER TABLE "git_connector" ADD CONSTRAINT "git_connector_updated_by_user_id_fkey" FOREIGN KEY ("updated_by") REFERENCES "user"("id");