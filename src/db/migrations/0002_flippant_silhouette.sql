CREATE TABLE IF NOT EXISTS "userAnswer" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"mockId" varchar NOT NULL,
	"question" varchar NOT NULL,
	"correctAnswer" text NOT NULL,
	"userAnswer" text NOT NULL,
	"feedback" text NOT NULL,
	"rating" varchar NOT NULL,
	"userEmail" varchar NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL
);
