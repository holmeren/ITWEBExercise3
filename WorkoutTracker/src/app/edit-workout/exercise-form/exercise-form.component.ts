import { Component, OnInit, Input } from '@angular/core';
import { FormArray, FormGroup, FormBuilder } from '@angular/forms';
import { Exercise } from 'models/exercise';

@Component({
  selector: 'app-exercise-form',
  templateUrl: './exercise-form.component.html',
  styleUrls: ['./exercise-form.component.css']
})
export class ExerciseFormComponent implements OnInit {
  @Input('exercises')
  public exercises: FormArray;

  @Input('exercise')
  public exercise: Exercise;

  public exerciseForm: FormGroup;

  constructor(private _fb: FormBuilder) { }

  ngOnInit() {
    this.exerciseForm = this.toFormGroup(this.exercise);
    this.exercises.push(this.exerciseForm);
  }

  private toFormGroup(exercise: Exercise) {
    const formGroup = this._fb.group({
      name: [exercise.name],
      description: [exercise.description],
      sets: [exercise.sets],
      reps: [exercise.reps]
    })
    return formGroup;
  }

}
