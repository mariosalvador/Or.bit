import { client, db } from ".";
import { goals, goalsCompleted } from "./schema";

async function seed() {
  await db.delete(goalsCompleted);
  await db.delete(goals);

  await db.insert(goals).values(
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
  )
}

seed().finally(()=>client.end());