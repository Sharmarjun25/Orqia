import { pgTable, serial, integer, text, timestamp } from "drizzle-orm/pg-core";

export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  name: text("name"),
  email: text("email").notNull().unique(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  agentCredits: integer("agent_credits").default(3),
  usageCredits: integer("usage_credits").default(100),
});

export type User = typeof users.$inferSelect;
export type NewUser = typeof users.$inferInsert;
