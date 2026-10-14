// habits.service.ts
import { Injectable, signal, computed } from '@angular/core';
import { Habit } from './habit.model';

@Injectable({ providedIn: 'root' })
export class HabitsService {
  readonly habits = signal<Habit[]>([]);
  readonly today = new Date().toISOString().slice(0, 10);
  readonly doneToday = computed(() =>
    this.habits().filter(h => h.completedDates.includes(this.today)).length
  );

  add(name: string) {
    this.habits.update(list => [
      ...list,
      { id: crypto.randomUUID(), name, completedDates: [] },
    ]);
  }

  toggleToday(id: string) {
    this.habits.update(list => list.map(h => h.id !== id ? h : {
      ...h,
      completedDates: h.completedDates.includes(this.today)
        ? h.completedDates.filter(d => d !== this.today)
        : [...h.completedDates, this.today],
    }));
  }
}
