import { integer } from "drizzle-orm/pg-core";
import { text, timestamp } from "drizzle-orm/pg-core";
import { pgTable } from "drizzle-orm/pg-core";
import {v4 as uuid} from "uuid"


export const goals = pgTable('goals',{
  id: text('id').primaryKey().$defaultFn(()=>uuid()),
  title: text('title').notNull(),
  desiredWeeklyFrequency:integer('desired_weekly_frequency').notNull(),
  createdAt: timestamp('created_at',{withTimezone:true}).defaultNow().notNull()
});

export const goalsCompleted = pgTable('goals_completed',{
  id: text('id').primaryKey().$defaultFn(()=>uuid()),
  goalId: text('goals_id').references(()=>goals.id).notNull(),
  createdAt: timestamp('created_at',{withTimezone:true}).defaultNow().notNull()
})