CREATE TABLE IF NOT EXISTS "mock_ai_interviewer" (
	"id" uuid PRIMARY KEY NOT NULL,
	"job_role" varchar(100) NOT NULL,
	"tech_stack" varchar(255) NOT NULL,
	"years_of_experience" varchar(20) NOT NULL,
	"json_mock_response" text NOT NULL,
	"created_by" varchar(50) NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"mock_id" varchar(50) NOT NULL
);
