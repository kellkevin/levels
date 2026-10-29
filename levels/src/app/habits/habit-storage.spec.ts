import { afterEach, beforeEach, vi } from 'vitest';
import { HabitStorage } from './habit-storage';

describe('HabitStorage', () => {
  const data = new Map<string, string>();
  const fakeStorage = {
    getItem: (key: string) => data.get(key) ?? null,
    setItem: (key: string, value: string) => void data.set(key, value),
    removeItem: (key: string) => void data.delete(key),
    clear: () => data.clear(),
  };

  let storage: HabitStorage;

  beforeEach(() => {
    data.clear();
    vi.stubGlobal('localStorage', fakeStorage);
    storage = new HabitStorage();
  });

  afterEach(() => {
    vi.unstubAllGlobals();
  });

  it('returns an empty list when nothing is saved', () => {
    expect(storage.load()).toEqual([]);
  });

  it('round-trips saved habits', () => {
    const habits = [{ id: '1', name: 'Stretch', completedDates: ['2026-10-25'] }];
    storage.save(habits);
    expect(storage.load()).toEqual(habits);
  });

  it('falls back to an empty list on corrupt data', () => {
    localStorage.setItem('project-levels:habits', '{not json');
    expect(storage.load()).toEqual([]);
  });
});