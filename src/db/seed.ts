import dayjs from "dayjs";
import { client, db } from ".";
import { goals, goalsCompleted } from "./schema";

async function seed() {
  const days = dayjs().startOf('week');
  await db.delete(goalsCompleted);
  await db.delete(goals);

  const getIdGoals = await db.insert(goals).values(
    [
      {
        title: 'Acordar cedo',
        desiredWeeklyFrequency: 3
      },
      {
        title: 'Dormir cedo',
        desiredWeeklyFrequency: 1
      },
      {
        title: 'Comer regularmente',
        desiredWeeklyFrequency: 5
      }
    ]
  ).returning();

  await db.insert(goalsCompleted).values(
    [
      {
        goalId: getIdGoals[0].id,
        createdAt: new Date()
      },
      {
        goalId: getIdGoals[1].id,
        createdAt: days.add(1, 'day').toDate()
      },
    ]
  )
  
}

seed().finally(() => client.end());