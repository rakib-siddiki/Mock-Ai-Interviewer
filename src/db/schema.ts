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
export const userAnswerTable = pgTable('user_answer', {
    id: uuid('id').primaryKey().defaultRandom(),
    mockIdRef: varchar('mock_id').notNull(),
    question: varchar('question').notNull(),
    correctAnswer: text('correct_answer').notNull(),
    userAnswer: text('user_answer').notNull(),
    feedback: text('feedback').notNull(),
    rating: varchar('rating').notNull(),
    userEmail: varchar('user_email').notNull(),
    createdAt: timestamp('created_at').notNull().defaultNow(),
});
