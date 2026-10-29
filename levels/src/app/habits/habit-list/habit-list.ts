import { Component, inject, signal } from '@angular/core';
import { HabitsService } from '../habits.service';
import { Habit, HabitKind } from '../habit.model';

@Component({
  selector: 'app-habit-list',
  templateUrl: './habit-list.html',
  styleUrl: './habit-list.scss',
})
export class HabitList {
  protected readonly habitsService = inject(HabitsService);
  protected readonly newName = signal('');

  protected readonly newKind = signal<HabitKind>('build');

  protected add() {
    const name = this.newName().trim();
    if (!name) return;
    this.habitsService.add(name, this.newKind());
    this.newName.set('');
  }

  protected isDone(habit: Habit) {
    return habit.completedDates.includes(this.habitsService.today);
  }
}
