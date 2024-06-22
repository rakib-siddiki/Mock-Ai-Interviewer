import { pgTable, uuid, text, varchar, timestamp } from 'drizzle-orm/pg-core';

export const mockAiInterviewer = pgTable('mock_ai_interviewer', {
    id: uuid('id').primaryKey().defaultRandom(),
    jobRole: varchar('job_role', { length: 100 }).notNull(),
    techStack: varchar('tech_stack', { length: 255 }).notNull(),
    yearsOfExperience: varchar('years_of_experience', { length: 20 }).notNull(),
    jsonMockResponse: text('json_mock_response').notNull(),
    createdBy: varchar('created_by', { length: 50 }).notNull(),
    createdAt: timestamp('created_at').notNull().defaultNow(),
    mockId: varchar('mock_id', { length: 50 }).notNull(),
});
