import { Component, OnInit, Input, ChangeDetectorRef } from '@angular/core';
import { FormGroup, FormArray } from '@angular/forms';
import { Exercise } from 'models/exercise';

@Component({
  selector: 'app-exercise-list',
  templateUrl: './exercise-list.component.html',
  styleUrls: ['./exercise-list.component.css']
})
export class ExerciseListComponent implements OnInit {
  @Input('workoutForm')
  public workoutForm: FormGroup;

  @Input('exercises')
  public exercises: Exercise[];

  constructor(private _cd: ChangeDetectorRef) { }

  ngOnInit() {
    this.workoutForm.addControl('exercises', new FormArray([]));
  }

  public addExercise() {
    const exercise: Exercise = {
      name: '',
      description: '',
      sets: null,
      reps: ''
    }

    this.exercises.push(exercise);
    this._cd.detectChanges();
    return false;
  }
}
