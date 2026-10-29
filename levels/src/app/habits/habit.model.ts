// habit.model.ts

export type HabitKind = 'build' | 'quit';

export interface Habit {
  id: string;
  name: string;
  completedDates: string[]; // 'YYYY-MM-DD'
  kind: HabitKind; // good habit versus bad
}
