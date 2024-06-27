ALTER TABLE "userAnswer" RENAME TO "user_answer";--> statement-breakpoint
ALTER TABLE "user_answer" RENAME COLUMN "mockId" TO "user_answer";--> statement-breakpoint
ALTER TABLE "user_answer" RENAME COLUMN "correctAnswer" TO "user_email";--> statement-breakpoint
ALTER TABLE "user_answer" ALTER COLUMN "user_answer" SET DATA TYPE text;--> statement-breakpoint
ALTER TABLE "user_answer" ALTER COLUMN "user_email" SET DATA TYPE varchar;--> statement-breakpoint
ALTER TABLE "user_answer" ADD COLUMN "mock_id" varchar NOT NULL;--> statement-breakpoint
ALTER TABLE "user_answer" ADD COLUMN "correct_answer" text NOT NULL;--> statement-breakpoint
ALTER TABLE "user_answer" DROP COLUMN IF EXISTS "userAnswer";--> statement-breakpoint
ALTER TABLE "user_answer" DROP COLUMN IF EXISTS "userEmail";