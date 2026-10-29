// habits.service.ts
import { Service, inject, signal, computed } from '@angular/core';
import { Habit } from './habit.model';
import { HabitStorage } from './habit-storage';
import { localDateKey } from './date';


@Service()
export class HabitsService {
  /* readonly habits = signal<Habit[]>([]);
  readonly today = new Date().toISOString().slice(0, 10);
   */
  readonly doneToday = computed(() =>
    this.habits().filter(h => h.completedDates.includes(this.today)).length
  );
 
  private readonly storage = inject(HabitStorage);
  readonly habits = signal<Habit[]>(this.storage.load());

  get today(): string {
    return localDateKey(); 
  }

  add(name: string) {
    this.habits.update(list => [
      ...list,
      { id: crypto.randomUUID(), name, completedDates: [] },
    ]);
    this.persist();
  }

  toggleToday(id: string) {
    this.habits.update(list => list.map(h => h.id !== id ? h : {
      ...h,
      completedDates: h.completedDates.includes(this.today)
        ? h.completedDates.filter(d => d !== this.today)
        : [...h.completedDates, this.today],
    }));
    this.persist();
  }
  private persist() {
    this.storage.save(this.habits());
  }
}
