import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkoutLogListComponent } from './workout-log-list.component';

describe('WorkoutLogListComponent', () => {
  let component: WorkoutLogListComponent;
  let fixture: ComponentFixture<WorkoutLogListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkoutLogListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkoutLogListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
