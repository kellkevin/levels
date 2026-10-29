import { Service } from '@angular/core';
import { Habit } from './habit.model';

const KEY = "project-levels:habits";

@Service()
export class HabitStorage{
	load(): Habit[] {
		try {
			const raw = localStorage.getItem(KEY);
			return raw ? (JSON.parse(raw) as Habit[]) : [];
		} catch {
			return [];
		}
	}
	save(habits: Habit[]):void {
		try {
			localStorage.setItem(KEY, JSON.stringify(habits));
		} catch {
			
		}
	}
	clear():void {
		localStorage.clear();
	}	
}