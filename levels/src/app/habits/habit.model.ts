// habit.model.ts
export interface Habit {
  id: string;
  name: string;
  completedDates: string[]; // 'YYYY-MM-DD'
}
