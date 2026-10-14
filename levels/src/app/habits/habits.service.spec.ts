
import {TestBed} from '@angular/core/testing';
import {HabitsService} from './habits.service';

describe('HabitsService', ()=> {
  let service: HabitsService;

  beforeEach(() =>{
    TestBed.configureTestingModule({});
    service = TestBed.inject(HabitsService);
    });

  it('adds a habit',() => {
      service.add('Read 20 Minutes');
      expect(service.habits().length).toBe(1);
      expect(service.habits()[0].name).toBe('Read 20 Minutes');
    });

  it('marks a habit done today',() => {
    service.add('Stretch');
    const id = service.habits()[0].id;
    service.toggleToday(id);
    expect(service.doneToday()).toBe(1);
    });

  it('unchecks a habit when toggled twice', () => {
      service.add("Stretch");
      const id = service.habits()[0].id;
      service.toggleToday(id);
      service.toggleToday(id);
      expect(service.doneToday()).toBe(0);
     });
  });
