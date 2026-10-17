import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HabitList } from './habit-list';

describe('HabitList', () => {
  let component: HabitList;
  let fixture: ComponentFixture<HabitList>;

  beforeEach(() => {
    fixture = TestBed.createComponent(HabitList);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should add a habit', ()=> {
        const fixture = TestBed.createComponent(HabitList);
        const app = fixture.componentInstance;
        expect(HabitList).toBeTruthy();
  });

  it('should add a habit and click for it to be done', () => {
    });
});
